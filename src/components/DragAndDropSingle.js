import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { AppPostFile, apiUrl, AppGet } from '../api';
import Helper from '../helper';

const DragAndDrop = (props) => {
  useEffect(() => {
    const thumbnailWrapper = document.querySelector('.single-drop');
    thumbnailWrapper.removeAttribute('multiple')
  }, [])

  useEffect(() => {
    console.log({ propsdefault: props.default })
  })




  const onDrop = useCallback(acceptedFiles => {
    let formData = new FormData();
    formData.append('product_id', props.productId);
    formData.append(`collection`, props.collection);
    acceptedFiles.forEach((file, index) => {
      formData.append('file', file);
    });
    console.log({ formData, acceptedFiles })

    AppPostFile('/api/single-upload', formData)
      .then(res => {
        console.log({ res });
        if (res.data.uploaded) {
          console.log({ res })
          props.uploadResponse(res.data.file);
        }
      }).catch(err => {
        console.log({ err })
      })
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      {
        props.default ?
          <img className="drag-n-drop-img" src={props.default} /> :
          ""
      }

      <input className="single-drop" {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default DragAndDrop
