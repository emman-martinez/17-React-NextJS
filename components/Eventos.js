import Evento from './Evento';

const Eventos = (props) => {
    return(
        <div className="list-group">
            {props.eventos.map((evento) => (
                <Evento
                        key={evento.id}
                        evento={evento}
                ></Evento>
            ))}
        </div>
    );
}

export default Eventos;