import React, { useState } from "react";
import Player from "./Player";

interface IPlayerData {
  playerNo: string;
  playerName: string;
  playCount: number;
  isPlaying: boolean;
}

function NameBox(props: { playerData: any; changeName: any }) {
  return (
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

  const clickPlay = (data: IPlayerData) => {
    playerDatas.map((PlayerData) => {
      if (PlayerData === data) {
        return {
          playerNo: PlayerData.playerNo,
          playerName: PlayerData.playerName,
          isPlaying: true,
          playCount: PlayerData.playCount + 1,
        };
      } else {
        return {
          playerNo: PlayerData.playerNo,
          playerName: PlayerData.playerName,
          isPlaying: false,
          playCount: PlayerData.playCount,
        };
      }
    });
  };

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

      {/* {this.state.PlayerDatas.map((PlayerData) => {
          return (
            <NameBox
              key={PlayerData.playerNo}
              playerData={PlayerData}
              changeName={this.changeName}
            />
          );
        })} */}
    </div>
  );
};

// button clicked function
// const clickPlay = (data: IPlayerData) => {
//   this.setState({
//     PlayerDatas: this.state.PlayerDatas.map((PlayerData) => {
//       if (PlayerData === data) {
//         return {
//           playerNo: PlayerData.playerNo,
//           playerName: PlayerData.playerName,
//           isPlaying: true,
//           playCount: PlayerData.playCount + 1,
//         };
//       } else {
//         return {
//           playerNo: PlayerData.playerNo,
//           playerName: PlayerData.playerName,
//           isPlaying: false,
//           playCount: PlayerData.playCount,
//         };
//       }
//     }),
//   });
// };

// // name typed in box function
// changeName = (data: IPlayerData, name: string) => {
//   this.setState((state) => ({
//     PlayerDatas: state.PlayerDatas.map((PlayerData) => {
//       if (PlayerData === data) {
//         return {
//           playerNo: PlayerData.playerNo,
//           playerName: name,
//           isPlaying: PlayerData.isPlaying,
//           playCount: PlayerData.playCount,
//         };
//       } else {
//         return {
//           playerNo: PlayerData.playerNo,
//           playerName: PlayerData.playerName,
//           isPlaying: PlayerData.isPlaying,
//           playCount: PlayerData.playCount,
//         };
//       }
//     }),
//   }));
// };

export default GameAdmin;
