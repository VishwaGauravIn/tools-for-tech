import './FormModal.css'

export default function FormModal({setIsModalVisible}) {
    
    return(
        <>
        <div className="fullscreen-form fullscreen-modal">
        <div className="form-modal-parent">
            <button type="button" class="btn-close btn-close-white float-right" aria-label="Close" onClick={setIsModalVisible}></button>
            <center>
            <div className="form-modal-body-text">
                SUBMITTED !!
            </div>
            <button onClick={setIsModalVisible} class="btn btn-outline-warning"> Okay</button>
            </center>
        </div></div>
        </>


    );
};