/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { RemoveButtonType, parseKeyFromFilePath } from '../common';

const Store = require('electron-store');

const store = new Store();

const RemoveButton = (props: RemoveButtonType) => {
  const { setFiles, file } = props;
  const fileKey: string = parseKeyFromFilePath(file.path);

  const handleRemoveButton = () => {
    store.delete(fileKey);
    setFiles(store.store);
  };

  return (
    <Button className="file-remove-button" onClick={handleRemoveButton}>
      Remove
    </Button>
  );
};

export default RemoveButton;
