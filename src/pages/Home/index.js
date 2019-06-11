/**
 * Desafio 3 - Rocketseat
 *
 * @Author Luiz Felipe H. Grativol
 *
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight
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
import { TextInput } from "react-native-gesture-handler";

// redux
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  constructor(props) {
    super(props);

    //   this.state = {
    //     modalVisible: false,
    //     markers: []
    //   };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // addMarker(coordinate) {
  //   this.setState({
  //     modalVisible: true,
  //     markers: [
  //       ...this.state.markers,
  //       {
  //         id: Math.random(),
  //         latlng: coordinate,
  //         title: `Marcador NOVO `,
  //         description: "descrição"
  //       }
  //     ]
  //   });

  // console.tron.log(this.state.markers);
  //}

  render() {
    console.tron.log(this.props.markers);
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          visible={false}
          onRequestClose={() => {
            //    this.setModalVisible(this.props.modalVisible=false);   // ESTUDAR
          }}
        >
          <View
            style={[
              styles.containerModal,
              // (width = wp("5.0%")),
              (height = hp("5%"))
            ]}
          >
            <View style={styles.ModalInsideView}>
              <View>
                <View style={styles.box}>
                  <Text style={styles.title}>Adicionar Novo Local</Text>

                  <TextInput
                    style={styles.inputText}
                    placeholder="   Usuário no Github"
                    placeholderTextColor="#dbdbdb"
                  />

                  <View style={styles.boxButtons}>
                    <TouchableHighlight
                      style={styles.btnCancelar}
                      onPress={() => {
                        //this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text style={styles.fontButton}>Cancelar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={styles.btnSalvar}
                      onPress={() => {
                        // this.setModalVisible(!this.state.modalVisible);
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
          // onLongPress={({ nativeEvent: { coordinate } }) =>
          //   this.addMarker(coordinate)
          // }

          //onLongPress={({ nativeEvent: { coordinate } }) => dispatch({ type:'PLACE_MARKER', coordinate })

          onLongPress={
            ({ nativeEvent: { coordinate } }) =>
              this.props.addMarker(coordinate)
            //console.tron.log("coordinate" + coordinate.latitude)
          }
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
        >
          {this.props.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.latlng[0]}
              title={marker.title}
              description={marker.description}
              redraw
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markLocation.markers
});

// function mapStateToProps(state) {
//   const { markers } = state;
//   return markers;
// }

const mapDispatchToProps = dispatch => ({
  addMarker: coordinate => dispatch({ type: "PLACE_MARKER", coordinate })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
