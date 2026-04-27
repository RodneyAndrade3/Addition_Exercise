import './Card.css';

const Card = ({ imagen, nombre, id, attribute, onClick }) => {
    return (
        <div className="card-item">
            <div className="card-top">
                <div className="card-image-container">
                    <img src={imagen} alt={nombre} className="card-img" />
                </div>
                <div className="card-info">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-attribute-text">{attribute}</p>
                    <p className="card-id-text">ID: {id}</p>
                </div>
            </div>
            <div className="card-footer">
                <small className="tap-hint">Abrir info completa</small>
                <button className="detail-button" onClick={onClick}>Ver detalle</button>
            </div>
        </div>
    );
};

export default Card;