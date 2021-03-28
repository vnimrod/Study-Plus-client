import React, { useState } from 'react';

import Button from '../../shared/form-elements/Button';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';

const File = ({ file, fid, history }) => {
  const [url, setUrl] = useState('');

  const fileDownloadHandler = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      process.env.REACT_APP_BACKEND_URL + `/dashboard/upload/${fid}`
    );

    const link = document.createElement('a');
    link.href = res.data.url;
    link.setAttribute('download', res.data.fileName);
    document.body.appendChild(link);
    link.click();
  };

  const deleteFileHandler = () => {
    console.log('File deleted');
  };

  return (
    <div className="StaticSubject__items__file-item">
      <li onClick={fileDownloadHandler}>
        <a href={url} download>
          {file.fileName}
        </a>
      </li>
      <Button type="button" onClick={deleteFileHandler}>
        x
      </Button>
    </div>
  );
};

export default withRouter(File);
