interface Props {
    title: string;
    name: string;
    image: string;
    LinkedIn_link: string;
}

function PersonCard(props: Props){
   return <div className="Card">
        <p className="card-title">{props.title}</p>
        <p className="card-name">{props.name}</p>
        <img src ={props.image} alt = {"Foto de " + props.name} className="card-picture"/> <br/>
        <div className="connect-block"> 
            <a className="connect">CONNECT</a>
            <a href={props.LinkedIn_link} className="linkedin_icon"><img src = "../assets/mdi_linkedin.png"/></a>
        </div>
    </div>;
}
export default PersonCard