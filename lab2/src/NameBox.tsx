const NameBox = (props: { playerData: any; changeName: any }) => (
  <div>
    <div className="row m-3 mb-2">
      <div className="col-auto ">
        <label htmlFor="name">
          Set name of <b>{props.playerData.playerNo}</b>:
        </label>
      </div>
      <div className="col">
        <input
          id="namebox"
          className="w-100"
          value={props.playerData.playerName}
          onChange={(e) => props.changeName(props.playerData, e.target.value)}
        />
      </div>
    </div>
  </div>
);

export default NameBox;
