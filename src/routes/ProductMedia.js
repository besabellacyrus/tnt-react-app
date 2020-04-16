import React, { useCallback, useState, useEffect } from 'react'
import Card from '../components/Card';
import SlideShow from '../components/SlideShow';
import Switch from 'react-switchery';
import { useDropzone } from 'react-dropzone'
import '../styles/components/productMedia.scss'
import { AppPostFile } from '../api';

const ProductMedia = (props) => {
  const [thumbnailImage, setThumbnailImage] = useState(null);

  useEffect(() => {
    setThumbnailImage(props.productData.thumbnail);
    console.log({ thumbbb: props.productData })
    // if (props.productData.thumbnail) {
    // }
  }, [])

  const onDrop = useCallback(acceptedFiles => {
    console.log({ acceptedFiles: acceptedFiles[0] })
    const formData = new FormData();
    // acceptedFiles.forEach((file) => {
    //   const reader = new FileReader()
    //   reader.onabort = () => console.log('file reading was aborted')
    //   reader.onerror = () => console.log('file reading has failed')
    //   reader.onload = () => {
    //     // Do whatever you want with the file contents
    //     const binaryStr = reader.result
    //     // console.log(binaryStr)
    //     setThumbnailImage(binaryStr);

    //   }
    //   // reader.readAsArrayBuffer(file)
    //   reader.readAsDataURL(file);
    // })

    formData.append("product_id", props.productId);
    formData.append("thumbnail", acceptedFiles[0]);

    AppPostFile('/api/thumbnail', formData)
      .then(res => {
        console.log({ res });
      }).catch(err => {
        console.log({ err })
      })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })



  const handleThumbnailChange = () => {
    const clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    const thumbnailbtn = document.querySelector("#thumbnail-input");
    thumbnailbtn.dispatchEvent(clickEvent);
    console.log(thumbnailbtn)
  }

  return (
    <Card subTitle="Product Media">
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Product Images</label>
              <div className="col-sm-9">
                <SlideShow />
                <button className="btn app-btn btn-primary btn-icon left-icon mb-30 free-width"> <i className="fa fa-paperclip"></i> <span>Media Upload</span></button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row mb-30">
            <div className="product-images">
              <label className="col-sm-3 text-right">Profile</label>
              <div className="col-sm-9">
                <div className="thumbnail-wrapper">
                  {
                    thumbnailImage && <img src={thumbnailImage} />
                  }
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                  </div>
                  {/* <input id="thumbnail-input" className="custom-file-input" type="file" name="thumbnail"
                    accept="image/png, image/jpeg"></input> */}
                </div>
                <br />
                {/* <button className="btn app-btn btn-primary" onClick={handleThumbnailChange}> <span>Change</span></button>
                <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Label Status</label>
              <div className="col-sm-9">
                <div className="form-group mb-30">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          None
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          Coming Soon
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-5">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          In-Stock
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          New
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          Pre-Order
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-5">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label htmlFor="radio1">
                          Sold-Out
										    </label>
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mt-10">
                        <select className="form-control">
                          <option value="">White Sideshow Logo</option>
                          <option value="">White Sideshow Logo - RIGHT</option>
                          <option value="">White Sideshow Logo - LEFT</option>
                          <option value="">Black Sideshow Logo - RIGHT</option>
                          <option value="">Black Sideshow Logo - LEFT</option>
                          <option value="">No Logo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /first col */}
        <div className="col-sm-6">
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Main Display</label>
              <div className="col-sm-9">
                <div className="main-display-image">
                  <img src="/img/thumbnail/MEZ76515_display.jpg" />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="radio radio-info">
                      <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                      <label htmlFor="radio1">
                      </label>
                      <button className="btn app-btn btn-primary" >Change</button>
                      <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="radio radio-info ">
                      <input type="text" className="form-control youtube-link-input" placeholder="Product Title" />
                      <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                      <label className="youtube-link" htmlFor="radio1">
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mt-10">
                          <select className="form-control">
                            <option value="">White Sideshow Logo</option>
                            <option value="">White Sideshow Logo - RIGHT</option>
                            <option value="">White Sideshow Logo - LEFT</option>
                            <option value="">Black Sideshow Logo - RIGHT</option>
                            <option value="">Black Sideshow Logo - LEFT</option>
                            <option value="">No Logo</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row product-images mb-60">
            <label className="col-sm-3 text-right">Banner</label>
            <div className="col-sm-9">
              <div className="banner-image">
                <img src="/img/thumbnail/MEZ76515_1920.jpg" />
                <button className="btn app-btn btn-primary"> <span>Change</span></button>
                <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span>
              </div>
            </div>
          </div>
          <div className="row banner-switch">
            <label className="col-sm-3 text-right"></label>
            <div className="col-sm-9">
              <div className="row">
                <Switch
                  className="switch-class col-sm-2"
                  options={
                    {
                      color: '#474F79',
                      size: 'small'
                    }
                  }
                />
                <div className="col-sm-10">
                  <span >&nbsp;&nbsp;&nbsp; This will add banner to home page.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductMedia
