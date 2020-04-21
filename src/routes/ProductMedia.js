import React, { useCallback, useState, useEffect, useRef } from 'react'
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
  const [imageDetails, setImageDetails] = useState({});
  const [processedImages, setProccessedImages] = useState([]);
  const [productImages, setProductImages] = useState([]);

  const clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
  });

  useEffect(() => {
    getMedia();
  }, []);

  const [thumbnails, setThumbnails] = useState([]);
  const [banners, setBanners] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [uiThumb, setUiThumb] = useState("");

  const getMedia = () => {
    AppGet('/api/media/' + props.productId)
      .then(res => {
        console.log({ res });
        if (res.data.product) {
          if (res.data.product.media) {
            console.info('getting media from ', props.productId)
            const product_images = res.data.product.media.filter(e => e.collection_name === 'product-images');
            const product_banners = res.data.product.media.filter(e => e.collection_name === 'product-banners');
            const product_displays = res.data.product.media.filter(e => e.collection_name === 'product-displays');
            const product_thumbnails = res.data.product.media.filter(e => e.collection_name === 'product-thumbnails');

            setProductImages(product_images);

            setBanners(product_banners);
            setDisplays(product_displays);
            setThumbnails(product_thumbnails);

            if (thumbnails.length > 0) {
              setUiThumb(Helper.appImage(thumbnails[0]));
            }

            console.log({ product_images })
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

  return (
    <React.Fragment>
      <ImageUploadModal show={showModal} close={handleModalClose}>
        <MediaModalContent productId={props.productId} />
      </ImageUploadModal>
      <Card subTitle="Product Media">
        <div className="row">
          <div className="col-sm-12">
            <div className="pull-right mb-20">
              <button className="btn app-btn btn-primary free-width">Media</button>
              <button className="btn app-btn btn-primary">Export</button>
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
                  {/* <input type="file" onChange={handleFileChange} ref={multiImages} class="dropify" data-max-file-size="3M" multiple /> */}
                  <button onClick={handleMultipleUpload} className="btn app-btn btn-primary btn-icon left-icon mt-10 free-width">
                    <i className="fa fa-paperclip"></i> <span>Multiple Upload</span>
                  </button>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row mb-10">
              <div className="product-images">
                <label className="col-sm-3 text-right">Profile</label>
                <div className="col-sm-9">
                  <div className="thumbnail-wrapper">
                    <img src={uiThumb} />
                    {/* <input type="file" id="input-file-now" class="dropify" /> */}
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
                      <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                      <label htmlFor="radio1">
                        None
										  </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input type="radio" name="radio" id="radio2" value="option2" checked="" />
                      <label htmlFor="radio2">
                        Coming Soon
										  </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input type="radio" name="radio" id="radio3" value="option3" checked="" />
                      <label htmlFor="radio3">
                        In-Stock
										  </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input type="radio" name="radio" id="radio3" value="option3" checked="" />
                      <label htmlFor="radio3">
                        New
										  </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input type="radio" name="radio" id="radio3" value="option3" checked="" />
                      <label htmlFor="radio3">
                        Pre-Order
										  </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input type="radio" name="radio" id="radio3" value="option3" checked="" />
                      <label htmlFor="radio3">
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
                  <input type="file" id="input-file-now" class="dropify" />

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
                  <input type="file" id="input-file-now" class="dropify" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment >
  )
}

export default ProductMedia
