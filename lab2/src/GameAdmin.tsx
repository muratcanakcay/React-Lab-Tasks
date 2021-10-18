import React, { useState } from "react";
import Player from "./Player";
import NameBox from "./NameBox";

interface IPlayerData {
  playerNo: string;
  playerName: string;
  playCount: number;
  isPlaying: boolean;
}

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
          return {
            ...PlayerData,
            isPlaying: true,
            playCount: PlayerData.playCount + 1,
          };
        } else {
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
