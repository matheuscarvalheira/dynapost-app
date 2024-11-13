import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const MenuTriggerText = styled.Text`
  font-size: 25px;
  color: #000;
  text-align: center;
  margin-bottom: 10px;
`;

export const optionsStyles = {
  optionsContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 150,
  },
  optionWrapper: {
    padding: 10,
  },
  optionText: {
    color: "#000",
  },
};
