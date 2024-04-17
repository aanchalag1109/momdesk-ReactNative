import React from "react";
import { Modal, View } from "react-native";
import styles from "./styles";
import { animation } from "../../assets/animation";

const LoaderCompo = ({ cutomBackgroundStyle }) => {
  return (
    <Modal transparent visible={true}>
      <View
        style={[styles.modalContainer, cutomBackgroundStyle]}>
        <View
          style={styles.indicatorContainer}>
        </View>
      </View>
    </Modal>
  )
}

export default LoaderCompo