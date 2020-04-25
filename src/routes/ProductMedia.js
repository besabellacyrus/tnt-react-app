import React, { useCallback, useState, useEffect, useRef, Suspense } from 'react'
import Card from '../components/Card';
import SlideShow from '../components/SlideShow';
import Switch from 'react-switchery';
// import { useDropzone } from 'react-dropzone'
import { AppPostFile, apiUrl, AppGet } from '../api';
import Helper from '../helper';
import ImageUploadModal from '../components/product/ImageUploadModal';
import $ from 'jquery';
import SelectType from '../components/SelectType';
import '../styles/components/productMedia.scss'
import MediaModalContent from '../components/MediaModalContent';
import DragAndDropSingle from '../components/DragAndDropSingle';
import FancyBox from '../components/FancyBox';

window.jQuery = $;
window.$ = $;

window.dropify = require('../vendors/dropify-multiple/dist/js/dropify-multiple.js');

const ProductMedia = (props) => {
  const multiImages = useRef(null);

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemActive, setItemActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  let [imageDetails, setImageDetails] = useState({});
  const [processedImages, setProccessedImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [openFrom, setOpenFrom] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [banner, setBanner] = useState(null);
  const [display, setDisplay] = useState(null);
  const [uiThumb, setUiThumb] = useState("");
  const [media, setMedia] = useState([]);

  const clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
  });

  useEffect(() => {
    window.jQuery('.dropify').dropify();
    getMedia();
  }, []);



  const getMedia = () => {
    AppGet('/api/media/' + props.productId)
      .then(res => {
        // console.log({ res });
        if (res.data.product) {
          if (res.data.product.media) {
            console.info('getting media from ', props.productId)
            console.log({ dddd: res.data.product.media })

            let displayArray = JSON.parse(JSON.stringify(res.data.product.media));
            let bannerArray = JSON.parse(JSON.stringify(res.data.product.media));
            let thumbnailArray = JSON.parse(JSON.stringify(res.data.product.media));

            // i.thumbnail = i.media.filter(e => e.collection_name === 'product-thumbnail')[0] || "";
            // return i;

            setMedia(res.data.product.media);
            const thumb = thumbnailArray.filter(e => e.collection_name === 'product-thumbnail');
            const banner = bannerArray.filter(e => e.collection_name === 'product-banner');
            const display = displayArray.filter(e => e.collection_name === 'product-display');
            console.log({ thumb: thumb[0], banner, display: display[0] })

            setThumbnail(Helper.appImage(thumb[0]));
            setBanner(Helper.appImage(banner[0]));
            setDisplay(Helper.appImage(display[0]));
          }
        }
      }).catch(err => {
        console.log({ err })
      })

  }

  const handleThumbnailChange = () => {
    const thumbnailbtn = document.querySelector("#thumbnail-input");
    thumbnailbtn.dispatchEvent(clickEvent);
    console.log(thumbnailbtn)
  }

  const handleMultipleUpload = () => {
    const multiple = document.querySelector("#multiple-uploads");
    setOpenFrom('multiple');
    setShowModal(true);
    console.log('upload multi', multiple)
  }

  const handleModalClose = () => {
    setShowModal(false)
    setImageDetails({});
  }

  const handleOnChangeItem = (event) => {
    console.log(event)
  }

  const handleItemToggle = (event) => {
    console.log({ event: event.currentTarget.getAttribute('class') })
    const activeItems = document.getElementsByClassName("content-item active");
    // activeItems[0].className = activeItems[0].className.replace("content-item active", "");
    console.log({ activeItems: activeItems[0] })
    const targetClasses = event.currentTarget.getAttribute('class');
    if (targetClasses.includes('active')) {
      event.currentTarget.classList.remove('active');
    } else {
      event.currentTarget.classList.add('active');
    }
  }

  const initializeModalItems = () => {
    const items = document.querySelectorAll('.content-item');
    items.forEach((e, i) => {
      e.addEventListener('click', (e) => {
        const w = e.currentTarget.children[0].childNodes[0].childNodes[0].naturalWidth;
        const h = e.currentTarget.children[0].childNodes[0].childNodes[0].naturalHeight;
        const imageDetails = {
          width: w,
          height: h,
          image_size: `${w} x ${h}`,
          upload_date: 'November 20, 2020',
          base64_image: processedImages[i],
          file_size: Helper.formatBytes(selectedFiles[i].size, 3),
        }
        setImageDetails(imageDetails)
        removeActiveClass();
        e.currentTarget.classList.add('active');
      })
    })

  }

  const removeActiveClass = () => {
    const items = document.querySelectorAll('.content-item');
    items.forEach((e, i) => {
      items[i].className = items[i].className.replace("active", "");
    });
  }

  const getFile = (file) => {
    return new Promise((resolve, reject) => {
      var fr = new FileReader();
      fr.onload = resolve;  // CHANGE to whatever function you want which would eventually call resolve
      fr.readAsDataURL(file);
    });
  }
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
    console.log({ filesss: files })
    let base64Images = [];
    let imageNewDetail = [];
    let processedImages = [];

    [...files].forEach((e, i) => {
      console.log({ e });
      imageNewDetail.push({
        selected_type: Helper.imageNameParse(e.name)
      })
      getFile(e).then(img => {
        processedImages.push(img.target.result);
        base64Images.push(
          <div className="content-item" key={i} data-img-size={e.size}>
            <div className="content-wrapper">
              <div className="aligner">
                <img src={img.target.result} />
              </div>
              <div className="image-footer">
                <SelectType selected={Helper.imageNameParse(e.name)} />
              </div>
            </div>
          </div>
        )
      })
    })

    // gather the images and will
    // show the modal after 1sec
    Promise.all(base64Images).then((e) => {
      setImages(base64Images);
      setProccessedImages(processedImages);
    }).then(() => {
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    })
  }

  useEffect(() => {
    initializeModalItems();
  }, [showModal])

  const ImageDisplayDetails = () => {
    return (
      <React.Fragment>
        <div className="image-wrapper">
          <img src={imageDetails.base64_image} />
        </div>
        <p>Date Upload: {imageDetails.upload_date}</p>
        <p>File Size: {imageDetails.file_size}</p>
        <p>Image Size: {imageDetails.image_size}</p>
      </React.Fragment>
    )
  }

  const handleDownloadMedia = () => {
    window.open(apiUrl + '/api/download-media/' + props.productId);
  }

  useEffect(() => {
    const productImages = media.filter(e => e.collection_name === 'product-images');
    setProductImages(productImages);
  }, [media])

  const handleMediaClick = () => {
    setOpenFrom('media');
    setShowModal(true);
  }

  const handleUploadResponse = (response) => {
    setMedia(prev => [...prev, ...response]);
    let displayArray = JSON.parse(JSON.stringify(response));
    let bannerArray = JSON.parse(JSON.stringify(response));
    let thumbnailArray = JSON.parse(JSON.stringify(response));

    console.log({ responseFromPM: response, media });
    const thumb = thumbnailArray.filter(e => e.collection_name === 'product-thumbnail');
    const banner = bannerArray.filter(e => e.collection_name === 'product-banner');
    const display = displayArray.filter(e => e.collection_name === 'product-display');

    setThumbnail(Helper.appImage(thumb[0]));
    setBanner(Helper.appImage(banner[0]));
    setDisplay(Helper.appImage(display[0]));
  }

  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageUploadModal show={showModal} close={handleModalClose}>
          <MediaModalContent uploadResponse={handleUploadResponse} openFrom={openFrom} productId={props.productId} />
        </ImageUploadModal>
        <Card subTitle="Product Media">
          <div className="row">
            <div className="col-sm-12">
              <div className="pull-right mb-20">
                <button className="btn app-btn btn-primary free-width" onClick={handleMediaClick}>Media</button>
                <button className="btn app-btn btn-primary" onClick={handleDownloadMedia}>Export</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="product-images">
                  <label className="col-sm-3 text-right">Product Images</label>
                  <div className="col-sm-9">
                    <SlideShow productImages={productImages} />
                    {/* <FancyBox images={productImages} /> */}
                    {/* <input type="file" onChange={handleFileChange} ref={multiImages} class="dropify" data-max-file-size="3M" multiple /> */}
                    <button onClick={handleMultipleUpload} className="btn app-btn btn-primary btn-icon left-icon mt-10 free-width">
                      <i className="fa fa-paperclip"></i> <span>Multiple Upload</span>
                    </button>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="row mb-20">
                <div className="product-images">
                  <label className="col-sm-3 text-right">Profile</label>
                  <div className="col-sm-9">
                    <div className="thumbnail-wrapper">
                      <DragAndDropSingle default={thumbnail} uploadResponse={(res) => setThumbnail(Helper.appImage(res))} collection="product-thumbnail" productId={props.productId} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="product-label">
                  <label className="col-sm-3 text-right">Label Status</label>
                  <ul className="labels">
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio1" value="none" />
                        <label htmlFor="radio1">
                          None
										  </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio2" value="comming soon" />
                        <label htmlFor="radio2">
                          Coming Soon
										  </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio3" value="In Stock" />
                        <label htmlFor="radio3">
                          In-Stock
										  </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio4" value="New" />
                        <label htmlFor="radio4">
                          New
										  </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio5" value="Pre Order" />
                        <label htmlFor="radio5">
                          Pre-Order
										  </label>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input type="radio" name="status" id="radio6" value="Sold Out" />
                        <label htmlFor="radio6">
                          Sold-Out
										  </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
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

            <div className="col-sm-6">
              <div className="row">
                <label className="col-sm-3 text-right">Main Display</label>
                <div className="col-sm-9">
                  <div className="main-display-image">
                    {/* <input type="file" id="input-file-now" class="dropify" /> */}
                    <DragAndDropSingle default={display} collection="product-display" uploadResponse={(res) => setDisplay(Helper.appImage(res))} productId={props.productId} />

                    {/* <img src={display} /> */}
                  </div>
                  <div className="row mt-10">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 mt-10 mb-10">
                          <Switch
                            className="switch-class col-sm-2"
                            options={
                              {
                                color: '#fc8300',
                                size: 'small'
                              }
                            }
                          />
                          <div className="col-sm-10 text-left">
                            <p>Switch to video display</p>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="From URL" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
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
              <hr></hr>
              <div className="row product-images mb-60">
                <label className="col-sm-3 text-right">Banner</label>
                <div className="col-sm-9">
                  <div className="banner-image">
                    <DragAndDropSingle default={banner} collection="product-banner" uploadResponse={(res) => setBanner(Helper.appImage(res))} productId={props.productId} />
                  </div>
                  <div className="col-sm-12 mt-10 mb-10">
                    <Switch
                      className="switch-class col-sm-2"
                      options={
                        {
                          color: '#fc8300',
                          size: 'small'
                        }
                      }
                    />
                    <div className="col-sm-10 text-left">
                      <p>This will add the banner to ToynToys homepage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Suspense>
    </React.Fragment >
  )
}

export default ProductMedia
