function Player(props: { playerData: any; clickPlay: any }) {
  return (
    <div className="border border-dark m-3 p-4">
      <h4>{props.playerData.playerNo}</h4>
      <div className="row">
        <div className="col">
          <ul>
            <li>Name: {props.playerData.playerName}</li>
            <li>Played number of times: {props.playerData.playCount}</li>
          </ul>
        </div>
        <div className="col-sm-3">
          <button
            className="btn btn-dark w-100"
            onClick={() => props.clickPlay(props.playerData)}
            disabled={props.playerData.isPlaying}
          >
            {props.playerData.isPlaying ? "This user is playing now" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
