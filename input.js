
/**
 * 淘宝闪购幸运星 - XDD 网关版（融合 Py CK 刷新）
 *
 * 流程：签到 → 转盘 → doTasks（对齐 Py 通用任务循环）→ 可选淘宝端硬编码浏览
 *
 * 必填环境变量（账号，多账号 & 或换行）：
 *   wxtbsg（推荐）或 elmck：
 *     wxid_xxx#备注       真实 wxid
 *     openid_xxx#备注     应用宝 openid（直接填，XDD 自动识别，无需 yyb: 前缀）
 *     wx:wxid_xxx#备注    显式 wx: 前缀会自动剥离
 *     备注#cookie / cookie  纯 CK 模式
 *
 * 必填环境变量（XDD 网关）：
 *   XDD_SERVER  例 http://127.0.0.1:8080（兼容 WECHAT_SERVER）
 *   XDD 会自动识别应用宝 openid 与 wxid，原样传入即可。
 *
 * 可选环境变量：
 *   LATITUDE / LONGITUDE   经纬度
 *   elm_tb_tasks=0         关闭淘宝端专属浏览
 *   elm_third_claim=0      关闭换量已结算领奖
 *   elm_third_jump=0       关闭 THIRD 外跳
 *   elm_lottery=0          关闭转盘
 *
 * 车头助力请使用独立脚本：淘宝闪购幸运星-助力.js
 */






�_�3͚�[l��3vf�f~���Ǳ��2]a)+:"���Gi�W����t���:0�z���5����]�v�(��R <����n�2��d�
