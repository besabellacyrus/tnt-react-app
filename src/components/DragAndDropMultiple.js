import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { AppPostFile, apiUrl, AppGet } from '../api';
import Helper from '../helper';

const DragAndDropMultiple = (props) => {

  const onDrop = useCallback(acceptedFiles => {
    let formData = new FormData();
    acceptedFiles.forEach((file, index) => {
      // req.attach('files', file);
      formData.append(`image_types[${index}]`, Helper.imageNameParse(file.name));
      formData.append('images' + index, file);
    });
    formData.append('product_id', props.productId);
    formData.append('TotalImages', acceptedFiles.length);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    AppPostFile('/api/multiple_image', formData)
      .then(res => {
        console.log({ res });
        if (res.data.uploaded) {
          props.uploadResponse(res.data.files)
        }
      }).catch(err => {
        console.log({ err })
      })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input className="multi-drop" {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default DragAndDropMultiple
