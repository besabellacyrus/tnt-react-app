import React, { useState } from 'react'

const AppAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = (e) => {
    console.log({ e: e.currentTarget.parentNode })
    const content = e.currentTarget.parentNode.children[1]
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      setIsOpen(false);
    } else {
      content.classList.add('active');
      setIsOpen(true);
    }
  }
  return (
    <React.Fragment>
      <div className="app-accordion-container mt-10">
        <div className="row">
          <div className="col-sm-12">
            <div className="accordion-card">
              <div className="accordion-header" onClick={handleToggle}>
                <h7>{props.title}</h7>
                <span className="accordion-chevron">
                  {
                    isOpen ? <i class="fa fa-chevron-up" aria-hidden="true"></i> : <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  }
                </span>
              </div>
              <div className="app-accordion-content active">
                <div className="accordion-body">
                  {props.children}
                </div>
                <div className="accordion-footer">
                  {props.footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppAccordion
