const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});

const activity = {
  "state": "𝐈𝐍 𝐒𝐄𝐑𝐕𝐄𝐑 : 𝟏/𝟏",
  details: "𝐍𝐏𝐕 | 𝐒𝐄𝐑𝐕𝐄𝐑 | 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘",
  "assets": {
    large_image: "nex-image",
    large_text: "NEX"
  },
};
client.on("ready", () => {
  client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
  console.log("ONLINE.");
})

client.login({clientId: "798126622409490462"});
