import React, { useState } from "react";
import Player from "./Player";

interface IPlayerData {
  playerNo: string;
  playerName: string;
  playCount: number;
  isPlaying: boolean;
}

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

const GameAdmin = () => {
  //initial state of players
  const initialState = () => [
    {
      playerNo: "Player One",
      playerName: "",
      playCount: 0,
      isPlaying: false,
    },
    {
      playerNo: "Player Two",
      playerName: "",
      playCount: 0,
      isPlaying: false,
    },
  ];

  const [playerDatas, setPlayerDatas] = useState(initialState());

  const clickPlay = (data: IPlayerData) =>
    setPlayerDatas(
      playerDatas.map((PlayerData) => {
        if (PlayerData === data) {
          console.log(PlayerData);
          return {
            ...PlayerData,
            isPlaying: true,
            playCount: PlayerData.playCount + 1,
          };
        } else {
          console.log(PlayerData);
          return {
            ...PlayerData,
            isPlaying: false,
          };
        }
      })
    );

  const changeName = (data: IPlayerData, name: string) =>
    setPlayerDatas(
      playerDatas.map((PlayerData) => {
        if (PlayerData === data) {
          return {
            ...PlayerData,
            playerName: name,
          };
        } else {
          return {
            ...PlayerData,
          };
        }
      })
    );

  return (
    <div>
      {playerDatas.map((PlayerData) => {
        return (
          <Player
            key={PlayerData.playerNo}
            playerData={PlayerData}
            clickPlay={clickPlay}
          />
        );
      })}

      {playerDatas.map((PlayerData) => {
        return (
          <NameBox
            key={PlayerData.playerNo}
            playerData={PlayerData}
            changeName={changeName}
          />
        );
      })}
    </div>
  );
};

export default GameAdmin;
