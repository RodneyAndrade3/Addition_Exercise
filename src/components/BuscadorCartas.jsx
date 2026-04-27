import { use, useEffect, useState } from 'react'
import Card from './Card';
import './BuscadorCartas.css';


function BuscadorCartas() {

    const [datos, setdatos] = useState(null)
    const [search, setSearch] = useState("")
    const [list, setList] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const obtenerLista = () => {

        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
            .then((response) => response.json())
            .then((response) => { setList(response.data) })
    }

    useEffect(() => {
        obtenerLista();
    }, [])


    const obtenerCarta = (name) => {

        if (!name) return;
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name.toLowerCase()}`)
            .then((response) => response.ok ? response.json() : Promise.reject())
            .then((data) => { setdatos(data.data[0]) })
            .catch(() => alert("Carta no encontrada"));
    }

    useEffect(() => {
        obtenerCarta('');
    }, [])


    if (selectedCard) {
        return (
            <div className="detail-page">
                <button className="back-button" onClick={() => setSelectedCard(null)}>Volver</button>

                <div className="detail-content">
                    <img src={selectedCard.card_images[0].image_url} alt={selectedCard.name} className="detail-img" />
                    <div className="detail-info">
                        <h1>{selectedCard.name}</h1>
                        <p className='detail-desc'>{selectedCard.desc}</p>
                        <div className='detail-stats'>
                            <p><strong>Tipo:</strong> {selectedCard.type}</p>
                            <p><strong>Raza:</strong> {selectedCard.race}</p>
                            <p><strong>Atributo:</strong> {selectedCard.attribute || "Spell/Trap"}</p>
                            {selectedCard.atk !== undefined && (
                                <p><strong>ATK/DEF:</strong> {selectedCard.atk}/{selectedCard.def}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='app-container' >
            <div className='search-sect'>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Buscar Carta"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setdatos(null);
                    }}
                />
                <div className="search-actions">
                    <button className='search-button' onClick={() => { obtenerCarta(search) }}>Buscar</button>
                    {search !== "" && (
                        <button className="btn-delete" onClick={() => {
                            setSearch("");
                            obtenerCarta("");
                            setdatos(null);
                        }}>borrar</button>
                    )}
                </div>
            </div>

            {search !== "" && datos ? (
                <div className='results-section' >
                    <h2>Resultado de tu búsqueda:</h2>
                    <Card
                        nombre={datos.name}
                        imagen={datos.card_images[0].image_url_small}
                        id={datos.id}
                        attribute={datos.attribute || "Spell/Trap"}
                        onClick={() => setSelectedCard(datos)}
                    />
                </div>
            ) : (

                <div className='deck-container-horizontal'>
                    {list.map((carta) => (

                        <Card
                            key={carta.id}
                            nombre={carta.name}
                            imagen={carta.card_images[0].image_url_small}
                            id={carta.id}
                            attribute={carta.attribute || "Spell/Trap"}
                            onClick={() => setSelectedCard(carta)}
                        />

                    ))}
                </div>
            )}

        </div>
    )



}

export default BuscadorCartas;
