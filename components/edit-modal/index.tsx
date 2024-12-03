import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (name: string, active: boolean) => void;
  initialName?: string;
  initialActive?: boolean;
}

const UserEditModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  onSave,
  initialName = "",
  initialActive = false,
}) => {
  const [name, setName] = useState(initialName);
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    setName(initialName);
    setActive(initialActive);
  }, [initialName, initialActive]);

  const handleSave = () => {
    onSave(name, active);
    setName("");
    setActive(false);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            {initialName ? "Edite suas informações" : "Insira suas informações"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.switchContainer}>
            <Text>Ativo:</Text>
            <Switch value={active} onValueChange={setActive} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#996DFF",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UserEditModal;