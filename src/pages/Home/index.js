/**
 * Desafio 3 - RocketSeat
 * Home Page
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  TextInput,
  Image
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen";

// styles
import styles from "./styles";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionsMaps from "~/store/actions";

class Home extends Component {
  handleSubmit = async markers => {
    await this.props.markerRequest(markers);
  };

  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  constructor(props) {
    super(props);

    this.state = {
      markers: []
    };
  }

  render() {
    const { markers } = this.state;
    const { markLocation } = this.props;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={markLocation.modalVisible}
          onRequestClose={() => {
            this.props.modalVisibility(false);
          }}
        >
          <View style={styles.containerModal}>
            <View style={styles.ModalInsideView}>
              <View>
                <View style={styles.box}>
                  <Text style={styles.title}>Adicionar Novo Local</Text>

                  <TextInput
                    style={styles.inputText}
                    placeholder="   Usuário no Github"
                    placeholderTextColor="#dbdbdb"
                    value={markers.username}
                    onChangeText={text =>
                      this.setState(prevState => ({
                        markers: {
                          ...prevState.markers,
                          username: text
                        }
                      }))
                    }
                  />
                  {markLocation.error == true && (
                    <Text style={styles.error}>Usuário Inexistente</Text>
                  )}
                  <View style={styles.boxButtons}>
                    <TouchableHighlight
                      style={styles.btnCancelar}
                      onPress={() => {
                        this.props.modalVisibility(false);
                      }}
                    >
                      <Text style={styles.fontButton}>Cancelar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={styles.btnSalvar}
                      onPress={() => {
                        if (
                          markLocation.markers.find(marker => {
                            return marker.title == markers.username;
                          })
                        ) {
                          Alert.alert(" Usuário já cadastrado ");
                        } else {
                          this.handleSubmit(markers);
                        }
                      }}
                    >
                      <Text style={styles.fontButton}>Salvar</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <MapView
          onLongPress={({ nativeEvent: { coordinate } }) => (
            this.setState((markers.latlng = coordinate)),
            this.props.modalVisibility(true)
          )}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
        >
          {markLocation.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.latlng[0]}
              title={marker.title}
              description={marker.description}
              //image={marker.avatar}
              style={{ alignContent: "center", alignItems: "center" }}
              redraw
            >
              <Image
                source={require("~/images/marker.png")}
                style={styles.markerPoint}
              />
              <Image
                source={{
                  uri: `${marker.avatar}`
                }}
                style={styles.markerImage}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  markLocation: state.markLocation
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsMaps, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
