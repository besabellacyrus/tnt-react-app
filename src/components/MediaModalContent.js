import React, { useCallback, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SelectType from '../components/SelectType';
import { useDropzone } from 'react-dropzone'
import { AppPostFile, apiUrl, AppGet } from '../api';

const MediaModalContent = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [imageFiles, setImageFiles] = useState([]);
  const [tobeUploaded, setTobeUploaded] = useState(null);
  const [uiImages, setUiImages] = useState([])

  useEffect(() => {
    let uiImages = [];
    console.log({ imageFiles });
    imageFiles.forEach((e) => {
      const imageUrl = apiUrl + `/storage/${e.id}/${e.file_name}`;
      uiImages.push(
        <div className="file-item">
          <img src={imageUrl} />
        </div>
      )
    });
    setUiImages(uiImages);
  }, [imageFiles]);

  const onDrop = useCallback(acceptedFiles => {
    let formData = new FormData();
    acceptedFiles.forEach((file, index) => {
      // req.attach('files', file);
      formData.append(`image_types[${index}]`, imageNameParse(file.name));
      formData.append('images' + index, file);
    });
    formData.append('product_id', props.productId);
    formData.append('TotalImages', acceptedFiles.length);

    AppPostFile('/api/multiple_image', formData)
      .then(res => {
        console.log({ res });
        if (res.data.uploaded) {
          getProductMedia();
        }
      }).catch(err => {
        console.log({ err })
      })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleTypeChange = (type) => {
    console.log({ mmmm: type })
  }

  useEffect(() => {
    getProductMedia();
  }, [])

  const getProductMedia = () => {
    AppGet('/api/media/' + props.productId)
      .then(res => {
        console.log({ res });
        if (res.data.product) {
          setImageFiles(res.data.product.media);
          setSelectedTab(1)
        }
      }).catch(err => {
        console.log({ err })
      })
  }

  const getFile = (file) => {
    return new Promise((resolve, reject) => {
      var fr = new FileReader();
      fr.onload = resolve;  // CHANGE to whatever function you want which would eventually call resolve
      fr.readAsDataURL(file);
    });
  }

  const imageNameParse = (img) => {
    const removedExt = img.replace(/\.[^/.]+$/, "");
    const splitt = removedExt.split('_');
    if (splitt.includes('d')) {
      return 'display';
    }
    if (splitt.includes('thumbnail')) {
      return 'thumbnail';
    }
    if (splitt.includes('1920')) {
      return 'banner';
    }
    if (splitt.includes('display')) {
      return 'display';
    }
    return 'none';
  }

  const handleSubmit = () => {
    // console.log({ submit: tobeUploaded })
  }



  return (
    <div className="row">
      <div className="media-modal-content">
        <div className="col-sm-12">
          <Tabs selectedIndex={selectedTab} onSelect={tabIndex => setSelectedTab(tabIndex)}>
            <TabList>
              <Tab className="active">Upload</Tab>
              <Tab>Media Library</Tab>
            </TabList>
            <TabPanel>
              <div className="media-dropzone">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop the files here ...</p> :
                      <p>Drag 'n' drop some files here, or click to select files</p>
                  }
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="uploaded-files-container">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="files-wrapper">
                      {uiImages}
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default MediaModalContent
