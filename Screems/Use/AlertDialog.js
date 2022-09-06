import React, { useState } from "react";
import {
  Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput,
} from "@react-native-material/core";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        title="Open Form Dialog"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Dialog Header" />
        <DialogContent>
          <Stack spacing={2}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
            <TextInput label="Email" variant="standard" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const AppProvider = () => (
  <Provider>
    <App />
  </Provider>
);

export default AppProvider;