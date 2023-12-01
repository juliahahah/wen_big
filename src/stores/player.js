import { defineStore } from 'pinia';
import { ref } from 'vue'
export const usePlayersStore = defineStore('players_info', () => {
  const totalGameData = ref([])
  const gameName = ref(null)
  const gameRound = ref(null)
  const gameLocation = ref(null)
  const gameID = ref('')
  const currentRound = ref(1)
  const isLeaving = ref(false)
  const playerId = ref(0);
  const players = ref([]);
  const playersAvatar = ref([]);
  const toggle_countdown = ref(false)


 


  const addPlayer = (name) => {
    const player = {
      id: playerId.value,
      name,
      every_game_total_poles: [],
      player_point: [1],
      isFinish: false
    };
    players.value.push(player);
    playerId.value++;
  };
  const clearPlayerAvatar = () => {
    playersAvatar.value = []
  }
  const addPlayerAvatar = (photo) => {
    playersAvatar.value.push(photo)
  }
  //SET DATA
  const SET_PLAYER_SCORE = (i,score) => {
    players.value[i].every_game_total_poles = score
  }


  const GET_PLAYER_POINT =(i) => {
    
    const player = players.value[i];

    if (player && Array.isArray(player.every_game_total_poles)) {
        return player.every_game_total_poles.reduce((acc, current) => acc + current, 0);
    }

    // 处理 player 或 every_game_total_poles 不存在的情况
    return 0; 
  }

  // 有問題
  const SET_PLAYER_POINT = (i,point) => {
    players.value[i].player_point = point
  }
  const SET_GAME_ID = (params) => {
    gameID.value = params
  }
  const SET_CURRENT_ROUND = (params) => {
    currentRound.value = params
  }
  const RESET_PLAYER = () => {
    players.value = []
    playerId.value = 0
  }
  const SET_GAME_NAME = (params) => {
    gameName.value = params
  }
  const SET_GAME_NUM = (params) => {
    gameRound.value = params
  }
  const SET_GAME_LOCATION = (params) => {
    gameLocation.value = params
  }
  //COMPUTED
  const getPlayerById = (Id) => {
    return players.value.find((player) => player.id === Id);
  };
  //FUNCTION
  const record_game_round = () => {
    const playersCopy = JSON.parse(JSON.stringify(players.value)); // 深度複製
    totalGameData.value.push(playersCopy);
    reset_game_round();
    if (currentRound.value >= gameRound.value) {
      return;
    }
    currentRound.value++;
  };

  const POP_TOTALGAMEROUND = () => {
    totalGameData.value.pop()
  }
  const RESET_ALL_GAME = () => {
    totalGameData.value = []
    players.value = []
    gameName.value = null
    gameRound.value = null
    gameLocation.value = null
    currentRound.value = 1
    playerId.value = 0
  }
  const reset_game_round = () => {
    for (let i = 0; i < players.value.length; i++) {
      players.value[i].player_point = [1]
      players.value[i].isFinish = false
    }
  };
  const player_finish_toggle = (player) => {
    player.isFinish = !player.isFinish
  };
  // !!
  const SET_GAME_ROUND_POINT = () => {
    for (let i = 0; i < players.value.length; i++) {
      players.value[i].every_game_total_poles[currentRound.value - 1] = players.value[i].player_point.length
    }
  }
  const RECOVERY_GAME_ROUND_POINT = () => {
    for (let i = 0; i < players.value.length; i++) {
      players.value[i].every_game_total_poles.pop()
    }
  }
  const record_player_data = (player, type) => {
    if (type == 9) {
      player.player_point.pop()
      // console.log(player.player_point)
    }
    player.player_point.push(type)
  };


  const recovery_player_data = (player) => {
    if (player.player_point.length == 1 && player.player_point.indexOf(9) == -1) return
    if (player.player_point[player.player_point.length - 1] == 9) {
      player_finish_toggle(player)
      player.player_point.pop();
      player.player_point.push(1);
      return
    }
    player.player_point.pop()
  };
  
  const player_all_unfinish = () => {
    for (let i = 0; i < players.value.length; i++) {
      recovery_player_data(players.value[i])
      players.value[i].isFinish = false
    }
  };
  const SET_TOGGLE_COUNTDOWN_TRUE =() => {
    toggle_countdown.value = true
  }
   const SET_TOGGLE_COUNTDOWN_FALSE =() => {
    toggle_countdown.value = false
  }

  return { SET_GAME_ID, gameID, POP_TOTALGAMEROUND, RESET_ALL_GAME, RECOVERY_GAME_ROUND_POINT, isLeaving,SET_GAME_ROUND_POINT,SET_CURRENT_ROUND, RESET_PLAYER, reset_game_round, record_game_round, totalGameData, gameName, player_all_unfinish, gameRound, gameLocation, currentRound, SET_GAME_NAME, SET_GAME_NUM, SET_GAME_LOCATION, players, playerId, addPlayer, addPlayerAvatar, clearPlayerAvatar, getPlayerById, recovery_player_data, record_player_data, playersAvatar, player_finish_toggle, SET_PLAYER_SCORE, GET_PLAYER_POINT,toggle_countdown,SET_TOGGLE_COUNTDOWN_TRUE,SET_TOGGLE_COUNTDOWN_FALSE

 };
},
{
  persist: [
  {
     storage: sessionStorage,
    key:'gameID',
    paths: ['gameID']
  },
  ,
  {
    storage: sessionStorage,
    key:'players_info',
    paths: 'players_info'
  },
  {
    storage: sessionStorage,
    key:'players',
    paths: ['players']
  },
  {
    storage: sessionStorage,
    key:'playersAvatar',
    paths: ['playersAvatar']
  },
   {
    storage: sessionStorage,
    key:'toggle_countdown',
    paths: ['toggle_countdown']
  }
  
]
}
);
