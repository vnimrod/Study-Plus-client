import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../../../store/actions/courses';
import { uploadFile } from '../../../store/actions/courses';
import reminder__icon from '../../../assets/about__icon.PNG';
import Button from '../../../shared/form-elements/Button';
import SubjectSummary from '../subjectSummary/SubjectSummary';
import File from '../../file/File';
import './StaticSubject.css';

const StaticSubject = ({
  subjectName,
  uploadFile,
  cid,
  sid,
  deleteSubject,
  color,
  files,
}) => {

  const [clicked, setClicked] = useState(false);
  const [file, setFile] = useState();

  const onClick = () => {
    setClicked(!clicked);
  };

  const deleteSubjectHandler = (cid, sid) => {
    deleteSubject(cid, sid);
  };


  const send = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sid', sid);
    formData.append('cid', cid);
    uploadFile(formData, file.name, sid);
  };

  return (
    <div style={{ backgroundColor: color }} className="StaticSubject">
      <div className="StaticSubject__summary">
        {clicked ? <SubjectSummary setClicked={setClicked} /> : null}
      </div>

      <div className="StaticSubject__items">
        <div className="StaticSubject__items__header">
          <img onClick={onClick} src={reminder__icon}></img>

          <div className="StaticSubject__items__title">
            <span>
              {subjectName}
              <hr />
            </span>
          </div>
        </div>

        <ul>
          {files.map((file) => (
            <File key={file.fileId} file={file} fid={file.fileId}/> 
          ))}
        </ul>
        <div className="StaticSubject__button">
          <Button type="button">Upload</Button>
          <Button onClick={() => deleteSubjectHandler(cid, sid)} type="button">
            X
          </Button>
        </div>
        <form>
          <div>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
            <button onClick={send}>Send</button>
          </div>
        </form>
      </div>
      {/* <a href={url} download>Click to download</a> */}
    </div>
  );
};

export default connect(null, { deleteSubject, uploadFile })(StaticSubject);
