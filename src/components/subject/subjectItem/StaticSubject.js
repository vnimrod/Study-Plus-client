import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../../../store/actions/courses';
import {uploadFile} from '../../../store/actions/courses';
import reminder__icon from '../../../assets/about__icon.PNG';
import Button from '../../../shared/form-elements/Button';
import SubjectSummary from '../subjectSummary/SubjectSummary';
import './StaticSubject.css';

const StaticSubject = ({ subjectName, uploadFile, cid, sid, deleteSubject, color }) => {
   // useEffect(() => {

  // }, []);

  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  const deleteSubjectHandler = (cid, sid) => {
    deleteSubject(cid, sid);
  };

  // var file1 = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});

  const [file, setFile] = useState();
  //-----------------------
  const send = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    uploadFile(formData, file.name, sid);

    // axios
    //   .post(
    //     process.env.REACT_APP_BACKEND_URL + '/dashboard/upload',
    //     data,
    //     config
    //   )
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => console.log(err));
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
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
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
