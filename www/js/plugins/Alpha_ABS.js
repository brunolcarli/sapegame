/*
 * Official Web Page
 * <https://kagedesuworkshop.blogspot.ru/p/alpha-abs.html>
 *
 * License
 * Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 * <https://creativecommons.org/licenses/by-nc-sa/4.0/>
 *
 * Copyright (c) 2018 Vladimir Skrypnikov (Pheonix KageDesu)
 * <https://kagedesuworkshop.blogspot.ru/>
 *
 */

//=============================================================================
// Alpha_ABS
//=============================================================================
//Version 1.2 (26.05.2018)

/*:
 * @author Pheonix KageDesu
 * @plugindesc v1.2.980 The real-time action battle system
 * 
 * @help
 * 
 * Web Page: 
 * https://kagedesuworkshop.blogspot.com/p/alpha-abs.html
 * Wiki Page: 
 * https://github.com/KageDesu/Alpha-ABS/wiki
 * Patreon Page: 
 * https://www.patreon.com/KageDesu
 * YouTube Channel:
 * https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 * 
 * Thanks to all my patrons!
 * Plugin supporters:
 *  - Donald Derrick
 *  - Ilya Chkoliar (https://elushisgaming.club/)
 *  - Elindos Phar
 *  - Sarcastic Sloth (https://sarcasticsloth42.wixsite.com/avillainstale)
 * 
 * [!] Please read Wiki Page for more information and documentation
 * 
 * === === === === === === === === === === === === === === === === ===
 * 
 * @requiredAssets audio/se/Equip2
 * @requiredAssets audio/se/Coin
 * @requiredAssets audio/se/Magic3
 * @requiredAssets img/animations/StateDown1
 * 
 * @param Alpha ABS
 *
 *
 * @param Interface
 * @default --------------------
 *
 * @param UI_Visible
 * @text Show UI in game?
 * @parent Interface
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param UI_Editor
 * @text Allow UI editor?
 * @parent Interface
 * @type boolean
 * @on Yes
 * @off No
 * @desc Allow UI edit in the game Options section?
 * @default true
 *
 * @param UI_Elements
 * @text Elements
 * @default --------------------
 * @parent Interface
 *
 * @param UIE_Player_Status
 * @parent UI_Elements
 * @default --------------------
 * @text Player status
 *
 * @param UIE_Player_Status_Settings
 * @parent UIE_Player_Status
 * @text Settings
 * @type struct<UIEPlayerStatus>
 * @default {"Position":"{\"X\":\"\",\"Y\":\"\"}","Visible":"true","Portrait":"true","In battle Icon":"","Mask":"","Level":"true","Background":""}
 *
 * @param UIE_Player_HP_Bar
 * @text HP Bar
 * @parent UIE_Player_Status
 * @type struct<UIEBar>
 * @default {"Font Name":"","Color":"{\"Color 1\":\"#FF0000\",\"Color 2\":\"#FFC1C1\"}","Background Color":"#000000","Visible":"true","Show value":"true"}
 *
 * @param UIE_Player_MP_Bar
 * @text MP Bar
 * @parent UIE_Player_Status
 * @type struct<UIEBar>
 * @default {"Font Name":"","Color":"{\"Color 1\":\"#8080FF\",\"Color 2\":\"\"}","Background Color":"#000000","Visible":"true","Show value":"true"}
 *
 * @param UIE_Player_TP_Bar
 * @text TP Bar
 * @parent UIE_Player_Status
 * @type struct<UIEBar>
 * @default {"Font Name":"","Color":"{\"Color 1\":\"#008040\",\"Color 2\":\"\"}","Background Color":"#000000","Visible":"true","Show value":"true"}
 *
 * @param UIE_Player_Target
 * @parent UI_Elements
 * @text Player Target
 * @type struct<UIEEnemyTarget>
 * @default {"Font Name":"","Visible":"true","Position":"{\"X\":\"250\",\"Y\":\"50\"}","Name":"true","HP_text":"%","HP Bar":"{\"Font Name\":\"\",\"Color\":\"{\\\"Color 1\\\":\\\"#FF0000\\\",\\\"Color 2\\\":\\\"\\\"}\",\"Background Color\":\"#000000\",\"Visible\":\"true\",\"Show value\":\"true\"}","Back_color":"#000000","Mask":"","Selected_Image":"","Selected_Color":"#FF0000"}
 *
 * @param UIE_Player_Skills
 * @parent UI_Elements
 * @text Spells panel
 * @type struct<UIEPlayerSpellPanel>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}","Image":"","AutoHide":"true"}
 *
 * @param UIE_Player_HotBar
 * @parent UI_Elements
 * @text Control panel
 * @type struct<UIEPlayerHotBar>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}","Orientation":"Vertical","Item1":"true","Item2":"true","Item3":"true","Item4":"true","Item5":"true"}
 *
 * @param UIE_Message_Bar
 * @parent UI_Elements
 * @text Messages panel
 * @type struct<UIEMessagePanel>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}","Font Name":"","Text Color":"#FF0000"}
 *
 * @param UIE_Player_States
 * @parent UI_Elements
 * @text Player states
 * @type struct<UIEBasicElement>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}"}
 *
 * @param UIE_ItemList
 * @parent UI_Elements
 * @text Items alerts
 * @type struct<UIEBasicElement>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}"}
 *
 * @param UIE_Player_Cast
 * @parent UI_Elements
 * @text Player Cast bar
 * @type struct<UIEBasicElement>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}"}
 *
 * @param UIE_ItemListGoldIconIndex
 * @parent UIE_ItemList
 * @text Items alerts gold icon
 * @type number
 * @default 314
 * @desc Icon index for Gold alert (when you pick up gold from enemies) (-1 - no icon)
 *
 * @param UIE_SpellSelectZoneImage
 * @parent UI_Elements
 * @text Spell zone image
 * @type file
 * @dir img/
 * @require 1
 * @desc image when you select spell hit zone on ground, 96 x 96 px, empty for default image
 *
 * @param UIE_Player_FirearmPanel
 * @parent UI_Elements
 * @text Player firearm panel
 * @type struct<UIEBasicElement>
 * @default {"Visible":"true","Position":"{\"X\":\"\",\"Y\":\"\"}"}
 * 
 * @param UI_PlayerDamageColor
 * @parent UI_Elements
 * @text Player Damage Outline
 * @type string
 * @default #FF0000
 * @desc HEX value or empty
 * 
 * 
 * @param Strings
 * @default --------------------
 *
 * @param Strings_Alerts
 * @parent Strings
 * @default --------------------
 * @text Alerts
 *
 * @param STRING_ALERT_NEEDTARGET
 * @parent Strings_Alerts
 * @type String
 * @text Need Target
 * @default Need target
 *
 * @param STRING_ALERT_TOFAR
 * @parent Strings_Alerts
 * @type String
 * @text Target too far
 * @default Target too far
 *
 * @param STRING_ALERT_INTERRUPT
 * @parent Strings_Alerts
 * @type String
 * @text Action interrupt
 * @default Action interrupt
 *
 * @param STRING_ALERT_NOAUTOA
 * @parent Strings_Alerts
 * @type String
 * @text Can't use attack
 * @default Can't use attack now
 *
 * @param STRING_ALERT_NOUSE
 * @parent Strings_Alerts
 * @type String
 * @text Can't use action
 * @default Can't use action now
 *
 * @param STRING_ALERT_NOCHARGES
 * @parent Strings_Alerts
 * @type String
 * @text No charges
 * @default Can't use, no charges
 *
 * @param STRING_ALERT_RECHARGE
 * @parent Strings_Alerts
 * @type String
 * @text Not ready
 * @default Action is not ready
 *
 * @param STRING_ALERT_CASTMOVE
 * @parent Strings_Alerts
 * @type String
 * @text On moving
 * @default Can't use while moving
 *
 * @param STRING_ALERT_NOINBATTLE
 * @parent Strings_Alerts
 * @type String
 * @text In battle
 * @default Need get out of the battle
 *
 * @param STRING_ALERT_NEWLEVEL
 * @parent Strings_Alerts
 * @type String
 * @text New level
 * @default Level up!
 *
 *
 *
 * @param Strings_Popup
 * @parent Strings
 * @default --------------------
 * @text Popup
 *
 * @param STRING_POPUP_EVADE
 * @parent Strings_Popup
 * @type String
 * @text Evade
 * @default Evade
 *
 * @param STRING_POPUP_MISS
 * @parent Strings_Popup
 * @type String
 * @text Miss
 * @default Miss
 *
 * @param STRING_POPUP_FAIL
 * @parent Strings_Popup
 * @type String
 * @text Fail
 * @default Fail
 *
 * @param STRING_POPUP_ABSORB
 * @parent Strings_Popup
 * @type String
 * @text Absorb
 * @default Absorb
 *
 * @param STRING_POPUP_IMMUNE
 * @parent Strings_Popup
 * @type String
 * @text Immune
 * @default Immune
 *
 * @param STRING_POPUP_WEAK
 * @parent Strings_Popup
 * @type String
 * @text Weak
 * @default Weak
 *
 * @param STRING_POPUP_SKILL
 * @parent Strings_Popup
 * @type String
 * @text Skill ready
 * @default Ready!
 *
 *
 *
 * @param Strings_Menu
 * @parent Strings
 * @default --------------------
 * @text Options menu
 *
 * @param STRING_MENU_UIVIS
 * @parent Strings_Menu
 * @type String
 * @text Show UI
 * @default Show UI
 *
 * @param STRING_MENU_UIPOS
 * @parent Strings_Menu
 * @type String
 * @text Edit UI
 * @default Edit UI
 *
 * @param STRING_MENU_KEYBIND
 * @parent Strings_Menu
 * @type String
 * @text Controls
 * @default Controls
 *
 *
 *
 * @param Strings_Keys
 * @parent Strings
 * @default --------------------
 * @text Key binding
 *
 * @param STRING_MENU_KB_KEY
 * @parent Strings_Keys
 * @type String
 * @text Press any key
 * @default Press any key
 *
 * @param STRING_MENU_KB_TAB
 * @parent Strings_Keys
 * @type String
 * @text Target select
 * @default Target select
 *
 * @param STRING_MENU_KB_SKILLS
 * @parent Strings_Keys
 * @type String
 * @text Skills panel
 * @default Skills panel
 *
 * @param STRING_MENU_KB_CONTRL
 * @parent Strings_Keys
 * @type String
 * @text Сontrol panel
 * @default Сontrol panel
 *
 * @param STRING_MENU_KB_WEAPON
 * @parent Strings_Keys
 * @type String
 * @text Weapon circle
 * @default Weapon circle
 *
 * @param STRING_MENU_KB_DEF
 * @parent Strings_Keys
 * @type String
 * @text Reset to default
 * @default Reset to default
 *
 * @param STRING_MENU_KB_BACK
 * @parent Strings_Keys
 * @type String
 * @text Back
 * @default Back
 *
 * @param STRING_MENU_KB_SLOT
 * @parent Strings_Keys
 * @type String
 * @text Item
 * @default Item
 *
 * @param STRING_MENU_KB_ATTACK
 * @parent Strings_Keys
 * @type String
 * @text Attack
 * @default Attack
 *
 * @param STRING_MENU_KB_FOLLOW
 * @parent Strings_Keys
 * @type String
 * @text Follow
 * @default Follow
 *
 * @param STRING_MENU_KB_JUMP
 * @parent Strings_Keys
 * @type String
 * @text Jump
 * @default Jump
 *
 * @param STRING_MENU_KB_ROTATE
 * @parent Strings_Keys
 * @type String
 * @text Rotate
 * @default Rotate
 *
 * @param STRING_MENU_KB_LEFT
 * @parent Strings_Keys
 * @type String
 * @text Left
 * @default Left
 *
 * @param STRING_MENU_KB_RIGHT
 * @parent Strings_Keys
 * @type String
 * @text Right
 * @default Right
 *
 * @param STRING_MENU_KB_BOTTOM
 * @parent Strings_Keys
 * @type String
 * @text Bottom
 * @default Bottom
 *
 * @param STRING_MENU_KB_TOP
 * @parent Strings_Keys
 * @type String
 * @text Top
 * @default Top
 *
 * @param STRING_MENU_KB_WEAP
 * @parent Strings_Keys
 * @type String
 * @text Weapons
 * @default Weapons
 *
 *
 *
 * @param Strings_SpellInfo
 * @parent Strings
 * @default --------------------
 * @text Spells
 *
 * @param STRING_SKILL_INFO_RADIUS
 * @parent Strings_SpellInfo
 * @type String
 * @text Radius
 * @default Radius:
 *
 * @param STRING_SKILL_INFO_RANGE
 * @parent Strings_SpellInfo
 * @type String
 * @text Range
 * @default Range:
 *
 * @param STRING_SKILL_INFO_RANGE2
 * @parent Strings_SpellInfo
 * @type String
 * @text Range
 * @default Range:
 *
 * @param STRING_SKILL_INFO_CAST
 * @parent Strings_SpellInfo
 * @type String
 * @text Cast
 * @default Cast:

 * @param STRING_SKILL_INFO_COOLDOWN
 * @parent Strings_SpellInfo
 * @type String
 * @text Cooldown
 * @default Cooldown:

 * @param STRING_SKILL_INFO_DESCRIPTION
 * @parent Strings_SpellInfo
 * @type String
 * @text Description
 * @default Description

 * @param STRING_SKILL_INFO_HAS
 * @parent Strings_SpellInfo
 * @type String
 * @text Has
 * @default Has:

 * @param STRING_SKILL_INFO_USE
 * @parent Strings_SpellInfo
 * @type String
 * @text Use
 * @default Use:

 * @param STRING_SKILL_INFO_CHARGES
 * @parent Strings_SpellInfo
 * @type String
 * @text Charges
 * @default Charges:

 * @param STRING_SKILL_INFO_RELOADCHR
 * @parent Strings_SpellInfo
 * @type String
 * @text Reload charges
 * @default Reload charges:

 * @param STRING_SKILL_INFO_ONTARGET
 * @parent Strings_SpellInfo
 * @type String
 * @text Need target
 * @default Need target

 * @param STRING_SKILL_INFO_ONUSER
 * @parent Strings_SpellInfo
 * @type String
 * @text On user
 * @default On user

 * @param STRING_SKILL_INFO_AREA
 * @parent Strings_SpellInfo
 * @type String
 * @text Area select
 * @default Area select

 * @param STRING_SKILL_INFO_CIRCLE
 * @parent Strings_SpellInfo
 * @type String
 * @text Around user
 * @default Around user

 * @param STRING_SKILL_INFO_ZONE
 * @parent Strings_SpellInfo
 * @type String
 * @text Zone
 * @default Zone

 * @param STRING_SKILL_INFO_SEC
 * @parent Strings_SpellInfo
 * @type String
 * @text In seconds
 * @default  sec.

 * @param STRING_SKILL_INFO_TARGET
 * @parent Strings_SpellInfo
 * @type String
 * @text Need target
 * @default <target>

 * @param STRING_SKILL_INFO_DAMAGE
 * @parent Strings_SpellInfo
 * @type String
 * @text Damage
 * @default Damage

 * @param STRING_SKILL_INFO_RECOVER
 * @parent Strings_SpellInfo
 * @type String
 * @text Recover
 * @default Recover

 * @param STRING_SKILL_INFO_DRAIN
 * @parent Strings_SpellInfo
 * @type String
 * @text Drain
 * @default Drain
 *
 * @param STRING_SKILL_INFO_MELEE
 * @parent Strings_SpellInfo
 * @type String
 * @text Melee
 * @default Melee
 *
 * @param STRING_SKILL_INFO_REPEATS
 * @parent Strings_SpellInfo
 * @type String
 * @text Multi Hits
 * @default Multi Hits: 
 *
 *
 *
 *
 * @param Enemies
 * @default --------------------
 *
 * @param Enemy Dead Switch
 * @parent Enemies
 * @type combo
 * @option A
 * @option B
 * @option C
 * @option D
 * @default B
 * @desc Event self switch to turn ON when enemy die
 *
 * @param Auto loot
 * @desc If this parameter true - enemies will looting automatically when die
 * @parent Enemies
 * @type boolean
 * @on Yes
 * @off No
 * @default false
 *
 *
 *
 *
 * @param Animations
 * @default --------------------
 *
 * @param Revive Animation
 * @parent Animations
 * @type animation
 * @desc 0 - also default (45), -1 - no animation
 * @default 45
 *
 * @param Cast Animation
 * @parent Animations
 * @type animation
 * @desc 0 - default
 * @default 0
 *
 * @param Cast Animation SE
 * @parent Cast Animation
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 * @desc Use default cast animation SE sound ?
 *
 * @param Level Up Animation
 * @parent Animations
 * @type animation
 * @desc 0 - also default (49), -1 - no animation
 * @default 49
 *
 *
 *
 *
 *
 *
 *
 * @param Commons Settings
 * @default --------------------
 *
 * @param Game Over Map ID
 * @desc Map Id where you transfer if your character die (0 - GameOver screen, any ABS map - GameOver screen)
 * @parent Commons Settings
 * @type number
 * @min 0
 * @default 0
 *
 * @param Game Over Map Direction
 * @text Transfer character direction
 * @parent Game Over Map ID
 * @type select
 * @default down
 * @option top
 * @option left
 * @option right
 * @option down
 * 
 * @param Game Over Map Position
 * @parent Game Over Map ID
 * @type struct<UIEPosition>
 * @default {"X":"0","Y":"0"}
 * 
 * @param Game Over Common Event
 * @parent Game Over Map ID
 * @type number
 * @default 0
 * @min 0
 * @desc This common event will be called after player death (0 - no event)
 * 
 * @param Allow Transfrer
 * @desc Allows the transition between locations during the battle (on you risk)
 * @parent Commons Settings
 * @type boolean
 * @on Yes
 * @off No
 * @default false
 *
 * @param Solid Regions
 * @desc Map region Id's for solid objects (walls, doors, etc), use comma to separate: 1,2,3,4
 * @parent Commons Settings
 * @type string
 * @default 0
 *
 * @param Party experience
 * @parent Commons Settings
 * @type combo
 * @option For each member
 * @option For party 
 * @option Share at all
 * @default For each member
 * @desc How experience will been given after enemy kill
 * 
 * @param Enemy Spawn Map Id
 * @desc The map ID of the map you are using to store spawnable enemy
 * @parent Commons Settings
 * @type number
 * @default 0
 * @min 0
 *
 * @param Controls
 * @default --------------------
 *
 * @param Controls_Key_tS
 * @parent Controls
 * @text Target Select Key
 * @type string
 * @default q
 * 
 * @param Controls_Key_wr
 * @parent Controls
 * @text Firearm reload key
 * @type string
 * @default r
 *
 * @param Controls_Skills_panel
 * @parent Controls
 * @default --------------------
 * @text Skills panel
 *
 * @param Controls_Key_sp1
 * @parent Controls_Skills_panel
 * @text Spell 1
 * @type string
 * @default 1
 *
 * @param Controls_Key_sp2
 * @parent Controls_Skills_panel
 * @text Spell 2
 * @type string
 * @default 2
 *
 * @param Controls_Key_sp3
 * @parent Controls_Skills_panel
 * @text Spell 3
 * @type string
 * @default 3
 *
 * @param Controls_Key_sp4
 * @parent Controls_Skills_panel
 * @text Spell 4
 * @type string
 * @default 4
 *
 * @param Controls_Key_sp5
 * @parent Controls_Skills_panel
 * @text Spell 5
 * @type string
 * @default 5
 *
 * @param Controls_Key_sp6
 * @parent Controls_Skills_panel
 * @text Spell 6
 * @type string
 * @default 6
 *
 * @param Controls_Key_sp7
 * @parent Controls_Skills_panel
 * @text Spell 7
 * @type string
 * @default 7
 *
 * @param Controls_Key_sp8
 * @parent Controls_Skills_panel
 * @text Spell 8
 * @type string
 * @default 8
 *
 * @param Controls_Weapon_circle
 * @parent Controls
 * @default --------------------
 * @text Weapon circle
 *
 * @param Controls_Key_scW
 * @parent Controls_Weapon_circle
 * @text Top slot
 * @type string
 * @default w
 *
 * @param Controls_Key_scS
 * @parent Controls_Weapon_circle
 * @text Bottom slot
 * @type string
 * @default s
 *
 * @param Controls_Key_scD
 * @parent Controls_Weapon_circle
 * @text Right slot
 * @type string
 * @default d
 *
 * @param Controls_Key_scA
 * @parent Controls_Weapon_circle
 * @text Left slot
 * @type string
 * @default a
 *
 * @param Controls_Control_panel
 * @parent Controls
 * @default --------------------
 * @text Сontrol panel
 *
 *
 * @param Controls_Key_cpW
 * @parent Controls_Control_panel
 * @text Follow
 * @type string
 * @default w
 *
 * @param Controls_Key_cpA
 * @parent Controls_Control_panel
 * @text Attack
 * @type string
 * @default a
 *
 * @param Controls_Key_cpS
 * @parent Controls_Control_panel
 * @text Jump
 * @type string
 * @default s
 *
 * @param Controls_Key_cpD
 * @parent Controls_Control_panel
 * @text Rotate
 * @type string
 * @default d
 *
 * @param Controls_Key_cpE
 * @parent Controls_Control_panel
 * @text Weapons
 * @type string
 * @default e
 *
 * @param Controls_KeyAllowed_Follow
 * @text Enabled?
 * @parent Controls_Key_cpW
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param Controls_KeyAllowed_Jump
 * @text Enabled?
 * @parent Controls_Key_cpS
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param Controls_KeyAllowed_Rotate
 * @text Enabled?
 * @parent Controls_Key_cpD
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param Controls_KeyAllowed_Weapons
 * @text Enabled?
 * @parent Controls_Key_cpE
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
*/
/*~struct~UIEPosition:
 * @param X
 * @type number
 *
 * @param Y
 * @type number
 */
/*~struct~UIEGradient:
 * @param Color 1
 * @type string
 * @desc HEX value
 *
 * @param Color 2
 * @type string
 * @desc HEX value
 */
/*~struct~UIEPlayerStatus:
 * @param Position
 * @type struct<UIEPosition>
 *
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Portrait
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param In battle Icon
 * @type file
 * @dir img/
 * @require 1
 * @desc empty for default image
 *
 * @param Mask
 * @type file
 * @dir img/
 * @require 1
 * @desc empty for default image
 *
 * @param Level
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param Background
 * @type file
 * @dir img/
 * @require 1
 * @desc empty for default image
 *
 */
/*~struct~UIEBar:
 * @param Font Name
 * @type string
 *
 * @param Color
 * @type struct<UIEGradient>
 *
 * @param Background Color
 * @type string
 * @desc HEX value
 *
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Show value
 * @type boolean
 * @on Visible
 * @off Hidden
 */
/*~struct~UIEEnemyTarget:
 * @param Font Name
 * @type string
 *
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Position
 * @type struct<UIEPosition>
 *
 * @param Name
 * @type boolean
 * @on Show
 * @off Not
 * @desc Show name or not?
 *
 * @param HP_text
 * @text Show HP in
 * @type select
 * @default %
 * @option %
 * @option Value
 *
 * @param HP Bar
 * @type struct<UIEBar>
 *
 * @param Back_color
 * @text Background Color
 * @type string
 * @desc HEX value or empty
 *
 * @param Mask
 * @type file
 * @dir img/
 * @require 1
 * @desc empty for default image
 *
 * @param Selected_Image
 * @text Selected
 * @type file
 * @dir img/
 * @require 1
 * @desc empty for default image
 *
 * @param Selected_Color
 * @parent Selected_Image
 * @text Selected Color
 * @type string
 * @desc HEX value or empty
 */
/*~struct~UIEPlayerSpellPanel:
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Position
 * @type struct<UIEPosition>
 *
 * @param Image
 * @type file
 * @dir img/
 * @require 1
 * @desc File or empty
 *
 * @param AutoHide
 * @type boolean
 * @on Yes
 * @off No
 * @desc Auto hide skill panel when actor has no skills
 */
/*~struct~UIEPlayerHotBar:
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Position
 * @type struct<UIEPosition>
 *
 * @param Orientation
 * @type select
 * @default Vertical
 * @option Vertical
 * @option Horizontal
 *
 * @param Item1
 * @text Attack
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param Item2
 * @text Follow
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param Item3
 * @text Jump
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param Item4
 * @text Rotate
 * @type boolean
 * @on Visible
 * @off Hidden
 *
 * @param Item5
 * @text Favorite Weapons
 * @type boolean
 * @on Visible
 * @off Hidden
 */
/*~struct~UIEMessagePanel:
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Position
 * @type struct<UIEPosition>
 *
 * @param Font Name
 * @type string
 *
 * @param Text Color
 * @type string
 * @desc HEX value
 */
/*~struct~UIEBasicElement:
 * @param Visible
 * @type boolean
 * @on Yes
 * @off No
 *
 * @param Position
 * @type struct<UIEPosition>
 */
/*~struct~UIEBarMini:
 * @param Color
 * @type struct<UIEGradient>
 *
 * @param Background Color
 * @type string
 * @desc HEX value
 */

//@[CODE STANDARD X1]

/* jshint -W097 */
/* jshint -W117 */

"use strict";

var Imported = Imported || {};
Imported.AlphaABS = true;

var AlphaABS = {};
AlphaABS.Version = '1.2';
AlphaABS.Build = 980;

AlphaABS.Versions = {
  'Alpha ABS': AlphaABS.Version + ' : ' + AlphaABS.Build,
  'PLATFORM' : '1.5L',
  'KD Core' : '1.1A',
  'CoffeeScript CLI': '2.3.1'
};

AlphaABS.LIBS = {};

AlphaABS.register = function (library) {
  this.LIBS[library.name] = library;
};

(function () {
  var _SceneManager_catchException_ABS = SceneManager.catchException;
  SceneManager.catchException = function (e) {
    SceneManager._printABSInfo();
    _SceneManager_catchException_ABS.call(this, e);
  };

  SceneManager._printABSInfo = function () {
    console.error("Using AlphaABS [Version: " + AlphaABS.Version + " ; Build: " + AlphaABS.Build + " ; on MV  " + Utils.RPGMAKER_VERSION + "]");
  };

  var _SceneManager_onError_ABS = SceneManager.onError;
  SceneManager.onError = function (e) {
    SceneManager._printABSInfo();
    _SceneManager_onError_ABS.call(this, e);
    if (!Utils.isNwjs()) return;
    require('nw.gui').Window.get().showDevTools();
  };

  var _JsonEx_decode = JsonEx._decode;
  JsonEx._decode = function (value, circular, registry) {
    var type = Object.prototype.toString.call(value);
    if (type === '[object Object]' || type === '[object Array]') {
      if (value['@']) {
        var constructor = AlphaABS.LIBS[value['@']] || PLATFORM[value['@']];
        if (constructor) {
          value = this._resetPrototype(value, constructor.prototype);
          value['@'] = null;
        }
      }
    }
    return _JsonEx_decode.call(this, value, circular, registry);
  };
})();

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//![THIS LIBRARY ONLY FOR ALPHA ABS with MV < 1.6.1 SUPPORT]
var KDCore;

KDCore = KDCore || {};

KDCore.Version = '1.2A';

KDCore.LIBS = {};

KDCore.register = function(library) {
  return this.LIBS[library.name] = library;
};

(function() {
  var BitmapSrc, Color, DevLog, ParametersManager, SDK, StringsLoader, __TMP_LOGS__;
  //Array Extension
  //------------------------------------------------------------------------------
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.include = function(value) {
    return this.indexOf(value) !== -1;
  };
  //?[FOR 1.5.1]
  Array.prototype.includes = function(value) {
    return this.include(value);
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  //Number Extension
  //------------------------------------------------------------------------------
  Number.prototype.do = function(method) {
    return SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  //Sprite Extension
  //------------------------------------------------------------------------------
  Sprite.prototype.moveToCenter = function(dx, dy) {
    dx = SDK.check(dx, 0);
    dy = SDK.check(dy, 0);
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX, floatY) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  //Bitmap Extension
  //------------------------------------------------------------------------------
  Bitmap.prototype.fillAll = function(color) {
    return this.fillRect(0, 0, this.width, this.height, color.CSS);
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size) {
    var bitmap;
    size = SDK.check(size, 32);
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    return this.drawOnMe(bitmap, x, y, size, size);
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x, y, sw, sh) {
    x = SDK.check(x, 0);
    y = SDK.check(y, 0);
    sw = SDK.check(sw, 0);
    sh = SDK.check(sh, 0);
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  Bitmap.prototype.drawTextFull = function(text, position) {
    position = SDK.check(position, 'center');
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
  //SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol) {
    var node, t;
    coordSymbol = SDK.check(coordSymbol, 'x');
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.check = function(value, defaultValue) {
    if (defaultValue === void 0 || defaultValue === null) {
      defaultValue = true;
    }
    if (value === void 0 || value === null) {
      return defaultValue;
    } else {
      return value;
    }
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  //For compability with PLATFORM
  SDK.setConstant = function(object, name, value) {
    return SDK.setConstantToObject(object, name, value);
  };
  //Color
  //------------------------------------------------------------------------------
  Color = class Color {
    constructor(r1, g1, b1, a1) {
      this.r = r1;
      this.g = g1;
      this.b = b1;
      this.a = a1;
      this.r = SDK.check(this.r, 255);
      this.g = SDK.check(this.g, 255);
      this.b = SDK.check(this.b, 255);
      this.a = SDK.check(this.a, 255);
    }

    getLightestColor(lightLevel) {
      var bf, newColor, p;
      bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
      p = 0;
      newColor = [0, 0, 0, 0];
      if (bf - lightLevel >= 0) {
        if (bf >= 0) {
          p = Math.abs(bf - lightLevel) / lightLevel;
        }
        newColor = this.ARR.map(function(c) {
          return c - (p * c);
        });
      } else {
        if (bf >= 0) {
          p = (lightLevel - bf) / (255 - bf);
        }
        newColor = this.ARR.map(function(c) {
          return [(255 - c) * p + c, 255].min();
        });
      }
      return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
    }

    clone() {
      return this.reAlpha(this.a);
    }

    reAlpha(newAlpha) {
      return new Color(this.r, this.g, this.b, newAlpha || 255);
    }

    static AddConstantColor(name, color) {
      color.toHex();
      color.toArray();
      color.toCSS();
      SDK.setConstantToObject(Color, name, color);
    }

    toHex() {
      var b, g, r;
      if (this._colorHex != null) {
        return this._colorHex;
      }
      r = Math.floor(this.r).toString(16).padZero(2);
      g = Math.floor(this.g).toString(16).padZero(2);
      b = Math.floor(this.b).toString(16).padZero(2);
      return this._colorHex = '#' + r + g + b;
    }

    toArray() {
      if (this._colorArray != null) {
        return this._colorArray;
      }
      return this._colorArray = [this.r, this.g, this.b, this.a];
    }

    toCSS() {
      var na, nb, ng, nr;
      if (this._colorCss != null) {
        return this._colorCss;
      }
      nr = Math.round(this.r);
      ng = Math.round(this.g);
      nb = Math.round(this.b);
      na = this.a / 255;
      return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
    }

    static Random() {
      var a, b, c;
      a = SDK.rand(1, 254);
      b = SDK.rand(1, 254);
      c = SDK.rand(1, 254);
      return new Color(a, b, c, 255);
    }

    static FromHex(hexString) {
      var color, result;
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
      color = null;
      if (result != null) {
        color = {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        };
      }
      if (color != null) {
        return new Color(color.r, color.g, color.b, 255);
      } else {
        return Color.NONE;
      }
    }

  };
  Object.defineProperties(Color.prototype, {
    R: {
      get: function() {
        return this.r;
      },
      configurable: true
    },
    G: {
      get: function() {
        return this.g;
      },
      configurable: true
    },
    B: {
      get: function() {
        return this.b;
      },
      configurable: true
    },
    A: {
      get: function() {
        return this.a;
      },
      configurable: true
    },
    ARR: {
      get: function() {
        return this.toArray();
      },
      configurable: true
    },
    CSS: {
      get: function() {
        return this.toCSS();
      },
      configurable: true
    },
    HEX: {
      get: function() {
        return this.toHex();
      },
      configurable: true
    }
  });
  Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));
  Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));
  Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));
  Color.AddConstantColor('RED', new Color(255, 0, 0, 255));
  Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));
  Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));
  Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));
  Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));
  Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));
  Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));
  //DevLog
  //------------------------------------------------------------------------------
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix) {
      this.prefix = prefix;
      this.prefix = SDK.check(this.prefix, "");
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  BitmapSrc = (function() {
    //BitmapSrc
    //------------------------------------------------------------------------------
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          pw = Window_Base._iconWidth;
          ph = Window_Base._iconHeight;
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //ParametersManager
  //------------------------------------------------------------------------------
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] !== void 0;
  };
  ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

  };
  //StringsLoader
  //------------------------------------------------------------------------------
  StringsLoader = class StringsLoader {
    constructor(_parameters) {
      this._parameters = _parameters;
    }

    loadAllStringsToObject(object) {
      var strings;
      strings = this._collect(object);
      this._writeNewString(object, strings);
    }

    _collect(object) {
      var properties, strings;
      properties = Object.getOwnPropertyNames(object);
      strings = properties.filter(function(item) {
        return item.includes("STRING_");
      });
      return strings;
    }

    _writeNewString(object, strings) {
      var j, len, string;
      for (j = 0, len = strings.length; j < len; j++) {
        string = strings[j];
        this._setStringFromPluginParametersToObject(object, string);
      }
    }

    _setStringFromPluginParametersToObject(object, stringName) {
      var newValue;
      newValue = this._parameters[stringName];
      if (newValue) {
        object[stringName] = newValue;
      }
    }

  };
  //EXTENSION TO GLOBAL
  //------------------------------------------------------------------------------
  KDCore.SDK = SDK;
  KDCore.Color = Color;
  KDCore.DevLog = DevLog;
  KDCore.BitmapSrc = BitmapSrc;
  KDCore.ParametersManager = ParametersManager;
  KDCore.StringsLoader = StringsLoader;
})();

// ■ END KDCore.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DevExt.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var __tObject;

(function() {
  var __TMP_LOG__;
  __TMP_LOG__ = null;
  String.prototype.LOG = function() {
    if (__TMP_LOG__ === null) {
      __TMP_LOG__ = new KDCore.DevLog("TMP");
      __TMP_LOG__.setColors(Color.WHITE, Color.BLACK.getLightestColor(20));
    }
    __TMP_LOG__.p(this);
  };
  Number.prototype.LOG = function() {
    return this.toString().LOG();
  };
  Array.prototype.LOG = function() {
    return this.toString().LOG();
  };
  Boolean.prototype.LOG = function() {
    return this.toString().LOG();
  };
  String.prototype.P = function() {
    return this.LOG();
  };
  String.prototype.p = function(additionText) {
    var str;
    if (additionText != null) {
      str = this + " : " + additionText;
      return str.LOG();
    } else {
      return this.LOG();
    }
  };
})();

__tObject = null;

// ■ END DevExt.coffee
//---------------------------------------------------------------------------

//==========================================================================================================================================================
// JSPlatform
//==========================================================================================================================================================
var PLATFORM = PLATFORM || {};

if (!PLATFORM.Version) {
  (function ($) {
    $.Version = 150;
    $.VersionString = '1.5L';

    "use strict";

    //==============================================================================
    //Расширение стандартных классов MV
    //==============================================================================

    //TouchInput
    //------------------------------------------------------------------------------
    var _JSPlatform_3442_TouchInput_onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function (event) {
      _JSPlatform_3442_TouchInput_onMouseMove.call(this, event);
      if (!this._mousePressed) {
        this.mX = Graphics.pageToCanvasX(event.pageX);
        this.mY = Graphics.pageToCanvasY(event.pageY);
      } else {
        this.mX = this._x;
        this.mY = this._y;
      }
    };
    //END TouchInput
    //------------------------------------------------------------------------------

    //SDK EXTENSIONS
    //------------------------------------------------------------------------------

    KDCore.SDK.smartRand = function (n, s, r) { //1.2
      n = SDK.check(n, 1);
      s = SDK.check(s, 0);
      r = SDK.check(r, true);
      if (r)
        return Math.round((Math.random() * n) - s);
      else
        return (Math.random() * n) - s;
    };

    KDCore.SDK.toCX = function (width, sourceWidth) {
      sourceWidth = SDK.check(sourceWidth, Graphics.width);
      return ((sourceWidth / 2) - (width / 2));
    };

    /**
     * Корректировка округления десятичных дробей.
     * (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
     *
     * @param {String}  type  Тип корректировки.
     * @param {Number}  value Число.
     * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
     * @returns {Number} Скорректированное значение.
     */
    KDCore.SDK.decimalAdjust = function (type, value, exp) {
      // Если степень не определена, либо равна нулю...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Сдвиг разрядов
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Обратный сдвиг
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    };

    KDCore.SDK.applyInterface = function (targetClass, interfacex) {
      for (var i in interfacex) {
        if (interfacex.hasOwnProperty(i)) {
          targetClass.prototype[i] = interfacex[i];
        }
      }
    };
    //END SDK
    //------------------------------------------------------------------------------



    //==============================================================================
    //Общие настройки
    //==============================================================================
    //Настройка версий
    $.Versions = {};

    //Расширение
    $.extendMe = function (obj) {
      obj.Color = KDCore.Color;
      obj.SDK = KDCore.SDK;
      obj.DevLog = KDCore.DevLog;
    }

    $.extendMe($);

  })(PLATFORM);
  //------------------------------------------------------------------------------

}

var SDK = KDCore.SDK;
var Color = KDCore.Color;
/*!
 * pixi-filters - v2.6.1
 * Compiled Thu, 03 May 2018 14:20:43 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters=function(e,t){"use strict";var n="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",r="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",o=function(e){function t(t){e.call(this,n,r),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t}(t.Filter),i=n,l="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",s="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",a=function(e){function n(n,r,o){void 0===n&&(n=4),void 0===r&&(r=3),void 0===o&&(o=!1),e.call(this,i,o?s:l),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new t.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(n)?this.kernels=n:(this._blur=n,this.quality=r)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o,i=this.pixelSize.x/t.size.width,l=this.pixelSize.y/t.size.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var s,a=e.getRenderTarget(!0),u=t,c=a,f=this._quality-1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,c,!0),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnRenderTarget(a)}},n.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,o=e/t,i=1;i<t;i++)r-=o,n.push(r);this._kernels=n},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(n.prototype,r),n}(t.Filter),u=n,c="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",f=function(e){function t(t){void 0===t&&(t=.5),e.call(this,u,c),this.threshold=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={threshold:{configurable:!0}};return n.threshold.get=function(){return this.uniforms.threshold},n.threshold.set=function(e){this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}(t.Filter),h="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",p=function(e){function n(n){e.call(this,u,h),"number"==typeof n&&(n={threshold:n}),n=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:t.settings.RESOLUTION},n),this.bloomScale=n.bloomScale,this.brightness=n.brightness;var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._extractFilter=new f(n.threshold),this._extractFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r,o){var i=e.getRenderTarget(!0);this._extractFilter.apply(e,t,i,!0,o);var l=e.getRenderTarget(!0);this._blurFilter.apply(e,i,l,!0,o),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,t,n,r),e.returnRenderTarget(l),e.returnRenderTarget(i)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.threshold.get=function(){return this._extractFilter.threshold},r.threshold.set=function(e){this._extractFilter.threshold=e},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),d=n,m="varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}",g=function(e){function t(t){void 0===t&&(t=8),e.call(this,d,m),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.pixelSize},n.size.set=function(e){this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),v=n,x="precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",y=function(e){function n(t){void 0===t&&(t={}),e.call(this,v,x),this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.thickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={rotation:{configurable:!0},thickness:{configurable:!0},lightColor:{configurable:!0},lightAlpha:{configurable:!0},shadowColor:{configurable:!0},shadowAlpha:{configurable:!0}};return n.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return this._angle/t.DEG_TO_RAD},r.rotation.set=function(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function(){return this._thickness},r.thickness.set=function(e){this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return t.utils.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return this.uniforms.lightAlpha},r.lightAlpha.set=function(e){this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return t.utils.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e){t.utils.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e){this.uniforms.shadowAlpha=e},Object.defineProperties(n.prototype,r),n}(t.Filter),_=t.filters,b=_.BlurXFilter,C=_.BlurYFilter,S=_.AlphaFilter,F=function(e){function n(n,r,o,i){var l,s;void 0===n&&(n=2),void 0===r&&(r=4),void 0===o&&(o=t.settings.RESOLUTION),void 0===i&&(i=5),e.call(this),"number"==typeof n?(l=n,s=n):n instanceof t.Point?(l=n.x,s=n.y):Array.isArray(n)&&(l=n[0],s=n[1]),this.blurXFilter=new b(l,r,o,i),this.blurYFilter=new C(s,r,o,i),this.blurYFilter.blendMode=t.BLEND_MODES.SCREEN,this.defaultFilter=new S}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},blurX:{configurable:!0},blurY:{configurable:!0}};return n.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r),this.blurYFilter.apply(e,r,n),e.returnRenderTarget(r)},r.blur.get=function(){return this.blurXFilter.blur},r.blur.set=function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},r.blurX.get=function(){return this.blurXFilter.blur},r.blurX.set=function(e){this.blurXFilter.blur=e},r.blurY.get=function(){return this.blurYFilter.blur},r.blurY.set=function(e){this.blurYFilter.blur=e},Object.defineProperties(n.prototype,r),n}(t.Filter),z=n,A="uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",w=function(e){function t(t,n,r){e.call(this,z,A),this.uniforms.dimensions=new Float32Array(2),this.center=t||[.5,.5],this.radius=n||100,this.strength=r||1}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={radius:{configurable:!0},strength:{configurable:!0},center:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}(t.Filter),T=n,D="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform sampler2D colorMap;\n\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    float sliceIndex = color.b * (_size - 1.0);\n    float zSlice0 = floor(sliceIndex);\n    float zSlice1 = ceil(sliceIndex);\n\n    float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n    float s0 = xOffset + zSlice0 * _sliceSize;\n    float s1 = xOffset + zSlice1 * _sliceSize;\n    vec4 slice0Color = texture2D(colorMap, vec2(s0, color.g));\n    vec4 slice1Color = texture2D(colorMap, vec2(s1, color.g));\n    vec4 adjusted = mix(slice0Color, slice1Color, fract(sliceIndex));\n\n    gl_FragColor = mix(color, adjusted, _mix);\n}\n",O=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=1),e.call(this,T,D),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.colorMap=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={colorSize:{configurable:!0},colorMap:{configurable:!0},nearest:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function(){return this._size},r.colorMap.get=function(){return this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||(e=t.Texture.from(e)),e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?t.SCALE_MODES.NEAREST:t.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=!1,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},n.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.prototype.destroy=function(t){this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.defineProperties(n.prototype,r),n}(t.Filter),P=n,M="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",R=function(e){function n(t,n,r){void 0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,P,M),this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:{configurable:!0}};return r.originalColor.set=function(e){var n=this.uniforms.originalColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=t.utils.rgb2hex(n))},r.originalColor.get=function(){return this._originalColor},r.newColor.set=function(e){var n=this.uniforms.newColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=t.utils.rgb2hex(n))},r.newColor.get=function(){return this._newColor},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),j=n,L="precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",k=function(e){function t(t,n,r){e.call(this,j,L),this.uniforms.texelSize=new Float32Array(9),this.matrix=t,this.width=n,this.height=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){this.uniforms.matrix=new Float32Array(e)},n.width.get=function(){return 1/this.uniforms.texelSize[0]},n.width.set=function(e){this.uniforms.texelSize[0]=1/e},n.height.get=function(){return 1/this.uniforms.texelSize[1]},n.height.set=function(e){this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}(t.Filter),I=n,E="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",B=function(e){function t(){e.call(this,I,E)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(t.Filter),X=n,q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",N=function(e){function t(t){e.call(this,X,q),this.uniforms.dimensions=new Float32Array(2),this.time=0,this.seed=0,Object.assign(this,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.curvature.set=function(e){this.uniforms.curvature=e},n.curvature.get=function(){return this.uniforms.curvature},n.lineWidth.set=function(e){this.uniforms.lineWidth=e},n.lineWidth.get=function(){return this.uniforms.lineWidth},n.lineContrast.set=function(e){this.uniforms.lineContrast=e},n.lineContrast.get=function(){return this.uniforms.lineContrast},n.verticalLine.set=function(e){this.uniforms.verticalLine=e},n.verticalLine.get=function(){return this.uniforms.verticalLine},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),G=n,K="precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",Y=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&(n=5),e.call(this,G,K),this.scale=t,this.angle=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={scale:{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return this.uniforms.scale},n.scale.set=function(e){this.uniforms.scale=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),W=n,Q="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n\n    // Un-premultiply alpha before applying the color\n    if (sample.a > 0.0) {\n        sample.rgb /= sample.a;\n    }\n\n    // Premultiply alpha again\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",U=function(e){function n(n){n&&n.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),n={rotation:n},void 0!==arguments[1]&&(n.distance=arguments[1]),void 0!==arguments[2]&&(n.blur=arguments[2]),void 0!==arguments[3]&&(n.color=arguments[3]),void 0!==arguments[4]&&(n.alpha=arguments[4])),n=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:t.settings.RESOLUTION},n),e.call(this);var r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._tintFilter=new t.Filter(W,Q),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.resolution=s,this._blurFilter=r?new a(r):new a(o,i),this.pixelSize=l,this.resolution=s,this.targetTransform=new t.Matrix;var u=n.shadowOnly,c=n.rotation,f=n.distance,h=n.alpha,p=n.color;this.shadowOnly=u,this.rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=e.getRenderTarget();o.transform=this.targetTransform,this._tintFilter.apply(e,t,o,!0),o.transform=null,this._blurFilter.apply(e,o,n),!0!==this.shadowOnly&&e.applyFilter(this,t,n,r),e.returnRenderTarget(o)},n.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},n.prototype._updateTargetTransform=function(){this.targetTransform.tx=this.distance*Math.cos(this.angle),this.targetTransform.ty=this.distance*Math.sin(this.angle)},r.resolution.get=function(){return this._resolution},r.resolution.set=function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},r.distance.get=function(){return this._distance},r.distance.set=function(e){this._distance=e,this._updatePadding(),this._updateTargetTransform()},r.rotation.get=function(){return this.angle/t.DEG_TO_RAD},r.rotation.set=function(e){this.angle=e*t.DEG_TO_RAD,this._updateTargetTransform()},r.alpha.get=function(){return this._tintFilter.uniforms.alpha},r.alpha.set=function(e){this._tintFilter.uniforms.alpha=e},r.color.get=function(){return t.utils.rgb2hex(this._tintFilter.uniforms.color)},r.color.set=function(e){t.utils.hex2rgb(e,this._tintFilter.uniforms.color)},r.kernels.get=function(){return this._blurFilter.kernels},r.kernels.set=function(e){this._blurFilter.kernels=e},r.blur.get=function(){return this._blurFilter.blur},r.blur.set=function(e){this._blurFilter.blur=e,this._updatePadding()},r.quality.get=function(){return this._blurFilter.quality},r.quality.set=function(e){this._blurFilter.quality=e},r.pixelSize.get=function(){return this._blurFilter.pixelSize},r.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Z=n,V="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",H=function(e){function t(t){void 0===t&&(t=5),e.call(this,Z,V),this.strength=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={strength:{configurable:!0}};return n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}(t.Filter),$=n,J="// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",ee=function(e){function n(n){void 0===n&&(n={}),e.call(this,$,J),this.uniforms.dimensions=new Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.green=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.average=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.fromCanvas(this._canvas,t.SCALE_MODES.NEAREST),this._slices=0,this.slices=n.slices}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={sizes:{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame.width,i=t.sourceFrame.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},n.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*(1-.6*Math.random()),r);e[l]=a,i-=a}e[t]=i}else{for(var u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);e[f]=h,u-=h}e[t]=u}this.shuffle()},n.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},n.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},n.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},n.prototype.redraw=function(){var e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*t,s=e>0?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0, 1)",r.fillRect(0,o>>0,t,l+1>>0),o+=l}n.baseTexture.emit("update",n.baseTexture),this.uniforms.displacementMap=n},r.sizes.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},r.sizes.get=function(){return this._sizes},r.offsets.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},r.offsets.get=function(){return this._offsets},r.slices.get=function(){return this._slices},r.slices.set=function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},r.direction.get=function(){return this._direction},r.direction.set=function(e){if(this._direction!==e){this._direction=e;var n=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},r.red.get=function(){return this.uniforms.red},r.red.set=function(e){this.uniforms.red=e},r.green.get=function(){return this.uniforms.green},r.green.set=function(e){this.uniforms.green=e},r.blue.get=function(){return this.uniforms.blue},r.blue.set=function(e){this.uniforms.blue=e},n.prototype.destroy=function(){this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.green=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(n.prototype,r),n}(t.Filter);ee.TRANSPARENT=0,ee.ORIGINAL=1,ee.LOOP=2,ee.CLAMP=3,ee.MIRROR=4;var te=n,ne="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nconst float PI = 3.14159265358979323846264;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n",re=function(e){function n(t,n,r,o,i){void 0===t&&(t=10),void 0===n&&(n=4),void 0===r&&(r=0),void 0===o&&(o=16777215),void 0===i&&(i=.1),e.call(this,te,ne.replace(/%QUALITY_DIST%/gi,""+(1/i/t).toFixed(7)).replace(/%DIST%/gi,""+t.toFixed(7))),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.distance=t,this.color=o,this.outerStrength=n,this.innerStrength=r}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0},distance:{configurable:!0},outerStrength:{configurable:!0},innerStrength:{configurable:!0}};return r.color.get=function(){return t.utils.rgb2hex(this.uniforms.glowColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.glowColor)},r.distance.get=function(){return this.uniforms.distance},r.distance.set=function(e){this.uniforms.distance=e},r.outerStrength.get=function(){return this.uniforms.outerStrength},r.outerStrength.set=function(e){this.uniforms.outerStrength=e},r.innerStrength.get=function(){return this.uniforms.innerStrength},r.innerStrength.set=function(e){this.uniforms.innerStrength=e},Object.defineProperties(n.prototype,r),n}(t.Filter),oe=n,ie="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",le="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",se=function(e){function n(n){e.call(this,oe,le.replace("${perlin}",ie)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof n&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"),n={angle:n},void 0!==arguments[1]&&(n.gain=arguments[1]),void 0!==arguments[2]&&(n.lacunarity=arguments[2]),void 0!==arguments[3]&&(n.time=arguments[3])),n=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0]},n),this._angleLight=new t.Point,this.angle=n.angle,this.gain=n.gain,this.lacunarity=n.lacunarity,this.parallel=n.parallel,this.center=n.center,this.time=n.time}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=t.sourceFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return this._angle},r.angle.set=function(e){this._angle=e;var n=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e){this.uniforms.gain=e},r.lacunarity.get=function(){return this.uniforms.lacunarity},r.lacunarity.set=function(e){this.uniforms.lacunarity=e},Object.defineProperties(n.prototype,r),n}(t.Filter),ae=n,ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",ce=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0),e.call(this,ae,ue),this.uniforms.uVelocity=new Float32Array(2),this._velocity=new t.ObservablePoint(this.velocityChanged,this),this.velocity=n,this.kernelSize=r,this.offset=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={velocity:{configurable:!0},offset:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e){Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof t.Point||e instanceof t.ObservablePoint)&&this._velocity.copy(e)},r.velocity.get=function(){return this._velocity},n.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function(){return this.uniforms.uOffset},Object.defineProperties(n.prototype,r),n}(t.Filter),fe=n,he="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",pe=function(e){function n(t,n,r){void 0===n&&(n=.05),void 0===r&&(r=null),r=r||t.length,e.call(this,fe,he.replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacements=null,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={replacements:{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return r.replacements.set=function(e){var n=this.uniforms.originalColors,r=this.uniforms.targetColors,o=e.length;if(o>this._maxColors)throw"Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")";n[3*o]=-1;for(var i=0;i<o;i++){var l=e[i],s=l[0];"number"==typeof s?s=t.utils.hex2rgb(s):l[0]=t.utils.rgb2hex(s),n[3*i]=s[0],n[3*i+1]=s[1],n[3*i+2]=s[2];var a=l[1];"number"==typeof a?a=t.utils.hex2rgb(a):l[1]=t.utils.rgb2hex(a),r[3*i]=a[0],r[3*i+1]=a[1],r[3*i+2]=a[2]}this._replacements=e},r.replacements.get=function(){return this._replacements},n.prototype.refresh=function(){this.replacements=this._replacements},r.maxColors.get=function(){return this._maxColors},r.epsilon.set=function(e){this.uniforms.epsilon=e},r.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}(t.Filter),de=n,me="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",ge=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,de,me),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(this.seed=t,t=null):this.seed=n,Object.assign(this,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={sepia:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=function(e){this.uniforms.sepia=e},n.sepia.get=function(){return this.uniforms.sepia},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.scratch.set=function(e){this.uniforms.scratch=e},n.scratch.get=function(){return this.uniforms.scratch},n.scratchDensity.set=function(e){this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return this.uniforms.scratchDensity},n.scratchWidth.set=function(e){this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return this.uniforms.scratchWidth},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),ve=n,xe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",ye=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=Math.max(o*n.MAX_SAMPLES,n.MIN_SAMPLES),l=(2*Math.PI/i).toFixed(7);e.call(this,ve,xe.replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new Float32Array([0,0]),this.thickness=t,this.uniforms.outlineColor=new Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={color:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this.thickness/t.size.width,this.uniforms.thickness[1]=this.thickness/t.size.height,e.applyFilter(this,t,n,r)},r.color.get=function(){return t.utils.rgb2hex(this.uniforms.outlineColor)},r.color.set=function(e){t.utils.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(n.prototype,r),n}(t.Filter);ye.MIN_SAMPLES=1,ye.MAX_SAMPLES=100;var _e=n,be="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",Ce=function(e){function t(t){void 0===t&&(t=10),e.call(this,_e,be),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Se=n,Fe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",ze=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,Se,Fe),this._angle=0,this.angle=t,this.center=n,this.kernelSize=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={angle:{configurable:!0},center:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return this._angle},n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ae=n,we="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",Te=function(e){function t(t){e.call(this,Ae,we),this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={mirror:{configurable:!0},boundary:{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=function(e){this.uniforms.mirror=e},n.mirror.get=function(){return this.uniforms.mirror},n.boundary.set=function(e){this.uniforms.boundary=e},n.boundary.get=function(){return this.uniforms.boundary},n.amplitude.set=function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=function(){return this.uniforms.amplitude},n.waveLength.set=function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get=function(){return this.uniforms.waveLength},n.alpha.set=function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function(){return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}(t.Filter),De=n,Oe="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",Pe=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=[0,10]),void 0===r&&(r=[0,0]),e.call(this,De,Oe),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.red.get=function(){return this.uniforms.red},n.red.set=function(e){this.uniforms.red=e},n.green.get=function(){return this.uniforms.green},n.green.set=function(e){this.uniforms.green=e},n.blue.get=function(){return this.uniforms.blue},n.blue.set=function(e){this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Me=n,Re="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",je=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n={}),void 0===r&&(r=0),e.call(this,Me,Re),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."),n={}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightness,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},amplitude:{configurable:!0},wavelength:{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},n.amplitude.get=function(){return this.uniforms.amplitude},n.amplitude.set=function(e){this.uniforms.amplitude=e},n.wavelength.get=function(){return this.uniforms.wavelength},n.wavelength.set=function(e){this.uniforms.wavelength=e},n.brightness.get=function(){return this.uniforms.brightness},n.brightness.set=function(e){this.uniforms.brightness=e},n.speed.get=function(){return this.uniforms.speed},n.speed.set=function(e){this.uniforms.speed=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Le=n,ke="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",Ie=function(e){function n(t,n,r){void 0===n&&(n=0),void 0===r&&(r=1),e.call(this,Le,ke),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourceFrame.height,e.applyFilter(this,t,n,r)},r.texture.get=function(){return this.uniforms.uLightmap},r.texture.set=function(e){this.uniforms.uLightmap=e},r.color.set=function(e){var n=this.uniforms.ambientColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=t.utils.rgb2hex(n))},r.color.get=function(){return this._color},r.alpha.get=function(){return this.uniforms.ambientColor[3]},r.alpha.set=function(e){this.uniforms.ambientColor[3]=e},Object.defineProperties(n.prototype,r),n}(t.Filter),Ee=n,Be="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Xe=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,Ee,Be),this.uniforms.blur=n,this.uniforms.gradientBlur=r,this.uniforms.start=o||new t.Point(0,window.innerHeight/2),this.uniforms.end=i||new t.Point(600,window.innerHeight/2),this.uniforms.delta=new t.Point(30,30),this.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),this.updateDelta()}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return n.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return this.uniforms.blur},r.blur.set=function(e){this.uniforms.blur=e},r.gradientBlur.get=function(){return this.uniforms.gradientBlur},r.gradientBlur.set=function(e){this.uniforms.gradientBlur=e},r.start.get=function(){return this.uniforms.start},r.start.set=function(e){this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return this.uniforms.end},r.end.set=function(e){this.uniforms.end=e,this.updateDelta()},Object.defineProperties(n.prototype,r),n}(t.Filter),qe=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(Xe),Ne=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(Xe),Ge=function(e){function t(t,n,r,o){void 0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&(o=null),e.call(this),this.tiltShiftXFilter=new qe(t,n,r,o),this.tiltShiftYFilter=new Ne(t,n,r,o)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getRenderTarget(!0);this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.apply(e,r,n),e.returnRenderTarget(r)},n.blur.get=function(){return this.tiltShiftXFilter.blur},n.blur.set=function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=function(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.get=function(){return this.tiltShiftXFilter.start},n.start.set=function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function(){return this.tiltShiftXFilter.end},n.end.set=function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ke=n,Ye="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",We=function(e){function t(t,n,r){void 0===t&&(t=200),void 0===n&&(n=4),void 0===r&&(r=20),e.call(this,Ke,Ye),this.radius=t,this.angle=n,this.padding=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e){this.uniforms.offset=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Qe=n,Ue="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\nfloat random(vec3 scale, float seed) {\n    // use the fragment position for a different seed per-pixel\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ze=function(e){function t(t,n,r,o){void 0===t&&(t=.1),void 0===n&&(n=[0,0]),void 0===r&&(r=0),void 0===o&&(o=-1),e.call(this,Qe,Ue),this.center=n,this.strength=t,this.innerRadius=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},strength:{configurable:!0},innerRadius:{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.strength.get=function(){return this.uniforms.uStrength},n.strength.set=function(e){this.uniforms.uStrength=e},n.innerRadius.get=function(){return this.uniforms.uInnerRadius},n.innerRadius.set=function(e){this.uniforms.uInnerRadius=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter);return e.AdjustmentFilter=o,e.AdvancedBloomFilter=p,e.AsciiFilter=g,e.BevelFilter=y,e.BloomFilter=F,e.BulgePinchFilter=w,e.ColorMapFilter=O,e.ColorReplaceFilter=R,e.ConvolutionFilter=k,e.CrossHatchFilter=B,e.CRTFilter=N,e.DotFilter=Y,e.DropShadowFilter=U,e.EmbossFilter=H,e.GlitchFilter=ee,e.GlowFilter=re,e.GodrayFilter=se,e.KawaseBlurFilter=a,e.MotionBlurFilter=ce,e.MultiColorReplaceFilter=pe,e.OldFilmFilter=ge,e.OutlineFilter=ye,e.PixelateFilter=Ce,e.RadialBlurFilter=ze,e.ReflectionFilter=Te,e.RGBSplitFilter=Pe,e.ShockwaveFilter=je,e.SimpleLightmapFilter=Ie,e.TiltShiftFilter=Ge,e.TiltShiftAxisFilter=Xe,e.TiltShiftXFilter=qe,e.TiltShiftYFilter=Ne,e.TwistFilter=We,e.ZoomBlurFilter=Ze,e}({},PIXI);Object.assign(PIXI.filters,this?this.__filters:__filters);
//# sourceMappingURL=pixi-filters.js.map

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ABS_Input.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var DefaultKeyConfig, IKey, KEYS_GAME, KEYS_RAW, UNSAFE, alias_atbs_input_onKeyDown, alias_atbs_input_onKeyUp, i, j, k, l;
  //?[FROM ATBS]
  DefaultKeyConfig = ['w', 'd', 's', 'a', 'e', 'q', 'w', 'd', 's', 'a', '1', '2', '3', '4', '5', '6', '7', '8', 'r'];
  UNSAFE = ['q', 'w', 'x', 'z', 'space'];
  KEYS_RAW = [];
  KEYS_GAME = [];
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  alias_atbs_input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    alias_atbs_input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  Input._setStateWithMapperPKD = function(keyCode, state) {
    var symbol;
    state = SDK.check(state, true);
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      this._currentState[symbol] = state;
    }
  };
  alias_atbs_input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    alias_atbs_input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  Input.isCancel = function() {
    if (Input.isGamepad()) {
      return Input.isTriggered('pageup'); //LB
    } else {
      return Input.isTriggered('cancel') || TouchInput.isCancelled();
    }
  };
  IKey = function() {
    throw new Error('This is a static class');
  };
  IKey.CP_W = function() {
    return KEYS_GAME[0];
  };
  IKey.CP_D = function() {
    return KEYS_GAME[1];
  };
  IKey.CP_S = function() {
    return KEYS_GAME[2];
  };
  IKey.CP_A = function() {
    return KEYS_GAME[3];
  };
  IKey.WC = function() {
    return KEYS_GAME[4];
  };
  IKey.TS = function() {
    return KEYS_GAME[5];
  };
  IKey.SC_W = function() {
    return KEYS_GAME[6];
  };
  IKey.SC_D = function() {
    return KEYS_GAME[7];
  };
  IKey.SC_S = function() {
    return KEYS_GAME[8];
  };
  IKey.SC_A = function() {
    return KEYS_GAME[9];
  };
  IKey.SP_1 = function() {
    return KEYS_GAME[10];
  };
  IKey.SP_2 = function() {
    return KEYS_GAME[11];
  };
  IKey.SP_3 = function() {
    return KEYS_GAME[12];
  };
  IKey.SP_4 = function() {
    return KEYS_GAME[13];
  };
  IKey.SP_5 = function() {
    return KEYS_GAME[14];
  };
  IKey.SP_6 = function() {
    return KEYS_GAME[15];
  };
  IKey.SP_7 = function() {
    return KEYS_GAME[16];
  };
  IKey.SP_8 = function() {
    return KEYS_GAME[17];
  };
  IKey.WR = function() {
    return KEYS_GAME[18];
  };
  IKey.loadDefaultKeyConfig = function() {
    return this.loadKeyConfig(DefaultKeyConfig.slice(0)); //Clone
  };
  IKey.loadKeyConfig = function(keyBindingsArray) {
    var m, ref;
    KEYS_RAW = keyBindingsArray;
    for (i = m = 0, ref = KEYS_RAW.length; (0 <= ref ? m < ref : m > ref); i = 0 <= ref ? ++m : --m) {
      if (KEYS_RAW[i] != null) {
        KEYS_GAME[i] = IKey.convertUnsafeSymbols(KEYS_RAW[i]);
      }
    }
  };
  IKey.convertUnsafeSymbols = function(symbol) {
    symbol = symbol.toLowerCase();
    if (!UNSAFE.include(symbol)) {
      return symbol;
    }
    if (symbol === 'q') {
      return 'pageup';
    }
    if (symbol === 'w') {
      return 'pagedown';
    }
    if (symbol === 'x') {
      return 'escape';
    }
    if (symbol === 'z') {
      return 'ok';
    }
    if (symbol === 'space') {
      return 'ok';
    }
  };
  IKey.convertIKeyToLetter = function(symbol) {
    if (symbol === IKey.CP_W()) {
      return KEYS_RAW[0];
    }
    if (symbol === IKey.CP_D()) {
      return KEYS_RAW[1];
    }
    if (symbol === IKey.CP_S()) {
      return KEYS_RAW[2];
    }
    if (symbol === IKey.CP_A()) {
      return KEYS_RAW[3];
    }
    if (symbol === IKey.WC()) {
      return KEYS_RAW[4];
    }
    if (symbol === IKey.TS()) {
      return KEYS_RAW[5];
    }
    if (symbol === IKey.SC_W()) {
      return KEYS_RAW[6];
    }
    if (symbol === IKey.SC_D()) {
      return KEYS_RAW[7];
    }
    if (symbol === IKey.SC_S()) {
      return KEYS_RAW[8];
    }
    if (symbol === IKey.SC_A()) {
      return KEYS_RAW[9];
    }
    if (symbol === IKey.SP_1()) {
      return KEYS_RAW[10];
    }
    if (symbol === IKey.SP_2()) {
      return KEYS_RAW[11];
    }
    if (symbol === IKey.SP_3()) {
      return KEYS_RAW[12];
    }
    if (symbol === IKey.SP_4()) {
      return KEYS_RAW[13];
    }
    if (symbol === IKey.SP_5()) {
      return KEYS_RAW[14];
    }
    if (symbol === IKey.SP_6()) {
      return KEYS_RAW[15];
    }
    if (symbol === IKey.SP_7()) {
      return KEYS_RAW[16];
    }
    if (symbol === IKey.SP_8()) {
      return KEYS_RAW[17];
    }
    if (symbol === IKey.WR()) {
      return KEYS_RAW[18];
    }
    return "";
  };
  IKey.isTriggeredWeapCircleIndex = function() {
    if (Input.isTriggered(IKey.SC_W())) {
      return 0;
    }
    if (Input.isTriggered(IKey.SC_D())) {
      return 1;
    }
    if (Input.isTriggered(IKey.SC_S())) {
      return 2;
    }
    if (Input.isTriggered(IKey.SC_A())) {
      return 3;
    }
    return null;
  };
  IKey.isTriggeredSkillPanelIndex = function() {
    if (Input.isTriggered(IKey.SP_1())) {
      return 1;
    }
    if (Input.isTriggered(IKey.SP_2())) {
      return 2;
    }
    if (Input.isTriggered(IKey.SP_3())) {
      return 3;
    }
    if (Input.isTriggered(IKey.SP_4())) {
      return 4;
    }
    if (Input.isTriggered(IKey.SP_5())) {
      return 5;
    }
    if (Input.isTriggered(IKey.SP_6())) {
      return 6;
    }
    if (Input.isTriggered(IKey.SP_7())) {
      return 7;
    }
    if (Input.isTriggered(IKey.SP_8())) {
      return 8;
    }
    return null;
  };
  IKey.getGameRawKeys = function() {
    return KEYS_RAW;
  };
  IKey.getGameKeyByIndex = function(index) {
    return KEYS_GAME[index];
  };
  IKey.changeRawKey = function(index, key) {
    KEYS_RAW[index] = key;
    return KEYS_GAME[index] = this.convertUnsafeSymbols(key);
  };
  AlphaABS.register(IKey);
  AlphaABS.LIBS.IKey = IKey;
})();

// ■ END ABS_Input.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ System.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////

AlphaABS.SYSTEM = {};
var LOGW = new PLATFORM.DevLog("Alpha ABS");
LOGW.on();
LOGW.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));

(function ($) {
  $.EXTENSIONS = {};

  var SDK = PLATFORM.SDK;
  SDK.setConstant($, 'FRAMES_PER_SECOND', 60);
  SDK.setConstant($, 'FONT', 'VL-Gothic-Regular'); //TODO: ЭТО НАДО В ПАРАМЕТРЫ

  $.LOGW = LOGW;

  $.STRING_ALERT_NEEDTARGET = 'Need target';
  $.STRING_ALERT_TOFAR = 'Target too far';
  $.STRING_ALERT_INTERRUPT = 'Action interrupt';
  $.STRING_ALERT_NOAUTOA = "Can't use attack now";
  $.STRING_ALERT_NOUSE = "Can't use action now";
  $.STRING_ALERT_NOCHARGES = "Can't use, no charges";
  $.STRING_ALERT_RECHARGE = 'Action is not ready';
  $.STRING_ALERT_CASTMOVE = "Can't use while moving";
  $.STRING_ALERT_NOINBATTLE = "Need get out of the battle";
  $.STRING_ALERT_NEWLEVEL = "Level up!";

  $.STRING_POPUP_EVADE = 'Evade';
  $.STRING_POPUP_MISS = 'Miss';
  $.STRING_POPUP_FAIL = 'Fail';
  $.STRING_POPUP_ABSORB = 'Absorb';
  $.STRING_POPUP_IMMUNE = 'Immune';
  $.STRING_POPUP_WEAK = 'Weak';
  $.STRING_POPUP_SKILL = 'Ready!';

  $.STRING_MENU_UIVIS = 'Show UI';
  $.STRING_MENU_UIPOS = 'Edit UI';
  $.STRING_MENU_KEYBIND = 'Controls';

  $.STRING_MENU_KB_KEY = 'Press any key';
  $.STRING_MENU_KB_TAB = 'Target select';
  $.STRING_MENU_KB_SKILLS = 'Skills panel';
  $.STRING_MENU_KB_CONTRL = 'Сontrol panel';
  $.STRING_MENU_KB_WEAPON = 'Weapon circle';
  $.STRING_MENU_KB_DEF = 'Reset to default';
  $.STRING_MENU_KB_BACK = 'Back';
  $.STRING_MENU_KB_SLOT = 'Item';
  $.STRING_MENU_KB_ATTACK = 'Attack';
  $.STRING_MENU_KB_FOLLOW = 'Follow';
  $.STRING_MENU_KB_JUMP = 'Jump';
  $.STRING_MENU_KB_ROTATE = 'Rotate';
  $.STRING_MENU_KB_LEFT = 'Left';
  $.STRING_MENU_KB_RIGHT = 'Right';
  $.STRING_MENU_KB_BOTTOM = 'Bottom';
  $.STRING_MENU_KB_TOP = 'Top';
  $.STRING_MENU_KB_WEAP = 'Weapons';

  $.STRING_SKILL_INFO_RADIUS = 'Radius: ';
  $.STRING_SKILL_INFO_RANGE = 'Range: ';
  $.STRING_SKILL_INFO_RANGE2 = 'Range: ';
  $.STRING_SKILL_INFO_CAST = 'Cast: ';
  $.STRING_SKILL_INFO_COOLDOWN = 'Cooldown: ';
  $.STRING_SKILL_INFO_DESCRIPTION = 'Description';
  $.STRING_SKILL_INFO_HAS = 'Has: ';
  $.STRING_SKILL_INFO_USE = 'Use: ';
  $.STRING_SKILL_INFO_CHARGES = 'Charges: ';
  $.STRING_SKILL_INFO_RELOADCHR = 'Reload charges: ';
  $.STRING_SKILL_INFO_ONTARGET = 'Need target';
  $.STRING_SKILL_INFO_ONUSER = 'On user';
  $.STRING_SKILL_INFO_AREA = 'Area select';
  $.STRING_SKILL_INFO_CIRCLE = 'Around user';
  $.STRING_SKILL_INFO_ZONE = 'Zone';
  $.STRING_SKILL_INFO_SEC = ' sec.';
  $.STRING_SKILL_INFO_TARGET = '<target>';
  $.STRING_SKILL_INFO_DAMAGE = 'Damage ';
  $.STRING_SKILL_INFO_RECOVER = 'Recover ';
  $.STRING_SKILL_INFO_DRAIN = 'Drain ';
  $.STRING_SKILL_INFO_MELEE = 'Melee ';
  $.STRING_SKILL_INFO_REPEATS = 'Multi Hits: ';


  $.STRING_WARNING_COMMON = "This command can't be executed on ABS map";
  $.STRING_WARNING_COMMON2 = "This command can't be executed while player in battle!";
  $.STRING_WARNING_COMMON3 = "This command not suported with ABS!";

  $.STRING_WARNING_COMMAND129 = "You can't remove party leader from party on ABS map!";
  $.STRING_WARNING_COMMAND321 = "You can't change actor class on ABS map!";

  $.STRING_WARNING_SKILLWC = "Weapon don't support casting";
  $.STRING_WARNING_SKILLOC = "Support only 'Battle Screen' items!";
  $.STRING_WARNING_SKILLWVR = "Weapon can't support Vector with radius";


  $.STRING_ERROR_SKILLNAN = "You need setup you project for Alpha ABS!"; //TODO: Добавить ссылку на инструкцию как это делать
  $.STRING_ERROR_OLDDATA = "Your project use old RPG Maker MV core files (js/), update files to 1.6.0 or above";

})(AlphaABS.SYSTEM);

// ■ END System.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AXUI_Main.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var AXUI;

AXUI = {};

AXUI.Version = '0.1';

AXUI.register = function(library) {
  return AXUI[library.name] = library;
};

AlphaABS.AXUI = AXUI;

(function() {})();

// ■ END AXUI_Main.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Utils.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
AlphaABS.UTILS = {};

(function ($) {

  "use strict";

  var SDK = PLATFORM.SDK;

  $.printPoint = function (x, y) {
    return "[" + x + " ; " + y + "]";
  };

  $.distanceTo = function (a, b) {
    if (a === undefined || b === undefined) {
      return 0; //This is very very bad!
    }
    if (a === null || b === null) {
      return 0;
    }
    return $gameMap.distance(a.x, a.y, b.x, b.y);
  };

  $.inFront = function (charA, charB) {
    try {
      var d = charA.direction();
      var x2 = $gameMap.roundXWithDirection(charA.x, d);
      var y2 = $gameMap.roundYWithDirection(charA.y, d);
      return this.inPoint(charB, new PointX(x2, y2));
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  $.isFrontNeighbor = function(charA, charB) {
    var points = AlphaABS.UTILS._getNeighborPoints(charA);
    if (points.length > 0) {
      var a = AlphaABS.UTILS.inPoint(points[0], charB);
      var b = AlphaABS.UTILS.inPoint(points[1], charB);
      return a || b;
    }
    return false;
  };

  $._getNeighborPoints = function (charA) {
    try {
      var d = charA.direction();
      var result = [];
      switch (d) {
        case 8:
          result.push(new PointX(charA.x + 1, charA.y - 1));
          result.push(new PointX(charA.x - 1, charA.y - 1));
          break;
        case 4:
          result.push(new PointX(charA.x - 1, charA.y - 1));
          result.push(new PointX(charA.x - 1, charA.y + 1));
          break;
        case 6:
          result.push(new PointX(charA.x + 1, charA.y - 1));
          result.push(new PointX(charA.x + 1, charA.y + 1));
          break;
        case 2:
          result.push(new PointX(charA.x + 1, charA.y + 1));
          result.push(new PointX(charA.x - 1, charA.y + 1));
          break;
        default:
          return result;
      }
      return result;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  $.getEndPointFromCharToRange = function(charA, range) {
    try {
      if(range == 0) {
        return charA.toPoint();
      }
      var d = charA.direction();
      var result = [];
      var startPoint = charA.toPoint();
      var endPoint = null;
      switch (d) {
        case 8:
          endPoint = new PointX(startPoint.x, startPoint.y - range);
          break;
        case 4:
          endPoint = new PointX(startPoint.x - range, startPoint.y);
          break;
        case 6:
          endPoint = new PointX(startPoint.x + range, startPoint.y);
          break;
        case 2:
          endPoint = new PointX(startPoint.x, startPoint.y + range);
          break;
        default:
          break;
      }
      return endPoint;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  $.createLineBetweenPoints = function(point1, point2) {
    var line = [];
    var tempPoint = point1;
    var endRect = new Rectangle(point2.x - 0.5, point2.y - 0.5, 1.5, 1.5);
    var safeCount = 500;
    while(true) {
      safeCount--;
      //"CHECK POINT".p();
      tempPoint = AlphaABS.UTILS.SMath.moveTo(tempPoint, point2, 1);
      //"POINT".p(tempPoint);
      if (AlphaABS.UTILS.SMath.inRect(tempPoint, endRect)) {
          //"POINT END".p();
          break;
      }
      line.push(tempPoint.applyRound());
      if(safeCount <= 0)
        break;
    }
    //"LINE POINTS".p(line.length);
    return line;
  };

  $.inDirection = function (charA, charB) {
    try {
      var d = charA.direction();
      switch (d) {
        case 8:
          return (charB.y <= charA.y);
        case 4:
          return (charB.x <= charA.x);
        case 6:
          return (charB.x >= charA.x);
        case 2:
          return (charB.y >= charA.y);
        default:
          return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  $.inDirectionHard = function (charA, charB) {
    try {
      var inD = this.inDirection(charA, charB);
      if (!inD) {
        return false;
      }
      var d = charA.direction();
      switch (d) {
        case 8:
          return (charB.x == charA.x);
        case 4:
          return (charB.y == charA.y);
        case 6:
          return (charB.y == charA.y);
        case 2:
          return (charB.x == charA.x);
        default:
          return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  $.inPoint = function (a, b) {
    try {
      if (!a) return false;
      if (!b) return false;
      return (a.x == b.x && a.y == b.y);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  $.inRadius = function (charA, radius, members) {
    try {
      var t = [];
      members.forEach(function (item) {
        if (AlphaABS.UTILS.distanceTo(charA, item) < radius) {
          t.push(item);
        }
      });
      return t;
    } catch (e) {
      //console.error(e);
      return false;
    }
  };

  $.toGlobalCoord = function (layer, coordSymbol) {
    return SDK.toGlobalCoord(layer, coordSymbol);
  };

  $.framesToTimeA = function (frames, oneSecond) {
    try {
      if (oneSecond === undefined) oneSecond = 60;
      var secs = Math.floor((frames + oneSecond) / oneSecond);
      var string = '';
      if (secs > 59) {
        var min = Math.floor(secs / 60);
        string = min + "m";
      } else {
        string = secs + "s";
      }
      return string;
    } catch (e) {
      console.error(e);
      return "!s";
    }
  };

  $.framesToTimeB = function (frames, oneSecond) {
    try {
      if (oneSecond === undefined) oneSecond = 60;
      var secs = Math.floor((frames + oneSecond) / oneSecond);
      var string = '';
      if (secs > 59) {
        var min = Math.floor(secs / 60);
        var minm = (min < 10) ? ('0' + min) : min;
        var secx = secs - (min * 60);
        secx = (secx < 10) ? ('0' + secx) : secx;
        string = min + ":" + secx;
      } else {
        string = '0:' + ((secs < 10) ? ('0' + secs) : secs);
      }
      return string;
    } catch (e) {
      console.error(e);
      return "!:!";
    }
  };

  $.getDirKey = function (char) {
    try {
      var t = char.direction();
      switch (t) {
        case 8:
          return 'u';
        case 4:
          return 'l';
        case 6:
          return 'r';
        case 2:
          return 'd';
        default:
          return 'r';
      }
    } catch (e) {
      console.error(e);
      return 'r';
    }
  };

  $.linkSprite = function (sprite1, sprite2) {
    try {
      var _r = 0; //right (from right)
      var _u = 0; //up

      if (SDK.toGlobalCoord(sprite1, 'x') < Graphics.width / 2) {
        _r = 1; //Left (From left)
      }

      if (SDK.toGlobalCoord(sprite1, 'y') < Graphics.height / 2) {
        _u = 1; //Down
      }

      if (_r == 1) {
        sprite2.x = sprite1.x + sprite1.width + 1;
      } else {
        sprite2.x = sprite1.x - sprite2.width - 1;
      }

      if (_u == 1) {
        sprite2.y = sprite1.y + sprite1.height + 1;
      } else {
        sprite2.y = sprite1.y - sprite2.height - 1;
      }
    } catch (e) {
      console.error(e);
    }
  };

  $.increment = function (value) {
    if (value == 0)
      return value;
    if (value > 0)
      return value + 1;
    if (value < 0)
      return value - 1;
  };

  $.decrement = function (value) {
    if (value == 0)
      return value;
    if (value > 0)
      return value - 1;
    if (value < 0)
      return value + 1;
    return value;
  };

  //PointX
  //------------------------------------------------------------------------------
  /* jshint -W104 */
  class PointX {
    constructor(mapX, mapY) {
      mapX = SDK.check(mapX, 0);
      mapY = SDK.check(mapY, 0);
      this._x = mapX;
      this._y = mapY;
    }

    convertToScreen() {
      this._x = this.screenX();
      this._y = this.screenY();
      return this;
    }

    convertToScreen2() {
      this._x = this._x * $gameMap.tileWidth();
      this._y = this._y * $gameMap.tileHeight();
    }

    mapPointOnScreen() {
      var nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
      var ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
      return new PointX(nx, ny);
    }

    static ScreenXYOnScreen(x, y) {
      var p = new PointX(x, y);
      p.convertToMap();
      return p.mapPointOnScreen();
    }

    convertToMap() {
      this._x = this.mapX();
      this._y = this.mapY();
      return this;
    }

    applyFloor() {
      this._x = Math.floor(this._x);
      this._y = Math.floor(this._y);
      return this;
    }

    applyCeil() {
      this._x = Math.ceil(this._x);
      this._y = Math.ceil(this._y);
      return this;
    }

    applyRound() {
      this._x = Math.round(this._x);
      this._y = Math.round(this._y);
      return this;
    }

    screenX() {
      var t = $gameMap.adjustX(this._x);
      var tw = $gameMap.tileWidth();
      return Math.round(t * tw + tw / 2);
    }

    screenY() {
      var t = $gameMap.adjustY(this._y);
      var th = $gameMap.tileHeight();
      return Math.round(t * th + th);
    }

    convertToCanvas() {
      //if (Graphics._realScale != 1) {
        this._x = Graphics.pageToCanvasX(this._x);
        this._y = Graphics.pageToCanvasY(this._y);
      //}
    }

    mapX() {
      return $gameMap.canvasToMapX(this._x);
    }

    mapY() {
      return $gameMap.canvasToMapY(this._y);
    }

    clone() {
      return new PointX(this._x, this._y);
    }

    toString() {
      return AlphaABS.UTILS.printPoint(this._x, this._y);
    }

    toPoint() {
      return this;
    }

    static _getEmpty() {
      if (PointX._emptyPoint === undefined) {
        PointX._emptyPoint = new PointX(0, 0);
      }
      return PointX._emptyPoint;
    }
  }

  Object.defineProperties(PointX.prototype, {
    x: {
      get: function () {
        return this._x;
      },
      configurable: true
    },
    y: {
      get: function () {
        return this._y;
      },
      configurable: true
    }
  });

  Object.defineProperties(PointX, {
    Empty: {
      get: function () {
        return PointX._getEmpty();
      },
      configurable: false
    }
  });

  Array.prototype.toPoint = function () {
    return new PointX(this[0], this[1]);
  };

  Game_CharacterBase.prototype.toPoint = function () {
    return new PointX(this.x, this.y);
  };
  //END PointX
  //------------------------------------------------------------------------------

  //SMouse
  //------------------------------------------------------------------------------
  var __SmouseNeedTrack = false;
  var __SmousePosition = null;

  function SMouse() {
    throw new Error('This is a static class');
  }

  SMouse.initMouseTrack = function () {
    document.onmousemove = SMouse.handleMouseMove;
    __SmouseNeedTrack = false;
    __SmousePosition = PointX.Empty;
  };

  SMouse.setTrack = function (isSet) {
    //console.log("Track is " + isSet);
    __SmouseNeedTrack = isSet;
    if (isSet) this.handleMouseMove(null);
  };

  SMouse.isTracked = function () {
    return (__SmouseNeedTrack == true);
  };

  SMouse.handleMouseMoveCanvas = function (canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    __SmousePosition = new PointX(evt.clientX - rect.left, evt.clientY - rect.top);
    console.log("Mouse " + __SmousePosition);
  };

  SMouse.handleMouseMove = function (event) {
    if (!__SmouseNeedTrack) return;

    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism
    if (!event) return;

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    __SmousePosition = new PointX(event.pageX, event.pageY);
    __SmousePosition.convertToCanvas();
  };

  SMouse.getMousePosition = function () {
    if (!Utils.isMobileDevice())
      return __SmousePosition;
    else
      return PointX.Empty;
  };
  //END SMouse
  //------------------------------------------------------------------------------

  //SMath
  //------------------------------------------------------------------------------
  function SMath() {
    throw new Error('This is a static class');
  }

  SMath.distance = function (point1, point2) {
    try {
      return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    } catch (e) {
      console.error(e);
      return 0;
    }
  };

  SMath.angle = function (point1, point2) {
    try {
      var cl = SMath.distance(point1, point2);
      var al = Math.abs(point2.x - point1.x);
      var bl = Math.abs(point2.y - point1.y);

      if (al == 0 || cl == 0 || bl == 0)
        return 0;
      else {
        var angle = Math.acos((bl * bl + cl * cl - al * al) / (2 * bl * cl));
        return angle;
      }
    } catch (e) {
      console.error(e);
      return 0;
    }
  };

  SMath.rotateTo = function (point1, angle) {
    try {
      var nx = point1.x * Math.cos(angle) - point1.y * Math.sin(angle);
      var ny = point1.y * Math.cos(angle) + point1.x * Math.sin(angle);
      return new PointX(nx, ny);
    } catch (e) {
      console.error(e);
      return PointX.Empty;
    }
  };

  SMath.moveTo = function (point1, point2, step) {
    try {
      var rotated = SMath.rotateTo(new PointX(0, step), SMath.angle(point1, point2));
      var fx = 0;
      var fy = 0;
      if (point2.y < point1.y) {
        fy = point1.y - rotated.y;
      } else {
        fy = point1.y + rotated.y;
      }
      if (point2.x < point1.x) {
        fx = point1.x + rotated.x;
      } else {
        fx = point1.x - rotated.x;
      }
      return new PointX(fx, fy);
    } catch (e) {
      console.error(e);
      return PointX.Empty;
    }
  };

  SMath.inRect = function (point, rectangle) {
    try {
      var x2 = rectangle.x + rectangle.width;
      var y2 = rectangle.y + rectangle.height;
      if (point.x > rectangle.x && point.x < x2 && point.y < y2 && point.y > rectangle.y) {
        return true;
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  //END SMath
  //------------------------------------------------------------------------------

  //Расширение
  $.extendMe = function (obj) {
    obj.SMath = SMath;
    obj.PointX = PointX;
    obj.SMouse = SMouse;
  };

  $.extendMe($);

})(AlphaABS.UTILS);

Object.freeze(AlphaABS.UTILS);
Object.defineProperty(AlphaABS, 'UTILS', {
  writable: false
});
AlphaABS.register(AlphaABS.UTILS.PointX);
// ■ END Utils.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleMangerABS.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
  var LOG = new PLATFORM.DevLog("BattleManagerABS");
  LOG.applyLibraryColors();

  window.__selected = null;

  function BattleManagerABS() {
    throw new Error('This is a static class');
  }

  AlphaABS.register(BattleManagerABS);

  var SMouse = AlphaABS.UTILS.SMouse;
  var Consts = AlphaABS.SYSTEM;
  var ABSUtils = AlphaABS.UTILS;

  BattleManagerABS.init = function () {
    BattleManagerABS.timer = new Game_TimerABS();
    BattleManagerABS._ready = false;
    BattleManagerABS._plTargets = [];
    BattleManagerABS.clearABS();
    BattleManagerABS._prepareResources();

    Input.loadSchemeABS();
    AlphaABS.LIBS.ABSPathfinding.init();
  };

  BattleManagerABS.clearABS = function () {
    this._isABSMap = false;
    this._absMapId = -1;
  };

  BattleManagerABS._prepareResources = function () {};


  BattleManagerABS.connectProcess = function () {
    this._process = new AlphaABS.LIBS.Game_BattleProcessABS();
  };

  BattleManagerABS.battleProcess = function () {
    return this._process;
  };

  BattleManagerABS.onMapLoaded = function () {
    if (this._isABSMap && $gameMap.isABS()) { //Если переход между АБС картами, то не делаем StopABS, а только prepare Заного
      if (this._absMapId != $gameMap.mapId()) {
        $gameTroop.deactivateABS();
        $gameTroop.initABS(); //Need restart
        this._absMapId = $gameMap.mapId();
      }
      BattleManagerABS.updateABSSession();
      LOG.p("Manager : Go to ABS map from ABS map, Prepare new ABS session");
      return;
    }

    if (this._isABSMap && !$gameMap.isABS()) { //Если переход от AБС карты на обычную, то надо всё остановить
      BattleManagerABS.stopABS();
      LOG.p("Manager : Go to map from ABS map, stop ABS session");
      try {
        $gamePlayer.followers().initialize();
        $gamePlayer.followers().refresh();
        if(SceneManager._scene instanceof Scene_Map)
          SceneManager._scene._spriteset.refreshAfterABS();
        $gamePlayer.followers().synchronize($gamePlayer.x, $gamePlayer.y, $gamePlayer.direction());
      } catch (error) {
        console.error(error);
      }
      return;
    }

    if (!this._isABSMap && $gameMap.isABS()) {
      BattleManagerABS.initABS();
      LOG.p("Manager : Go to ABS map from map, start new ABS session");
    }
  };

  BattleManagerABS.updateABSSession = function () {
    if (!AlphaABS.isABS()) return;
    if ($gamePlayer.battler() != $gameParty.leader())
      $gamePlayer.initABS();
    $gamePlayer.prepareABS();
    AlphaABS.BattleUI.initNewSession();
  };

  BattleManagerABS.stopABS = function () {
    LOG.p("Manager : ABS Map destroy");
    BattleManagerABS.clearABS();
    $gameTroop.deactivateABS();
    SMouse.setTrack(false);
    $gamePlayer.stopABS();
    SlowUpdateManager.clearAll();
  };

  BattleManagerABS.initABS = function () {
    $gamePlayer.initABS();
    $gameTroop.initABS();
    $gameParty.initABS();
    this.timer.start(BattleManagerABS.TURN);
    this._ready = true;
    SMouse.setTrack(true);

    AlphaABS.BattleUI.initNewSession();

    $gamePlayer.prepareABS();

    LOG.p("Manager : ABS Map loaded");
    this._isABSMap = true;
    this._absMapId = $gameMap.mapId();
  };

  BattleManagerABS.setPlayerTarget = function (target) {
    window.__selected = target;
    try {
      if (target && target.inActive()) {
        $gamePlayer.setTarget(target);
        $gameTroop.selectOnMap(target);
        $gameParty.selectOnMap(target);
        AlphaABS.BattleUI.showTarget(target);
      } else {
        $gamePlayer.setTarget(null);
        $gameTroop.selectOnMap(null);
        $gameParty.selectOnMap(null);
        AlphaABS.BattleUI.showTarget(null);
      }
    } catch (e) {
      console.error(e);
      AlphaABS.BattleUI.showTarget(null);
    }
  };

  BattleManagerABS.getPlayerTarget = function () {
    return $gamePlayer.target();
  };

  BattleManagerABS.updateABS = function () {
    if (!this._ready) return;
    this.timer.update();
    if (this.timer.isReady()) {
      this.timer.reset();
      $gamePlayer.onTurnEnd();
      $gameTroop.onTurnEnd();
    }
  };

  BattleManagerABS.alertNoInBattle = function () {
    BattleManagerABS.alertOnUI(AlphaABS.SYSTEM.STRING_ALERT_NOINBATTLE);
  };

  BattleManagerABS.alertOnUI = function (string) {
    AlphaABS.BattleUI.alert(string);
  };

  BattleManagerABS.playSe = function (se, point) {
    if (BattleManagerABS.isABSAudio()) {
      AudioManager.playSeAt(se, point);
    } else {
      AudioManager.playSe(se);
    }
  };

  BattleManagerABS.isABSAudio = function () {
    return AlphaABS.SYSTEM.EXTENSIONS.AUDIO;
  };

  BattleManagerABS.isABSParticleSystem = function () {
    return (AlphaABS.SYSTEM.EXTENSIONS.ABSPE !== undefined) && (AlphaABS.SYSTEM.EXTENSIONS.ABSPE != false);
  };

  BattleManagerABS.isABSLightingExt = function () {
    return AlphaABS.SYSTEM.EXTENSIONS.LIGHT;
  };

  BattleManagerABS.alertOnUIbySym = function (alertSymbol) {
    switch (alertSymbol) {
      case 'noUse':
        BattleManagerABS.alertOnUI(Consts.STRING_ALERT_NOUSE);
        break;
      case 'toFar':
        BattleManagerABS.alertOnUI(Consts.STRING_ALERT_TOFAR);
        break;
      case 'noTarget':
        BattleManagerABS.alertOnUI(Consts.STRING_ALERT_NEEDTARGET);
        break;
      case 'noAmmo':
        BattleManagerABS.alertOnUI(Consts.STRING_ALERT_NOCHARGES);
        break;
      case 'recharge':
        BattleManagerABS.alertOnUI(Consts.STRING_ALERT_RECHARGE);
        break;
    }
  };

  BattleManagerABS.nextPlayerTarget = function () {
    try {
      var t = ABSUtils.inRadius($gamePlayer, 12, $gameTroop.membersABS());
      if (t.count() == 0) {
        return null;
      }

      var tt = this._plTargets;
      var t2 = t.filter(function (i) {
        return tt.indexOf(i) < 0;
      });

      if (t2.count() == 0) {
        this._plTargets = [];
        return this.nextPlayerTarget();
      } else {
        this._plTargets.push(t2.first());
      }
      return t2.first();
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  //HELPERS
  BattleManagerABS.canUseSkillByTimer = function (skill) {
    return skill ? skill.isReady() : false;
  };

  BattleManagerABS.playerABSSkillById = function (skillId) {
    return $gamePlayer.battler().skillABS_byId(skillId);
  };

  BattleManagerABS.canUseSkillByTarget = function (who, target, skill) {
    try {
      if (!skill) return false;
      if (skill.isRadiusType()) return true;
      if (skill.isNeedTarget()) {
        if (target)
          return true;
        else
          return false;

      } else
        return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.checkLineOfSight = function (point1, point2) {
    try {
      var line = AlphaABS.UTILS.createLineBetweenPoints(point1, point2);
      for (var i = 0; i < line.length; i++) {
        if (BattleManagerABS.checkMapZone(line[i]) == false)
          return false;
      }
      return true;
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  BattleManagerABS.checkMapZone = function (point) {
    try {
      if (AlphaABS.Parameters.isLoaded()) {
        var regionId = $gameMap.regionId(point.x, point.y);
        var zones = AlphaABS.Parameters.get_MapSolidRegions();
        if (zones.includes(regionId))
          return false;
      }
      return true;
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  BattleManagerABS.canUseSkillByRange = function (who, target, skill) {
    try {
      var byRange = BattleManagerABS.checkSkillRange(who, target, skill);
      if (byRange == true) {
        if (skill.range == 0 || target == null || who == null || skill.isIgnoreObstacles())
          return true;
        else {
          if (ABSUtils.inFront(who, target)) {
            return true;
          }
          var isLineOfSight = BattleManagerABS.checkLineOfSight(who.toPoint(), target.toPoint());
          return isLineOfSight;
        }
      } else
        return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.checkSkillRange = function (who, target, skill) {
    try {
      if (!skill) return false;
      if (skill.isZoneType()) return true;
      if (skill.isRadiusType()) return true;
      if (skill.range == 0 && !skill.isNeedTarget()) return true;
      if (skill.range == 0) {
        return ABSUtils.inFront(who, target);
      } else {
        var t = ABSUtils.distanceTo(who, target);
        if (skill.range >= t) {
          if (skill.isDirectionFix()) {
            LOG.p("SPELL: Dirction FIXed");
            return ABSUtils.inDirectionHard(who, target);
          } else
            return true;
        } else
          return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.canUseSkillByAmmo = function (skill) {
    try {
      if(skill.isFirearm()) {
        return !skill.isNeedReloadStack();
      }
      if(skill.isNeedAmmo()) {
        return $gameParty.numItems($dataItems[skill.ammo]) > 0;
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.canUseABSSkillNow = function (who, target, skill) {
    try {
      if (!skill) return false;
      if(skill.isNoTarget()) {
        return this.canUseSkillByTimer(skill) && this.canUseSkillByAmmo(skill);
      }
      return this.canUseSkillByTarget(who, target, skill) &&
        this.canUseSkillByRange(who, target, skill) &&
        this.canUseSkillByTimer(skill) && this.canUseSkillByAmmo(skill);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.canUseABSSkillUI = function (skill) {
    try {
      if (!$gamePlayer.inActive()) return false;
      var t = $gamePlayer.battler();
      return t.canUse(skill.skill()) &&
        this.canUseABSSkillNow($gamePlayer, $gamePlayer.target(), skill) && t.canMove();
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.whoTargetOnMe = function (me, members) {
    var x = members.filter(function (t) {
      return (t.target() == me);
    });
    return x.first();
  };

  BattleManagerABS.isValidTarget = function (target) {
    try {
      return target && target.inActive() && (target.battler().tgr != 0);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  BattleManagerABS.warning = function (index) {
    switch (index) {
      case 1:
        LOGW.p(Consts.STRING_WARNING_COMMON2);
        break;
      case 2:
        LOGW.p(Consts.STRING_WARNING_COMMON3);
        break;
      case 129:
        LOGW.p(Consts.STRING_WARNING_COMMAND129);
        break;
      case 321:
        LOGW.p(Consts.STRING_WARNING_COMMAND321);
        break;
      default:
        LOGW.p(Consts.STRING_WARNING_COMMON);
        break;
    }
  };

  BattleManagerABS.getAllBotsOnMap = function () {
    if (AlphaABS.isABS()) {
      var all = $gameTroop.membersABS().concat($gameParty.membersABS());
      return all;
    } else
      return [];
  };

  SDK.setConstant(BattleManagerABS, 'TURN', AlphaABS.SYSTEM.FRAMES_PER_SECOND);
  AlphaABS.BattleManagerABS = BattleManagerABS;
  AlphaABS.register(BattleManagerABS);
})();

// ■ END BattleMangerABS.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
///////////////////////////////////////////////////////////////////////////////
//╒═══════════════════════════════════════════════════════════════════════════╛
// ■ BattleUI.coffee
//╒═══════════════════════════════════════════════════════════════════════════╛
///////////////////////////////////////////////////////////////////////////////
(function() {
  var BattleUI;
  BattleUI = function() {
    throw new Error("This is a static class");
  };
  AlphaABS.register(BattleUI);
  BattleUI.init = function() {
    this._ui = null;
  };
  BattleUI.setUI = function(ui) {
    this._ui = ui;
  };
  BattleUI.initNewSession = function() {
    var ref;
    return (ref = this._ui) != null ? ref.initABS() : void 0;
  };
  BattleUI.isUI = function() {
    return this._ui != null;
  };
  BattleUI.getUI = function() {
    return this._ui;
  };
  BattleUI.showTarget = function(target) {
    var ref;
    return (ref = this._ui) != null ? ref.showTarget(target) : void 0; //Nullable
  };
  BattleUI.alertNotInDuringBattle = function() {
    return this.alert(AlphaABS.SYSTEM.STRING_ALERT_NOINBATTLE);
  };
  BattleUI.alert = function(message) {
    var ref;
    if (message) {
      return (ref = this._ui) != null ? ref.addPopUp(AlphaABS.PopInfoManagerABS.ALERT(message)) : void 0;
    }
  };
  BattleUI.pushItemOnPanel = function(item) {
    if (item != null) {
      return this._pushOnPanel("item", item);
    }
  };
  BattleUI._pushOnPanel = function(symbol, object) {
    var ref;
    if (object) {
      return (ref = this._ui) != null ? ref.pushOnItemPanel(symbol, object) : void 0;
    }
  };
  BattleUI.refreshWeaponCircle = function() {
    var ref;
    return (ref = this._ui) != null ? ref.weapCircleRefresh() : void 0;
  };
  BattleUI.showFirearmPanel = function() {
    var ref;
    return (ref = this._ui) != null ? ref.showFirearmPanel() : void 0;
  };
  BattleUI.refreshFirearmPanel = function() {
    var ref;
    return (ref = this._ui) != null ? ref.refreshFirearmPanel() : void 0;
  };
  BattleUI.firearmPanel = function() {
    var ref;
    return (ref = this._ui) != null ? ref.spriteFirearmBar : void 0;
  };
  BattleUI.refresh = function() {
    var ref;
    return (ref = this._ui) != null ? ref.refresh() : void 0;
  };
  BattleUI.pushExpOnPanel = function(expCount) {
    return this._pushOnPanel("exp", expCount);
  };
  BattleUI.refreshWeaponIconAt = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.refreshWeaponIconAt(index) : void 0;
    }
  };
  BattleUI._getControlPanel = function() {
    var ref;
    return (ref = this._ui) != null ? ref.controlPanel() : void 0;
  };
  BattleUI.showUI = function() {
    if (this._ui != null) {
      this._ui.setShowUI(true);
      this._ui.show();
    }
  };
  BattleUI.hideUI = function() {
    if (this._ui != null) {
      this._ui.setShowUI(false);
      this._ui.hide();
    }
  };
  BattleUI.refreshPlayerFace = function() {
    var ref;
    return (ref = this._ui) != null ? ref.refreshFace() : void 0;
  };
  BattleUI.pushGoldOnPanel = function(goldCount) {
    return this._pushOnPanel("gold", goldCount);
  };
  BattleUI.requestFreeMode = function() {
    var ref;
    return (ref = this._ui) != null ? ref.needFree() : void 0;
  };
  BattleUI.moveWeaponCircle = function(x, y) {
    var ref;
    if ((x != null) && (y != null)) {
      return (ref = this._getWeaponCircle()) != null ? ref.move(x, y) : void 0;
    }
  };
  BattleUI._getWeaponCircle = function() {
    var ref;
    return (ref = this._ui) != null ? ref.weapCircle() : void 0;
  };
  BattleUI.terminate = function() {
    var ref;
    return (ref = this._ui) != null ? ref.terminate() : void 0;
  };
  BattleUI.isWeaponCircleTouchedAny = function() {
    var cl;
    cl = this._getWeaponCircle();
    if (cl == null) {
      return false;
    }
    return cl.isOpen() && cl.isTouchedAny();
  };
  BattleUI.isTouched = function() {
    var ref;
    return (ref = this._ui) != null ? ref.isTouched() : void 0;
  };
  BattleUI.addPopUpForPlayer = function(item) {
    var ref;
    if (item) {
      return (ref = this._ui) != null ? ref.addPopUpUser(item) : void 0;
    }
  };
  BattleUI.addPopUpForTarget = function(target, item) {
    var ref;
    if (target && item) {
      return (ref = this._ui) != null ? ref.addPopUpTarget(target, item) : void 0;
    }
  };
  BattleUI.isVisible = function() {
    if (this._ui != null) {
      return this._ui.isVisible();
    }
    return false;
  };
  BattleUI.openWeaponCircle = function() {
    var circle;
    circle = this._getWeaponCircle();
    if (circle != null) {
      if (!circle.isOpen()) {
        circle.open();
      }
    }
  };
  BattleUI.closeWeaponCircle = function() {
    var circle;
    circle = this._getWeaponCircle();
    if (circle != null) {
      if (circle.isOpen()) {
        circle.close();
      }
    }
  };
  BattleUI.isWeaponCircleOpen = function() {
    var ref;
    return (ref = this._getWeaponCircle()) != null ? ref.isOpen() : void 0;
  };
  BattleUI.selectOnControlPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.selectItemAt(index, true) : void 0;
    }
  };
  BattleUI.diselectOnControlPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.selectItemAt(index, false) : void 0;
    }
  };
  BattleUI.disableOnControlPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.disableItemAt(index, true) : void 0;
    }
  };
  BattleUI.enableOnControlPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.disableItemAt(index, false) : void 0;
    }
  };
  BattleUI.changeRotateIconToMouse = function() {
    var ref;
    return (ref = this._getControlPanel()) != null ? ref.setIconAt(3, AlphaABS.DATA.IMG.IconToMouse.bitmap) : void 0;
  };
  BattleUI.changeRotateIconToTarget = function() {
    var ref;
    return (ref = this._getControlPanel()) != null ? ref.setIconAt(3, AlphaABS.DATA.IMG.IconToTarget.bitmap) : void 0;
  };
  BattleUI.touchOnSkillPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._ui) != null ? ref.touchSkillAt(index) : void 0;
    }
  };
  BattleUI.touchOnControlPanel = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getControlPanel()) != null ? ref.touchItemAt(index) : void 0;
    }
  };
  BattleUI.touchOnWeaponCircle = function(index) {
    var ref;
    if (index != null) {
      return (ref = this._getWeaponCircle()) != null ? ref.click(index) : void 0;
    }
  };
  BattleUI.isUIFree = function() {
    var ref;
    return (ref = this._ui) != null ? ref.isFree() : void 0;
  };
  AlphaABS.BattleUI = BattleUI;
})();

// ■ END BattleUI.coffee
//-----------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ParametersManagerABS.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    class ParametersManagerABS extends KDCore.ParametersManager {
        constructor() {
            super('Alpha ABS');
        }

        get_UIE_PlayerGauge(gaugeSymbol) {
            var object = this.getObject('UIE_Player_' + gaugeSymbol + '_Bar');
            this._convertGaugeElements(object);
            return object;
        }
        _convertGaugeElements(object) {
            this.convertField(object, 'Color');
            this.convertField(object, 'Visible');
            this.convertField(object, 'Show value');
            return object;
        }
        get_UIE_PlayerStatus() {
            var name = 'UIE_Player_Status_Settings';
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertBasicElements(object);
                this.convertField(object, 'Portrait');
                this.convertField(object, 'Level');
                this.convertImageWithDefault(object, 'In battle Icon', AlphaABS.DATA.IMG.IconInBattle.bitmap);
                this.convertImageWithDefault(object, 'Mask', AlphaABS.DATA.IMG.InBattleMask.bitmap);
                this.convertImageWithDefault(object, 'Background', AlphaABS.DATA.IMG.UserFaceBack.bitmap);
                return object;
            });
        }

        convertImageWithDefault(object, paramName, defaultImgBitmap) {
            try {
                var img = object[paramName];
                if (typeof (img) == "string") {
                    if (img == "" && defaultImgBitmap) {
                        object[paramName] = defaultImgBitmap;
                    } else {
                        this.convertImage(object, paramName);
                    }
                } else { //Bitmap
                    if (img._image == null && defaultImgBitmap) {
                        object[paramName] = defaultImgBitmap;
                    } else {
                        object[paramName] = img;
                    }
                }
            } catch (e) {
                console.error(e);
                this.convertImage(object, paramName);
            }
        }

        _convertBasicElements(object) {
            this.convertField(object, 'Position');
            this.convertField(object.Position, 'X');
            this.convertField(object.Position, 'Y');
            this.convertField(object, 'Visible');
            return object;
        }
        get_UIE_PlayerTarget() {
            var name = 'UIE_Player_Target';
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertBasicElements(object);
                this.convertField(object, 'Name');
                this.convertField(object, 'HP Bar');
                this._convertGaugeElements(object['HP Bar']);
                this.convertImageWithDefault(object, 'Mask', AlphaABS.DATA.IMG.TargetBattleMask.bitmap);
                this.convertImageWithDefault(object, 'Selected_Image', AlphaABS.DATA.IMG.TargetCircle.bitmap);
                return object;
            });
        }
        get_UIE_SpellSelectZoneImage() {
            var name = 'UIE_SpellSelectZoneImage';
            return this.getFromCacheOrInit(name, function () {
                var img = this.getString(name);
                var bitmap = this.loadImage(img);
                if (bitmap._image == null) {
                    return AlphaABS.DATA.IMG.TargetCircle.bitmap;
                } else {
                    return bitmap;
                }
            });
        }
        get_UIE_PlayerSpellsPanel() {
            var name = 'UIE_Player_Skills';
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertBasicElements(object);
                this.convertImage(object, 'Image');
                this.convertImageWithDefault(object, 'Image', AlphaABS.DATA.IMG.SkillPanel.bitmap);
                this.convertField(object, 'AutoHide');
                return object;
            });
        }
        get_UIE_PlayerHotBar() {
            var name = 'UIE_Player_HotBar';
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertBasicElements(object);
                for (var i = 1; i < 6; i++)
                    this.convertField(object, 'Item' + i);
                return object;
            });
        }
        get_UIE_PlayerMessageBar() {
            return this._get_UIE_BasicElement('UIE_Message_Bar');
        }
        _get_UIE_BasicElement(name) {
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertBasicElements(object);
                return object;
            });
        }
        get_UIE_PlayerStates() {
            return this._get_UIE_BasicElement('UIE_Player_States');
        }
        get_UIE_ItemList() {
            return this._get_UIE_BasicElement('UIE_ItemList');
        }
        get_UIE_PlayerCastBar() {
            return this._get_UIE_BasicElement('UIE_Player_Cast');
        }
        get_UIE_PlayerFirearm() {
            return this._get_UIE_BasicElement('UIE_Player_FirearmPanel');
        }
        get_UI_PlayerDamageColor() {
            var name = "UI_PlayerDamageColor";
            return this.getFromCacheOrInit(name, function () {
                var color = this.getString(name);
                if (color != null && color != "") {
                    return KDCore.Color.FromHex(color).ARR;
                } else {
                    return KDCore.Color.BLACK.ARR;
                }
            });
        }
        loadAllStrings() {
            var loader = new KDCore.StringsLoader(this._parameters);
            loader.loadAllStringsToObject(AlphaABS.SYSTEM);
        }
        get_EnemyDeadSwitch() {
            var name = "Enemy Dead Switch";
            return this.getFromCacheOrInit(name, function () {
                var deadSwitch = this.getString(name);
                if (SDK.checkSwitch(deadSwitch))
                    return deadSwitch;
                else
                    return 'B';
            });
        }
        get_EnemyReviveAnimationId() {
            return this._get_NumberFromCache("Revive Animation") || 45;
        }
        _get_NumberFromCache(name) {
            return this.getFromCacheOrInit(name, function () {
                var value = this.getNumber(name);
                return value;
            });
        }
        get_CastAnimation() {
            var animId = this._get_NumberFromCache("Cast Animation");
            if (animId > 0) {
                return $dataAnimations[animId];
            } else {
                return AlphaABS.DATA.DefaultCastAnimation;
            }
        }
        get_LevelUpAnimationId() {
            return this._get_NumberFromCache("Level Up Animation") || 49;
        }
        get_AutoLootEnemiesState() {
            return this._get_BooleanFromCache('Auto loot');
        }
        _get_BooleanFromCache(name) {
            return this.getFromCacheOrInit(name, function () {
                var object = this.getBoolean(name);
                return object;
            });
        }
        get_CastAnimationSE() {
            var name = 'Cast Animation SE';
            return this.getFromCacheOrInit(name, function () {
                if (this.isHasParameter(name)) {
                    var object = this.getBoolean(name);
                    if (object == true) {
                        object = AlphaABS.DATA.DefaltCastSE;
                    } else {
                        object = null;
                    }
                    return object;
                } else {
                    return AlphaABS.DATA.DefaltCastSE;
                }
            });
        }
        get_DeadMapId() {
            return this._get_NumberFromCache("Game Over Map ID");
        }
        get_DeadMapCommonEventId() {
            return this._get_NumberFromCache("Game Over Common Event");
        }
        get_DeadMapPosition() {
            var name = "Game Over Map Position";
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this.convertField(object, "X");
                this.convertField(object, "Y");
                return object;
            });
        }
        get_DeadMapDirection() {
            var name = "Game Over Map Direction";
            return this.getFromCacheOrInit(name, function () {
                var resultDir = 2;
                var object = this.getString(name);
                switch (object) {
                    case "top":
                        resultDir = 8;
                        break;
                    case "right":
                        resultDir = 6;
                        break;
                    case "left":
                        resultDir = 4;
                        break;
                    default:
                        resultDir = 2;
                        break;
                }
                return resultDir;
            });
        }
        get_PartyExpMode() {
            var name = "Party experience";
            return this.getFromCacheOrInit(name, function () {
                var result = 0;
                var object = this.getString(name);
                switch (object) {
                    case "For each member":
                        result = 0;
                        break;
                    case "For party":
                        result = 1;
                        break;
                    case "Share at all":
                        result = 2;
                        break;
                    default:
                        result = 0;
                        break;
                }
                return result;
            });
        }
        get_SpawnMapId() {
            var name = "Enemy Spawn Map Id";
            return this.getFromCacheOrInit(name, function () {
                return this.getNumber(name);
            });
        }
        get_MapSolidRegions() {
            var name = "Solid Regions";
            return this.getFromCacheOrInit(name, function () {
                var regions = [];
                var object = this.getString(name);
                try {
                    regions = object.split(',').map(Number);
                    regions.delete(0);
                } catch (error) {
                    console.error(error);
                    regions = [];
                }
                return regions;
            });
        }
        get_GoldIconIndex() {
            var name = "UIE_ItemListGoldIconIndex";
            if (this.isHasParameter(name))
                return this._get_NumberFromCache(name);
            else
                return 314;
        }
        get_AllowTransferState() {
            return this._get_BooleanFromCache("Allow Transfrer");
        }
        isUIVisible() {
            return this._get_BooleanFromCacheWithDefault("UI_Visible", true);
        }
        _get_BooleanFromCacheWithDefault(name, defaultValue) {
            if (this.isHasParameter(name))
                return this._get_BooleanFromCache(name);
            else
                return defaultValue;
        }
        isUIEditorAllowed() {
            return this._get_BooleanFromCacheWithDefault("UI_Editor", true);
        }
        isUIInOptionsAllowed() {
            return this._get_BooleanFromCacheWithDefault("UI_Options", true);
        }
        //?[DEPRECATED]
        isKeyBindingAllowed() {
            return this._get_BooleanFromCacheWithDefault("Key_binding", true);
        }
        loadBindingScheme() {
            if (this.isLoaded())
                this._loadStandartBindingKeys();
        }
        _loadStandartBindingKeys() {
            try {
                var keys = [];
                keys[0] = this.getString('Controls_Key_cpW');
                keys[1] = this.getString('Controls_Key_cpD');
                keys[2] = this.getString('Controls_Key_cpS');
                keys[3] = this.getString('Controls_Key_cpA');

                keys[4] = this.getString('Controls_Key_cpE');
                keys[5] = this.getString('Controls_Key_tS');

                keys[6] = this.getString('Controls_Key_scW');
                keys[7] = this.getString('Controls_Key_scD');
                keys[8] = this.getString('Controls_Key_scS');
                keys[9] = this.getString('Controls_Key_scA');

                for (var i = 0; i < 8; i++) {
                    keys[i + 10] = this.getString('Controls_Key_sp' + (i + 1));
                }

                keys[18] = this.getString("Controls_Key_wr");

                AlphaABS.LIBS.IKey.loadKeyConfig(keys);
            } catch(error) {
                AlphaABS.error(error,' load user key binding');
            }
        }
        isFollowAllowed() {
            return this._get_BooleanFromCacheWithDefault("Controls_KeyAllowed_Follow", true);
        }
        isJumpAllowed() {
            return this._get_BooleanFromCacheWithDefault("Controls_KeyAllowed_Jump", true);
        }
        isRotateAllowed() {
            return this._get_BooleanFromCacheWithDefault("Controls_KeyAllowed_Rotate", true);
        }
        isWeaponsAllowed() {
            return this._get_BooleanFromCacheWithDefault("Controls_KeyAllowed_Weapons", true);
        }

        get_EnemyMiniHpBarOption() {
            var name = "Show Mini HP Bars";
            return this.getFromCacheOrInit(name, function () {
                var result = 0;
                var object = this.getString(name);
                switch (object) {
                    case "Never":
                        result = 0;
                        break;
                    case "Always":
                        result = 1;
                        break;
                    case "Only for selected":
                        result = 2;
                        break;
                    default:
                        result = 0;
                        break;
                }
                return result;
            });
        }

        get_UIE_MiniHPBar() {
            var name = "UIE_Mini_Bar";
            return this.getFromCacheOrInit(name, function () {
                var object = this.getObject(name);
                this._convertGaugeElements(object);
                object.Visible = true; // * Видимость настраивается другим параметром, поэтому всегда true
                return object;
            });
        }
    }

    AlphaABS.Parameters = new ParametersManagerABS();
    AlphaABS.register(ParametersManagerABS);
})();
// ■ END ParametersManagerABS.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[INTERFACE]
    var Interface_AIBot = {
        initializeABS: function () {
            this.LOG = new PLATFORM.DevLog(this.constructor.name);
            this.LOG.applyLibraryColors();
            this.aiName = "Unknown";

            this._stateMachine = null;

            this._absParams.battler = null;
            this._absParams.target = null;
            this._absParams.inBattle = false;
            this._absParams.active = true; //Со мной можно взаимодействовать
            this._absParams.selected = false; //Я выбран на карте игроком?
            this._absParams.myHomePosition = null;
            this._absParams.behavior = new AlphaABS.LIBS.Game_AIBehavior();
            this._absParams.allyToSearch = null;
            this._absParams.rageContainer = null; //Цель - урон, для ярости

            //escapeOnBattle; //Убегает во время битвы
            //canSearch; //Могу ля я искать противника, если мой сосед атакован
            //noFight; //Не будет сражаться
            //reviveTime; //Время возрождения (минуты)
            //slow; //Медленный враг
            //agressive; //Агрессивный враг (будет догонять)
            //returnType; //Тип возвращения 0 - быстрое, 1 - обычное, 2 - остановка
            //teamId;
            //rage; //Если 1, то агрится, если 0 , то нет
        },
        ABSParams: function () {
            return this._absParams;
        },
        isAlly: function (who) {
            if (who)
                return (this.teamId() == who.teamId());
            return false;
        },
        teamId: function () {
            return this.behaviorModel().teamId;
        },
        canFight: function () {
            return !this.behaviorModel().noFight;
        },
        behaviorModel: function () {
            return this._absParams.behavior;
        },
        isFastReturn: function () {
            return this.behaviorModel().returnType == 0;
        },
        isSlowReturn: function () {
            return this.behaviorModel().returnType == 1;
        },
        isNotReturn: function () {
            return this.behaviorModel().returnType == 2;
        },
        isCasting: function () {
            var action = this.currentAction();
            return (action && action.isCasting());
        },
        currentAction: function () {
            return this._absParams.currentAction;
        },
        target: function () {
            return this._absParams.target;
        },
        isAlive: function () {
            if (this.battler() != null)
                return this.battler().isAlive();
            else
                return true;
        },
        battler: function () {
            return this._absParams.battler;
        },
        getHomePosition: function () {
            return this._absParams.myHomePosition;
        },
        inBattle: function () {
            return this._absParams.inBattle;
        },
        inActive: function () {
            return this._absParams.active;
        },
        selectOnMap: function (isSelect) {
            this._absParams.selected = isSelect;
        },
        changeStateToBattle: function (target) {
            this.setTarget(target);
            this._stateMachine.switchStateToBattle(this);
        },
        changeStateToFree: function () {
            this._stateMachine.switchStateToFree(this);
        },
        changeStateToReturn: function () {
            this._stateMachine.switchStateToReturn(this);
        },
        changeStateToSearch: function (targetToSearch) {
            this.setAllyTarget(targetToSearch);
            this._stateMachine.switchStateToSearch(this);
        },
        setAllyTarget: function (ally) {
            this._absParams.allyToSearch = ally;
        },
        changeTeamTo: function(id) {
            this.behaviorModel().teamId = id;
        },
        isSelected: function() {
            return this._absParams.selected;
        },
        allyToSearch: function() {
            return this._absParams.allyToSearch;
        },
        canRage: function () {
            return this.behaviorModel().rage == 1;
        },
        rageContainer: function () {
            return this._absParams.rageContainer;
        },
        name: function() {
            return this.aiName;
        },
        isNeedHpBarShow: function () {
            return false;
        }
    };

    AlphaABS.LIBS.Interface_AIBot = Interface_AIBot;
})();
// Generated by CoffeeScript 2.3.1
(function() {
  var Interface_AIBotABS;
  //@[INTERFACE]
  Interface_AIBotABS = {
    initABS: function() {},
    _deactivate: function() {
      if (AlphaABS.BattleManagerABS.getPlayerTarget() === this) {
        AlphaABS.BattleManagerABS.setPlayerTarget(null);
      }
      this._absParams.active = false;
      this._resetTarget();
      if (this._stateMachine != null) {
        this._stateMachine.deactivate();
      }
    },
    _resetTarget: function() {
      this._absParams.target = null;
      this._absParams.inBattle = false;
      this.interruptCast();
    },
    _updateABS: function() {},
    _checkFloorEffect: function() {
      if ($gameMap.isDamageFloor(this.x, this.y)) {
        this.battler().executeFloorDamage();
      }
    },
    startCommonEvent: function(commonEventId) {},
    clearTarget: function() {
      return this.setTarget(null);
    },
    setTarget: function(target) {
      if (AlphaABS.BattleManagerABS.isValidTarget(target)) {
        this._absParams.target = target;
        if (target === $gamePlayer) {
          $gamePlayer.refreshBattleState();
        }
      } else {
        this._resetTarget();
      }
    },
    createNewHomePoint: function() {
      return this._absParams.myHomePosition = new AlphaABS.UTILS.PointX(this.x, this.y);
    },
    refreshBehavior: function() {
      this.clearTarget();
      return this.changeStateToFree();
    },
    refreshABSMotionState: function() {},
    refreshABSMotion: function() {},
    _checkCanShowByParameters: function() {
      var showWhenSelect;
      if (!AlphaABS.Parameters.isLoaded()) {
        return false;
      }
      showWhenSelect = AlphaABS.Parameters.get_EnemyMiniHpBarOption() === 2;
      return showWhenSelect === true;
      return false;
    }
  };
  AlphaABS.LIBS.Interface_AIBotABS = Interface_AIBotABS;
})();

// Generated by CoffeeScript 2.3.1
(function() {
  var Interface_AIBotABSEvents;
  //@[INTERFACE]
  Interface_AIBotABSEvents = {
    onTurnEnd: function() {
      if (this.inBattle()) {
        return this.battler().onTurnEnd();
      }
    },
    onActionOnMe: function(who) {
      if (!this.canFight()) {
        return;
      }
      if (!!this.inBattle()) {
        this.LOG.p('I\'am attacked!!!');
        return this.changeStateToBattle(who);
      } else {
        if (this.canRage()) {
          return this._performRageCalculation(who);
        }
      }
    },
    _performRageCalculation: function(who) {
      var result;
      result = this.battler().result();
      if (result.hpAffected && result.hpDamage > 0 && !result.drain) {
        if (who != null) {
          this.rageContainer().makeDamageBy(result.hpDamage, who);
        }
      }
      this._selectNewTargetByRage();
    },
    _selectNewTargetByRage: function() {
      var candidate;
      candidate = this.rageContainer().getHigherDealer();
      if ((candidate != null) && candidate !== this.target()) {
        this.LOG.p('New target ' + candidate.aiName);
        return this.setTarget(candidate); //if in view range?
      }
    },
    //@requestBalloon 1 unless @behaviorModel().noEmote
    onGameSave: function() {
      if (this._stateMachine != null) {
        return this._stateMachine.onGameSave();
      }
    },
    onGameLoad: function() {
      this.LOG.p('On Game Load');
      if (this._stateMachine != null) {
        this._stateMachine.onGameLoad();
      }
      this.battler().onGameLoad();
    },
    onSwitchToBattleState: function() {
      return this._onBattleStart();
    },
    _onBattleStart: function() {
      if (!this.behaviorModel().noEmote) {
        this.requestBalloon(1);
      }
      this.battler().onBattleStart();
      this._absParams.inBattle = true;
      this.createNewHomePoint();
      if (this.getHomePosition() != null) {
        this.LOG.p('Store home position: ' + this.getHomePosition().toString());
      }
      this.startCommonEvent(this.behaviorModel().cEonStart);
      if (this.canRage()) {
        this.rageContainer().addDealer(this.target());
      }
      this.refreshABSMotionState(true);
    },
    onReturnEnd: function() {},
    _onBattleEnd: function() {
      this._absParams.inBattle = false;
      this._absParams.allyToSearch = null;
      this.battler().onBattleEnd();
      this.startCommonEvent(this.behaviorModel().cEonEnd);
      if (this.canRage()) {
        this.rageContainer().clear();
      }
      this.changeStateToFree();
      this.refreshABSMotion();
      this.refreshABSMotionState(false);
    },
    onSwitchToFreeState: function() {
      this.refreshABSMotion();
      this.LOG.p('In free state');
      this.clearTarget();
    },
    onSwitchToReturnState: function() {},
    onSwitchToSearchState: function() {},
    onSwitchToDeadState: function() {},
    onSwitchToStunState: function() {
      this.clearTarget();
      this.stay();
      this.LOG.p('AI : I\'am stunned!');
    }
  };
  AlphaABS.LIBS.Interface_AIBotABSEvents = Interface_AIBotABSEvents;
})();

// Generated by CoffeeScript 2.3.1
(function() {
  var Interface_AIBotABSMoving;
  //@[INTERFACE]
  Interface_AIBotABSMoving = {
    stay: function() {},
    moveTypeTowardPlayer: function() {
      if (!this.isNearThePlayerX()) {
        return this.moveToPoint($gamePlayer);
      }
    },
    isNearThePlayerX: function() {
      return this.isNearThePointX($gamePlayer);
    },
    isNearThePointX: function(point) {
      var sx, sy;
      try {
        sx = Math.abs(this.deltaXFrom(point.x));
        sy = Math.abs(this.deltaYFrom(point.y));
        return (sx + sy) < 1;
      } catch (error) {
        return false;
      }
    },
    returnSlow: function() {},
    returnFast: function() {},
    _escapeFromTarget: function(target) {
      if (target == null) {
        return;
      }
      if (!this.isMoving()) {
        this._performEscapeFromTarget(target);
      }
    },
    _performEscapeFromTarget: function(target) {
      var distance, escapeRange;
      escapeRange = 2;
      distance = AlphaABS.UTILS.distanceTo(this, target);
      if (distance < escapeRange) {
        this.moveFromPoint(target);
        return this.turnTowardTarget();
      } else if (distance > (escapeRange + 1)) {
        return this.moveTowardCharacter(target);
      } else {
        return this.turnTowardTarget();
      }
    },
    turnTowardTarget: function() {
      var target;
      target = this.target();
      if (target != null) {
        return this.turnTowardCharacter(target);
      }
    },
    runAwayFromTarget: function(target) {
      if (target == null) {
        return;
      }
      if (!this.isMoving()) {
        return this._performRunAwayFromTarget(target);
      }
    },
    _performRunAwayFromTarget: function(target) {
      var distance, escapeRange, realRange;
      realRange = this._absParams.viewRadius / 2;
      escapeRange = realRange >= 2 ? realRange : 2;
      distance = AlphaABS.UTILS.distanceTo(this, target);
      if (distance < escapeRange) {
        this._applyAproachSpeed();
        return this.moveFromPoint(target);
      } else {
        return this.changeStateToFree();
      }
    },
    _applyAproachSpeed: function() {},
    startPursuitTarget: function() {},
    moveTypeTowardTarget: function() {
      var target;
      target = this.target();
      if (target != null) {
        if (!this.isNearThePointX(target)) {
          return this.moveToPoint(target);
        }
      }
    },
    moveToAlly: function() {
      if (!this.isMoving() && !this._absParams.behavior.noMove) {
        if (this._absParams.allyToSearch != null) {
          return this.moveToPoint(this._absParams.allyToSearch);
        } else {
          return this.changeStateToFree();
        }
      }
    }
  };
  AlphaABS.LIBS.Interface_AIBotABSMoving = Interface_AIBotABSMoving;
})();

// Generated by CoffeeScript 2.3.1
(function() {
  var Interface_AIBotActions;
  //@[INTERFACE]
  Interface_AIBotActions = {
    interruptCast: function() {
      var action;
      action = this.currentAction();
      if (this.isCasting()) {
        this.LOG.p('Cast intterupt');
        action.resetCast();
      }
    },
    _makeActions: function() {
      var actions;
      if (this.isCasting()) {
        return;
      }
      this.battler().makeActions();
      actions = this.battler()._actions.filter((function(action) {
        var skill, target;
        skill = this.battler().skillABS_byAction(action);
        if (skill == null) {
          return;
        }
        if (skill.isVectorType() && skill.isNoTarget() && (this.target() != null)) {
          return this._checkNoTargetVector(skill);
        } else {
          target = this.target();
          if (skill) {
            target = skill.isNeedTarget() ? this.target() : self;
          }
          return AlphaABS.BattleManagerABS.canUseABSSkillNow(this, target, skill) && AlphaABS.LIBS.AILogicManager.isUsableABSSkill(skill, this.battler().isEnemy());
        }
      }).bind(this));
      if (actions.length > 0) {
        //TODO: Сделать умный выбор, например в ближнем бою не выбирать навык с castTime
        this._setForceAction(actions.first());
      } else {
        this._setCurrentAction(this.battler().action(0));
      }
    },
    _checkNoTargetVector: function(skill) {
      var d, isHard, result;
      if (!skill) {
        return false;
      }
      result = AlphaABS.BattleManagerABS.canUseABSSkillNow(this, this.target(), skill) && AlphaABS.LIBS.AILogicManager.isUsableABSSkill(skill, this.battler().isEnemy());
      d = AlphaABS.UTILS.distanceTo(this, this.target());
      if (skill.range >= d) {
        this.turnTowardTarget();
        if (skill.isDirectionFix()) {
          isHard = AlphaABS.UTILS.inDirectionHard(this, this.target());
          return isHard && result;
        }
        return result;
      }
      return false;
    },
    _setForceAction: function(action) {
      this._absParams.currentAction = this.battler().skillABS_byAction(action);
      this._stateMachine.switchActionStateToAction();
    },
    _setCurrentAction: function(action) {
      var skill;
      skill = this.battler().skillABS_byAction(action);
      if (this._absParams.currentAction !== skill) {
        this._absParams.currentAction = skill;
        if (this._absParams.currentAction) {
          this._stateMachine.switchActionStateToPrepare();
        } else {

        }
        if (this.behaviorModel().escapeOnBattle) {
          this._stateMachine.switchActionStateToEscape();
        } else {
          this._stateMachine.switchActionStateToWait();
        }
      }
    },
    _performAction: function() {
      var action, currentAction, process, target;
      currentAction = this.currentAction();
      this.LOG.p('Perform! ' + currentAction.skill().name);
      process = AlphaABS.BattleManagerABS.battleProcess();
      if (currentAction.isVectorType()) {
        action = this.battler().action(0);
        target = this.target();
        if (currentAction.isNoTarget()) {
          target = AlphaABS.UTILS.getEndPointFromCharToRange(this, currentAction.range);
        }
        process.startPostBattleAction(this, target, action, currentAction);
      } else {
        if (currentAction.isNeedTarget()) {
          process.performBattleAction(this, this.target());
        } else {
          process.performBattleAction(this, this);
        }
      }
      this.battler().performCurrentAction();
      this._absParams.currentAction.playStartSound(this.toPoint());
      this._stateMachine.switchActionStateToPrepare();
    },
    checkActionCommonEvent: function() {
      this.startCommonEvent(this.currentAction().cEonStart);
    }
  };
  AlphaABS.LIBS.Interface_AIBotActions = Interface_AIBotActions;
})();

(function () {
    AlphaABS.DATA = {};

    AlphaABS.DATA.DefaultCastAnimation = {
        "id": "anim_cast",
        "animation1Hue": 50,
        "animation1Name": "StateDown1",
        "animation2Hue": 0,
        "animation2Name": "",
        "frames": [
            [
                [5, 0, -133, 260, 0, 0, 120, 1],
                [10, 0, -217, 200, 180, 0, 120, 1],
                [11, -120, -183, 100, 180, 0, 120, 1],
                [11, -32, -247, 100, 180, 0, 120, 1],
                [11, 50, -247, 100, 180, 0, 120, 1],
                [-1, 112.5, -263, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [6, 0, -133, 260, 0, 0, 120, 1],
                [10, 0, -233, 200, 180, 0, 120, 1],
                [11, -120, -247, 100, 180, 0, 120, 1],
                [-1, 368, -123, 100, 0, 0, 255, 1],
                [11, 50, -297, 100, 180, 0, 120, 1],
                [11, 110, -123, 100, 180, 0, 120, 1],
                [11, -64, -123, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [7, 0, -133, 260, 0, 0, 120, 1],
                [-1, -408, -216, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [11, 110, -135, 100, 180, 0, 120, 1],
                [11, -64, -183, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [8, 0, -133, 260, 0, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [11, 110, -199, 100, 180, 0, 120, 1],
                [11, -64, -247, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [9, 0, -133, 260, 0, 0, 120, 1]
            ],
            [
                [4, 0, -133, 260, 0, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [6, 0, -133, 260, 0, 0, 120, 1],
                [10, 0, -233, 200, 180, 0, 120, 1],
                [11, -120, -247, 100, 180, 0, 120, 1],
                [-1, 368, -123, 100, 0, 0, 255, 1],
                [11, 50, -297, 100, 180, 0, 120, 1],
                [11, 110, -123, 100, 180, 0, 120, 1],
                [11, -64, -123, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [7, 0, -133, 260, 0, 0, 120, 1],
                [-1, -408, -216, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [-1, -408, -123, 100, 0, 0, 255, 1],
                [11, 110, -135, 100, 180, 0, 120, 1],
                [11, -64, -183, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [8, 0, -133, 260, 0, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [11, 110, -199, 100, 180, 0, 120, 1],
                [11, -64, -247, 100, 180, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ],
            [
                [9, 0, -133, 260, 0, 0, 120, 1]
            ],
            [
                [4, 0, -133, 260, 0, 0, 120, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1],
                [-1, 0, -135, 100, 0, 0, 255, 1]
            ]
        ],
        "name": "Cast4",
        "position": 2,
        "timings": [{
            "flashColor": [204, 204, 204, 204],
            "flashDuration": 11,
            "flashScope": 1,
            "frame": 3,
            "se": null
        }]
    };

    AlphaABS.DATA.DefaltCastSE = {
        name: 'Magic3',
        pan: 0,
        pitch: 100,
        volume: 90
    };

    AlphaABS.DATA.IMG = {};

    AlphaABS.DATA.IMG.IconEyeOnSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEi0lEQVRIS+2Ue0xTZxjGn9PTy2lPe1pKoRUUpdgpl0m9AZlj0SE4UOc0xjnN1Iy5OZ1TM6dmiXOXxLlkKmEGU6JxmYlhJJsxisiI0enqqk5RK1SRUgt4GS29nPZAW0rPQhOJm3OQJf6xZN/f7/f8vvf53vch8IwP8Yz18T9gWIdHYpGQYUTTBDyyePBqYNBWwhMDbwsEor8BiPwT5akAlYoaG4v1Z4tJat3MqfOTjVl5ahWjkYAg4GPd4eu2y57zV+tcXDhYJRCIWvz+UPvfgZ4A0DR0IoGozJCWu2J6TqE6NzMvKWviJHWCJkEsocm4RigYhd/LRm63Wj1NzRfdV5p/8bS0Xz1CDghPevr6Oh8H/QnAMGSZVEivK3/14wmzZ84dw6gYMT/AIyGFBiICuDt743fVqTKQMh6ee0HwALggFz1n/qnL9OPOW30htsobCB9/BBkCMHLx0gmpxrXrl35hTNfrFSEuCkouhGaUEpb6Fpwzn0E4EgFJkpDJKRRMnYG8kiz43AH0+vtByYRw3nUG99d+ft3a9auJZfsPD0LigMGXZyTnbtmwaHdBsjZJAvCg1RJkzUhD3bdm1HxXi+zJmZAGteA4Dt3sfXT12LFsxRIsXlOCW5ec8D3sA0kK4HH7+vfWbrbceXBlty8QOUbIZBiVKNcd+mih6YUMg15BK8VQJFGYPG80rCfcWLNiIxYvWYhFy+Zjx/YdaHXYkD+uFNH+Adx0XMZX33yG/CXj0FTfCbY7BM4bgdPu5Hb9sNrsD/WsJZQK0TurZm3fWlL4mj4xTQ6lTgqVToqkVCUqt9bAcvwWMo16nDDX4EpPfdzaRNkovJe/B3ecNozP1+CTfevBBjj0dATjnXjvcfj5QkNHVcO2rwmlQnj00JZLCzRpDKHSUqAUQqjHyEHLaHy50QTfDREE0igqLr47NBwiQoxNL1aD84dAjvFiZ/U2RIV96LYHEQpE4P89BM89Dit3Tj8R72Bewaq1y+e+n5M4miGVWikouQhjjWrUVVxHxacmFBfPQVv3DdReqkR0IIoFU95Gru4lNJ47ibc2vY43ts9E100ven0RsK4Q3B1s7PsGU/PR89X745+sVIjKpxpmlS8v/SAz+/kslVwjQWqmEpSYxo7VlbCa7Sgqmg30UiBIHoxKjjNnT0NjkGLX4c2ICvrgbPKC84Zx29bK1pyqsl1orj/gD/QfGBpTJS0s4gVE2co5H5blT56l06dnqPR5GlACBgf3HoH5mBUpSj0YhRJenwfjCxPw5oZFgDQM+0UXHI521nLt7P0jDRX2SCy8j2Wjp4bG9JG5Wi3oECcupWVMeaGxNHmcbiJT/MpsXU72JHmbtRN3HR1ATICUNC0Mk8airf0211jX+LD9gc1vsTa6vaz7oFgaOelyIfjEoj2+3qMBKacQTuNB6LPT88sLjC8nP5eTQSkUcpIHj2CAG2hrcYQs1067rHbLIfB8m5CKNrndCPw1j4ZNU4aRGIgYPwXg1YQAkkGBWGwwQQkPTxBXA4Fw679K02GDfoQFw3YwQp2nlv33AX8AD0rMXew8j40AAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.IconEyeOn = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconEyeOnSrc, 'IconEyeOn');

    AlphaABS.DATA.IMG.IconEyeOffSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFCUlEQVRIS+WVe0xTZxjGn9PTc057eoMCcovFFlFE8QYi6twmDEgYZpdsysYcGC/ZmJlxyXSbc5ubGo3OGZUZjMZsRo1Gp4ILXhYTXAADbpGbgFIKltbSyimcFno57ekiicTpmFsW/9r35/fl+X7f+37v+7wEnvEinvH9+J8ANhkMqfFK5QQvTYf7AQx7vVytx9N92WhseVqK/zZFW6ZMycxKSnqdZejUPrdbIw0GGFIUQYDwR7CKwV6Xq7Gss/N0pdncMBZoTMDejIwNeRMS8mqslklamUYWpY5gAgQpgRiCNCiIDqfD5/E4fSlqVcdBk6mqzNSz868gTwAUCsQUjU/aVpQyM982JDBhqnDGFWOgybgEUqPXAyGAN3ZC1tMRjHTa/Fan3cf63P5dbTer6j3CJs7jMT8K+hNArSbz4xjNZ6cK3pnukjAKmUwmYQNBdKWmY3LqC7hvHh7RauNZkGwIN3++gOm9LRgUhFDQbhl6q+Fqk1MY2u50+SofQkYBaiVdODl+ZunXmYvmxqtYmh90QyElIFPKMHi3H2VdHgSl0SBJEqxShsy0BcjITUHLlZ+QZjMiSAIN/S7hQFdbfXNvXTnPC0cfQEYAD16eOG7G+uKsdfMKaDPNu3jcZlQYn/M8iBMnYLXYoJXTqOQTAakedt6K3n4j3n53Cd54LxeN32xEmOUeRCmJWn1O4OjV/XV37v327YDLf55gWcRGKGOOfPxa+fxIul81ExawIQGO3DmgxQysKS7GlhQWcZFhaG1qwm4Pg1kTixAQgmgxNWDHvs0g5c2I/eEc+IEhVCe+gBCdMLT9zKqaQW9/KaFRUatLFm3akLvwVQPD34BOsIElg7ifnY2rZ3pwvbId8boAUhqPgRdsICkKZUEZls7dizs9bZg4NxIlK+dBU3EafnMfqnWzoU3IQnXtpbvfX/pkF6FRSc8eWV//SqROTXgttZjmd0B09cOWnY+K4y0YaKIgkQdwpOF9bFYoIAHAUDSadSsREvUgxzuxpjQLUdUV8Pf04VribMQk54KzDKF425wLIxEUZJaUFr28Zpp3uINM59ox3HELXOFicPap2PNVOXJy8tBpb0JV/R58zkqhj5yEKFU8Nhp9WPbRWqSmDcNw8RqGnTx+MWQiTDtLPHmpvPXsrwcPjHyyRkWtSEtatKJgQeHUXEud2sVzkBhiMX3rPny5ai+aa4zIzn4JGJZh0NWGN703wN13QKIiodi4DoypFXGt3eCGvKiITndfaTjfWttadWjQJRwaLVONQpodkhD5X0xaWJwehCo8LJx25L2I9KUf4PB3x1FzvhlxGgPUKg2sfb9jdZwJKakG0AoKdocXcPPCye4ufmdn3XW/6NvP84GLo2X6sCmio6EgPfLlu1nNpx6RksVooigudzH9XMk6xtxhR7fpLiBKEKeLhoSwIan6XMBm7vWIhCC47Gbf0tu3dkApHHY44H6i0R5t72Xh4YVr/b7ld/w+pTQydqJXl0wPJCeLRESUSAGQDnASWKyhcZw5aKAlRjVJuj5sbvzxrJM/9rgfjWl2y1h28XqSXCIEAqo+CbRsuJaRyuQSUFLISYkoCwb945Qqjg2BX2E0njrhdI7aw5he9Dg9laaTV1JUwXyKmhFFEFCQJGiGAWgaAxSFy25301artbIbaP/Xdv2owCCX6yaHQnotQWgf7HOhENfu9XabgJ7/NHCeJv4n58986P8B/zQPbJx1c8QAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.IconEyeOff = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconEyeOffSrc, 'IconEyeOff');

    AlphaABS.DATA.IMG.IconTransferSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAERklEQVRIS7WVf2hVZRjHv8/znnPvnFepLAOLrKxA770zKkiioN8iNH80z7Y7jIamBEa/WGRJeMlECoxCiBRCQefd3ZmJbpBUlvRHRTOru00RCisVC3V2m9vuds/7PvEenS678+ofHQ7nj8Nzvp/n+77v8z2E//miK9Fftmyfmz8VXcWMajBtyGQTH5T7/ooAntcTiyg5ZAymiMggCTVl2i4NuSKA7Xbp4p7a0716g+PSVQACYn45k42vH8tJSUBDQ+7q4QE9UzHfKcw3KIIYEXFcVTSBGQyMpBRT3IoSEUBYfvzPExv37n0ouBj0H0DjUz2e1rKkUJDZjkuAiL3DyxiAGWBFMPrsSwsQERB4TsaP774koL6263UCrTFGEDZmH5BABMZqMZMAlBdj+kA8VcQo2z6R5KNKZsFxbx8aDBKZtuTaEdB5B0sXH2zM/1XcZLs719kuEbPDEI4qUaYodrmVoWJwTAuloxXKOnW0xpnIOHo4FlVOX7/+2roZHpJV23cmVwMkodqSJd23BUP0/eCAmUiMYWKs1MIf+n78zMWW58/96bXx49QLWuR6AvoBSmVaE+1PzPnx8cpK7ohElEsMBAUzM7M9mQsBdV5uBYHWhisCbMi0Jp8tdSqWLz84Kd+rTwZFgRDyDmNRczbZcbZWaEF1bvX4mFpp90xrfNTiJ54JJb2a3Feuww/oQI4YNo/5/sxDpQDp9JfOH8empE6fGrqfHe6wnY+uq67eVxmriHYS0wxj5LcWP3lzCKj3uk4AuNZxec/WbfFHy01nY+Phis2bbymUqqv3uj8H5BEAJ1v85HUjgFMiuMaNqE+3bpsxu9SHnteqfL9Wl4OnvK7PBLBNXgDU1eS+dVy+t1iUw8L8oO/Hfx8t1FCTuzUQNFaMc34YHO7eNRbI83oiCqZTBFWOQ0eaWxI3hQ5qF3a/qRhvFIcNJkxQ6zZtiTeNABqePDDVKN1BhES4eeBJvh/vLeUk5XW9AsIaY+AqRdlt2UR9CEileuIKsr84LBHX4cEpN7qL3ll3x8fz53dNizqyk5niRDRktOxsaUvWlRKvW5ibJ6CNijFZKcJQwdzn76j65vyg1SzIvRRReNeAEIvRXA3qHOgze5gxw0600fKLCC1ltj7sBNtJd+zITxSYWRB51b6z4iyyftr0xIvpNJl/ZVH9wq6maISPa6YvTCDtRsvdwEjmcB6Qv0VkMgAOD34YVRQZqXEdQn+/bqu6q6rOiodNlLLbUNs9WxvZbWNDzIVQs7UjOXU+a85llg7wa6QC729pTrw3WrMkYFn1vsq+aMVzAnmb+GxaCtBJJNsZaqKGdsLlAHFgpKCEfzaOfJfNJg9e3PAlfzh1NbkVrHitXQJjcMJR/HRzNv5JuVko62B0wbmcess2TISjgfD0UiE4FrTsLzOdFj7Q3dPEJM8z0/7YQKF+Y/s9A5froizgcoXGqvsHOBriKPKsbvsAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.IconTransfer = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconTransferSrc, 'IconTransfer');

    AlphaABS.DATA.IMG.IconInBattleSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAYAAACw50UTAAAEzUlEQVQ4T32Ve0xTVxzHvy0XriKWR20lIoqUlyLDBw+pyoKSKS+LdVgWceCcBll0k5gZ0cmtcRrjNufcxMBQUMyozEopiC6oGWoRAYUp8mzlJYFWXgUfFy7tdl0wisr57+R8z+ec8/v+fr/DwbhRCCw3AX4cgATQwwUqIoDq8boiYIEJ8AfANwM0F6iMBG6+qeOM31QA7CwKW02J5nuTPW3tT+dfVObYMkz+GuDOmLYAWDJAENEP10nj+LOcp2kf1tIRxVeoNcCxCeEqgGqWH0xN3r8XQzDh8Jebe9yyc84IGSY3EqgqBBbrCSK2OT5u057fM/k24OKnA9/DLXWfXAJQE8LVwFfKVVGUtVQ+zXmGHbZFzkHali+6Zmady+IxjNJIENKOhI0J2zJOO6YVPkZ7Zz+eK1OfSq+qqSjgtwnh+UDgAEl+qloaFj9z6yHBQldnJPjb4IfEzXoy6/wFOmHD+l2nMoVZFUO4r2tHR3qKQXK7ONuWpv+MBsonhLOLaiDAaEVI70g3bPbc/cu0WTwCIXwGP6bsZr47/itR1Eajzcig4ciOp0uU5zN5w4wyCrg73r93DB0TsC/oIS3XN23askmUJLc3qjOQnLIHmkGg2UCj7mhyn/uZjDN8euTC+BuPMT4IZwX5gPgJSco64+OTDqalEWX9XOgGGdw/soNxPX36pBNNK6IBzfgbvxeeDzhzAH8u0GICuM8IQqr7TPb53rM5TrcHgKrWF9BlH8beXYlI3/3tE9c/FGenMIySC5hMgIsZqIgG2t+BXwYENJe7/bbfIslco0WLsL68+K4sijqQq5pebuSgZXAUpfu3jwYkyy28nAUI5JmxP1bSHaBQU3qvwLA63qjL0sp7KtJkOhEOGNgDXoelAAhTe8yl/MRuAd5zBDifcf2Gz6FjIZKN0SjtMqNiX6LRSZGjeCKLk/kfPMULduRAdS4fD1J23tiwZUVI7WMDKjXNd6Ma69hiKn4LXgi4PnB0pJocPCJ2fu3hUFbdj4sDoVgQzB95WZo34Jt3KVs4MqLSW1pKamLWxk8KjrGtLu2xXGdbgqAFdjh2vLHXvbexyKeri4oEdG/B2QnbV644OH7jJQuVelqZUDv4Avq/dbeCtDW5o0AlmxVsFlkAfmUi31jhx67LvKdORsMwF/WKEuXq3q6f3+wvr8JyCRBxAf/nnrNDS2ysY5a7O/NeOkyHeBGJ/pZhWqt4VGTfVElFAw/yAZ8+dz9KJJsXYediRWru0ZjU242bTe3G0KHnedYNrSUmoGItoOWYAU4BkFomXizbSsW4N2paLMrKq2jDP4bSQdvZ4hViuymPGvTaZTfLKAmQowLibi0PouZ5CkXXNf3Ppg60agQfCYKDAheTHmKX0XQqrylIU6VYA8hfwy/PdE09FRuDx6umQ749/b60vp5qEArXNjsIfD9pbrhMMkxOFFCvBrxogoj7y80z3K3XUOOp119SenlRqSe2LpxztRuJuXkI79DJX8HZsKiAiBqRKOnZMFa+mM03etc2KRz7+g6bACsLwJfNXwnQOZa/KmAGWw+jQA0XGO6yt99T6+0um9zaw5tihWu+Wu1JCVD0Cs6GRgWsZI0yA0YOUPm+XvGhSmR7kfn/D4bHGi8BrnH+w/4LyCj2IobQYBAAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.IconInBattle = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconInBattleSrc, 'IconInBattle');

    AlphaABS.DATA.IMG.IconFollowSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.IconJumpSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.IconNoWeaponSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.IconToMouseSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.IconToTargetSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.IconSwitchWeaponSrc = "data:image/png;base64,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";

    AlphaABS.DATA.IMG.IconFollow = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconFollowSrc, 'IconFollow');
    AlphaABS.DATA.IMG.IconJump = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconJumpSrc, 'IconJump');
    AlphaABS.DATA.IMG.IconNoWeapon = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconNoWeaponSrc, 'IconNoWeapon');
    AlphaABS.DATA.IMG.IconToMouse = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconToMouseSrc, 'IconToMouse');
    AlphaABS.DATA.IMG.IconToTarget = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconToTargetSrc, 'IconToTarget');
    AlphaABS.DATA.IMG.IconSwitchWeapon = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.IconSwitchWeaponSrc, 'IconSwitchWeapon');

    AlphaABS.DATA.IMG.ControlPanelItemScr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAB8klEQVRYR2NkgAJdbd1+fX39QCYmJnlhEWGYMIT+jcplYEXjE+Ki6f/D9Ifh3r17D+7fv7/m2rVrpSDtjCBCR0dnh5GBkbuhoSHD+fPnGejhkLt374Kd/+jxo/dXLl8RYhQXFy90d3Xvgzni8pXLDD9//kT14380L4OdTwJA08/Iwsjg5OjEAHPM1atXcxldXVwveXl66YJCAuSI8xfOk2oNCS5CKNXW0f4Pc8zzZ8/fM0ZGRP6Xk5Bg2LRtK8P1W7fo4giYcyIjI1dLiEuE7N65nWHUIaBQGcQhIivHsGnzJobrN67TN41ERC4QERaJ371nNzSNjDpkMIZISHDIf2Ul5YFPI6MOAZUjyLlm0IQIuK4Zzb6DMfuORg16rhkNkdEQwdLERilZR9PIoE0j/n7+/3V1dBnWrV/HcO36Nfq2WaH9mu3btzMwDhqHeHl6XWJnZ9e9efMmXUNETU3tv4qyCoO6ujoDOEQkRCUSLa0t54FyFx8f334Q/ffP35fIuY2RiRFlnOL/v/9v8XV40dWjq/3z98/Hjx8+hoAcAQJbt219CE4TstKy893c3BJgGvj4+VD0/vn9B4XPwsqCt+NNinqQI27duqUAT5yysrKJrCys4JBhYUe16P9f1HEFRmb8aZpY9YwMjO9v3rgpBLITAEmWq1dKfotPAAAAAElFTkSuQmCC";
    AlphaABS.DATA.IMG.ControlPanelItem = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.ControlPanelItemScr, 'ControlPanelItem');

    AlphaABS.DATA.IMG.ItemMaskSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABbklEQVRYR+3ZsUodURDG8d8ajBITlIhoCjGQ4BvYBdLZp7K28SV8EbGxthCDpbWdbxASiFioiEHRSBJJjszlCJcUQsDrsmGmO5xl9zv/+c4szDSllHm8wjvMYgpPMKTd+IPfOMUh9nDUlFLe4wNeYwzDfWJLS5qb+t0QfYPv+IrtELyKBYxjtO/BOF2bgvuz/AMX2A/Ba3iD59UKsfkTv2pK2oAcYp9ipEIMeFf4EoK3MFk3A/8ujnGOEN9GRKYnMIPFatOAeBaCP+JlpXuNTRxUs8e6jXhWL/8clhDroPwtBO/U04SwS2zgM05qGtoQHPacxlss40UVcX4nOC5cRBh7HZ96JaRp4gCPHqWUEBilNkruSi0IPX0p+CHSkYQfguJ970jCSfgvAmmJtERaYtAeSMJJ+H4CWYcH7ZAknISzDg/aA0k4CeefLltV/3QL/stfczSPIzrRbu1cQ7tzI4PODWU6N/bq3GCxU6PbW0KSB7EkCuauAAAAAElFTkSuQmCC";
    AlphaABS.DATA.IMG.ItemMask = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.ItemMaskSrc, 'ItemMask');

    AlphaABS.DATA.IMG.LevelBarSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAm0lEQVRIS+3VywkCMRSF4T9duZx2UoAFuEgTU4VagSsLGZxHA64GRrmQyBCQoOTskm3C/bgnLwdM/DaewAw8gDtwBYZvJdwfQF5ri0gAxnyyBpBqWmdH4LxHagJW9wWcgD4htYGE+BgbCsAQi6uzPVEBhlwArwTsdB2UgHUR1MBNDSxqYFUDsnvweS1aB8WfpEXUIiomUFwgP0VvdYUrvfzksgYAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.LevelBar = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.LevelBarSrc, 'LevelBar');

    AlphaABS.DATA.IMG.BarSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.BarMaskSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAgCAYAAAD9jPHNAAACRUlEQVR4Xu2by07EMAxFbQR7PonXih1fygcwAj6JFUuMUjUoZJykzWMUV3ckxCK1c319Jun0wYQPHGhwgBtiEQoHqAiQiHwQLcdJ4JcW58Zz+eLx0vGp9pTitPFSjDaXj9kSGx8bexWO98RuizY/X9zDnA6Xd/lj5qfcgVmAVnjC+FBECb5Ucd7cUnypwFR8OG8J+h7NjOfzHoX/w3k0mMJaRsAWe6V9OUKvvF4P0WPKqGQTA3j8MXHj99Dv5t97vGZ6XEdLzpSmPStly/y5WG0Fc3pjOLW+tnwxvSex924lUiHaApBL9sLMXz2+rshhwwERuSWi17/9j/l+M63R1vWTos+GFVBZ64CIvBPRlT//ZQUidQVaA5cxLahWEOLsOSAin6tqt42drUI5gFZ+9KXLnhVQXONAC0BYgWocP1hMAJDbje7i8rCFHazhvcupBchdPFw+OAfq3RJb+QCQrX5Np7YVINb2vemqhKBhDrQChC1sWGtsJK4FyP32Xy61YwWy0ehRKlsA8ifRZz/dRolF3vkcaAVIvfo4X5lQNMqBVoDUi0ejxCLvfA4AoPl6YkoRADLVrvnEAqD5emJKEQAy1a75xAKg+XpiSlEzQETknkh8MFU1xHZxQETeiOjGJ9v8OIcLCMkjomdm/u6iCklMOCAi10R0ysHjxnIP1ftHGU0UDJGqAy1vjfxLmLqlVXovDBDNQWY3EGrKyd0PLb5DFG1lNfMjxq4DxVtZRYDs1g7ll3AAAF3C5QPPAYAO3NxLlPYLnQgDMIzLxxoAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.BarSmallSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAUCAYAAABGUvnzAAAEFElEQVRoQ+1Z32tTVxz/nHN/pKQuGtv0Iuu0o22wL00ZLmMiLCKzBdGhz32sMhjuSRC0+LAX/wdxjGaTiXtw6+PeHLZjXdOH7iGzSIcP0g02G5smjUnOPeN70mTx9t4sJQhNeg8EbpJzv9/P9/P55nC/nzD4q6MZYB1dnV8cfIE7vAm8BNYADAIIAyh1OAedUJ4O4G8AfwCQ9QW5CUzifhAIBC4NDw9Hs9mszjlnpm4yxhkkJBhj0Dht27noe1vYnqRxjYNtHxy0Vwih3tO1pmm171phXdgCUsodsVQOpoHqaHVJW0LICnZahF0tBoiyQLlcVjzV1+XGnTNOFZcTK70PGAGAUwqmeNsqbMnD4cMyn88Xl39bXgYwC2AJQE0AZ6XUCSc55xNXP7s6FQwGI3Pzcxld12UwGLSpCAJEIhmGoUjcsSRQKnn/6Ok+IoGKt20bpWKpQoSU0A1dEeUat0lFKBblpyaj6/qlcug6NL31HOVSudKc2zkM01CpOON4VXyFQqGgrimnaZq1Guu5o3udcWoCO7FKoLu7u9JIrMLxi39e8KGhIZ74KHHw4fcPnyW/SX4J4EcAv1TjOAU+HgqFrlz85OJkoCsQSc4k7xeKhTkAfwEoU6M2ybO/7c0zIACYAKyxsbEz169dv/Dop0fPk8nknXwh/4WXwPGj7xydPp04fX7m65kHAL4C8CuA7PbZ3vrZ9uYL3y8Z6PgkPeg56UPLsqbOfnz23OwPs3dfZl9e9hL4PavPmu7v759ILaVuAvgWwJ/7hbE2rvNdAJOxWOzG6urqTDab/dRT4CPWkVuDg4OJx/OPPwfwHYCtNi58v0A/RAKPj4/fXlhYuLe+vu4tcG9v762BYwOJxdSiL3D7tIcSOB6P306n0/ca/oIty5ruf9s/ottHW4VUHdEn3j9x48nvTxoe0fHwofD06Ojo+cXU4oNcLuc/ZO1dpV97yAqFQlOx0di51FLqbj6f93zIOs45vxKNRicHjg1E5n+ev7+xseGPSXtT5NqYFA6Hz5w6eepCOp1+/nT16R0AnmOSMjoATIyMjEz1Rfoim5ubGWEL6hZXe4pcFRq6q0M/De/Vod+NFzI2aPinFw39pmEqt2fHsoFiqag+pr1kkCgTxLFXuTq2eM0wofzktLnGdSSqx0PxlYHjhqeRyA6sZKbQa9dYm4xTB4VrXOMH3jpwcG1t7dnKysr/Gh10r7IqAVzq6emJdpldui1tmrfcZ2Cy5oSApB7YttFqtp0LKWovEWgDTGMVZ8bVEKvYmGrZgGZoFdfIuZc+khKiJFT+hntbwNNI36rlWsNKlqu2e6xNx/kPjOSMy9xWrpjJZJqyKqu3+n827M1j2QvVrv5saK/SfLQNGfCtxw5vEF/gDhf4X+fm2SSFmWFfAAAAAElFTkSuQmCC";
    AlphaABS.DATA.IMG.BarSmallMaskSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAUCAYAAABGUvnzAAACwUlEQVRoQ+1aQYvaQBR+o4kiLClbNXTFan+Dd08KolsQpCcPglA8lELvpRR6KP0HPQilxR9gD1ZRvHjw6lkQhNK1qGuruFqaNWGnPEm6cWtjlcQVOnMyw8z3nt+XSWa+FwJrGqXUBgACADgA4GrdGNZ3UAygXpcAcEEIofrMiP6CUnoPAE4B4P5Bpc+S2YaBLwBQJoQMcdJvgZm423B48GPPAOATirwUWBX3IQD48XqxWJBWq3VnMpnwPM+vLPmD/2v/YYKyLBNRFC9DodCFzYZP62U7I4S80wR+rBe3Vqt5R6ORy+fzKYqiUEII2O12JvQWNw+l13Qhf2Y0juOuYa4AUFinywmSJJFer8cHg8F5JBL5znGcFvwVUTdUL3GmJEk2FHc4HLpyudxnM5JiGPtjIJ/PP/D7/T8SicRIjfoWBT4GgGfY0Ww2j7vdrhCPx89FUfy5v9RYJDMY6Pf7R9Vq1ZPNZrXF+QEFFgHgCQaoVCpeWZYdyWTyqxoQ74SPZgRnGJYy8AgA7mKEQqEQyGQyuJPG9h4F9gDAU7yq1+ue2WzmjEajQ0EQFHXQa0KIbGl6DHxnBiil+GJ+gQDz+ZwrFou+jQKHw+FvXq8XD87Y3hBCtN87J8ImWsMApRTNqOeIPp1O+XK5fJJOp41XMBPYGjGsQNULjMfaUql0snEFs0e0FVJYg/kvj+iVTZYkSY5UKsU2WdboYRWq4SZr5ZjUbreFWCx2HggE2DHJKjkswu10OkeNRsOj8zCWxyT0tpjRYRHp+4Rda3RgApTSP6zKwWDgcrvdimZ73SxD6RPX23LYb2TN7Tp2k923qzW4TT5GYq3ExxqOgTtplOuWOMsoWDsYj8frrUpVYCwTsmLDPpebibE2Fht0IrNasInE3yLUarlQS4TVhG9REvNCry/433insk92zCN8H0h//WTnF56idCjk+xJiAAAAAElFTkSuQmCC";

    AlphaABS.DATA.IMG.Bar = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.BarSrc, 'Bar');
    AlphaABS.DATA.IMG.BarMask = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.BarMaskSrc, 'BarMask');
    AlphaABS.DATA.IMG.BarSmall = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.BarSmallSrc, 'BarSmall');
    AlphaABS.DATA.IMG.BarSmallMask = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.BarSmallMaskSrc, 'BarSmallMask');

    AlphaABS.DATA.IMG.VectorHolderScr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAmCAYAAABu+H0XAAAE4klEQVRoQ+Waf2xTVRTHv+fcretmFhF/JRpRcDEmi4T1tQw1KpqYaBQk4C9ijCFhW7NNmJmgIpHJDEuYbrg5RgsEJUET4o8EYowaAxrB0L12oJlRgaHGHxAWNgVhdH33mLessKxvutGW0K5/3nffue/76fnee+57l5BhPyNgzoNoP8A/gPBauMLbczEl0MUcLNmxZrR33kSwDjFD2bG0xglieinyp2cT6kgnG38s92cUMF8wdI8W3j1SmCaEiKgyUmaExyI6mT4ZBax4e5crt+fUV0qp0gTRWguI26PatfK7yum9yUD5r3szCpgtxIaW33u6xtKyipkLHMAdF6WWR/7wbE2HTTMOWByQry10g5WjmgmywCkjNGHPkE2/TWW2ZSywOATPhvADRLFWQBUlzG0almJpVWetVfuWzPo7FeAyHpgNYfaWXe6T0cJlWmMFM9wJ4ICjDNSGy433QCTJgMsKYOdsur5jmmZ5E8QPO0ERkV0CVd3p93x/odCyClgcgjfYMVdEtwDqRodsixGo6WzMXd9VVXxqvOCyEpgNwQiYBQJaQdpaBmZX4mqK30hJjVnm/XA8Ns1aYHFAM4P7bhmAeosF949i0880cqr3+0sOjiXbsh7YIAQRMoLhRwE0A7jeoXaLQvFaCBrCFd7TWVW4jiULRutz5+avC/sH3K9oQg0DOQ79fhahJRG/sXO0GBMjw0ao9wVDxSK0XkB3O4EhyE5mvTRUVnpk5PUJCSxuU08g8pSIvM6Max2K3n5mrCl0nWzcveje/vj188DqhB33XqlqT8ZLabx3xpbOSWrAWg3RVQBz4lDWIaGc6ki58al9jezNrLvvzDaInq+JTRfF5u4rm3UsVe3eYMcCSyjAwJVp1J3+0IJt0yZ3P0OeDeH5RPLBuRHtlcLvXZGq9pKA2ZPxsIbgiNBcG9gcItlx3qPyqlnhq0tVe0l76DgzX5X+FEj/CEI0hx7bvl0d7r25TSALFWRvzJWzcP+ikj67/Ujv1PUW6Mlk2gffwWsdBPPV6ZeUxhEEb0+b3L144q6SQ2ztSZ+jup5gVTpN+gL8KMJVnX7PF4OTfhr/k0s7tAh5A+bTQtII8DWJZYU+zcz1/VfkN3U9XhxNLCsubXkpfTojYN4G0W0gvssxsOAjEGrCFd5fJ3ThOrg1stx12sLS+Ke64UC01oeVomfNct8nE3trZNtvo/mEWPIGmK9zrOoVGgpzT64dXtU7b5tSmuyXXjAjYN46ZL/7nJ5ORD5WGks6Kn3dY3n6rJ30p289cJn65+xKALXMnOuw5fmFhJeaFd4dE/sFogh5NkbmiWWtY+YpCaC0jgqrRoKs+b93X1lvSc+mcBEG0EIsDzqJ1YTPc2FVh8pLfxqL/bIW2O1Ne/OjBa4XQfoFgPMchP4O4LlwufH+eOyXlcCMgPkQLLRCYWrC6gfEFKT5TKxg9YV8IcoqYPbRJ6WsdRA84rj6afpSKauqo3xm14XaLyuAFbUczJuU1/e8BXqZgXyHmuoYKaqNlHneTdZ+GQ/MhnV5Xt8egIxEMVpDuBWEVeEK71+pzKrhsTKqDvO2d8wWpl0jYYimvUJU2en3HEgXqHjcjAJmBMwpGjgc/0Smte4hUssjRz3vpOMsWMZb0hYwuCoOHQp25UQbvll8x4l0Z9Xw+P8Cx9dHZhLEvX4AAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.Vector = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.VectorHolderScr, 'Vector');

    AlphaABS.DATA.IMG.TargetCircleScr = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.TargetCircle = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.TargetCircleScr, 'TargetCircle');

    AlphaABS.DATA.IMG.SkillPanelSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAAAwCAYAAAChQulzAAAP40lEQVR4Xu1d+1MURx6f6ZlFEJblKckpsKz7AIyyJJVUkRjPU6JGkau6Sy6Vy13+uHheynvVEYzGKJ7lI+RljIkxiLCuCERAecpzpnuuvuMMDuO8dlitadL7A1BMd+9nPt9vf+bb3d/u4TntE41GC3merxFFcbP+vyD+xhjLPM8rCKFQEPHpmGjAiTEWOY4rVBRlWRRFKah80sAlcMdw5teDaOFTluUFRVHGstnsEjDAw49YLLaf5/nt+aWEtcYYYAwwBn49DCiKMpjJZHp4iFAFQfgwslko3rolFN+0iS8NMg0YkxVe4RQkok0M5/oYEHmuIBTiS2SszEuYW15fa8+uNrN5frllfOaXz+VlZXZkXBqYWcDzGOOP+IaGhnqE0MHmaGFL0AUVqAgX8dvg99yiMpxfavLbGg04ASNCfBEhymKQ+aSBS+ab+e0/NPEJWEFYb2aXrhNCzvCJRKKJEPJma6roTbh46kJmCyGkMP8Urb9FhNDS+0fiEWjp408HZhjO9XH6yo6qqsZYxdzZK0Ph8cmlB+tr7dnUZjbPL6+Mz/zzeXhvbBxavXZr8RJC6NJTonrm0l0OISQpiqLOt5o/sEikX4O/4bpdWWNdYz2327IqC/8jhIT+dKghAfX/8dmd20acOha9bS/4ne7NDaNdXZpwvtxU1hyrjXC910a5kQnpptmujEtnL9D9lCabsz702Ka56JFbXz/4Zr1axFZUe3pHFkRRnOI4TtYbQwip4vk8P4QQs6iLsiyX/6G9tgVw/OfcvetuOKGN54Fdwwp4gSdqcLYkSl6v3xou+O7GxMrwA/kLJ5szLtd6P602Z31ofSpmZff9bVvVjCknUV0UBGFKEARMCHlKTBFCqthZXfMLF9qE9vTfVu0oiiJijEFUd2mi+gPg5HleFX8dV76xmbGYMRqxQ1mMsUALznQy3Aai+u2N8ZWRCbmXcWntwRvJ5rT4Jk0497dtLXIU1XNfDC9BBKh3ML9Cme96IKrwlP3jW3U7oe1/nx36keH0zzLw2ZIMt0W3hkOaqH7JbO6PT+ab/nizq0Ubn+2vb1PXoGwj1bNX7i2HQqHpIHYwSZLK3jlQ/xLcwL8+v3sjoDgFSZLKacC5KxFua9gWFr/5YUwefYiDKKrUcEmLzRnO/D0AFEVR/fOtN2rV9E4nUZVArAzza899PtXitmHKQe9gzZqo3tRwwk4gfT4zf4zl3pKOISRJUuSdA/U7go5zVyL8GojqV9fv4/uT5CuO4xiXudmdOpvT4ps04XzrjdoCR1H9/PKQXFBQAKKKPfhXPgTXMsvA4ruFlZWVsncPRpvg2j/PZH/OASdUWS9WHSe0Y8Zs/B81OHclSl5r2FYqaKL6tUebMy4fOyeVNmd9yIOqPenfnvr6gd11sN3bPlL9/PIQFkVxBiEEouomRMYI0fy3jt7YhjmitIowjeK1ygAhBOZUI+8ejDZqotqn4dSzFIxCp5Nh/m4nQXCKdu3u8ykL0YQznSh9taGuFH35/X3yy0P5G4QQ4/KJRTekzVkfUg2c175+YHed4CaqRBCEGVj9NymGLlBW4uUk/1b17ATXth1tVR1ENaWJar8gCNMmnEYxdYqAvZYzRiRWTy3jfajfRxPOdKr01VhthP/q+/vKyAPpG8blqvt58Y9Vf6DJ5hhj1ofs1cqX3Q/srkOOovrZxSwfCoVmArpQFXnv7VgcbuDE6cwAw+lpKGNZCFZY06nSVyD5/8rVUW5sCl9lNvfHJ3AJc4DMN/3xZ65FG5+H9kTVwNF2oeqzi1kBxEpbqLIbnhujT6u/jTzZhdq5LC7pC1Wl770dU0/TOnE6kzHgdAvpdTxuQ7pcMZmjcDX5X5IkKnCmk+GXY3VlypXvRtHYJL5qWJz0wgPj8rFXUWVzWnyTJpyH9kSJ2/BfhOF/DosW+Xk8ubcCSfUwdGnQhv93GE530hxKCC2p8Mvba8vI5asjaHyKfMds7ptP5pu+qbOsSBWfB3bXqWsRTpFqKBQKzQaxg2lPr6gWqWYDjBOGguqG4BOnM4HFuSsRbo3Xl+FLV0eFiSl8LaA2p4JLbfgfeJsznHlVf0jzjBzaE11xE9VNgiDMaqv/XoaBeUVp1xghBJ5eMKyu08RqyIDzuWBw+RKVK5pwplORdLy+TL707bA4Nom/12zOuPTOAHU2Z33Iu3EdSq6x+6E9UfUsYqdItQjEKohRi+YQ6nmqJ05nhhnOdTmIkE6WtsSj5dLFq/dC4w/JdWZz33zqD3zmm74pXFORKj4P7YkuuolqMUJojud5PaXKKc8U2rJLXXJKnDVfc0pXUtmGLWGyLJe8fyS+VRPVUQNOY327tr2kdumRudf826fKafuWqcCZTpXuTEQrVi58PVIwMSX9qNmccbk2j9Ep/1m1P002Z31oNfc+b3398N7YgpuohkGsbKIWV/EzbRhwyhU1Ppq8iKxACAm/93bsBU1U7zvgtHteuuWa6g8JL/lqdt9BDc6WVGRnMlq+9L+vhjc9mJZv5BipMi6feAA1Nmd96HGMppnOLKxe9Uq3vGr3Q3uioJf2w/9TFzIRhNAj0+4au51VTulUTulYTmlW+o2t+U7YqUQIgQhwC9zAx58OjJtw6jdqrG+FOx/zxNCG5SYIQggComnA2dpY9lKyoWLxfO9w0cT0yk8GmzMun35kbgib0+KbNOE8vDcG2VKOolomiuIjQoiXvf/5mUHx0ApCSB/+V2uiOsFweiDOpgjw2ZIsbVZF9ct7RQ9n8E1mc398Mt/0x5tdLdr4PLw3BmelOIpqBUSAOQ4F88uqdWsQakOkWqmJ6kOGc120C+lUWXMqVjF/7ouh4ocz8k1mc998Mt/0TZ1lRar4PLw3NukoqifPD1RBBGjRwVaH1XavKDG/ckN/JYq5vLGc6W/YQ2u1UKLuWpFlufiDo8lyuIHj3f2ToijOO+GEcvp3W70OxAovlDe+ysVc3+I1L+Z5GTWipgFnS6qsqTFW8ejslaGSyVn5Z8bl4w6+kW1Oi2/ShLNjX1x9aaZtShW8TZXjOJhTDdTwH/I/CSEgqmWaqE4jhOYZTn8hAvDZ2lSRAlE9dyVbMjEt32Jc+ueS+aY/7qxq0dbXO/bFJ9xEtQbEKp9DQbeXxrld14hXRfX9I/FSbfgPGxTyitPJLTxihCaowZlORVKpWOXs2St3Sydn8a182vzXxiXzTXdR3Yh9COx+eG9szG34/6I2/FcPCTCcPWjOyYRrTqkJVmlSxvZ0K1iu9lvkvyKMcfGfOxIlUPHvJ28/EgQBpikAp7ENK5xWWI3fb0yhcsJlueJvmLKAdgBnCQ04W5KRVOP2ypkzl7OR6TkCosq4fGx9c2627hN2U1PU2JwW36QJ55Hfbf/FTVR/gxBaCOhQcPMHR5PF2vAfhv4Mp3uAYFlCHf43lsdVUb2YjUzOyQPM5v7I1IarzDf90fdULdr47NgXH3UT1W0gVs9rKJiDHWBYDY6rvg72eHf/IsOZA3tPFxXSqfJ4U7xy6vSlO+XTs3iA2dw3n8w3fVNnWZEqPjv2xYfdRBUOLIEoUB/+Ww19jEx42WW1bsohqZ7jOFioUt9ceLy7Hw4xsMJpxKtPN6z7+00N2N4zTThbmyrizfGqydMX71RMzkgQqZptzrh8YvgNYXPWh3KWAle7d+yLDzmKanfP7Xqe52FY7dTB/Oz31+eqzHWdzghYZUATK4hU1TcXHu/uh+O2dJx+hN1LnVy2q6plAaeiKJv/0pkKPM7WxopYc6Jq8tTFbMXUzEpGs7kXXsye6aXOhuaSFpsznLai6ts/j+5P3HUT1QZBEBa03TVe9sJ63QPupyOu1kEw4YcxiJX65sK/fXJLEgRhkRDiNaK2E/X1Rt3GxTrIcaQG565kWWxHourBpxfuVM7O4zuMS89RDLU2Z31o1cZeAgErzVod/ep9/ej+xB1HUf3kXH8MxMpwSpVnT3uWBeGUKoxx0V9/36i+ufBYVx+89RXmfu0i6mcJx/5xRxHOdGN5tDle9eDkhUzV3DwBx2Bc+vAa5ps+SHOoQhufne3JjJuobkcIwSJQoDqYdlAJiKr65sJjXX2E4fTvzMBna2NltDlROXHyQqZ6Zk7OMpv745P5pj/e7GrRxmdne3LQTVQT2qq6MWfRaei+5iQonufhgElbluG6/tHKGbd5Wg3F9cZgRRBEVS1zrKsPhtpwOKy+88ucq7pmuM/zPJx7qdbVMTphtbjmlKe7OiTQ5lU304ATItUdierx7p5M9eyCDJPtjMu1vrvhbA4ZNDT4Jk04O9uTt91ENamJVaAiVUiq10RVVcZjXX08w7muCAGlG8vrdySqx7rPD9bMzmOYbGc290cp801/vNnVoorPzvZkv5uoNpoi1TWT8ha7qPQozT48XXuSuh2Rbuec6kSrHf9YVx/ME0Okqn+veVeU3U4tY1Rphdmqnhs24z0BTogG1KgvyDhbUuX1LyWr73f3DNbMLmCIVBmXTyy5IW1Oi2/ShLOzPdnnKqo8z8NClZNI5ve55KE1RVEgVanQIFZCQHHCPANMU+iiGlic6caKOhDVrp7BF+bm5aEA2pwaLmmxOcPpQWw8FlEURfVPL6LaDGLlZShonB/1iGNNMZjjdJuDNVQAUQWxkrQIMOQXp/69uWB2mic2tUMNztZURe2OVPUvXT2DL87Ny/f82JxxqVqfGpuzPuTe63Pt653tSTiL2P7ov0/O9e/gOE6PVM25XHbDZadyTrmu5oRb2/YhUuU4DkRVfcf2sa4+SK4HnOZ5QKtDT4xTGOZpAuP0hdNhLOZr5mkRaAcWw6jBmW6srN2Zqh797zkQVWmYcWn5ihyz7xinj6izOetDqo3tpgpVexoOkTJPba7RFr2vd7Ynf3IT1URHR0dxTU1NyF3Tn1+JsbEx6eTJk/PGlUuG0z//wOdoprdYXf0/P1iz+7cHHzGb++OT+aY/3uxq0can6+o/X9zU2tbWFg6FQl52U3ll023S3/W6JEmkt7d3rpS7Bcf9cbNcqqStra00FLLUfrf2vOD21YYkSQotOG98e0rkpfF7S2Ki7pVX35AZl6tRjBf/WC1Dk81p8U2acCrzP19bE6k2NDTUI4QONkcLWzZt4tUDoIP8CRfx2wDf3KKingwT1A8NOAEjQnwRIcpikPmkgUvwQ4Yzv72RFj7hrpeXldmb2aXrhJAzfDQaLRQE4cPIZqF465ZQPOjCijFZ4RVOQSJST6sK6ocGnCLPFYRCfImMlXkJc3DqVyA/NHAJxDGc+XUfWvgEQR0ZlwZmFvA8xvgjdYgfi8X28zy/Pb+UsNYYA4wBxsCvhwFFUQYzmUzP6rwpRKw8z9eIorg5yDRgjGXIp0QIBWohzcwZDTgxxnDiV6GiKMuiKKqpakH80MDl40iV+WY+/YcWPmVZXlAUZSybzS7B/f8fOgwDABc9JdQAAAAASUVORK5CYII=";
    AlphaABS.DATA.IMG.SkillPanel = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.SkillPanelSrc, 'SkillPanel');

    AlphaABS.DATA.IMG.UserFaceBackSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.UserFaceBack = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.UserFaceBackSrc, 'UserFaceBack');

    AlphaABS.DATA.IMG.InBattleMaskSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.InBattleMask = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.InBattleMaskSrc, 'InBattleMask');

    AlphaABS.DATA.IMG.TargetBattleMaskSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.TargetBattleMask = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.TargetBattleMaskSrc, 'TargetBattleMask');
    
    AlphaABS.DATA.IMG.circleSegmentSrc = "data:image/png;base64,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";
    AlphaABS.DATA.IMG.circleSegment = KDCore.BitmapSrc.LoadFromBase64(AlphaABS.DATA.IMG.circleSegmentSrc, 'circle_segment');

})();
(function () {
    /////////////////////////////////////////////////////////////////////////////
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ABSKey.js
    //╒═════════════════════════════════════════════════════════════════════════╛
    /////////////////////////////////////////////////////////////////////////////
    function ABSKey() {
        throw new Error('This is a static class');
    }

    ABSKey.setKeyToChange = function (symbol, windw) {
        this._changeSymbol = symbol;
        this._changeWindow = windw;
    };

    ABSKey.onKeyPress = function (event) {
        if (!ABSKey._changeSymbol) return;

        try {
            var x = AlphaABS.LIBS.IKey;
            var index = parseInt(ABSKey._changeSymbol);
            if (Input.KeyMapperPKD[event.charCode] !== undefined) {
                x.changeRawKey(index, Input.KeyMapperPKD[event.charCode]);
                ABSKey._changeSymbol = null;
                if (ABSKey._changeWindow) {
                    ABSKey._changeWindow.onKeyOk(true);
                    ABSKey._changeWindow = null;
                }
            } else {
                if (ABSKey._changeWindow)
                    ABSKey._changeWindow.onKeyOk(false);
            }
        } catch (e) {
            console.error(e);
            if (ABSKey._changeWindow)
                ABSKey._changeWindow.onKeyOk(false);
        }
    };

    AlphaABS.Key = ABSKey;
    // ■ END ABSKey.js
    //---------------------------------------------------------------------------
    /////////////////////////////////////////////////////////////////////////////
})();
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ABSMotion.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ABSMotion;
  ABSMotion = class ABSMotion {
    constructor() {}

    setMotion(name, offset, character) {
      this._character = character;
      this._charName = character._characterName;
      this._charIndex = character._characterIndex;
      this._motionName = this._createName(name);
      this._yOffset = offset;
      return this._loadMotion();
    }

    _createName(name) {
      return "zmotion_" + this._charName + "_" + this._charIndex + "_" + name;
    }

    _loadMotion() {
      return ImageManager.loadCharacter(this._motionName);
    }

    getOffset() {
      return this._yOffset;
    }

    setLooping() {
      return this.isLoop = true;
    }

    applyMotionIdle() {
      this._state = 'idle';
      this.character()._characterName = this._motionName;
      return this.character()._characterIndex = 0;
    }

    applyMotionState() {
      this._state = 'state';
      this.character()._characterName = this._motionName;
      return this.character()._characterIndex = 4;
    }

    applyMotionAction() {
      if (!this.inState()) {
        this.applyMotionState();
      }
      this._state = 'action';
      return this.character().updatePattern();
    }

    motionPattern(pattern) {
      if (this.inAction()) {
        return 2;
      }
      return pattern % 2;
    }

    onActionDone() {
      return this._state = 'state';
    }

    inAction() {
      return this._state === 'action';
    }

    inState() {
      return this._state === 'state';
    }

    character() {
      return this._character;
    }

    clearMotion() {
      // * Возвращяет обычную графику персонажу
      this.character()._characterName = this._charName;
      return this.character()._characterIndex = this._charIndex;
    }

  };
  AlphaABS.register(ABSMotion);
})();

// ■ END ABSMotion.coffee
//---------------------------------------------------------------------------

(function () {

  "use strict";

  //ABSObject_PopUp
  //------------------------------------------------------------------------------
  /* jshint -W104 */
  class ABSObject_PopUp {
    constructor(text, color, iconIndex, fontSettings) {
      this._text = text || null;
      this._color = color;
      this._iconIndex = iconIndex || null;
      this._fontSettings = fontSettings || ABSObject_PopUp.FONT_DEFAULT();
      this._effectType = ABSObject_PopUp.EFFECT_DEFAULT;
      this._sprite = null;
    }

    clone() {
      var tempObj = new ABSObject_PopUp(this._text, this._color, this._iconIndex, this._fontSettings.clone());
      tempObj.setEffectSettings(this._effectType);
      return tempObj;
    }

    getText() {
      return this._text;
    }

    getFontSettings() {
      return this._fontSettings;
    }

    setX(x) {
      this.x = x;
      this._sprite.x = x;
    }

    setY(y) {
      this.y = y;
      this._sprite.y = y;
    }

    setNumered() //This is number value in this PopUp
    {
      this._numered = true;
    }

    isNumered() {
      return (this._numered === true);
    }

    hasIcon() {
      return (this._iconIndex != null);
    }

    setExtraText(text) {
      this._text = (text + " " + this._text);
    }

    setEffectSettings(settings) {
      this._effectType = settings;
    }

    setup(x, y, width, layer) {
      this._layer = layer;
      this._width = width;
      this.x = x;
      this.y = y;
      this._refresh();
    }

    dispose() {
      if (!this._sprite) return;
      this._sprite.bitmap.clear();
      this._layer.removeChild(this._sprite);
      this._sprite = null;
    }

    update() {
      if (this._sprite != null) {
        this._update_zoom();
        this._sprite.update();
      }
    }

    static FONT_DEFAULT() {
      return ['Skratch Punk', 30, false, 3, Color.BLACK]; //FontFace, size, outline widht, outline color
    }

    //PRIVATE
    _refresh() {
      var h = 72;
      var bitmap = new Bitmap(this._width, h);
      bitmap.addLoadListener(function () {
        if (this._fontSettings[0] != null)
          bitmap.fontFace = this._fontSettings[0];
        bitmap.fontSize = this._fontSettings[1];
        bitmap.fontItalic = this._fontSettings[2];
        if (this._color) {
          bitmap.textColor = this._color.CSS;
        } else
          bitmap.textColor = Color.WHITE.CSS;


        var dx = 0;
        var dw = 0;
        var tw = (this._text != null) ? bitmap.measureTextWidth(this._text) : 0;

        while (tw > this._width) {
          bitmap.fontSize = bitmap.fontSize - 4;
          tw = bitmap.measureTextWidth(this._text);
        }

        if (this._iconIndex) {
          dx += 24;
          dw += 24;
          bitmap.drawIcon((dx + ((this._width - tw) / 2) - 36), (h - 24) / 2, this._iconIndex, 24);
        }

        if (this._text) {
          bitmap.outlineWidth = this._fontSettings[3] || 0;
          if (this._fontSettings[4])
            bitmap.outlineColor = this._fontSettings[4].CSS;
          bitmap.outlineColor = Color.BLACK.CSS;
          bitmap.drawText(this._text, dx + 2, 0, this._width - dw, h, 'center');
        }
      }.bind(this));

      this._sprite = new Sprite(bitmap);
      this._sprite.x = this.x;
      this._sprite.y = this.y;
      this._sprite.scale.x = this._effectType[0];
      this._sprite.scale.y = this._effectType[0];

      this._layer.addChild(this._sprite);
    }

    _update_zoom() {
      if (this._effectType[1]) {
        this._sprite.scale.x = Math.max(this._sprite.scale.x - 0.075, 1.0);
        this._sprite.scale.y = this._sprite.scale.x;
      }
      this._sprite.opacity = Math.max(this._sprite.opacity - 2, 0);
      if (this._sprite.opacity == 0) {
        this._layer.removeChild(this._sprite);
        this._sprite = null;
      }
    }
  }

  SDK.setConstant(ABSObject_PopUp, 'EFFECT_DEFAULT', [1.5, true, 0]); //zoom, isUpdateZoom, +toTextSize
  //END ABSObject_PopUp
  //------------------------------------------------------------------------------

  AlphaABS.ABSObject_PopUp = ABSObject_PopUp;
  AlphaABS.register(ABSObject_PopUp);
})();
(function () {

  "use strict";

  //ABSObject_PopUpMachine
  //------------------------------------------------------------------------------
  /* jshint -W104 */
  class ABSObject_PopUpMachine {
    constructor(x, y, width, stack_size, parent) {
      this._x = x;
      this._y = y;
      this._width = width;
      this._stack_size = stack_size;
      this._parent = parent;
      this._effectType = null;
      this._upMode = false;

      this._items = [];
      this._timers = [];

      this._init_items();
    }

    setUpMode() {
      this._upMode = true;
    }

    setEffectSettings(effect) {
      this._effectType = effect;
    }

    setSingleMode() {
      //this._singleMode = true;
    }

    move(x, y) {
      this._x = x;
      this._y = y;
      this._step();
    }

    push(popUpItem) {
      if (this._effectType != null)
        popUpItem.setEffectSettings(this._effectType);

      popUpItem.setup(this._x, this._y, this._width, this._parent);

      var item = this._items.shift();
      if (item != null) item.dispose();

      this._items.push(popUpItem);
      this._step();
      this._timers.shift();
      this._timers.push(0);
    }

    clear() {
      this._items.forEach(function (item) {
        if (item != null) item.dispose();
      });
      this._items = [];
      this._timers = [];
      this._init_items();
    }

    update() {
      this._update_timers();
      this._items.forEach(function (item) {
        if (item != null) item.update();
      });
    }

    //PRIVATE
    _init_items() {
      SDK.times(this._stack_size, function () {
        this._items.push(null);
        this._timers.push(null);
      }.bind(this));
    }

    _update_timers() {
      SDK.times(this._stack_size, function (i) {
        var index = (this._timers.length - 1) - i; //Reverse
        var timer = this._timers[index];
        if (timer == null)
          return;
        else {
          if (timer < ABSObject_PopUpMachine.MAX_TIME)
            this._timers[index] = this._timers[index] + 1;
          if (timer == ABSObject_PopUpMachine.MAX_TIME) {
            if (this._items[index] != null) {
              this._items[index].dispose();
            }
            this._items[index] = null;
            this._timers[index] = null;
          }
        }
      }.bind(this));
    }

    _step() {
      SDK.times(this._items.length, function (i) {
        var index = (this._items.length - 1) - i; //Reverse
        var item = this._items[index];
        if (item == null)
          return;

        var y = 0;
        if (this._upMode)
          y = this._y - (ABSObject_PopUpMachine.Y_STEP * i);
        else
          y = this._y + (ABSObject_PopUpMachine.Y_STEP * i);

        this._items[index].setX(this._x);
        this._items[index].setY(y);
      }.bind(this));
    }
  }

  SDK.setConstant(ABSObject_PopUpMachine, 'Y_STEP', 24);
  SDK.setConstant(ABSObject_PopUpMachine, 'MAX_TIME', 60);
  SDK.setConstant(ABSObject_PopUpMachine, 'SETTINGS', [1, false, 12]); //zoom, isUpdateZoom, +toTextSize
  //END ABSObject_PopUpMachine
  //------------------------------------------------------------------------------


  AlphaABS.ABSObject_PopUpMachine = ABSObject_PopUpMachine;
  AlphaABS.register(ABSObject_PopUpMachine);
})();
(function () {
    //ABSPathfinding
    //------------------------------------------------------------------------------
    function ABSPathfinding() {
        throw new Error('This is a static class');
    }

    ABSPathfinding.init = function () {
        this.worldWidth = 0;
        this.worldHeight = 0;
        this.worldSize = 0;
        this.char = null;
        this.goalX = 0;
        this.goalY = 0;
    };

    ABSPathfinding.setup = function () {
        this.worldWidth = $gameMap.width();
        this.worldHeight = $gameMap.height();
        this.worldSize = this.worldWidth * this.worldHeight;
    };

    ABSPathfinding.findPath = function (char, goalX, goalY) {
        this.char = char;
        this.goalX = goalX;
        this.goalY = goalY;
        var path = ABSPathfinding.calculatePath();
        if (path.length > 0) {

            if (path.length > 1) {
                var stepX = path[1][0];
                var stepY = path[1][1];

                var deltaX1 = $gameMap.deltaX(stepX, char.x);
                var deltaY1 = $gameMap.deltaY(stepY, char.y);

                if (deltaY1 > 0) {
                    return 2;
                } else if (deltaX1 < 0) {
                    return 4;
                } else if (deltaX1 > 0) {
                    return 6;
                } else if (deltaY1 < 0) {
                    return 8;
                }
            }

        }

        return 0;
    };

    //PRIVATE
    ABSPathfinding.canWalkHere = function (x, y) {
        if (x == this.char.x && y == this.char.y) {
            return true;
        }

        if (!$gameMap.isValid(x, y)) {
            return false;
        }

        if (this.char.isThrough() || this.char.isDebugThrough()) {
            return true;
        }

        if (x == this.goalX && y == this.goalY) {
            return true;
        }

        if (this.char.isCollidedWithCharacters(x, y)) {
            return false;
        }

        if (!this.char.isMapPassable(x, y, 1)) {
            return false;
        }

        return true;
    };

    ABSPathfinding.Node = function (Parent, Point) {
        var newNode = {
            // pointer to another Node object
            Parent: Parent,
            // array index of this Node in the world linear array
            value: Point.x + (Point.y * this.worldWidth),
            // the location coordinates of this Node
            x: Point.x,
            y: Point.y,
            // the distanceFunction cost to get
            // TO this Node from the START
            f: 0,
            // the distanceFunction cost to get
            // from this Node to the GOAL
            g: 0
        };

        return newNode;
    };

    ABSPathfinding.Neighbours = function (x, y) {
        var N = y - 1,
            S = y + 1,
            E = x + 1,
            W = x - 1,
            myN = N > -1 && this.canWalkHere(x, N),
            myS = S < this.worldHeight && this.canWalkHere(x, S),
            myE = E < this.worldWidth && this.canWalkHere(E, y),
            myW = W > -1 && this.canWalkHere(W, y),
            result = [];
        if (myN)
            result.push({
                x: x,
                y: N
            });
        if (myE)
            result.push({
                x: E,
                y: y
            });
        if (myS)
            result.push({
                x: x,
                y: S
            });
        if (myW)
            result.push({
                x: W,
                y: y
            });
        this.findNeighbours(myN, myS, myE, myW, N, S, E, W, result);
        return result;
    };

    ABSPathfinding.findNeighbours = function () {};

    ABSPathfinding.DiagonalNeighbours = function (myN, myS, myE, myW, N, S, E, W, result) {
        if (myN) {
            if (myE && this.canWalkHere(E, N))
                result.push({
                    x: E,
                    y: N
                });
            if (myW && this.canWalkHere(W, N))
                result.push({
                    x: W,
                    y: N
                });
        }
        if (myS) {
            if (myE && this.canWalkHere(E, S))
                result.push({
                    x: E,
                    y: S
                });
            if (myW && this.canWalkHere(W, S))
                result.push({
                    x: W,
                    y: S
                });
        }
    };

    ABSPathfinding.DiagonalNeighboursFree = function (myN, myS, myE, myW, N, S, E, W, result) {
        myN = N > -1;
        myS = S < worldHeight;
        myE = E < worldWidth;
        myW = W > -1;
        if (myE) {
            if (myN && this.canWalkHere(E, N))
                result.push({
                    x: E,
                    y: N
                });
            if (myS && this.canWalkHere(E, S))
                result.push({
                    x: E,
                    y: S
                });
        }
        if (myW) {
            if (myN && this.canWalkHere(W, N))
                result.push({
                    x: W,
                    y: N
                });
            if (myS && this.canWalkHere(W, S))
                result.push({
                    x: W,
                    y: S
                });
        }
    };

    ABSPathfinding.ManhattanDistance = function (Point, Goal) {
        // linear movement - no diagonals - just cardinal directions (NSEW)
        return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
    };

    ABSPathfinding.calculatePath = function () {
        var distanceFunction = ABSPathfinding.ManhattanDistance;
        // create Nodes from the Start and End x,y coordinates
        var mypathStart = this.Node(null, {
            x: this.char.x,
            y: this.char.y
        });
        var mypathEnd = this.Node(null, {
            x: this.goalX,
            y: this.goalY
        });
        // create an array that will contain all world cells
        var AStar = new Array(this.worldSize);
        // list of currently open Nodes
        var Open = [mypathStart];
        // list of closed Nodes
        var Closed = [];
        // list of the final output array
        var result = [];
        // reference to a Node (that is nearby)
        var myNeighbours;
        // reference to a Node (that we are considering now)
        var myNode;
        // reference to a Node (that starts a path in question)
        var myPath;
        // temp integer variables used in the calculations
        var length, max, min, i, j;
        // iterate through the open list until none are left
        while (length = Open.length) {
            max = this.worldSize;
            min = -1;
            for (i = 0; i < length; i++) {
                if (Open[i].f < max) {
                    max = Open[i].f;
                    min = i;
                }
            }
            // grab the next node and remove it from Open array
            myNode = Open.splice(min, 1)[0];
            // is it the destination node?
            if (myNode.value === mypathEnd.value) {
                myPath = Closed[Closed.push(myNode) - 1];
                do {
                    result.push([myPath.x, myPath.y]);
                }
                while (myPath = myPath.Parent);
                // clear the working arrays
                AStar = Closed = Open = [];
                // we want to return start to finish
                result.reverse();
            } else // not the destination
            {
                // find which nearby nodes are walkable
                myNeighbours = this.Neighbours(myNode.x, myNode.y);
                // test each one that hasn't been tried already
                for (i = 0, j = myNeighbours.length; i < j; i++) {
                    myPath = this.Node(myNode, myNeighbours[i]);
                    if (!AStar[myPath.value]) {
                        // estimated cost of this particular route so far
                        myPath.g = myNode.g + distanceFunction(myNeighbours[i], myNode);
                        // estimated cost of entire guessed route to the destination
                        myPath.f = myPath.g + distanceFunction(myNeighbours[i], mypathEnd);
                        // remember this new path for testing above
                        Open.push(myPath);
                        // mark this node in the world graph as visited
                        AStar[myPath.value] = true;
                    }
                }
                // remember this route as having no more untested options
                Closed.push(myNode);
            }
        } // keep iterating until the Open list is empty
        return result;
    };
    AlphaABS.ABSPathfinding = ABSPathfinding;
    AlphaABS.register(ABSPathfinding);
    //END ABSPathfinding
    //------------------------------------------------------------------------------

})();
(function () {

  "use strict";

  var ABSObject_PopUp = AlphaABS.ABSObject_PopUp;
  var ABSObject_PopUpMachine = AlphaABS.ABSObject_PopUpMachine;

  //PopInfoManagerABS
  //------------------------------------------------------------------------------
  function PopInfoManagerABS() {
    throw new Error('This is a static class');
  }

  PopInfoManagerABS.makeDamagePopUp = function (user) {
    var result = user.result();
    var value;

    if (result.hpDamage != 0) {
      if(result.hpDamage < 0 && user.hp == user.mhp)
        return;
      value = PopInfoManagerABS.HP(result.hpDamage, result.critical);
      this._apply_pop_up(user, value);
    }

    if (result.mpDamage != 0) {
      if (result.mpDamage < 0 && user.mp == user.mmp)
        return;
      value = PopInfoManagerABS.MP(result.mpDamage, result.critical);
      this._apply_pop_up(user, value);
    }

    if (result.tpDamage != 0) {
      value = PopInfoManagerABS.TP(result.tpDamage, result.critical);
      this._apply_pop_up(user, value);
    }
  };

  PopInfoManagerABS.makeZeroDamagePopUp = function (user) {
    var result = user.result();
    var value = PopInfoManagerABS.HP(0, result.critical);
    this._apply_pop_up(user, value);
  };

  PopInfoManagerABS.makeDrainPopUp = function (user) { //user - who get drained HP
    var result = user.result();
    var value;
    if (result.hpDamage != 0) {
      value = PopInfoManagerABS.HP(result.hpDamage, result.critical);
      value.getFontSettings()[2] = true;
      this._apply_pop_up(user, value);
    }

    if (result.mpDamage != 0) {
      value = PopInfoManagerABS.MP(result.mpDamage, result.critical);
      value.getFontSettings()[2] = true;
      this._apply_pop_up(user, value);
    }
  };

  PopInfoManagerABS.makeStatePopUp = function (user, stateId, isErase) {
    var state = $dataStates[stateId];
    if (state.iconIndex == 0)
      return;
    if (state.id == user.deathStateId())
      return;
    var value = PopInfoManagerABS.STATE((user.isEnemy() ? "" : state.name), state.iconIndex, isErase);
    this._apply_pop_up(user, value);
  };

  PopInfoManagerABS.makeItemPopUp = function (user) {
    var result = user.result();
    if (!user.isAlive()) return;
    if (result.missed) {
      this._apply_pop_up(user, PopInfoManagerABS.TEXT(AlphaABS.SYSTEM.STRING_POPUP_MISS));
      return;
    }

    if (result.evaded) {
      this._apply_pop_up(user, PopInfoManagerABS.TEXT(AlphaABS.SYSTEM.STRING_POPUP_EVADE));
      return;
    }

    if (result.isHit() && !result.success) {
      this._apply_pop_up(user, PopInfoManagerABS.TEXT(AlphaABS.SYSTEM.STRING_POPUP_FAIL));
      return;
    }
  };

  PopInfoManagerABS.makeBuffPopUp = function (user, paramId, isPositive) {
    if (!user.isAlive()) return;
    var paramName = user.isEnemy() ? "" : TextManager.param(paramId);
    var temp = isPositive ? 1 : -1;
    var iconIndex = user.buffIconIndex(temp, paramId);
    var value = PopInfoManagerABS.BUFF(paramName, iconIndex, isPositive);
    if (!user.getInfoPops().include(value)) {
      this._apply_pop_up(user, value);
    }
  };

  PopInfoManagerABS.makeSkillRechargePopUp = function (user, skillId) {
    if (!user.isAlive()) return;
    if (user.isEnemy()) return; //This is for ActorEnemy, in version 1 not develop yet
    var skill = $dataSkills[skillId];
    var value = PopInfoManagerABS.SKILL(skill.name, skill.iconIndex);
    if (!user.getInfoPops().include(value)) {
      this._apply_pop_up(user, value);
    }
  };

  PopInfoManagerABS.calcRate = function (rate) {
    this.text = "";
  };

  //STATIC
  PopInfoManagerABS.HP = function (value, critical) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    var color = Color.YELLOW;
    if (value < 0) {
      color = Color.GREEN;
      value = Math.abs(value);
    } else if (critical) {
      color = Color.RED;
      fontSettings[1] = 34;
    }

    var x = new ABSObject_PopUp(value, color, null, fontSettings);
    x.setNumered();
    return x;
  };

  PopInfoManagerABS.TP = function (value, critical) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    var color = Color.ORANGE;
    if (value < 0) {
      color = Color.GREEN;
      value = Math.abs(value);
    } else if (critical) {
      color = Color.RED;
      fontSettings[1] = 34;
    }

    value = value + " " + TextManager.tpA;
    var x = new ABSObject_PopUp(value, color, null, fontSettings);
    x.setNumered();
    return x;
  };

  PopInfoManagerABS.MP = function (value, critical) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    var color = Color.MAGENTA;
    if (value < 0) {
      color = Color.BLUE;
      value = Math.abs(value);
    } else if (critical) {
      color = Color.MAGENTA;
      fontSettings[1] = 34;
    }

    var x = new ABSObject_PopUp(value, color, null, fontSettings);
    x.setNumered();
    return x;
  };

  PopInfoManagerABS.STATE = function (name, iconIndex, isErase) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    fontSettings[2] = true;

    var temp = isErase ? "- " : "+ ";
    fontSettings[0] = AlphaABS.SYSTEM.FONT;
    return new ABSObject_PopUp(temp + name, null, iconIndex, fontSettings);
  };

  PopInfoManagerABS.BUFF = function (name, iconIndex, isPositive) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    fontSettings[2] = true;

    var color = isPositive ? Color.GREEN : Color.RED;
    fontSettings[0] = AlphaABS.SYSTEM.FONT;
    return new ABSObject_PopUp(name, color, iconIndex, fontSettings);
  };

  PopInfoManagerABS.TEXT = function (text) {
    return new ABSObject_PopUp(text);
  };

  PopInfoManagerABS.TEXT_WITH_COLOR = function (text, color) {
    return new ABSObject_PopUp(text, color);
  };

  PopInfoManagerABS.ALERT = function (text) {
    if (AlphaABS.Parameters.isLoaded()) {
      if (!this._alertPopUpConfigurated) {
        this._alertPopUpConfigurated = true;
        var parameters = AlphaABS.Parameters.get_UIE_PlayerMessageBar();
        this._alertPopUp_color = (parameters['Text Color']) ? Color.FromHex(parameters['Text Color']) : Color.RED;
        this._alertPopUp_fontName = (parameters['Font Name']) ? parameters['Font Name'] : null;
      }
      return new ABSObject_PopUp(text, this._alertPopUp_color, null, [this._alertPopUp_fontName, 22, false, 2, Color.BLACK]);
    } else
      return new ABSObject_PopUp(text, Color.RED, null, [null, 22, false, 2, Color.BLACK]);
  };

  PopInfoManagerABS.EXP = function (value) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    fontSettings[1] = 32;
    var x = new ABSObject_PopUp(value, Color.MAGENTA, null, fontSettings);
    x.setNumered();
    return x;
  };

  PopInfoManagerABS.SKILL = function (name, iconIndex) {
    var fontSettings = ABSObject_PopUp.FONT_DEFAULT();
    fontSettings[2] = true;
    return new ABSObject_PopUp(AlphaABS.SYSTEM.STRING_POPUP_SKILL, Color.GREEN, iconIndex, fontSettings);
  };

  //PRIVATE
  PopInfoManagerABS._apply_pop_up = function (user, value) {
    /*if(this.text === undefined)
      this.text = "";
    if(this.text != "") {
      if(value.isNumered()) value.setExtraText(this.text);
      this.text = "";
    }*/
    user.addInfoPop(value);
  };

  //END PopInfoManagerABS
  //------------------------------------------------------------------------------

  AlphaABS.PopInfoManagerABS = PopInfoManagerABS;
  AlphaABS.register(PopInfoManagerABS);

})();
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ABSSkillLoader.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

//@[GLOBAL DEFINITION]
var ABSSkillLoader;

ABSSkillLoader = function() {
  return new Error('Static class');
};

(function() {
  //@[CLASS HEADER PART]

  // * Определяет стандартные значения из шаблонов
  ABSSkillLoader.loadBaseParams = function(_) {
    var template;
    template = ABSSkillLoader.TEMPLATES[_.type];
    ABSSkillLoader.PARAMS.forEach(function(p) {
      if (template[p] != null) {
        return _[p] = template[p];
      } else {
        return _[p] = 0;
      }
    });
    _.reloadParam = null;
    _.castTimeFormula = null;
  };
  // * Параметры из редактора MV
  ABSSkillLoader.loadUserParams = function(_) {
    var e, item;
    try {
      item = _.skill();
      _.castTime = item.speed;
      if (_.range === 1) {
        _.range = 0;
      }
      _.needTarget = false;
      if ([1, 3, 4, 5, 6].contains(item.scope)) {
        _.needTarget = true;
      }
    } catch (error) {
      e = error;
      AlphaABS.error(e, 'load user parameters for ABS skill');
    }
  };
  // * Параметры из Note
  ABSSkillLoader.loadSelfMetaParams = function(_) {
    return ABSSkillLoader.loadMetaParams(_, _.skill().meta);
  };
  ABSSkillLoader.loadMetaParams = function(_, metaData) {
    var e, i, p, strings;
    i = 0;
    strings = ABSSkillLoader._strParamsCount();
    while (i < ABSSkillLoader.PARAMS.length) {
      try {
        p = ABSSkillLoader.PARAMS[i];
        if (metaData[p] == null) {
          continue;
        }
        if (i < strings) {
          _[p] = metaData[p];
        } else {
          _[p] = parseInt(metaData[p]);
        }
      } catch (error) {
        e = error;
        AlphaABS.error(e, 'loading ABS parameter from Note');
      } finally {
        i++;
      }
    }
    if (_.isVectorType()) {
      ABSSkillLoader.loadParticleParams(_, metaData);
    }
  };
  // * Параметры из Note системы частиц
  ABSSkillLoader.loadParticleParams = function(_, metaData) {
    var count, particleParamsUser;
    particleParamsUser = {};
    count = 0;
    ABSSkillLoader.PARTICLES.forEach(function(p) {
      var e;
      if (metaData[p] == null) {
        return;
      }
      count++;
      try {
        if (p === ABSSkillLoader.PARTICLES[0]) {
          return particleParamsUser[p] = metaData[p];
        } else {
          return particleParamsUser[p] = parseInt(metaData[p]);
        }
      } catch (error) {
        e = error;
        return AlphaABS.error(e, 'while loading particle data from skill Note');
      }
    });
    if (count !== 0) {
      _._particleParamsUser = particleParamsUser;
    }
  };
  // * Проверяет и преобразует параметры
  ABSSkillLoader.checkParams = function(_) {
    ABSSkillLoader._checkByType(_);
    ABSSkillLoader._checkNoTarget(_);
    ABSSkillLoader._checkFirearm(_);
    ABSSkillLoader._checkStack(_);
    ABSSkillLoader._convertParams(_);
    ABSSkillLoader._checkFormulas(_);
  };
  AlphaABS.register(ABSSkillLoader);
})();

// ■ END ABSSkillLoader.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ABSSkillLoader2.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  //@[CLASS PART]
  //@[CLASS IMPL ONLY]
  ABSSkillLoader.PARAMS = [
    'reloadParam',
    'pType',
    'img',
    'light',
    'castTimeFormula',
    'startSound',
    'motion',
    'reloadSound', // * LAST STRING PARAMETER, add above it new string parameters
    'vSpeed',
    'range',
    'reloadTime',
    'castTime',
    'needTarget',
    'radius',
    'castAnim',
    'lightSize',
    'stack',
    'stackTime',
    'directionFix',
    'ammo',
    'cEonUse',
    'cEonStart',
    'noDescription',
    'impulse',
    'ignoreObstacles',
    'impulseRandom',
    'repeatDelay',
    'firearm',
    'noTarget',
    'motionOffset',
    'swing',
    'pierce'
  ];
  ABSSkillLoader.PARTICLES = ['pData', 'pMinSize', 'pMaxSize', 'pPower', 'pLife', 'pAlpha', 'pCount'];
  ABSSkillLoader.TEMPLATES = [ // * 0 -  INSTANCE
    {
      range: 0,
      needTarget: true,
      castTime: 0,
      reloadTime: 0,
      reloadParam: null,
      directionFix: 0,
      noTarget: 0 // * 1 - VECTOR
    },
    {
      range: 6,
      needTarget: true,
      castTime: 120,
      reloadTime: 0,
      reloadParam: null,
      pType: null,
      img: 'null',
      light: null,
      lightSize: 100,
      directionFix: 0,
      noTarget: 0 // * 2 - RADIUS
    },
    {
      range: 6,
      needTarget: true,
      radius: 3,
      castTime: 0,
      reloadTime: 120,
      reloadParam: null,
      directionFix: 0,
      noTarget: 0 // * 3 - ZONE
    },
    {
      castTime: 0,
      needTarget: false,
      reloadTime: 120,
      reloadParam: null,
      directionFix: 0,
      noTarget: 0
    }
  ];
})();

// ■ END ABSSkillLoader2.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ABSSkillLoader3.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  //@[CLASS PART]
  //@[CLASS IMPL ONLY]
  ABSSkillLoader._strParamsCount = function() {
    return ABSSkillLoader.PARAMS.indexOf('reloadSound') + 1;
  };
  ABSSkillLoader._checkByType = function(_) {
    if (_.type === 1) {
      ABSSkillLoader._checkVector(_);
    }
    if (_.type === 2) {
      return ABSSkillLoader._checkRadius(_);
    }
  };
  ABSSkillLoader._checkVector = function(_) {
    if ((_.img == null) || _.img === "") {
      _.img = 'null';
    }
    if ((_.pType == null) || _.pType === '0' || _.pType === 'null' || _.pType === "") {
      _.pType = null;
    }
    if ((_.light == null) || _.light === '0' || _.light === 'null' || _.light === "") {
      _.light = null;
    }
    if (_.range === 0) {
      _.range = ABSSkillLoader.TEMPLATES[1].range;
    }
    if (_.radius > 0) {
      _.needTarget = false;
      if (_.radius > 5) {
        _.radius = 5;
        LOGW.p(_.skill().name + " spell Radius must be <= 5. Changed to 5!");
      }
    } else {
      _.needTarget = ABSSkillLoader.TEMPLATES[1].needTarget;
    }
  };
  ABSSkillLoader._checkRadius = function(_) {
    if (_.radius === 0) {
      _.radius = ABSSkillLoader.TEMPLATES[2].radius;
    }
    if (_.radius > 5) {
      _.radius = 5;
      LOGW.p(_.skill().name + " spell Radius must be <= 5. Changed to 5!");
    }
    if (_.needTarget) {
      if (_.range === 0) {
        _.range = ABSSkillLoader.TEMPLATES[2].range;
      }
    }
  };
  ABSSkillLoader._checkNoTarget = function(_) {
    if (_.type === 2 || _.type === 3) {
      _.noTarget = 0;
    }
    if (_.noTarget === 0) {
      return;
    }
    if (_.range === 0) {
      _.range = 1;
    }
    if (_.range === 1) {
      _.pierce = false;
    }
    if (_.range > 1) {
      _.swing = false;
    }
    //_.firearm = 0
    _.directionFix = 1;
  };
  ABSSkillLoader._checkFirearm = function(_) {
    if (!_.isFirearm()) {
      return;
    }
    if (!_.isNeedAmmo()) {
      _.firearm = 0;
      LOGW.p(_.skill().name + " Firearm weapon should be with <Ammo> parameter!");
    }
  };
  ABSSkillLoader._checkStack = function(_) {
    if (_.stack === 1) {
      _.stack = 2;
      LOGW.p("Skill " + _.name() + " stack minimum 2!");
    }
    if (_.stackTime <= 0 && _.stack > 1) {
      ABSSkillLoader._autoCalculateStackTime(_);
    }
    if (_.stackTime > 0 && _.stack === 0) {
      LOGW.p("Skill " + _.name() + " if you use stackTime param, you need stack param too, param not active!");
      _.stackTime = 0;
    }
    if (_.stackTime > 0 && _.firearm === 0) {
      ABSSkillLoader._checkAmmoForStack(_);
    }
  };
  ABSSkillLoader._autoCalculateStackTime = function(_) {
    var text;
    _.stackTime = _.reloadTime * _.stack * 2;
    text = " You use stack withou stackTime param, stackTime set automaticaly = " + _.stackTime;
    LOGW.p("Skill" + _.name() + text);
  };
  ABSSkillLoader._checkAmmoForStack = function(_) {
    var text;
    if (_.ammo > 0 && _.firearm === 0) {
      text = " You use stack with ammo, is forbidden";
      LOGW.p("Skill" + _.name() + text);
      _.ammo = 0;
    }
    if (_.firearm === 0) {
      _._currentStack = _.stack;
      _._stackNeedReload = false;
    } else {
      _._currentStack = 0;
      _._stackNeedReload = true;
    }
  };
  ABSSkillLoader._convertParams = function(_) {
    if (_.directionFix > 0) {
      _.directionFix = true;
    }
    if (_.noDescription > 0) {
      _.noDescription = true;
    }
    if (_.startSound) {
      _.startSound = ABSSkillLoader._convertSound(_.startSound);
    }
    if (_.reloadSound) {
      _.reloadSound = ABSSkillLoader._convertSound(_.reloadSound);
    }
  };
  ABSSkillLoader._convertSound = function(sound) {
    return {
      name: sound,
      pan: 0,
      pitch: 100,
      volume: 100
    };
  };
  ABSSkillLoader._checkFormulas = function(_) {};
  ABSSkillLoader._convertFormula = function(_f) {
    var formula;
    formula = _f.replace(/attackSpeed/i, 'this.attackSpeed()');
    formula = formula.replace(/hp/i, 'this.hp');
    formula = formula.replace(/mp/i, 'this.mp');
    formula = formula.replace(/tp/i, 'this.tp');
    formula = formula.replace(/mhp/i, 'this.mhp');
    formula = formula.replace(/mmp/i, 'this.mmp');
    formula = formula.replace(/atk/i, 'this.atk');
    formula = formula.replace(/def/i, 'this.def');
    formula = formula.replace(/mat/i, 'this.mat');
    formula = formula.replace(/mdf/i, 'this.mdf');
    formula = formula.replace(/agi/i, 'this.agi');
    formula = formula.replace(/luk/i, 'this.luk');
    return formula;
  };
})();

// ■ END ABSSkillLoader3.coffee
//---------------------------------------------------------------------------

(function () {
  var LOG = new PLATFORM.DevLog("Game_AIBehavior");
  //Game_AIBehavior
  //------------------------------------------------------------------------------
  /* jshint -W104 */
  class Game_AIBehavior {
    constructor() {}

    loadEnemy(ai) {
      var templateIndex = 0;
      var enemyObject = $dataEnemies[ai._absParams.enemyId];
      if (enemyObject.meta.ABS) {
        var newTemplateIndex = parseInt(t.meta.ABS);
        if (newTemplateIndex > 0)
          templateIndex = newTemplateIndex;
      }
      this._loadParamsBase(templateIndex);
      this._readEnemyData(ai._absParams.enemyId);
      this._readEventData(ai);
      this._checkParams();
    }

    _loadParamsBase(templateIndex) {
      if (templateIndex >= Game_AIBehavior.TEMPLATES.length) {
        templateIndex = 0;
      }
      var template = Game_AIBehavior.TEMPLATES[templateIndex];
      Game_AIBehavior.PARAMS.forEach(function (p) {
        if (template[p])
          this[p] = template[p];
        else
          this[p] = 0;
      }.bind(this));
    }

    _readEnemyData(enemyId) {
      var t = $dataEnemies[enemyId];
      Game_AIBehavior.PARAMS.forEach(function (p) {
        if (t.meta[p]) {
          this[p] = parseInt(t.meta[p]);
          LOG.p("AI override Enemy param : " + p + " new value " + this[p]);
        }
      }.bind(this));
    }

    _readEventData(gameEvent) {
      var t = gameEvent.page().list;
      for (var i = 0; i < t.length; i++) {
        var item = t[i];
        if (item.code == 108) {
          var comment = item.parameters[0];
          Game_AIBehavior.PARAMS.forEach(function (p) {
            if (comment.indexOf("<" + p) >= 0) {
              var t2 = new RegExp("<" + p + "\\s?:\\s?(.+?)>", "i");
              var match = t2.exec(comment);
              if (match) {
                this[p] = parseInt(match[1]);
                LOG.p("AI override Event param : " + p + " new value " + this[p]);
              }
            }

          }.bind(this));
        }
      }
    }

    _checkParams() {
      if (this.slow == 1)
        this.slow = true;
    }

    loadAlly() {
      this._loadParamsBase(1);
      this._checkParams();
    }
  }

  AlphaABS.register(Game_AIBehavior);

  SDK.setConstant(Game_AIBehavior, 'TEMPLATES', //YOU CAN ADD YOU OWN TEMPLATE, but DON'T MODIFY EXIST ZERO TEMPLATE!!!
    [{ //Zero template
        viewRadius: 5, //Насколько клеток игровой карты видит АИ
        returnRadius: 12, //На сколько клеток может макисимум убежать от последней позиции, где сражался
        escapeOnBattle: false, //Будет ли убегать во время битвы когда нет доступных действий
        canSearch: true, //Слышит ли что происходит вокруг (реакция на битву рядом (в зоне viewRadius))
        noFight: false, //Не будет сражаться вообще
        reviveTime: 0, //Через сколько возродится (секунды)
        regen: true, //Регенерация
        slow: false, //Медленный в бою
        agressive: true, //Агрессивный (всегда догоняет)
        noMove: false, //Не может двигаться в бою
        noEmote: false, //Не показывает эмоции
        cEonStart: 0, //Common Event ID when start battle (see player)
        cEonEnd: 0, //Common Event ID when stop battle (after start)
        cEonDeath: 0, //Common Event ID when Death
        returnType: 0, //Тип возвращения (0 - быстрый, 1 - обычный, 2 - стоит на месте)
        teamId: 1, //Команда
        rage: true, //Может агрится
        ignoreObstacles: false, //Игнорирует регионы препядствий (видит сквозь стены)
        heavy: false, //Нельзя сдвинуь импульсом (1 - нельзя, 0 - можно)
        showHP: false, //Показывать полоску здоровья над врагом всегда (0 - нет, 1 - да)
        motion: false
      }, //END Zero template
      { //Template for Ally
        viewRadius: 5,
        returnRadius: 12,
        escapeOnBattle: false,
        canSearch: true,
        noFight: false,
        agressive: true,
        noMove: false,
        noEmote: true,
        cEonStart: 0,
        cEonEnd: 0,
        cEonDeath: 0,
        returnType: 1,
        teamId: 0,
        rage: false,
        ignoreObstacles: false,
        heavy: false,
        showHP: false,
        motion: false
      }
    ]
  );

  SDK.setConstant(Game_AIBehavior, 'PARAMS', ['viewRadius', 'returnRadius', 'escapeOnBattle',
    'canSearch', 'noFight', 'reviveTime', 'regen', 'slow', 'agressive',
    'noMove', 'noEmote', 'cEonStart', 'cEonDeath', 'cEonEnd', 'returnType',
    'teamId', 'rage', 'ignoreObstacles', 'heavy', 'showHP', 'motion', 'motionOffset'
  ]);

  //END Game_AIBehavior
  //------------------------------------------------------------------------------

})();
//Class extension (for savefile compability)
function Game_AIBot() {
  this.initialize.apply(this, arguments);
}

(function () {

  "use strict";


  //Game_AIBot
  //------------------------------------------------------------------------------
  Game_AIBot.prototype = Object.create(Game_Event.prototype);
  Game_AIBot.prototype.constructor = Game_AIBot;
  PLATFORM.SDK.applyInterface(Game_AIBot, AlphaABS.LIBS.Interface_AIBot);
  PLATFORM.SDK.applyInterface(Game_AIBot, AlphaABS.LIBS.Interface_AIBotABS);
  PLATFORM.SDK.applyInterface(Game_AIBot, AlphaABS.LIBS.Interface_AIBotABSEvents);
  PLATFORM.SDK.applyInterface(Game_AIBot, AlphaABS.LIBS.Interface_AIBotActions);
  PLATFORM.SDK.applyInterface(Game_AIBot, AlphaABS.LIBS.Interface_AIBotABSMoving);
  AlphaABS.register(Game_AIBot);

  Game_AIBot.prototype.initialize = function (mapId, eventId, enemyId) {
    Game_Event.prototype.initialize.call(this, mapId, eventId);
    this.initializeABS();
    this._stateMachine = new AlphaABS.LIBS.AIStateMachine(eventId);
    this.LOG.p("AI inited " + $dataEnemies[enemyId].name + " at " + this.toPoint().toString());
    this.aiName = $dataEnemies[enemyId].name;
    this._absParams.enemyId = enemyId;

    //Variables
    this._absParams.allyToSearch = null; //Кого мне искать
    this._absParams.reviveTimer = null; //Таймер для возраждения
    this._absParams.regenTimer = null; //Таймер для восстановления параметров
    this._absParams.myStartPosition = this.toPoint();
    this._absParams.looted = false;
    this._absParams.activateSwitch = null; //Used if enemy not been active at start
    this._absParams.reservedCommonEvent = null;

    this._absParams.behavior.loadEnemy(this);

    //For compability with Sprite_CharacterABS
    this._absParams.viewRadius = this._absParams.behavior.viewRadius;
    this._absParams.returnRadius = this._absParams.behavior.returnRadius;

    this.setRevive(this._absParams.behavior.reviveTime);

    if (Imported.Quasi_Movement)
      this._absParams.useAStar = true;
    else
      this._absParams.useAStar = false;

    if(this.canRage())
      this._absParams.rageContainer = new AlphaABS.LIBS.RageContainer();

    this._storeMoveData();
  };

  Game_AIBot.prototype.changeReturnType = function (newReturnType) {
    this.behaviorModel().returnType = newReturnType;
    this.LOG.p("ReturnType: " + this.behaviorModel().returnType);
  };

  Game_AIBot.prototype.hasLoot = function () {
    return !this._absParams.looted;
  };
})();
// Generated by CoffeeScript 2.3.1
(function() {
  var __interface_method_performAction, __super_deactivate, __super_selectOnMap;
  Game_AIBot.prototype.activate = function() {
    var key;
    if (!this._absParams.activateSwitch) {
      return;
    }
    if (this._absParams.active === true) {
      return;
    }
    this.LOG.p('Activate');
    key = [$gameMap.mapId(), this.eventId(), this._absParams.activateSwitch];
    $gameSelfSwitches.setValue(key, true);
    this.refresh();
    SlowUpdateManager.register(this.eventId(), this._stateMachine, 300);
    this.initABS();
  };
  Game_AIBot.prototype.initABS = function() {
    if (!this.battler()) {
      this._absParams.battler = new Game_EnemyABS(this._absParams.enemyId);
      this._absParams.battler.initABS();
      SlowUpdateManager.register(this.eventId(), this._stateMachine, 300);
    }
    this.changeStateToFree();
    if (this.isNeedHpBarShow()) {
      this.showHpBarABS();
    }
    this.refreshABSMotion();
    if (this._checkActiveState()) {
      this._absParams.active = true;
      this._checkDieSwitch();
      if (this.battler().enemy().actions.length === 0) {
        this.LOG.p('Not actions');
        this.behaviorModel().noFight = true;
      }
    } else {
      this.LOG.p('Deactivated from start');
      this._deactivate();
    }
  };
  //$[OVER I]
  Game_AIBot.prototype.isNeedHpBarShow = function() {
    var e, showFromModel, showFromPluginAlways;
    try {
      if (AlphaABS.Parameters.isLoaded()) {
        showFromPluginAlways = AlphaABS.Parameters.get_EnemyMiniHpBarOption() === 1;
      } else {
        showFromPluginAlways = false;
      }
      showFromModel = this.behaviorModel().showHP === 1;
      return showFromPluginAlways || showFromModel;
    } catch (error) {
      e = error;
      AlphaABS.error(e, 'while read show enemy mini HP parameter');
      return false;
    }
  };
  //@[ALIAS I]
  __super_selectOnMap = Game_AIBot.prototype.selectOnMap;
  Game_AIBot.prototype.selectOnMap = function(isSelect) {
    var e;
    __super_selectOnMap.call(this, isSelect);
    try {
      if (this._checkCanShowByParameters() === true) {
        if (isSelect === true) {
          return this.showHpBarABS();
        } else {
          if (this.behaviorModel().showHP === 0) {
            return this.hideHpBarABS();
          }
        }
      }
    } catch (error) {
      e = error;
      return AlphaABS.error(e, 'while read show enemy mini HP parameter on selection');
    }
  };
  Game_AIBot.prototype.deactivate = function() {
    var key;
    if (!this._absParams.activateSwitch) {
      return;
    }
    if (this._absParams.active === false) {
      return;
    }
    this.LOG.p('Deactivate');
    key = [$gameMap.mapId(), this.eventId(), this._absParams.activateSwitch];
    $gameSelfSwitches.setValue(key, false);
    this.refresh();
    this._onBattleEnd();
    this.battler().stopABS();
    this._deactivate();
  };
  __super_deactivate = Game_AIBot.prototype._deactivate;
  Game_AIBot.prototype._deactivate = function() {
    __super_deactivate.call(this);
    this.hideHpBarABS();
    this.refreshABSMotion();
    return SlowUpdateManager.clear(this.eventId());
  };
  Game_AIBot.prototype.loot = function() {
    var gold, items;
    if (!this._absParams.looted) {
      this._absParams.looted = true;
      gold = this.battler().gold();
      if (gold > 0) {
        $gameParty.gainGold(gold);
      }
      items = this.battler().makeDropItems();
      if (items.length > 0) {
        items.forEach(function(item) {
          $gameParty.gainItem(item, 1);
        });
      }
      this.LOG.p('Looted!');
      if (!this.inActive()) {
        this._storeDeadData();
      }
    } else {
      this.LOG.p('Already looted!');
    }
  };
  Game_AIBot.prototype._updateABS = function() {
    if (this.inActive() && !this.isErased()) {
      this.battler().updateABS();
      this._stateMachine.update(this);
    } else {
      if (this._stateMachine.inReturnState()) {
        this._stateMachine.update(this);
      }
    }
    if (this.inActive() && this.isErased()) {
      this._deactivate();
    }
  };
  Game_AIBot.prototype._updateRevive = function() {
    if (this._absParams.reviveTimer === null || this.battler().isAlive()) {
      return;
    }
    this._absParams.reviveTimer.update();
    if (this._absParams.reviveTimer.isReady()) {
      this._revive();
    }
  };
  Game_AIBot.prototype._revive = function() {
    var key, reviveAnimationId;
    if (this.isErased()) {
      this._absParams.reviveTimer = null;
      return;
    }
    this.locate(this._absParams.myStartPosition.x, this._absParams.myStartPosition.y);
    key = [$gameMap.mapId(), this.eventId(), AlphaABS.Parameters.get_EnemyDeadSwitch()];
    $gameSelfSwitches.setValue(key, false);
    this._absParams.battler = null;
    this._absParams.reviveTimer = null;
    this.refresh();
    this.initABS();
    this.setRevive(this.behaviorModel().reviveTime);
    this._absParams.active = true;
    this._absParams.looted = false;
    reviveAnimationId = AlphaABS.Parameters.get_EnemyReviveAnimationId();
    if (reviveAnimationId > 0) {
      this.requestAnimationABS(reviveAnimationId);
    }
    this._absParams.myHomePosition = null;
    this.changeStateToFree();
  };
  Game_AIBot.prototype.setRevive = function(time) {
    var t;
    if (time === 0) {
      this._absParams.reviveTimer = null;
      return;
    }
    t = time * AlphaABS.SYSTEM.FRAMES_PER_SECOND;
    this.LOG.p('Set revive ' + time + ' secs.');
    if (time) {
      this._absParams.reviveTimer = new Game_TimerABS();
      this._absParams.reviveTimer.start(t);
    }
  };
  Game_AIBot.prototype.startCommonEvent = function(commonEventId) {
    var commonEvent, list;
    if (commonEventId <= 0) {
      return;
    }
    this.LOG.p('Try call outer Common Event ' + commonEventId);
    commonEvent = $dataCommonEvents[commonEventId];
    if (commonEvent) {
      list = commonEvent.list;
      if (list && list.length > 1) {
        this.LOG.p('Start outer Common Event ');
        this._absParams.reservedCommonEvent = [
          {
            code: 117,
            indent: 0,
            parameters: [commonEventId]
          }
        ];
        this._starting = true;
      }
    }
  };
  Game_AIBot.prototype.refreshABSMotion = function() {
    if (this._absParams.absMotion != null) {
      this._absParams.absMotion.clearMotion();
      this._absParams.absMotion = null;
    }
    if (this.behaviorModel().motion > 0 && this.battler().isAlive()) {
      this._absParams.absMotion = new AlphaABS.LIBS.ABSMotion();
      this._absParams.absMotion.setMotion("main", this.behaviorModel().motionOffset, this);
      return this._absParams.absMotion.applyMotionIdle();
    }
  };
  Game_AIBot.prototype.inABSMotion = function() {
    return this._absParams.absMotion != null;
  };
  Game_AIBot.prototype._updateABSMotion = function() {
    if (this.battler().isNeedABSMotionAction()) {
      this.battler().onABSMotionActionDone();
      if (this._absParams.absMotion != null) {
        return this._absParams.absMotion.applyMotionAction();
      }
    }
  };
  Game_AIBot.prototype.refreshABSMotionState = function(toState) {
    if (!this.inABSMotion()) {
      return;
    }
    if (toState === true) {
      return this._absParams.absMotion.applyMotionState();
    } else {
      return this._absParams.absMotion.applyMotionIdle();
    }
  };
  //@[ALIAS I]
  __interface_method_performAction = Game_AIBot.prototype._performAction;
  Game_AIBot.prototype._performAction = function() {
    __interface_method_performAction.call(this);
    if (this.inABSMotion()) {
      if (this.battler().action(0).isAttack()) {
        this.battler().requestABSMotionAction();
      }
    }
  };
})();

// Generated by CoffeeScript 2.3.1
(function() {
  Game_AIBot.prototype.onActionOnMe = function(who) {
    var e;
    if (!this.inBattle() && this.canFight()) {
      this.LOG.p('I\'am attacked!!!');
      this.changeStateToBattle(who);
    }
    if (!this.isAlive() && this.inActive()) {
      try {
        this.gainExpProcess(who);
      } catch (error) {
        e = error;
        console.error(e);
      }
      if (AlphaABS.Parameters.get_AutoLootEnemiesState() === true) {
        this.loot();
      }
      this.startCommonEvent(this.behaviorModel().cEonDeath);
    }
    if (this.inBattle() && this.canFight()) {
      if (this.canRage()) {
        this._performRageCalculation(who);
      }
    }
    if (this._checkCanShowByParameters()) {
      if (!this.ABSParams().selected) {
        this.showHpBarABS();
      }
      setTimeout((() => {
        try {
          if (this.ABSParams().selected !== true) {
            return this.hideHpBarABS();
          }
        } catch (error) {

        }
      }), 1000);
    }
  };
  Game_AIBot.prototype.gainExpProcess = function(whoKill) {
    var exp, expMode;
    if (whoKill.battler().isEnemy()) {
      return;
    }
    exp = this.battler().exp();
    if (AlphaABS.Parameters.isLoaded()) {
      expMode = AlphaABS.Parameters.get_PartyExpMode();
      if (expMode !== 0) {
        $gameParty.gainExpForAllABS(exp, expMode === 2);
        return;
      }
    }
    return whoKill.battler().gainExp(exp);
  };
  Game_AIBot.prototype.onReturnEnd = function() {
    this._absParams.active = true;
    this._onBattleEnd();
    this.initABS();
    if (this.isNeedHpBarShow()) {
      this.showHpBarABS();
    }
    this.refreshABSMotion();
  };
  Game_AIBot.prototype.onSwitchToFreeState = function() {
    this.LOG.p('In free state');
    this.clearTarget();
    this._restoreMoveData();
    this._moveSpeed += this.battler().ABSParams().moveSpeedUpKoef;
  };
  Game_AIBot.prototype.onSwitchToReturnState = function() {
    //@_deactivate()
    if (AlphaABS.BattleManagerABS.getPlayerTarget() === this) {
      AlphaABS.BattleManagerABS.setPlayerTarget(null);
    }
    this._absParams.active = false;
    this._resetTarget();
    if (this._stateMachine != null) {
      this._stateMachine.deactivate();
    }
    this.refreshABSMotion();
    this.LOG.p('Return to ' + this.getHomePosition().toString());
  };
  Game_AIBot.prototype.onSwitchToSearchState = function() {
    this._restoreMoveData();
    this.LOG.p('Curious! I\'am searching...');
    if (!this.behaviorModel().noEmote) {
      this.requestBalloon(2);
    }
  };
  Game_AIBot.prototype.onSwitchToDeadState = function() {
    this._absParams.allyToSearch = null;
    this._moveType = 0;
    if (this.inABSMotion()) {
      this._absParams.absMotion.clearMotion();
      this._absParams.absMotion = null;
    }
    this._changeEventToDeadState();
    this.refresh();
    this._deactivate();
  };
})();

// Generated by CoffeeScript 2.3.1
(function() {
  var _alias_Game_Event_updateSelfMovement;
  Game_AIBot.prototype.start = function() {
    if (this.inActive() && this !== AlphaABS.BattleManagerABS.getPlayerTarget()) {
      AlphaABS.BattleManagerABS.setPlayerTarget(this);
      this.LOG.p('Selected ' + this.event().name);
    }
    Game_Event.prototype.start.call(this);
  };
  Game_AIBot.prototype.update = function() {
    var isMoving;
    isMoving = this.isMoving();
    Game_Event.prototype.update.call(this);
    if (!this.isMoving()) {
      this._updateNonmoving(isMoving);
    }
    this._updateABS();
    this._updateRevive();
  };
  Game_AIBot.prototype._checkActiveState = function() {
    var comment, e, i, item, list, match, regex;
    try {
      if (this.isErased()) {
        return;
      }
      list = this.list();
      i = 0;
      while (i < list.length) {
        item = list[i];
        comment = "";
        if (item.code === 108) {
          comment = item.parameters[0];
        }
        if (comment.indexOf('<noActive') >= 0) {
          regex = /<noActive\s?:\s?(.+?)>/;
          match = regex.exec(comment);
          if (match && SDK.checkSwitch(match[1])) {
            this._absParams.activateSwitch = match[1];
            return false;
          }
        }
        i++;
      }
    } catch (error) {
      e = error;
      AlphaABS.error(e, ' while checking active state');
    }
    return true;
  };
  Game_AIBot.prototype._checkDieSwitch = function() {
    var key;
    key = [$gameMap.mapId(), this.eventId(), AlphaABS.Parameters.get_EnemyDeadSwitch()];
    if ($gameSelfSwitches.value(key) === true) {
      if (this.behaviorModel().reviveTime === 0) {
        this._deactivate();
        this._restoreDeadData();
      } else {
        $gameSelfSwitches.setValue(key, false);
      }
    }
  };
  Game_AIBot.prototype._restoreDeadData = function() {
    var data, e;
    try {
      data = $gamePlayer.getABSMapData($gameMap.mapId(), this.eventId());
      if (data == null) {
        return;
      }
      "RESTORE DATA FOR".p(this.eventId());
      this.locate(data.x, data.y);
      return this._absParams.looted = data.isLooted;
    } catch (error) {
      e = error;
      return console.error(e);
    }
  };
  Game_AIBot.prototype.list = function() {
    var temp;
    if (this._absParams.reservedCommonEvent != null) {
      temp = this._absParams.reservedCommonEvent;
      this._absParams.reservedCommonEvent = null;
      return temp;
    } else {
      return Game_Event.prototype.list.call(this);
    }
  };
  _alias_Game_Event_updateSelfMovement = Game_Event.prototype.updateSelfMovement;
  Game_AIBot.prototype.updateSelfMovement = function() {
    if (this.inBattle()) {
      if (!this._locked && this.isNearTheScreen() && this.checkStop(this.stopCountThreshold())) {
        if (this._moveType === 7) {
          this.moveTypeTowardTarget();
          return;
        }
      }
    }
    _alias_Game_Event_updateSelfMovement.call(this, arguments);
  };
  Game_AIBot.prototype.isErased = function() {
    return this._erased === true;
  };
  Game_AIBot.prototype._changeEventToDeadState = function() {
    var key;
    key = [$gameMap.mapId(), this.eventId(), AlphaABS.Parameters.get_EnemyDeadSwitch()];
    $gameSelfSwitches.setValue(key, true);
    this._originalDirection = -1;
    this._originalPattern = -1;
    return this._storeDeadData();
  };
  Game_AIBot.prototype._storeDeadData = function() {
    if (this.behaviorModel().reviveTime === 0) {
      "STORE ENEMY DATA".p(this.eventId());
      return $gamePlayer.setNewABSMapData({
        mapId: $gameMap.mapId(),
        enemyId: this.eventId(),
        x: this.x,
        y: this.y,
        isLooted: this._absParams.looted
      });
    }
  };
})();

// Generated by CoffeeScript 2.3.1
(function() {
  Game_AIBot.prototype._storeMoveData = function() {
    this._absParams.moveData = {};
    this._absParams.moveData.moveSpeed = this._moveSpeed;
    this._absParams.moveData.moveType = this._moveType;
    this._absParams.moveData.moveFrequency = this._moveFrequency;
  };
  Game_AIBot.prototype._resetMoveData = function() {
    this._moveSpeed = this._absParams.moveData.moveSpeed;
    this.stay();
  };
  Game_AIBot.prototype.stay = function() {
    this._moveType = 0;
    try {
      return this._moveFrequency = this._absParams.moveData.moveFrequency;
    } catch (error) {

    }
  };
  Game_AIBot.prototype.returnSlow = function() {
    if (!this.isMoving()) {
      return this._performReturnToHome();
    }
  };
  Game_AIBot.prototype._performReturnToHome = function() {
    var direction, home;
    home = this.getHomePosition();
    direction = this.findDirectionTo(home.x, home.y);
    if (direction > 0) {
      this.moveStraight(direction);
    } else {
      this.LOG.p('AI : I\'am return to Home!');
      this._absParams.myHomePosition = null;
      this.onReturnEnd();
      this._restoreMoveData();
    }
  };
  Game_AIBot.prototype._restoreMoveData = function() {
    this._moveSpeed = this._absParams.moveData.moveSpeed;
    this._moveType = this._absParams.moveData.moveType;
    this._moveFrequency = this._absParams.moveData.moveFrequency;
  };
  Game_AIBot.prototype.returnFast = function() {
    return this._performReturnToHome();
  };
  Game_AIBot.prototype._applyAproachSpeed = function() {
    if (this.behaviorModel().slow !== true) {
      this._moveFrequency = this._absParams.moveData.moveFrequency + 2;
    }
  };
  Game_AIBot.prototype._updateNonmoving = function(wasMoving) {
    if (!$gameMap.isEventRunning()) {
      if (wasMoving && !this.isMoveRouteForcing()) {
        this.battler().onWalk();
      }
    }
  };
  Game_AIBot.prototype.startPursuitTarget = function() {
    //"START PURSUIT".LOG()
    this._applyAproachSpeed();
    return this._moveType = 7;
  };
  Game_AIBot.prototype.moveTypeTowardTarget = function() {
    var target;
    target = this.target();
    //"MOVE TO TARGET".LOG()
    if (target != null) {
      if (!this.isNearThePointX(target)) {
        return this.moveToPoint(target);
      }
    }
  };
  Game_AIBot.prototype.moveToAlly = function() {
    if (!this.isMoving() && !this._absParams.behavior.noMove) {
      if (this._absParams.allyToSearch != null) {
        return this.moveToPoint(this._absParams.allyToSearch);
      } else {
        return this.changeStateToFree();
      }
    }
  };
  Game_AIBot.prototype.turnTowardCharacter = function(character) {
    try {
      return Game_Character.prototype.turnTowardCharacter.call(this, character);
    } catch (error) {

    }
  };
})();

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AILogicManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AILogicManager;
  AILogicManager = function() {
    throw new Error("This is a static class");
  };
  AILogicManager.getTargetsInRange = function(bot) {
    var all, enemy;
    try {
      if (!AlphaABS.isABS()) {
        return null;
      }
      all = AILogicManager.getAllInRange(bot);
      if (all.length > 0) {
        return ((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = all.length; i < len; i++) {
            enemy = all[i];
            if (!enemy.isAlly(bot)) {
              results.push(enemy);
            }
          }
          return results;
        })()).first();
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  AILogicManager.getAllInRange = function(bot) {
    var all, inRange;
    try {
      if (!AlphaABS.isABS()) {
        return [];
      }
      all = $gameTroop.membersABS().concat([$gamePlayer]);
      all = all.concat($gameParty.membersABS());
      inRange = AlphaABS.UTILS.inRadius(bot, bot.behaviorModel().viewRadius, all);
      inRange = inRange.filter(function(item) {
        return AlphaABS.BattleManagerABS.isValidTarget(item);
      });
      if (!bot.behaviorModel().ignoreObstacles) {
        return inRange.filter(function(item) {
          return AlphaABS.BattleManagerABS.checkLineOfSight(bot.toPoint(), item.toPoint());
        });
      } else {
        return inRange;
      }
    } catch (error) {
      return [];
    }
  };
  AILogicManager.getAlliesInRange = function(bot) {
    var all, ally;
    try {
      if (!AlphaABS.isABS()) {
        return null;
      }
      all = AILogicManager.getAllInRange(bot);
      if (all.length > 0) {
        return ((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = all.length; i < len; i++) {
            ally = all[i];
            if (ally.isAlly(bot) && ally.inBattle()) {
              results.push(ally);
            }
          }
          return results;
        })()).first();
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  AILogicManager.targetInVisibleRange = function(bot) {
    var distance, target, view;
    target = bot != null ? bot.target() : void 0;
    if (!(target != null ? target.inActive() : void 0)) {
      return false;
    }
    view = bot.behaviorModel().viewRadius;
    distance = AlphaABS.UTILS.distanceTo(bot, target);
    return distance < view;
  };
  AILogicManager.inOutReturnRange = function(bot) {
    var distance, home, returnDistance;
    home = bot != null ? bot.getHomePosition() : void 0;
    if (home == null) {
      return false;
    }
    returnDistance = bot.behaviorModel().returnRadius;
    distance = AlphaABS.UTILS.distanceTo(bot, home);
    return distance > returnDistance;
  };
  AILogicManager.canUseActionNow = function(bot) {
    var action;
    action = bot != null ? bot.currentAction() : void 0;
    if (action != null) {
      return AlphaABS.BattleManagerABS.canUseSkillByTimer(action);
    } else {
      return false;
    }
  };
  AILogicManager.inActionRange = function(bot) {
    var action, target;
    action = bot != null ? bot.currentAction() : void 0;
    if (action != null) {
      target = bot.target();
      if (target) {
        return AlphaABS.BattleManagerABS.canUseSkillByRange(bot, target, action);
      }
    }
    return false;
  };
  AILogicManager.isUsableABSSkill = function(absSkill, isEnemy) {
    if (isEnemy === true) {
      return AILogicManager.isUsableABSSkillForEnemy(absSkill);
    }
    return AILogicManager.isUsableABSSkillForAlly(absSkill);
  };
  AILogicManager.isUsableABSSkillForEnemy = function(absSkill) {
    if (absSkill.isZoneType()) {
      return false;
    }
    if (absSkill.isRadiusType()) {
      return false;
    }
    if (absSkill.isNeedAmmo()) {
      return false;
    }
    if (absSkill.isVectorTypeR()) {
      return false;
    }
    if (absSkill.isFirearm()) {
      return false;
    }
    return true;
  };
  AILogicManager.isUsableABSSkillForAlly = function(absSkill) {
    if (absSkill.isZoneType()) {
      return false;
    }
    if (absSkill.isRadiusType()) {
      return false;
    }
    if (absSkill.isVectorTypeR()) {
      return false;
    }
    if (absSkill.isFirearm()) {
      return false;
    }
    //TODO: Firearm for ally
    return true;
  };
  AlphaABS.register(AILogicManager);
  AlphaABS.LIBS.AILogicManager = AILogicManager;
  AlphaABS.AILogicManager = AILogicManager;
})();

// ■ END AILogicManager.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateBase;
  AIStateBase = class AIStateBase {
    constructor() {
      this._bot = null;
      this._log = null;
      this._init();
    }

    _init() {} //EMPTY

    update(bot) {
      if (!this._setup(bot)) {
        return;
      }
      this._updateMainLogic();
      return this._bot = null;
    }

    _setup(bot) {
      if (bot == null) {
        return false;
      }
      this._bot = bot;
      return this._setupMain();
    }

    _updateMainLogic() {} //EMPTY

    _setupMain() {
      return true;
    }

    onStateStarted() {} //EMPTY

    log(text) {
      try {
        if (typeof DEV === "undefined" || DEV === null) {
          return;
        }
        if (this._log === null) {
          this._createLog();
        }
        if (this._bot != null) {
          return this._log.p(`${this._bot.aiName} : ${text}`);
        }
      } catch (error) {

      }
    }

    _createLog() {
      try {
        this._log = new KDCore.DevLog(this.constructor.name);
        return this._log.setColor(KDCore.Color.FromHex('#00BD43'));
      } catch (error) {

      }
    }

  };
  AlphaABS.register(AIStateBase);
})();

// ■ END AIStateBase.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateBattle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateBattle;
  AIStateBattle = class AIStateBattle extends AlphaABS.LIBS.AIStateBase {
    _init() {
      this._newActionState = null;
      return this._actionState = null;
    }

    _setupMain() {
      this.isStayStill = this._bot.behaviorModel().noMove;
      return true;
    }

    _updateMainLogic() {
      if (!this._checkTarget() || this._checkNoMoveMode()) {
        this._bot.changeStateToFree();
      } else {
        this._bot._makeActions();
        this._updateBattleStates();
      }
    }

    _checkTarget() {
      return AlphaABS.BattleManagerABS.isValidTarget(this._bot.target());
    }

    _checkNoMoveMode() {
      if (!AlphaABS.LIBS.AILogicManager.targetInVisibleRange(this._bot)) {
        if (this.isStayStill) {
          true;
        }
      }
      return false;
    }

    _updateBattleStates() {
      if (this._newActionState != null) {
        this._applyActionState();
      }
      switch (this._actionState) {
        case "approach":
          this._updateApproachState();
          break;
        case "prepareAction":
          this._updatePrepareActionState();
          break;
        case "action":
          this._updateBattleActionState();
          break;
        case "cast":
          this._updateCastState();
          break;
        case "escape":
          this._updateEscapeState();
          break;
        case "wait":
          this._updateWaitState();
      }
    }

    _applyActionState() {
      this._actionState = this._newActionState;
      switch (this._actionState) {
        case "approach":
          this._applyApproachState();
          break;
        case "cast":
          this._applyCastState();
          break;
        case "action":
          this._applyBattleActionState();
          break;
        case "escape":
          this._applyEscapeState();
          break;
        case "wait":
          this._applyWaitState();
      }
      //when "prepareAction" then #EMPTY
      return this._newActionState = null;
    }

    _applyApproachState() {
      this.log("Apply Approach State");
      if (this.isStayStill) {
        return this._stayAndTurn();
      } else {
        return this._bot.startPursuitTarget();
      }
    }

    _stayAndTurn() {
      this._bot.stay();
      return this._bot.turnTowardTarget();
    }

    _applyCastState() {
      return this._stayAndTurn();
    }

    _applyBattleActionState() {
      this._stayAndTurn();
      return this._bot.createNewHomePoint();
    }

    _applyEscapeState() {
      this._bot.stay();
      return this._bot._applyAproachSpeed();
    }

    _applyWaitState() {
      return this._bot.stay();
    }

    _updateApproachState() {
      if (this.isStayStill) {
        this._stayAndTurn();
        if (!AlphaABS.LIBS.AILogicManager.targetInVisibleRange(this._bot)) {
          return this._bot.changeStateToReturn();
        }
      } else {
        if (AlphaABS.LIBS.AILogicManager.inOutReturnRange(this._bot)) {
          return this._bot.changeStateToReturn();
        }
      }
    }

    _updatePrepareActionState() {
      this._bot.checkActionCommonEvent();
      if (AlphaABS.LIBS.AILogicManager.canUseActionNow(this._bot)) {
        return this._prepareActionForNow();
      }
    }

    _prepareActionForNow() {
      if (AlphaABS.LIBS.AILogicManager.inActionRange(this._bot)) {
        return this.changeActionStateTo("action");
      } else {
        this.log("Target away to action, try approach");
        if (this.isStayStill) {
          this.log("Can't approach, (noMove == true)");
          return this._bot.turnTowardTarget();
        } else {
          return this.changeActionStateTo("approach");
        }
      }
    }

    changeActionStateTo(newActionState) {
      return this._newActionState = newActionState;
    }

    _updateBattleActionState() {
      var action;
      this.log("Try Perform Action");
      action = this._bot.currentAction();
      if (action != null ? action.isNeedCast() : void 0) {
        return this._updateOnCastingAction(action);
      } else {
        return this._bot._performAction();
      }
    }

    _updateOnCastingAction(action) {
      if (action.isCasting() && action.isReady()) {
        return this._bot._performAction();
      } else {
        this.log("Start casting");
        action.startCast(this._bot.battler());
        return this.changeActionStateTo("cast");
      }
    }

    _updateCastState() {
      var action;
      this._bot.turnTowardTarget();
      action = this._bot.currentAction();
      if ((action != null) && action.isCasting()) {
        if (AlphaABS.LIBS.AILogicManager.inActionRange(this._bot)) {
          if (action.isReady()) {
            return this.changeActionStateTo("action");
          }
        } else {
          this.log("Casting intterupt, target too far");
          action.resetCast();
          return this._onCastingComplete();
        }
      } else {
        return this._onCastingComplete();
      }
    }

    _onCastingComplete() {
      return this.changeActionStateTo("prepareAction");
    }

    _updateEscapeState() {
      this._bot._escapeFromTarget(this._bot.target());
      if (this._bot.currentAction() != null) {
        this.changeActionStateTo("prepareAction");
      }
      if (AlphaABS.LIBS.AILogicManager.inOutReturnRange(this._bot)) {
        return this._bot.changeStateToReturn();
      }
    }

    _updateWaitState() {
      var isAgressive;
      isAgressive = this._bot.behaviorModel().agressive;
      if (isAgressive) {
        return this.changeActionStateTo("approach");
      } else {
        if (!AlphaABS.LIBS.AILogicManager.targetInVisibleRange(this._bot)) {
          return this._bot.changeStateToFree();
        }
      }
    }

    onStateStarted() {
      return this.changeActionStateTo("approach");
    }

  };
  AlphaABS.register(AIStateBattle);
})();

// ■ END AIStateBattle.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateBattleParty.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateBattleParty;
  AIStateBattleParty = class AIStateBattleParty extends AlphaABS.LIBS.AIStateBattle {
    _setupMain() {
      return true;
    }

    _updateMainLogic() {
      this.log(this._actionState);
      if (!this._checkTarget()) {
        this._bot.changeStateToFree();
      } else {
        this._bot._makeActions();
        this._updateBattleStates();
      }
    }

    _applyBattleActionState() {}

    _updateApproachState() {
      if (!this._bot) {
        "BOT MISSING".p();
      }
      if (AlphaABS.LIBS.AILogicManager.inOutReturnRange(this._bot)) {
        return this._bot.changeStateToReturn();
      }
    }

    _updatePrepareActionState() {
      this._bot.checkActionCommonEvent();
      if (AlphaABS.LIBS.AILogicManager.canUseActionNow(this._bot)) {
        return this._prepareActionForNow();
      } else {
        if (!AlphaABS.LIBS.AILogicManager.inOutReturnRange(this._bot)) {
          return this.changeActionStateTo("approach");
        }
      }
    }

    _prepareActionForNow() {
      if (AlphaABS.LIBS.AILogicManager.inActionRange(this._bot)) {
        return this.changeActionStateTo("action");
      } else {
        this.log("Target away to action, try approach");
        return this.changeActionStateTo("approach");
      }
    }

    _updateWaitState() {
      var isAgressive;
      this.changeActionStateTo("approach");
      isAgressive = this._bot.behaviorModel().agressive;
      if (isAgressive) {
        return this.changeActionStateTo("approach");
      } else {
        if (AlphaABS.LIBS.AILogicManager.targetInVisibleRange(this._bot)) {
          return this._checkPartyLeaderState();
        } else {
          return this._bot.changeStateToFree();
        }
      }
    }

    
    //NEW
    _checkPartyLeaderState() {
      if (!$gamePlayer.inActive()) {
        return;
      }
      if ($gamePlayer.inBattle()) {
        if (this._bot.target() === $gamePlayer.target()) {
          this.changeActionStateTo("approach");
          return;
        }
      }
      return this._bot.changeStateToReturn();
    }

  };
  AlphaABS.register(AIStateBattleParty);
})();

// ■ END AIStateBattleParty.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateFree.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateFree;
  AIStateFree = class AIStateFree extends AlphaABS.LIBS.AIStateBase {
    _init() {
      return this._regenTimer = null;
    }

    _setupMain() {
      var error, model;
      try {
        model = this._bot.behaviorModel();
        this.canSearchAlly = model.canSearch;
        this.canRegenerateInFreeMode = model.regen;
        this.canEscapeInBattle = model.escapeOnBattle;
        this.active = this._bot.inActive();
        this.battler = this._bot.battler();
        return true;
      } catch (error1) {
        error = error1;
        console.error(error);
        return false;
      }
    }

    _updateMainLogic() {
      if (this._bot.canFight()) {
        return this._updateWithFightLogic();
      } else {
        return this._updateNoFightLogic();
      }
    }

    _updateWithFightLogic() {
      this._updateReturnToHome();
      this._regenerate();
      this._updateVision();
    }

    _updateReturnToHome() {
      if ((this._bot.getHomePosition() != null) && this.active) {
        return this._returnToHome();
      }
    }

    _returnToHome() {
      return this._bot.returnSlow();
    }

    _regenerate() {
      if (this.canRegenerateInFreeMode) {
        if (this._regenTimer == null) {
          this._createRegenTimer();
        }
        if (this._updateAndCheckRegenTimer()) {
          return this.battler.regenerateAllonFree();
        }
      }
    }

    _createRegenTimer() {
      this._regenTimer = new Game_TimerABS();
      return this._regenTimer.start(180);
    }

    _updateAndCheckRegenTimer() {
      this._regenTimer.update();
      if (this._regenTimer.isReady()) {
        this._regenTimer.reset();
        return true;
      } else {
        return false;
      }
    }

    _updateVision() {
      var target;
      target = AlphaABS.AILogicManager.getTargetsInRange(this._bot);
      if (target != null) {
        return this._onSeeTarget(target);
      } else {
        return this._updateVisionForAlly();
      }
    }

    _onSeeTarget(target) {
      return this._bot.changeStateToBattle(target);
    }

    _updateVisionForAlly() {
      var ally;
      if (this.canSearchAlly) {
        ally = AlphaABS.AILogicManager.getAlliesInRange(this._bot);
        if (ally != null) {
          return this._onSeeAlly(ally);
        }
      }
    }

    _onSeeAlly(ally) {
      return this._bot.changeStateToSearch(ally);
    }

    _updateNoFightLogic() {
      var target;
      target = AlphaABS.AILogicManager.getTargetsInRange(this._bot);
      if (target != null) {
        return this._onSeeTargetInNoFightMode(target);
      } else {
        return this._regenerate();
      }
    }

    _onSeeTargetInNoFightMode(target) {
      if (this.canEscapeInBattle) {
        return this._bot.runAwayFromTarget(target);
      }
    }

    onStateStarted() {
      var ref;
      return (ref = this._regenTimer) != null ? ref.reset() : void 0;
    }

  };
  AlphaABS.register(AIStateFree);
})();

// ■ END AIStateFree.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateFreeParty.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateFreeParty;
  AIStateFreeParty = class AIStateFreeParty extends AlphaABS.LIBS.AIStateFree {
    _init() {} //EMPTY

    _setupMain() {
      var error, model;
      try {
        model = this._bot.behaviorModel();
        this.canSearchAlly = model.canSearch;
        this.canEscapeInBattle = model.escapeOnBattle;
        this.active = this._bot.inActive();
        this.battler = this._bot.battler();
        return true;
      } catch (error1) {
        error = error1;
        console.error(error);
        return false;
      }
    }

    _updateMainLogic() {
      return this._updateWithFightLogic();
    }

    _updateWithFightLogic() {
      this._updateReturnToHome();
      this._updateVision();
    }

    _returnToHome() {
      return this._bot.returnSlow();
    }

    _updateVision() {
      var target;
      target = AlphaABS.LIBS.AILogicManager.getTargetsInRange(this._bot);
      if (target != null) {
        return this._onSeeTarget(target);
      } else {
        return this._updateVisionForAlly();
      }
    }

    _onSeeTarget(target) {
      var playerState;
      if (this._bot.behaviorModel().agressive) {
        return this._bot.changeStateToBattle(target);
      } else {
        playerState = $gamePlayer.inBattle() && $gamePlayer.target() === target;
        if (playerState) {
          return this._bot.changeStateToBattle(target);
        }
      }
    }

    _updateVisionForAlly() {
      var ally;
      if (this.canSearchAlly) {
        ally = AlphaABS.LIBS.AILogicManager.getAlliesInRange(this._bot);
        if (ally != null) {
          return this._onSeeAlly(ally);
        }
      }
    }

    _onSeeAlly(ally) {
      if (ally.inBattle()) {
        return this._bot.changeStateToSearch(ally);
      }
    }

  };
  AlphaABS.register(AIStateFreeParty);
})();

// ■ END AIStateFreeParty.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateMachine.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateMachine;
  AIStateMachine = class AIStateMachine {
    constructor(evId) {
      this._bot = null;
      this._state = "";
      this._freeStateLogic = new AlphaABS.LIBS.AIStateFree();
      this._searchStateLogic = new AlphaABS.LIBS.AIStateSearch();
      this._returnStateLogic = new AlphaABS.LIBS.AIStateReturn();
      this._battleStateLogic = new AlphaABS.LIBS.AIStateBattle();
      this._slowUpdateActive = false;
    }

    slowUpdate() {
      var e;
      try {
        if (!this._bot) {
          return;
        }
        if (!AlphaABS.isABS()) {
          return;
        }
        if (!this._bot.inActive()) {
          return;
        }
        switch (this._state) {
          case "free":
            return this._updateOnFree();
          case "search":
            return this._updateOnSearch();
          case "return":
            return this._updateOnReturn();
          case "battle":
            return this._updateOnBattle();
        }
      } catch (error) {
        e = error;
        return console.error(e);
      }
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    deactivate() {}

    onGameSave() {
      return this._bot = null;
    }

    onGameLoad() {}

    update(bot) {
      if (!this._setup(bot)) {
        return;
      }
      if (this._bot.inActive()) {
        if (!this._checkDeadState()) {
          this._updateInActiveMode();
        }
      } else {
        this._updateInNoActiveMode();
      }
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
    }

    _setup(bot) {
      this._bot = bot;
      if (bot == null) {
        return false;
      }
      this.battler = this._bot.battler();
      return true;
    }

    _checkDeadState() {
      if (!this.battler.isAlive()) {
        this._changeStateTo("dead");
        return true;
      }
      return false;
    }

    _changeStateTo(stateSymbol) {
      this._state = stateSymbol;
      switch (this._state) {
        case "free":
          return this._onStateFree();
        case "battle":
          return this._onStateBattle();
        case "search":
          return this._onStateSearch();
        case "return":
          return this._onStateReturn();
        case "stun":
          return this._onStateStun();
        case "dead":
          return this._onStateDead();
      }
    }

    _onStateFree() {
      this._bot.onSwitchToFreeState();
      return this._freeStateLogic.onStateStarted();
    }

    _onStateBattle() {
      this._bot.onSwitchToBattleState();
      return this._battleStateLogic.onStateStarted();
    }

    _onStateSearch() {
      return this._bot.onSwitchToSearchState();
    }

    _onStateReturn() {
      return this._bot.onSwitchToReturnState();
    }

    _onStateStun() {
      return this._bot.onSwitchToStunState();
    }

    _onStateDead() {
      return this._bot.onSwitchToDeadState();
    }

    _updateInActiveMode() {
      this._checkStunState();
      return this._updateStates();
    }

    _checkStunState() {
      if (!this.battler.canMove() && !this.inStunState()) {
        return this._changeStateTo("stun");
      }
    }

    inStunState() {
      return this._state === "stun";
    }

    _updateStates() {
      switch (this._state) {
        case "stun":
          return this._updateOnStun();
      }
    }

    _updateOnFree() {
      return this._freeStateLogic.update(this._bot);
    }

    _updateOnBattle() {
      return this._battleStateLogic.update(this._bot);
    }

    _updateOnSearch() {
      return this._searchStateLogic.update(this._bot);
    }

    _updateOnReturn() {
      return this._returnStateLogic.update(this._bot);
    }

    _updateOnStun() {
      if (this.battler.canMove()) {
        return this._changeStateTo("free");
      }
    }

    _updateInNoActiveMode() {
      if (this.inReturnState()) {
        return this._updateOnReturn();
      }
    }

    inReturnState() {
      return this._state === "return";
    }

    switchStateToFree(bot) {
      if (this._setup(bot)) {
        return this._changeStateTo("free");
      }
    }

    switchStateToBattle(bot) {
      if (this._setup(bot)) {
        return this._changeStateTo("battle");
      }
    }

    switchStateToSearch(bot) {
      if (this._setup(bot)) {
        return this._changeStateTo("search");
      }
    }

    switchStateToReturn(bot) {
      if (this._setup(bot)) {
        return this._changeStateTo("return");
      }
    }

    switchActionStateToAction() {
      return this._battleStateLogic.changeActionStateTo("action");
    }

    switchActionStateToPrepare() {
      return this._battleStateLogic.changeActionStateTo("prepareAction");
    }

    switchActionStateToEscape() {
      return this._battleStateLogic.changeActionStateTo("escape");
    }

    switchActionStateToWait() {
      return this._battleStateLogic.changeActionStateTo("wait");
    }

  };
  AlphaABS.register(AIStateMachine);
})();

// ■ END AIStateMachine.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateMachineParty.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateMachineParty;
  AIStateMachineParty = class AIStateMachineParty extends AlphaABS.LIBS.AIStateMachine {
    constructor() {
      super();
      this._freeStateLogic = new AlphaABS.LIBS.AIStateFreeParty();
      this._returnStateLogic = new AlphaABS.LIBS.AIStateReturnParty();
      this._battleStateLogic = new AlphaABS.LIBS.AIStateBattleParty();
    }

  };
  AlphaABS.register(AIStateMachineParty);
})();

// ■ END AIStateMachineParty.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateReturn.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateReturn;
  AIStateReturn = class AIStateReturn extends AlphaABS.LIBS.AIStateBase {
    _updateMainLogic() {
      if (this._bot.getHomePosition() == null) {
        return this._bot.onReturnEnd();
      }
      if (this._bot.isNotReturn()) {
        return this._bot.onReturnEnd();
      }
      return this._updateReturnMode();
    }

    _updateReturnMode() {
      if (this._bot.isSlowReturn()) {
        this._bot.onReturnEnd();
        return this._bot.returnSlow();
      } else {
        return this._bot.returnFast();
      }
    }

  };
  AlphaABS.register(AIStateReturn);
})();

// ■ END AIStateReturn.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateReturnParty.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateReturnParty;
  AIStateReturnParty = class AIStateReturnParty extends AlphaABS.LIBS.AIStateReturn {
    _updateReturnMode() {
      if (this._bot.isSlowReturn()) {
        return this._bot.returnSlow();
      } else {
        return this._bot.returnFast();
      }
    }

  };
  AlphaABS.register(AIStateReturnParty);
})();

// ■ END AIStateReturnParty.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateSearch.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var AIStateSearch;
  AIStateSearch = class AIStateSearch extends AlphaABS.LIBS.AIStateBase {
    _updateMainLogic() {
      if (this._haveOneToSearch()) {
        this._updateOnSearch();
      } else {
        this._bot.changeStateToFree();
      }
    }

    _haveOneToSearch() {
      var ref;
      return (ref = this._bot.allyToSearch()) != null ? ref.inActive() : void 0;
    }

    _updateOnSearch() {
      var target;
      target = AlphaABS.LIBS.AILogicManager.getTargetsInRange(this._bot);
      if (target != null) {
        return this._onSeeTarget(target);
      } else {
        return this._updateAllySearch();
      }
    }

    _onSeeTarget(target) {
      this._bot.setAllyTarget(null);
      return this._bot.changeStateToBattle(target);
    }

    _updateAllySearch() {
      this._bot.moveToAlly();
      if (this._bot.isNearThePointX(this._bot.allyToSearch())) {
        return this._bot.changeStateToFree();
      }
    }

  };
  AlphaABS.register(AIStateSearch);
})();

// ■ END AIStateSearch.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AIStateSearchParty.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//! No used!
(function() {
  var AIStateSearchParty;
  AIStateSearchParty = class AIStateSearchParty extends AlphaABS.LIBS.AIStateSearch {
    _updateMainLogic() {
      if (this._haveOneToSearch()) {
        this._updateOnSearch();
      } else {
        this._bot.changeStateToFree();
      }
    }

    _haveOneToSearch() {
      var ref;
      return (ref = this._bot.allyToSearch()) != null ? ref.inActive() : void 0;
    }

    _updateOnSearch() {
      var target;
      target = AlphaABS.LIBS.AILogicManager.getTargetsInRange(this._bot);
      if (target != null) {
        return this._onSeeTarget(target);
      } else {
        return this._updateAllySearch();
      }
    }

    _onSeeTarget(target) {
      this._bot.setAllyTarget(null);
      return this._bot.changeStateToBattle(target);
    }

    _updateAllySearch() {
      this._bot.moveToAlly();
      if (this._bot.isNearThePointX(this._bot.allyToSearch())) {
        return this._bot.changeStateToFree();
      }
    }

  };
  AlphaABS.register(AIStateSearchParty);
})();

// ■ END AIStateSearchParty.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AudioManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
    //?[NEW]
    AudioManager.playSeLoop = function (se) {
        try {
            if (se.name) {
                this._seBuffers = this._seBuffers.filter(function (audio) {
                    return audio.isPlaying();
                });
                var buffer = this.createBuffer('se', se.name);
                this.updateSeParameters(buffer, se);
                buffer.play(true);
                this._seBuffers.push(buffer);
                return buffer;
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    };
// ■ END AudioManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ AXUI_Container.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Container;
  Container = class Container extends Sprite {
    constructor(size) {
      super(new Bitmap(size, size));
      this.size = size;
      this.items = [];
      this.orientation = "horizontal";
      this.placePoint = "rigth";
      this.itemsCount = 1;
      this.spacing = 0;
      this.move(100, 100);
    }

    //?{PUBLIC}
    setItemsCount(itemsCount) {
      this.itemsCount = itemsCount;
      return this._refreshMain();
    }

    _refreshMain() {
      var s;
      s = this._getSize() * this.itemsCount;
      this.bitmap = new Bitmap(s, s);
      this._rearrange();
      return this._refreshPlace();
    }

    _getSize() {
      return this.size + this.spacing;
    }

    //?{PUBLIC}
    setSpacing(spacing) {
      this.spacing = spacing;
      return this._refreshMain();
    }

    //?{PUBLIC}
    addChild(sprite) {
      this._createItem(sprite);
      this._rearrange();
      return this._refreshPlace();
    }

    _createItem(sprite) {
      this._reCreatePlacer(sprite.visible);
      this.items.push(sprite);
      return this._placer.addChild(sprite);
    }

    _reCreatePlacer(isNew) {
      var pl, s, visLen;
      if (this._placer != null) {
        super.removeChild(this._placer);
      }
      visLen = this._visItemsLength();
      if (isNew === true) {
        visLen += 1;
      }
      s = this._getSize() * visLen;
      s -= this.spacing;
      this._placer = new Sprite(new Bitmap(s, s));
      super.addChild(this._placer);
      pl = this._placer;
      this.items.forEach(function(item) {
        if (item.visible === true) {
          return pl.addChild(item);
        }
      });
    }

    _visItemsLength() {
      var count, i, j, ref;
      count = 0;
      for (i = j = 0, ref = this.items.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        if (this.items[i].visible === true) {
          count++;
        }
      }
      return count;
    }

    _rearrange() {
      var ref, ref1;
      if (this._placer == null) {
        return;
      }
      if ((ref = this._placer.children[0]) != null) {
        ref.x = 0;
      }
      if ((ref1 = this._placer.children[0]) != null) {
        ref1.y = 0;
      }
      if (this.isVertical()) {
        return this._rearrangeVertical();
      } else {
        return this._rearrangeHorizontal();
      }
    }

    _rearrangeVertical() {
      var i, items, j, ref, results, s;
      items = this._placer.children;
      s = this._getSize();
      results = [];
      for (i = j = 1, ref = items.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
        results.push(items[i].y = items[0].y + (s * i));
      }
      return results;
    }

    _rearrangeHorizontal() {
      var i, items, j, ref, results, s;
      items = this._placer.children;
      s = this._getSize();
      results = [];
      for (i = j = 1, ref = items.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
        results.push(items[i].x = items[0].x + (s * i));
      }
      return results;
    }

    _refreshPlace() {
      if (this._placer == null) {
        return;
      }
      if (this.isVertical()) {
        return this._refreshPlaceVertical();
      } else {
        return this._refreshPlaceHorizontal();
      }
    }

    _refreshPlaceVertical() {
      if (this.placePoint === "center") {
        this._placer.y = this.height / 2;
        this._placer.y = this._placer.y - (this._placer.height / 2);
      }
      if (this.placePoint === "left") {
        this._placer.y = this.height;
        return this._placer.y = this._placer.y - this._placer.height;
      }
    }

    _refreshPlaceHorizontal() {
      if (this.placePoint === "center") {
        this._placer.x = this.width / 2;
        this._placer.x = this._placer.x - (this._placer.width / 2);
      }
      if (this.placePoint === "left") {
        this._placer.x = this.width;
        return this._placer.x = this._placer.x - this._placer.width;
      }
    }

    //?{PUBLIC}
    refresh() {
      this._reCreatePlacer(false);
      this._rearrange();
      return this._refreshPlace();
    }

    //?{PUBLIC}
    setHorizontal() {
      this.orientation = "horizontal";
      this._rearrange();
      return this._refreshPlace();
    }

    //?{PUBLIC}
    isHorizontal() {
      return this.orientation === "horizontal";
    }

    //?{PUBLIC}
    setVertical() {
      this.orientation = "vertical";
      this._rearrange();
      return this._refreshPlace();
    }

    
    //?{PUBLIC}
    isVertical() {
      return this.isHorizontal() === false;
    }

    
    //?{PUBLIC}
    setPivotToCenter() {
      this.placePoint = "center";
      return this._refreshPlace();
    }

    
    //?{PUBLIC}
    setPivotToLeft() {
      this.placePoint = "left";
      return this._refreshPlace();
    }

    
    //?{PUBLIC}
    setPivotToRight() {
      this.placePoint = "right";
      return this._refreshPlace();
    }

  };
  AXUI.register(Container);
})();

// ■ END AXUI_Container.coffee
//---------------------------------------------------------------------------

(function () {
  //DataManager
  //------------------------------------------------------------------------------
var _alias_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
   if ($gameMap.isABS()) {
     var allABSAI = $gameTroop.membersABS().concat($gameParty.membersABS());
     allABSAI.forEach(function (item) {
        item.onGameSave();
     });
   }
   return _alias_DataManager_makeSaveContents.call(this);
};

  var _DataManager_extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function (contents) {
    _DataManager_extractSaveContents.call(this, contents);
    if ($gameMap.isABS()) {
      var t = $gameMap.events();
      t.forEach(function (ev) {
        if (ev instanceof Game_AIBot) {
          ev.onGameLoad();
        }
      });
      $gameParty.membersABS().forEach(function (item) {
        item.onGameLoad();
      });
      $gamePlayer.onGameLoad();
      if ($gameVariables._absUserKeys)
        AlphaABS.LIBS.IKey.loadKeyConfig($gameVariables._absUserKeys);
    }
  };

  var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (_DataManager_isDatabaseLoaded.call(this) == true) {
      if (!$dataSkills[1].meta.ABS) {
        throw new Error(AlphaABS.SYSTEM.STRING_ERROR_SKILLNAN);
      }
      if (DataManager._isOldRPGVersion()) {
        LOGW.p(AlphaABS.SYSTEM.STRING_ERROR_OLDDATA);
      }
      return true;
    } else
      return false;
  };

  DataManager._isOldRPGVersion = function () {
    if (Utils.RPGMAKER_VERSION) {
      var numbers = Utils.RPGMAKER_VERSION.split('.');
      return (numbers[1] < 6);
    } else {
      return true;
    }
  };

  //?[NEW]
  DataManager.loadAISpawnMap = function() {
    var mapId = AlphaABS.Parameters.get_SpawnMapId();
    if (mapId > 0) {
      var filename = 'Map%1.json'.format(mapId.padZero(3));
      this.loadDataFile('$dataSpawnMapAI', filename);
    } 
  };

  DataManager.loadAISpawnMap();

  //END DataManager
  //------------------------------------------------------------------------------

})();
(function(){

  var PopInfoManagerABS = AlphaABS.LIBS.PopInfoManagerABS;

  //Game_Action
  //------------------------------------------------------------------------------
    //OVER
    Game_Action.prototype.setSubject = function(subject) {
      this._subject = subject;
    };

    //OVER
    Game_Action.prototype.subject = function() {
      return this._subject;
    };

    //OVER
    Game_Action.prototype.testApply = function(target) {
        return (this.isForDeadFriend() === target.isDead() &&
                (this.isForOpponent() ||
                (this.isHpRecover() && target.hp < target.mhp) ||
                (this.isMpRecover() && target.mp < target.mmp) ||
                (this.hasItemAnyValidEffects(target))));
    };

    var pkd_GameAction_executeDamage = Game_Action.prototype.executeDamage;
    Game_Action.prototype.executeDamage = function(target, value) {
      pkd_GameAction_executeDamage.call(this, target, value);
      PopInfoManagerABS.makeDamagePopUp(target);
      if (this.isDrain()) {
        PopInfoManagerABS.makeDrainPopUp(this.subject());
      }
    };

    var pkd_GameAction_itemEffectRecoverHp = Game_Action.prototype.itemEffectRecoverHp;
    Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
      pkd_GameAction_itemEffectRecoverHp.call(this, target, effect);
      PopInfoManagerABS.makeDamagePopUp(target);
    };

    var pkd_GameAction_itemEffectRecoverMp = Game_Action.prototype.itemEffectRecoverMp;
    Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
      pkd_GameAction_itemEffectRecoverMp.call(this, target, effect);
      PopInfoManagerABS.makeDamagePopUp(target);
    };

    var pkd_GameAction_itemEffectGainTp = Game_Action.prototype.itemEffectGainTp;
    Game_Action.prototype.itemEffectGainTp = function(target, effect) {
      pkd_GameAction_itemEffectGainTp.call(this, target, effect);
      PopInfoManagerABS.makeDamagePopUp(target);
    };

    var pkd_GameAction_executeHpDamage = Game_Action.prototype.executeHpDamage;
    Game_Action.prototype.executeHpDamage = function(target, value) {
      pkd_GameAction_executeHpDamage.call(this, target, value);
      if(value == 0) {
        PopInfoManagerABS.makeZeroDamagePopUp(target);
      }
    };
    //END Game_Action
  //------------------------------------------------------------------------------

})();

(function () {
  var LOG = new PLATFORM.DevLog("Game_Actor");
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;
  var Consts = AlphaABS.SYSTEM;

  //Game_Actor
  //------------------------------------------------------------------------------
  var _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
  Game_Actor.prototype.initMembers = function () {
    _Game_Actor_initMembers.call(this);
    this._absParams.panelSkills = [null, null, null, null, null, null, null, null]; //[id,type]
    this._absParams.favoriteWeapons = [null, null, null, null];
  };

  //NEW
  Game_Actor.prototype.getFavWeapIcons = function () {
    return this._absParams.favoriteWeapons.map(function (argument) {
      if (argument) {
        return $dataWeapons[argument].iconIndex;
      }
      return null;
    });
  };

  Game_Actor.prototype.changeFormationABS = function () {};

  //NEW
  Game_Actor.prototype.setFavWeap = function (item, index) {
    if (index > 3) return;
    if (item == null) {
      this.removeFavWeap(index);
      return;
    }
    if (this._absParams.favoriteWeapons[index] &&
      item.id == this._absParams.favoriteWeapons[index]) {
      this.removeFavWeap(index);
    } else {
      this._absParams.favoriteWeapons[index] = item.id;
    }
  };

  //NEW
  Game_Actor.prototype.isFavWeapExists = function () {
    return this._absParams.favoriteWeapons.some(function (elem) {
      return (elem !== null);
    });
  };

  //NEW
  Game_Actor.prototype.getFavWeapIndex = function (item) {
    var index = 0;
    if (item == null)
      return null;

    var finded = null; //This is not good at all
    this._absParams.favoriteWeapons.forEach(function (i) {
      if (i && i == item.id) {
        finded = index;
      }
      index++;
    }.bind(this));

    return finded;
  };

  //NEW
  Game_Actor.prototype.getFavWeapSymbol = function (item) {
    if (!DataManager.isWeapon(item)) return null;
    var index = this.getFavWeapIndex(item);
    if (index !== null) {
      var symbol = null;
      switch (index) {
        case 0:
          symbol = AlphaABS.LIBS.IKey.SC_W();
          break;
        case 1:
          symbol = AlphaABS.LIBS.IKey.SC_D();
          break;
        case 2:
          symbol = AlphaABS.LIBS.IKey.SC_S();
          break;
        case 3:
          symbol = AlphaABS.LIBS.IKey.SC_A();
          break;
        default:
          break;
      }
      if (symbol != null) {
        return AlphaABS.LIBS.IKey.convertIKeyToLetter(symbol);
      }
    }
    return null;
  };

  //NEW
  Game_Actor.prototype.removeFavWeap = function (index) {
    this._absParams.favoriteWeapons[index] = null;
  };

  //NEW
  Game_Actor.prototype.changeFavWeap = function (index) {
    var fvItem = this._absParams.favoriteWeapons[index];
    if (fvItem != null) {
      var fvItemX = $dataWeapons[fvItem];
      if (fvItemX != null) {
        if (this.hasWeapon(fvItemX)) {
          return false;
        }
        if ($gameParty.hasItem(fvItemX, false)) {
          if (Imported.YEP_ItemCore == true) {
            var slotId = fvItemX.etypeId - 1;
            this.changeEquip(slotId, fvItemX);
            return true;
          } else {
            this.changeEquipById(fvItemX.etypeId, fvItemX.id);
            return true;
          }
        }
      }
    }

    return false;
  };

  //OVER
  Game_Actor.prototype.performAttack = function () {
    var weapons = this.weapons();
    var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
    if(this.isHasABSMotion()) {
      this.requestABSMotionAction();
    } else {
      var attackMotion = $dataSystem.attackMotions[wtypeId];
      if (attackMotion) {
        this.startWeaponAnimation(attackMotion.weaponImageId);
      }
    }
  };

  var pkd_GameActor_learnSkill = Game_Actor.prototype.learnSkill;
  Game_Actor.prototype.learnSkill = function (skillId) {
    var skill = $dataSkills[skillId];
    if (!skill.meta.ABS) {
      LOGW.p("Skill " + skill.name + " not learned, not ABS type");
      return; //Not allow learn not ABS skills
    }
    if (Utils.isMobileDevice()) {
      if (skill.meta.ABS) {
        var skillType = JSON.parse(skill.meta.ABS);
        if (skillType == 2 && skill.scope != 11) {
          LOGW.p("Skill " + skill.name + " not learned, not support on mobile platform");
          return;
        }
      }
    }
    var isLearning = this.isLearnedSkill(skillId);
    pkd_GameActor_learnSkill.call(this, skillId);
    if (skill.occasion == 1 && !isLearning) {
      this._absParams.battleSkillsABS.push(skillId, false);
      this.setSkillOnPanel(skillId, undefined);
      AlphaABS.BattleUI.refresh();
    }
  };

  //NEW
  Game_Actor.prototype.uiPanelReset = function () {
    for (var i = 0; i < 8; i++) {
      this.setSkillOnPanel(null, i);
    }
  };

  Game_Actor.prototype.uiPanelSkills = function () {
    return this._absParams.panelSkills;
  };

  Game_Actor.prototype.skillByKeyIndex = function (index) {
    index = index - 1; //Keyboard from 1, but array from 0
    if (index < 0 || index > 7) {
      return null;
    }
    var skillABS = this._absParams.panelSkills[index];
    return skillABS;
  };

  Game_Actor.prototype.uiPanelObjectsCount = function () {
    var count = 0;
    this._absParams.panelSkills.forEach(function (i) {
      if (i !== null) count++;
    });
    return count;
  };

  Game_Actor.prototype.setItemOnPanel = function (itemId, position) {
    if (this._absParams.battleSkillsABS.itemById(itemId) === null)
      this._absParams.battleSkillsABS.push(itemId, true);
    this._setObjectOnPanel(itemId, 1, position);
  };

  Game_Actor.prototype.setSkillOnPanel = function (skillId, position) {
    this._setObjectOnPanel(skillId, 0, position);
  };

  Game_Actor.prototype._uiPanelFreeSlot = function () {
    for (var i = 0; i < 8; i++) {
      if (this._absParams.panelSkills[i] === null) {
        return i;
      }
    }
    return null; //Not empty slots
  };

  Game_Actor.prototype._setOnPosition = function (id, type, position) {
    if (id == null) {
      this._absParams.panelSkills[position] = null;
      return;
    }
    if (type == 1) {
      this._absParams.panelSkills[position] = this._absParams.battleSkillsABS.itemById(id);
    } else {
      this._absParams.panelSkills[position] = this._absParams.battleSkillsABS.skillById(id);
    }
  };

  Game_Actor.prototype._setObjectOnPanel = function (skillId, type, position) {
    if (position === undefined) {
      var slot = this._uiPanelFreeSlot();
      if (slot >= 0) {
        this._setObjectOnPanel(skillId, type, slot);
      } else {
        return;
      }
    } else {
      if (skillId == null) {
        this._setOnPosition(null, type, position);
      } else {
        if (this._compareObjectOnPosition(skillId, type, position)) { //Remove if on self position
          this._setObjectOnPanel(null, type, position);
        } else {
          var index = this.skillIndexOnUI(skillId, type);
          if (index >= 0) { //Remove from other position if exists
            this._setOnPosition(null, type, index);
          }
          this._setOnPosition(skillId, type, position);
        }
      }

    }
    AlphaABS.BattleUI.refresh();
  };

  Game_Actor.prototype._compareObjectOnPosition = function (id, type, position) {
    if (this._absParams.panelSkills[position]) {
      var item = this._absParams.panelSkills[position];
      if (item.skillId == id) {
        if (type == 1) {
          if (item.isItem()) return true;
        } else {
          if (!item.isItem()) return true;
        }
      }
    }

    return false;
  };

  //Возвращяет номер этого навыка на панели или -1, если навыка нет на панели
  Game_Actor.prototype.skillIndexOnUI = function (skillId, isItem) {
    for (var i = 0; i < this._absParams.panelSkills.length; i++) {
      var item = this._absParams.panelSkills[i];
      if (item === null) continue;
      if (item.skillId == skillId) {
        if (isItem) {
          if (item.isItem()) return i;
        } else
        if (!item.isItem()) return i;
      }
    }

    return -1;
  };

  //OVER
  Game_Actor.prototype.performMapDamage = function () {
    $gameScreen.startFlashForDamage();
  };

  //OVER
  Game_Actor.prototype.turnEndOnMap = function () {
    //EMPTY
  };

  Game_Actor.prototype.stopABS = function () {
    Game_Battler.prototype.stopABS.call(this);
    this._unloadLastFirearm();
    if (this._absParams.stackSkillExists) {
      this._absParams.stackSkillExists = false;
    }
  };

  Game_Actor.prototype._prepareABSSkill = function (absSkill) {
    Game_Battler.prototype._prepareABSSkill.call(this, absSkill);
  };

  //NEW
  Game_Actor.prototype.refreshABSSkills = function () {
    var skillsAll = this._absParams.battleSkillsABS.all();
    for (var i = skillsAll.length - 1; i > 0; i--) {
      var item = skillsAll[i];
      if (item.isItem()) {
        if (item.isReady()) {
          if ($gameParty.numItems(item.skill()) == 0) {
            if (!this._absParams.panelSkills.include(item)) {
              LOG.p("Remove ITEM ABS from memory " + item.name());
              skillsAll.splice(i, 0);
            }
          }
        }
      }
    }
  };

  Game_Actor.prototype.performCurrentAction = function () {
    Game_Battler.prototype.performCurrentAction.call(this);

  };

  var _Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
  Game_Actor.prototype.displayLevelUp = function (newSkills) {
    if ($gameMap.isABS()) {
      this._showLevelupAnimation();
    } else
      _Game_Actor_displayLevelUp.call(this, newSkills);
  };

  Game_Actor.prototype._showLevelupAnimation = function () {
    var levelUpAnimationId = AlphaABS.Parameters.get_LevelUpAnimationId();
    if (levelUpAnimationId > 0) {
      var myChar = $gameParty.getAIBotByBattler(this);
      if (myChar != null)
        myChar.requestAnimationABS(levelUpAnimationId);
    }
  };

  var _Game_Actor_tradeItemWithParty = Game_Actor.prototype.tradeItemWithParty;
  Game_Actor.prototype.tradeItemWithParty = function (newItem, oldItem) {
    $gameParty._noNotifyABS = true;
    var r = _Game_Actor_tradeItemWithParty.call(this, newItem, oldItem);
    $gameParty._noNotifyABS = false;
    return r;
  };

  var _Game_Actor_gainExp = Game_Actor.prototype.gainExp;
  Game_Actor.prototype.gainExp = function (exp) {
    if ($gameMap.isABS() && exp > 0) {
      var nExp = Math.round(exp * this.finalExpRate());
      if (this.isPlayer())
        AlphaABS.BattleUI.pushExpOnPanel(nExp);
    }
    _Game_Actor_gainExp.call(this, exp);
  };

  var pkd_GameActor_forgetSkill = Game_Actor.prototype.forgetSkill;
  Game_Actor.prototype.forgetSkill = function (skillId) {
    pkd_GameActor_forgetSkill.call(this, skillId);
    var index = this.skillIndexOnUI(skillId, false);
    if (index >= 0)
      this.setSkillOnPanel(null, index); //Delete from UI
    this._absParams.battleSkillsABS.remove(skillId, false);

  };

  var _Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
  Game_Actor.prototype.changeEquip = function (slotId, item) {
    this._absParams.needWeaponCheck = true;
    _Game_Actor_changeEquip.call(this, slotId, item);
  };

  var _Game_Actor_discardEquip = Game_Actor.prototype.discardEquip;
  Game_Actor.prototype.discardEquip = function (item) {
    this._absParams.needWeaponCheck = true;
    _Game_Actor_discardEquip.call(this, item);
  };

  var _Game_Actor_refresh = Game_Actor.prototype.refresh;
  Game_Actor.prototype.refresh = function () {
    _Game_Actor_refresh.call(this);
    if (this._absParams.needWeaponCheck) {
      this._checkAdditionSkills();
      if ($gameMap.isABS()) {
        this._refreshWeaponABS();
        this._absParams.needWeaponCheck = false;
        AlphaABS.BattleUI.refreshWeaponIconAt(0);
      }
    }
  };

  //?[NEW]
  Game_Actor.prototype.checkAutoReloadFirearm = function (item) {
    var skill = this._firstBattleABSSkill();
    if (!skill.isFirearm()) return;
    if (!skill.isNeedReloadStack()) return;
    if (item.id == skill.ammo) {
      this.reloadFirearm();
    }
  };

  //?[NEW]
  Game_Actor.prototype._refreshWeaponABS = function () {
    this._unloadLastFirearm();
    this._absParams.battleSkillsABS.all()[0] = new Game_SkillABS(this.attackSkillId());
    LOG.p("PL : Check weapon skill");
    if (this.weapons().length > 0) {
      var w = this.weapons()[0];
      if (w.meta.ABS) {
        if (w.meta.ABS == 0) {
          this._firstBattleABSSkill().loadExternal(w.meta);
        }
        if (w.meta.ABS == 1) {
          this._firstBattleABSSkill().loadExternal(w.meta, 1);
        }
        if (w.meta.firearm == 1) {
          LOG.p("Firearm finded!");
          this._changeFirearm();
          AlphaABS.BattleUI.showFirearmPanel();
        }
      } else {
        this._absParams.battleSkillsABS.all()[0] = new Game_SkillABS(this.attackSkillId());
      }
    } else {
      this._absParams.battleSkillsABS.all()[0] = new Game_SkillABS(this.attackSkillId());
    }
    this.refreshABSMotion();
    AlphaABS.BattleUI.refresh();
  };

  //?[NEW]
  Game_Actor.prototype.refreshABSMotion = function () {
      this._absParams._isNeedABSMotionRefresh = true;
  };

  //?[NEW]
  Game_Actor.prototype.isNeedABSMotionRefresh = function () {
      return (this._absParams._isNeedABSMotionRefresh == true);
  };

  //?[NEW]
  Game_Actor.prototype.onABSMotionRefresh = function () {
      this._absParams._isNeedABSMotionRefresh = false;
  };

  //?[NEW]
  Game_Actor.prototype.isHasABSMotion = function () {
      var skill = this._firstBattleABSSkill();
      return skill.isHasMotion();
  };

  //?[NEW]
  Game_Actor.prototype._unloadLastFirearm = function () {
    var lastSkill = this._firstBattleABSSkill();
    if (lastSkill.isFirearm()) {
      this._absParams._lastFirearmWeaponData = [lastSkill._currentStack, lastSkill.ammo];
      this.unloadFirearm();
      lastSkill.reloadFirearm(0);
    }
  };

  //?[NEW]
  Game_Actor.prototype._firstBattleABSSkill = function () {
    return this._absParams.battleSkillsABS.all()[0];
  };

  //?[NEW]
  Game_Actor.prototype._changeFirearm = function () {
    if (!this.isPlayer()) return;
    this.reloadFirearm();
  };

  //?[NEW]
  Game_Actor.prototype.unloadFirearm = function () {
    if (this._absParams._lastFirearmWeaponData != null) {
      var itemsCountFromStack = this._absParams._lastFirearmWeaponData[0];
      if (itemsCountFromStack > 0) {
        var ammoItem = $dataItems[this._absParams._lastFirearmWeaponData[1]];
        $gameParty._noNotifyABS = true;
        $gameParty.gainItem(ammoItem, itemsCountFromStack);
        LOG.p("Firearm unloaded to inventory " + itemsCountFromStack);
        $gameParty._noNotifyABS = false;
      }
      this._absParams._lastFirearmWeaponData = null;
    }
    AlphaABS.BattleUI.refresh();
  };

  //?[NEW]
  Game_Actor.prototype.reloadFirearm = function () {
    var skill = this._firstBattleABSSkill();
    if (!skill.isFirearm()) return;
    if (!skill.isReady()) return;
    if (skill._currentStack == skill.stack) return;
    if (skill._currentStack > 0) {
      this._absParams._lastFirearmWeaponData = [skill._currentStack, skill.ammo];
      this.unloadFirearm();
      skill.reloadFirearm(0);
    }
    var ammoItem = $dataItems[skill.ammo];
    var itemsCount = $gameParty.numItems(ammoItem);
    LOG.p("Try reload firearm " + itemsCount);
    if (itemsCount >= skill.stack) {
      $gameParty.loseItem(ammoItem, skill.stack);
      skill.reloadFirearm(skill.stack);
    } else {
      if (itemsCount > 0) {
        skill.reloadFirearm(itemsCount);
        $gameParty.loseItem(ammoItem, itemsCount);
      } else {
        LOG.p("Try reload firearm : NO AMMO");
        AlphaABS.BattleManagerABS.alertOnUIbySym('noAmmo');
        skill.reloadFirearm(0);
      }
    }
    AlphaABS.BattleUI.refresh();
  };

  //NEW
  Game_Actor.prototype._checkAdditionSkills = function () {
    LOG.p("Check addition skills");
    this.addedSkills().forEach(function (i) {
      if (this._absParams.battleSkillsABS.skillById(i) == null) {
        this._absParams.battleSkillsABS.push(i, false);
        this.setSkillOnPanel(i, undefined);
      }
    }.bind(this));

    //CHECK ALL
    var d = this._skills.concat(this.addedSkills());
    this._absParams.battleSkillsABS.all().forEach(function (i) {
      if (!d.include(i.skillId)) {
        if (i.skillId != this.attackSkillId()) {
          this._absParams.battleSkillsABS.remove(i.skillId, false);
          var index = this.skillIndexOnUI(i.skillId, false);
          if (index != -1) {
            this.setSkillOnPanel(null, index);
          }
        }
      }
    }.bind(this));
  };

  //1
  var _Game_Actor_isEquipTypeLocked = Game_Actor.prototype.isEquipTypeLocked;
  Game_Actor.prototype.isEquipTypeLocked = function (etypeId) {
    if (etypeId == 1) {
      if ($gameMap.isABS()) {
        var timer = this._absParams.battleSkillsABS.all()[0].isReady();
        if (timer) {
          return _Game_Actor_isEquipTypeLocked.call(this, etypeId);
        } else {
          return true;
        }
      } else {
        return _Game_Actor_isEquipTypeLocked.call(this, etypeId);
      }
    } else {
      return _Game_Actor_isEquipTypeLocked.call(this, etypeId);
    }
  };


  Game_Actor.prototype._initBattleSkills = function () {
    Game_Battler.prototype._initBattleSkills.call(this);
    this._absParams.battleSkillsABS.push(this.attackSkillId(), false);
    this._absParams.needWeaponCheck = true;
  };

  Game_Actor.prototype.isPlayer = function () {
    return (this == $gamePlayer.battler());
  };

  //OVER
  Game_Actor.prototype.makeActions = function () {
    Game_Battler.prototype.makeActions.call(this);
    if (this.isConfused())
      this.makeConfusionActions();
    else
      this.makeAutoBattleActions();
  };

  //END Game_Actor
  //------------------------------------------------------------------------------

})();
(function () {
  "use strict";

  var LOG = new PLATFORM.DevLog("BattleProcessABS");
  LOG.applyLibraryColors();

  var PointX = AlphaABS.UTILS.PointX;
  var ABSUtils = AlphaABS.UTILS;

  //BattleProcessABS
  //------------------------------------------------------------------------------
  class Game_BattleProcessABS {
    constructor() {
      this._postProcesses = [];
      this._skill = null;
      this._centerPoint = null;
    }

    performBattleAction(subject, target) {
      this._processAction(subject, target, subject.battler().currentAction());
    }

    performBattleActionZone(subject, action) {
      LOG.p("Battle : Start Zone Action");
      this._processAction(subject, null, action);
    }

    performBattleActionRadius(subject, point, action, skill) {
      LOG.p("Battle : Start Radius Action");
      this._centerPoint = point;
      this._processAction(subject, null, action);
    }

    startPostBattleAction(subject, target, action, skill) {
      LOG.p("Battle : Start post Action");
      action._forcing = true; //Because subject use MP and other on action start
      var postProcess = {};
      postProcess.subject = subject;
      postProcess.target = target;
      postProcess.action = action;
      postProcess.skill = skill;
      var t = new AlphaABS.LIBS.Game_SVector(postProcess);
      this._postProcesses.push(t);
      $gameMap.addSVector(t);
      if (subject == $gamePlayer) {
        if (!$gamePlayer.inBattle())
          $gamePlayer.onBattleStart();
      }
    }

    performPostBattleAction(sVector) {
      try {
        var t = sVector.data();
        if (t.skill.isVectorTypeR()) {
          LOG.p("Battle : Start Radius Action by Vector");
          this._centerPoint = t.target;
          this._processAction(t.subject, null, t.action);
        } else {
          if(t.skill.isNoTarget()) {
            if(sVector._target != null) {
              this._processAction(t.subject, sVector._target, t.action);
            } else {
              this._centerPoint = t.target;
              this._processAction(t.subject, null, t.action);
            }
          } else {
            this._processAction(t.subject, t.target, t.action);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        this._postProcesses.delete(sVector);
      }
    }

    isPostProcessExists() {
      return (this._postProcesses.length != 0);
    }

    //PRIVATE
    _processAction(subject, target, action) {
      if (subject == null) {
        return;
      }
      if (!subject.battler()) {
        return;
      }
      if (action) {
        action.prepare(); //???
        if (action.isValid()) {
          this._start_action(subject, target, action);
          this._end_action(subject);
        }
      }
    }

    _start_action(subject, target, action) {
      //subject.requestEffect('whiten'); TODO
      try {
        this._skill = subject.battler().skillABS_byAction(action);
        action.applyGlobal();
        var targets = this._makeTargets(subject, target);
        targets.delete(null);
        this._showAnimation(subject, targets, action);
        targets.forEach(function (item) {
          if (item && item.inActive()) {
            this._invokeAction(subject, item, action);
          }
        }.bind(this));

      } catch (e) {
        console.error(e);
      }
    }

    _end_action(subject) {
      if (subject && subject.battler()) {
        subject.battler().performActionEnd(); //???
        subject.battler().onAllActionsEnd();
      }
      this._skill = null;
      this._centerPoint = null;
    }

    _invokeAction(subject, target, action) {
      if (action.numRepeats() > 1) {
        var time = 120;
        if (this._skill && this._skill.repeatDelay > 0) {
          time = this._skill.repeatDelay;
        }
        for (var i = 0; i < action.numRepeats(); i++) {
          setTimeout(function () {
            this._invokeNormalAction(subject, target, action);
          }.bind(this), time * i);
        }
      } else
        this._invokeNormalAction(subject, target, action);
    }

    _invokeNormalAction(subject, target, action) {
      //var realTarget = this.applySubstitute(target);
      try {
        action.apply(target.battler());
        var _skill = subject.battler().skillABS_byAction(action);
        if (_skill && _skill.cEonUse > 0) {
          if (target instanceof Game_AIBot) {
            target.startCommonEvent(_skill.cEonUse);
          }
        }
        if (_skill && _skill.isHasImpulse()) {
          if (target.battler().result().used)
            this._processImpulseAction(subject, target, _skill);
        }
        this._onActionResult(subject, target);
      } catch (e) {
        console.error(e);
      }
    }

    _processImpulseAction(subject, target, absSkill) {
      if (target != $gamePlayer) {
        if (target.behaviorModel().heavy)
          return;
      }
      var d = subject.direction();
      var dx = 0;
      var dy = 0;
      var dd = d;
      if (absSkill.isRandomImpulseDirecton()) {
        dx = KDCore.SDK.rand(0, 1);
        dy = KDCore.SDK.rand(0, 1);
      } else {
        if (target.x == subject.x && target.y == subject.y) { //ON SELF

          if (d == 4 || d == 6) { //X
            if (d == 4) {
              dx = -1;
            } else
              dx = 1;

          } else if (d == 2 || d == 8) { //Y
            if (d == 2) {
              dy = 1;
            } else {
              dy = -1;
            }
          }
        } else {
          if (target.x < subject.x) {
            dx = -1;
            dd = 4;
          }

          if (target.y < subject.y) {
            dy = -1;
            dd = 8;
          }

          if (target.x > subject.x) {
            dx = 1;
            dd = 6;
          }

          if (target.y > subject.y) {
            dy = 1;
            dd = 2;
          }
        }
      }
      target.onApplyImpulseForce(dx * absSkill.impulse, dy * absSkill.impulse, dd);
    }

    _makeTargets(subject, target) {
      try {
        var targets = [];
        if (this._skill.isZoneType()) {
          var zone = this._generateZone(subject, !this._skill.isIgnoreObstacles());
          var points = zone.points;
          this._centerPoint = zone.center;
          var candidates = [];
          if (subject == $gamePlayer) {
            candidates = $gameTroop.membersABS();
          } else {
            candidates = [$gamePlayer];
          }
          for (var i = 0; i < points.length; i++) {
            candidates.forEach(function (item) {
              if (ABSUtils.inPoint(item, points[i])) {
                targets.push(item);
              }
            });
          }
          return targets;
        } else
        if (this._skill.isRadiusType() || this._skill.isVectorTypeR()) {
          if (subject == $gamePlayer) {
            targets = ABSUtils.inRadius(this._centerPoint, this._skill.radius, $gameTroop.membersABS());
          } else {
            targets = ABSUtils.inRadius(this._centerPoint, this._skill.radius, [$gamePlayer]);
          }
        } else {
          targets.push(target);
        }

        return targets;
      } catch (e) {
        console.error(e);
        return [];
      }
    }

    _showAnimation(subject, targets, action) {
      try {
        if (action.isSkill() && action.item().id == subject.battler().attackSkillId()) {
          this._requestAnimation(targets, subject.battler().attackAnimationId1());
        } else {
          var animId = action.item().animationId;
          /*if(this._skill.isVectorType() && this._skill.isNoTarget()) {
            if(targets.length == 0) {
              this._requestMapAnimation(animId);
              return;
            }
          }*/
          if (this._skill.isZoneType() || this._skill.isRadiusType() || this._skill.isVectorTypeR()) {
            this._requestMapAnimation(animId);
          } else {
            this._requestAnimation(targets, animId);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    _requestAnimation(objects, animationId) {
      objects.forEach(function (item) {
        if (item)
          item.requestAnimationABS(animationId);
      });
    }

    _requestMapAnimation(animationId) {
      try {
        var sprite = new Sprite_Base();
        sprite.anchor.x = -0.5;
        sprite.anchor.y = -0.5;
        var point = this._centerPoint.mapPointOnScreen();
        sprite.x = point.x;
        sprite.y = point.y;
        LOG.p("Request Map animation on " + point);

        $gameMap.requestAnimationABS({
          sprite: sprite,
          id: animationId
        });
      } catch (e) {
        console.error(e);
      }
    }

    _onActionResult(subject, target) {
      try {
        if (target.battler().result().used) {
          this._resultOnDamage(target.battler());
          target.battler().startDamagePopup();
          subject.battler().startDamagePopup();
          target.onActionOnMe(subject);
        }
      } catch (e) {
        console.error(e);
      }
    }

    _resultOnDamage(target) {
      try {
        if (target.result().missed) {
          if (target.result().physical) {
            target.performMiss();
          } else {
            this._resultOnFailure(target);
          }

        } else if (target.result().evaded) {
          if (target.result().physical) {
            target.performEvasion();
          } else {
            target.performMagicEvasion();
          }
        } else {
          //HP
          if (target.result().hpAffected) {
            if (target.result().hpDamage > 0 && !target.result().drain) {
              target.performDamage();
            }
            if (target.result().hpDamage < 0) {
              target.performRecovery();
            }
          }
          //MP
          if (target.isAlive() && target.result().mpDamage !== 0) {
            if (target.result().mpDamage < 0) {
              target.performRecovery();
            }
          }
          //TP
          if (target.isAlive() && target.result().tpDamage !== 0) {
            if (target.result().tpDamage < 0) {
              target.performRecovery();
            }
          }
        }
        target.performActionUsed();
      } catch (e) {
        console.error(e);
      }
    }

    _resultOnFailure(target) {
      //Empty
    }

    _resultOnAffectedStatus(target) {
      try {
        var states = target.result().addedStateObjects();
        states.forEach(function (state) {
          var state_msg = target.isActor() ? state.message1 : state.message2;
        }.bind(this));
      } catch (e) {
        console.error(e);
      }
    }

    _generateZone(subject, withZoneCheck) {
      try {
        var d = ABSUtils.getDirKey(subject);
        var points = [];
        var point = subject.toPoint();

        /*
            **
        SUBJECT ***
            **
        */

        var centerPoint = null;

        switch (d) {
          case 'r':
            centerPoint = new PointX(point.x + 2, point.y);
            points.push(new PointX(point.x + 1, point.y + 1));
            points.push(new PointX(point.x + 1, point.y - 1));
            break;
          case 'l':
            centerPoint = new PointX(point.x - 2, point.y);
            points.push(new PointX(point.x - 1, point.y + 1));
            points.push(new PointX(point.x - 1, point.y - 1));
            break;
          case 'u':
            centerPoint = new PointX(point.x, point.y - 2);
            points.push(new PointX(point.x + 1, point.y - 1));
            points.push(new PointX(point.x - 1, point.y - 1));
            break;
          default: //d
            centerPoint = new PointX(point.x, point.y + 2);
            points.push(new PointX(point.x + 1, point.y + 1));
            points.push(new PointX(point.x - 1, point.y + 1));
            break;
        }

        points.push(centerPoint);
        points.push(new PointX(centerPoint.x - 1, centerPoint.y));
        points.push(new PointX(centerPoint.x + 1, centerPoint.y));
        points.push(new PointX(centerPoint.x, centerPoint.y - 1));
        points.push(new PointX(centerPoint.x, centerPoint.y + 1));

        if (withZoneCheck == true) {
          for (var i = 0; i < points.length; i++) {
            if (!AlphaABS.BattleManagerABS.checkLineOfSight(point, points[i])) {
              points.delete(points[i]);
            }
          }
        }

        /*
         *
         * CenterPoint *
         *
         */

        return {
          center: centerPoint,
          points: points
        };
      } catch (e) {
        console.error(e);
        return {
          center: AlphaABS.UTILS.PointX.Empty,
          points: []
        };
      }
    }
  }

  AlphaABS.register(Game_BattleProcessABS);
  AlphaABS.BattleManagerABS.connectProcess();

  //END BattleProcessABS
  //------------------------------------------------------------------------------



})();
(function () {

  var PopInfoManagerABS;
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;

  var _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
  Game_Battler.prototype.initMembers = function () {
    _Game_Battler_initMembers.call(this);
    PopInfoManagerABS = AlphaABS.LIBS.PopInfoManagerABS;
    this._initBattleSkills();
  };

  var _GameBattler_attackSpeed = Game_Battler.prototype.attackSpeed;
  Game_Battler.prototype.attackSpeed = function () {
    var attackSpeed = _GameBattler_attackSpeed.call(this);
    if (attackSpeed == 0) {
      return 120;
    } else
      return attackSpeed;
  };

  //NEW
  Game_Battler.prototype.initABS = function () {
    this.appear();
    if (!this.isPreserveTp()) {
      this.initTp();
    }
    this._absParams.battleSkillsABS.all().forEach(function (item) {
      this._prepareABSSkill(item);
    }.bind(this));
  };

  //NEW
  Game_Battler.prototype.onGameLoad = function () {
    //EMPTY
  };

  //NEW
  Game_Battler.prototype.updateABS = function () {
    this._absParams.battleSkillsABS.update();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
    this.removeBuffsAuto();
  };

  //OVER
  Game_Battler.prototype.onTurnEnd = function () {
    this.regenerateAll();
  };

  var pkd_GameBattler_regenerateAll = Game_Battler.prototype.regenerateAll;
  Game_Battler.prototype.regenerateAll = function () {
    this.clearResult();
    pkd_GameBattler_regenerateAll.call(this);
    if (this.isAlive()) {
      if (this.hp < this.mhp || this.mp < this.mmp)
        PopInfoManagerABS.makeDamagePopUp(this);
    }
  };

  //OVER
  Game_Battler.prototype.onAllActionsEnd = function () {
    this.clearResult();
    this.removeStatesAuto(1);
  };

  //OVER
  Game_Battler.prototype.onBattleEnd = function () {
    this.onAllActionsEnd();
    this.clearActions();
    if (!this.isPreserveTp()) {
      this.clearTp();
    }
  };

  //OVER
  Game_Battler.prototype.resetStateCounts = function (stateId) {
    var state = $dataStates[stateId];
    var variance = 0;
    if (state.autoRemovalTiming != 1) {
      //For now, turns calcs in a seconds
      variance += Math.max(state.maxTurns - state.minTurns, 0);
      this._stateTurns[stateId] = (state.minTurns + Math.randomInt(1 + variance)) * BattleManagerABS.TURN;
    } else {
      this._stateTurns[stateId] = 1; //TODO: After Action
    }
  };

  //OVER
  Game_Battler.prototype.overwriteBuffTurns = function (paramId, turns) {
    var t = turns * BattleManagerABS.TURN;
    if (this._buffTurns[paramId] < t) {
      this._buffTurns[paramId] = t;
    }
  };

  //NEW
  Game_Battler.prototype.stopABS = function () {
    this.onBattleEnd();
    this.removeBattleStates();
    this.removeAllBuffs();
  };

  //NEW
  Game_Battler.prototype.skillABS_byId = function (skillId, isItem) {
    isItem = SDK.check(isItem, false);
    if (isItem) {
      return this._absParams.battleSkillsABS.itemById(skillId);
    } else {
      return this._absParams.battleSkillsABS.skillById(skillId);
    }
  };

  //NEW
  Game_Battler.prototype.skillABS_byAction = function (action) {
    if (action != null && action.item())
      return this.skillABS_byId(action.item().id, action.isItem());
    else
      return null;
  };

  //NEW
  Game_Battler.prototype.skillABS_attack = function () {
    return this.skillABS_byId(this.attackSkillId(), false);
  };

  Game_Battler.prototype.performCurrentAction = function () {
    var action = this.action(0);
    var skill = this.skillABS_byAction(action);
    if (skill.isNeedReloadParam()) {
      skill.preUse(this._calculateABSSkillReloadParam(skill.reloadParam));
    }
    this.useItem(action.item());
    skill.onUse();
    if (skill.skillId != this.attackSkillId() && !skill.isNeedCast()) {
      //Атака не вызывает postUse
      //Навык, который необходимо кастовать, тоже не вызывает postUse
      this._absParams.battleSkillsABS.all().forEach(function (skill) {
        skill.postUse();
      });
    }

    this.removeStatesAuto(1);
    this.removeBuffsAuto();
  };

  Game_Battler.prototype._calculateABSSkillReloadParam = function (reloadParam) {
    var reloadVar = 10;
    try {
      /* jshint -W061 */
      reloadVar = Math.round(parseInt(eval(reloadParam)));
    } catch (err) {
      AlphaABS.error(err, "Can't calculate <reloadParam>");
      reloadVar = 10;
    }
    return reloadVar;
  };

  var _Game_Battler_onDamage = Game_Battler.prototype.onDamage;
  Game_Battler.prototype.onDamage = function (value) {
    _Game_Battler_onDamage.call(this, value);
    this._absParams.battleSkillsABS.all().forEach(function (s) {
      if (s.isCasting()) {
        s.onCastDelay(30); //TODO:: Подучать как лучше (в %), сколько урон от макс.HP в процентах, столько и в процентах от castMaxTime (начиная с порога)
      }
    });
  };

  //NEW
  Game_Battler.prototype._prepareABSSkill = function (absSkill) {
    //EMPTY
  };

  //OVER
  Game_Battler.prototype.onBattleStart = function () {
    //EMPTY
  };

  //OVER
  Game_Battler.prototype.addNewState = function (stateId) {
    Game_BattlerBase.prototype.addNewState.call(this, stateId);
    if (this._states.include(stateId)) {
      PopInfoManagerABS.makeStatePopUp(this, stateId, false);
      if (AlphaABS.isABS())
        this._checkStateCommonEvent(stateId);
    }
  };

  //?[NEW]
  Game_Battler.prototype._checkStateCommonEvent = function (stateId) {
    try {
      var state = $dataStates[stateId];
      if (state) {
        if (state.meta.cEonStart > 0) {
          this._startCommonEventFromState(state.meta.cEonStart);
        }
        if (state.meta.cEonEnd > 0) {
          this._registerCommonEventOnStateEnd(stateId, state.meta.cEonEnd);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  //?[NEW]
  Game_Battler.prototype._startCommonEventFromState = function (evId) {
    if (this.isPlayer()) {
      $gamePlayer.startCommonEventABS(evId);
    } else {
      this._startCommonEventOnAI(evId);
    }
  };

  //?[NEW]
  Game_Battler.prototype._registerCommonEventOnStateEnd = function (stateId, evId) {
    if (!this._onEndStateEvents)
      this._onEndStateEvents = {};
    this._onEndStateEvents[stateId] = evId;
  };

    //@[ALIAS]
    var _alias_Game_Battler_removeState = Game_Battler.prototype.removeState;
    Game_Battler.prototype.removeState = function (stateId) {
      _alias_Game_Battler_removeState.call(this, stateId);
      try {
        if (this._onEndStateEvents) {
        if (this._onEndStateEvents[stateId]) {
          this._startCommonEventFromState(this._onEndStateEvents[stateId]);
          this._onEndStateEvents[stateId] = null;
        }
      }
      } catch(error) {
        AlphaABS.error(error,' while start commonEvent on state end');
      }
    };

  //?[NEW]
  Game_Battler.prototype._startCommonEventOnAI = function (commonEventId) {
    var all = BattleManagerABS.getAllBotsOnMap();
    for (var i = 0; i < all.length; i++) {
      var bot = all[i];
      if (bot.battler() == this) {
        bot.startCommonEvent(commonEventId);
        return;
      }
    }
  };

  var pkd_GameBattler_addBuff = Game_Battler.prototype.addBuff;
  Game_Battler.prototype.addBuff = function (paramId, turns) {
    PopInfoManagerABS.makeBuffPopUp(this, paramId, true);
    pkd_GameBattler_addBuff.call(this, paramId, turns);
  };

  var pkd_GameBattler_addDebuff = Game_Battler.prototype.addDebuff;
  Game_Battler.prototype.addDebuff = function (paramId, turns) {
    PopInfoManagerABS.makeBuffPopUp(this, paramId, false);
    pkd_GameBattler_addDebuff.call(this, paramId, turns);
  };

  Game_Battler.prototype._initBattleSkills = function () {
    this._absParams.battleSkillsABS = new Game_SkillManagerABS();
  };

    //?[NEW]
    Game_Battler.prototype.requestABSMotionAction = function () {
      this._absParams._needABSMotionAction = true;
    };

    //?[NEW]
    Game_Battler.prototype.onABSMotionActionDone = function () {
      this._absParams._needABSMotionAction = false;
    };

    //?[NEW]
    Game_Battler.prototype.isNeedABSMotionAction = function () {
      return (this._absParams._needABSMotionAction == true);
    };

})();
(function(){

  var PopInfoManagerABS = AlphaABS.LIBS.PopInfoManagerABS;
  var LOG = new PLATFORM.DevLog("Game_BattlerBase");

  //Game_BattlerBase
  //------------------------------------------------------------------------------
    var pkd_GameBattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
    Game_BattlerBase.prototype.initMembers = function() {
      pkd_GameBattlerBase_initMembers.call(this);
      this._absParams = {};
      this._absParams.popups = [];
      this._absParams.moveSpeedUpKoef = 0;
    };

    var pkd_GameBattlerBase_eraseState = Game_BattlerBase.prototype.eraseState;
    Game_BattlerBase.prototype.eraseState = function(stateId) {
      if(this._states.include(stateId)) {
        PopInfoManagerABS.makeStatePopUp(this, stateId, true);
        this.onSpeedUpState(stateId, false);
        this.onMotionState(stateId, false);
      }
      pkd_GameBattlerBase_eraseState.call(this, stateId);
    };

    var pkd_GameBattlerBase_addNewState = Game_BattlerBase.prototype.addNewState;
    Game_BattlerBase.prototype.addNewState = function(stateId) {
      var state = $dataStates[stateId];
      if(state.restriction == 0 || state.restriction == 4) {
        pkd_GameBattlerBase_addNewState.call(this, stateId);
        this.onSpeedUpState(stateId, true);
        this.onMotionState(stateId, true);
      } else {
        LOGW.p("State " + state.name + " not supported in Alpha ABS");
      }
    };

    //NEW
    Game_BattlerBase.prototype.onSpeedUpState = function(stateId, up) {
      var state = $dataStates[stateId];
      if(state.meta.speed) {
        if(up) {
          LOG.p("Speed UP State been added");
          this._absParams.moveSpeedUpKoef += parseInt(state.meta.speed);
        } else {
          LOG.p("Speed UP State been removed");
          this._absParams.moveSpeedUpKoef -= parseInt(state.meta.speed);
        }
      }
    };

    //NEW
    Game_BattlerBase.prototype.onMotionState = function(stateId, up) {
      var state = $dataStates[stateId];
      if(state.restriction == 4 && this.isPlayer()) {
        if(state.motion >= 2) {
          if(up) {
            //LOG.p("Sleep motion requested");
            $gamePlayer.requestMotion('sleep');
          } else {
            //LOG.p("Sleep motion removed");
            $gamePlayer.requestMotion('none');
          }
        }
      }
    };

    //OVER
    Game_BattlerBase.prototype.isOccasionOk = function(item) {
      if($gameParty.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
      } else {
        return item.occasion === 0 || item.occasion === 1 || item.occasion === 2;
      }
    };

    //NEW
    Game_BattlerBase.prototype.ABSParams = function() {
      return this._absParams;
    };

    //NEW
    Game_BattlerBase.prototype.allIconsWithPriority = function(value) {
      var stateIcons = this.states().map(function(state) {
        if(state.priority >= value)
              return state.iconIndex;
            else return 0;
        }).filter(function(iconIndex) {
            return iconIndex > 0;
        });
      return stateIcons;
    };

    //NEW
    Game_BattlerBase.prototype.getInfoPops = function() {
      return this._absParams.popups;
    };

    //NEW
    Game_BattlerBase.prototype.performActionUsed = function() {
      PopInfoManagerABS.makeItemPopUp(this);
    };

    Game_BattlerBase.prototype.addInfoPop = function(info) {
      this._absParams.popups.push(info);
    };

    Game_BattlerBase.prototype.clearInfoPops = function() {
      this._absParams.popups = [];
    };

    Game_BattlerBase.prototype.isPlayer = function() {
      return (this == $gamePlayer.battler());
    };
    //END Game_BattlerBase
  //------------------------------------------------------------------------------

})();

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Character.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //@[ALIAS]
    var _Game_Character_initMembers = Game_Character.prototype.initMembers;
    Game_Character.prototype.initMembers = function () {
        _Game_Character_initMembers.call(this);
        this._absParams = {};
        this._absParams.animationABS = 0;
        this._absParams.useAStar = false;
        this._needShowABSHpBar = false;
    };

    //NEW
    Game_Character.prototype.ABSParams = function () {
        return this._absParams;
    };

    //NEW
    Game_Character.prototype.requestAnimationABS = function (animationId) {
        this._absParams.animationABS = animationId;
    };

    //NEW
    Game_Character.prototype.moveToPoint = function (point) {
        var dir = this.findDirectionTo(point.x, point.y);
        if (dir > 0) {
            this.moveStraight(dir);
        }
    };

    //NEW
    Game_Character.prototype.moveFromPoint = function (point) {
        var points = [];
        for (var j = 0; j < 4; j++) {
            var direction = 2 + j * 2;
            if (this.canPass(this.x, this.y, direction)) {
                var x2 = $gameMap.roundXWithDirection(this.x, direction);
                var y2 = $gameMap.roundYWithDirection(this.y, direction);
                //if(x2 != point.x && y2 != point.y)
                points.push([x2, y2]);
            }
        }

        if (points.length > 0) {
            //LOG.p("POINTS " + points.length);
            var p;
            if (points.length > 1)
                p = points.sample();
            else
                p = points[0];
            var newPoint = {
                x: p[0],
                y: p[1]
            };
            this.moveToPoint(newPoint);
        }
    };

    var _Game_Character_findDirectionTo = Game_Character.prototype.findDirectionTo;
    Game_Character.prototype.findDirectionTo = function (goalX, goalY) {
        if (this._absParams.useAStar == false) {
            return _Game_Character_findDirectionTo.call(this, goalX, goalY);
        } else {
            var t = AlphaABS.LIBS.ABSPathfinding.findPath(this, goalX, goalY);
            if (t == 0) t = _Game_Character_findDirectionTo.call(this, goalX, goalY);
            return t;
        }
    };

    //?NEW
    Game_Character.prototype.onApplyImpulseForce = function (x, y, d) {
        if ((x === 1 || x === -1 || x === 0) && (y === 1 || y === -1 || y === 0)) {
            if (this.canPass(this.x, this.y, d)) {
                var ld = this.direction();
                this.jump(x, y);
                this.setDirection(ld);
            }
        } else {
            this._onComplexImpulse(x, y, d);
        }
    };

    //?NEW
    Game_Character.prototype._onComplexImpulse = function (x, y, d) {
        var ld, safe;
        ld = this.direction();
        safe = 20;
        while (!this.canPass(this.x - 1 + x, this.y - 1 + y, d)) {
            x = AlphaABS.UTILS.decrement(x);
            y = AlphaABS.UTILS.decrement(y);
            if (x === 0 && y === 0) {
                break;
            }
            safe--;
            if (safe === 0) {
                return;
            }
        }
        this.jump(x, y);
        this.setDirection(ld);
    };

    //?[NEW]
    Game_Character.prototype.hideHpBarABS = function () {
        this._needShowABSHpBar = false;
    };

    //?[NEW]
    Game_Character.prototype.showHpBarABS = function () {
        this._needShowABSHpBar = true;
    };

    //?[NEW]
    Game_Character.prototype.isHpBarVisible = function () {
        return (this._needShowABSHpBar == true);
    };

    //?[NEW]
    Game_Character.prototype.inABSMotion = function () {
        return false;
    };

    //@[ALIAS]
    var _alias_Game_Character_updatePattern = Game_Character.prototype.updatePattern;
    Game_Character.prototype.updatePattern = function () {
        try {
            if (this.inABSMotion()) {
                var motion = this.ABSParams().absMotion;
                if (motion.inAction()) {
                    this._pattern = motion.motionPattern(this._pattern);
                    motion.onActionDone();
                } else {
                    _alias_Game_Character_updatePattern.call(this);
                    if (!this.hasStepAnime() && this._stopCount > 0) {   
                    } else
                        this._pattern = motion.motionPattern(this._pattern);
                }
            } else
                _alias_Game_Character_updatePattern.call(this);
        } catch (error) {
            AlphaABS.warning(error, ' when try play ABS motion');
            _alias_Game_Character_updatePattern.call(this);
        }
    };

    //@[ALIAS]
    var _alias_Game_Character_update = Game_Character.prototype.update;
    Game_Character.prototype.update = function () {
        _alias_Game_Character_update.call(this);
        this._updateABSMotion();
    };

    //?[NEW]
    Game_Character.prototype._updateABSMotion = function () {
        // * EMPTY
    };

    //?[NEW]
    Game_Character.prototype.findMySprite = function () {
        if (SceneManager.isCurrentSceneIsMap()) {
            try {
                var spriteset = SceneManager._scene._spriteset;
                if(spriteset != null) {
                    return spriteset.getSpriteForCharacter(this);
                }
                
            } catch (error) {
                AlphaABS.waring('Cant find sprite of battler');
            }

        }
        return null;
    };

    //?[NEW]
    Game_Character.prototype.getStartPointToVector = function () {
        var mySprite = this.findMySprite();
        if (mySprite == null) {
            return this.toPoint();
        } else {
            return mySprite.getStartPointToVector();
        }
    };

})();
// ■ END Game_Character.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
function Game_EnemyABS() {
    this.initialize.apply(this, arguments);
}
(function () {
    //Game_EnemyABS
    //------------------------------------------------------------------------------
    Game_EnemyABS.prototype = Object.create(Game_Enemy.prototype);
    Game_EnemyABS.prototype.constructor = Game_EnemyABS;

    //OVER
    Game_EnemyABS.prototype.initialize = function (enemyId) {
        Game_Enemy.prototype.initialize.call(this, enemyId, 0, 0);
    };

    //OVER
    Game_EnemyABS.prototype.initMembers = function () {
        Game_Enemy.prototype.initMembers.call(this);
        this._absParams.myTurnCount = 0; //Количество секунд, проведённых в сессии боя
        this._absParams.rageContainer = null;
    };

    //NEW
    Game_EnemyABS.prototype.regenerateAllonFree = function () {
        if (this.isAlive()) {
            if (this._hp != this.mhp) {
                var value = Math.floor(this.mhp * 0.05);
                value = Math.max(value, -this.maxSlipDamage());
                if (value !== 0) {
                    this.gainHp(value);
                }
            }
            if (this._mp != this.mmp) {
                var value = Math.floor(this.mmp * 0.05);
                if (value !== 0) {
                    this.gainMp(value);
                }
            }
        }
    };

    //OVER
    Game_EnemyABS.prototype.isActionValid = function (action) {
        var t = this.skillABS_byId(action.skillId);
        return Game_Enemy.prototype.isActionValid.call(this, action) && t.isReady();
    };

    //OVER
    Game_EnemyABS.prototype.meetsTurnCondition = function (param1, param2) {
        var n = this._absParams.myTurnCount;
        if (param2 === 0) {
            return n === param1;
        } else {
            return n > 0 && n >= param1 && n % param2 === param1 % param2;
        }
    };

    Game_EnemyABS.prototype.clearStates = function () {
        Game_Enemy.prototype.clearStates.call(this);
        this._stateSteps = {};
    };

    Game_EnemyABS.prototype.eraseState = function (stateId) {
        Game_Enemy.prototype.eraseState.call(this, stateId);
        delete this._stateSteps[stateId];
    };

    Game_EnemyABS.prototype.resetStateCounts = function (stateId) {
        Game_Enemy.prototype.resetStateCounts.call(this, stateId);
        this._stateSteps[stateId] = $dataStates[stateId].stepsToRemove;
    };

    Game_EnemyABS.prototype.initABS = function () {
        Game_Enemy.prototype.initABS.call(this);
        if (this._absParams.battleSkillsABS.all().length == 0)
            this._createBattleSkills();
    };

    //NEW (вынести на бота)
    Game_EnemyABS.prototype.onWalk = function () {
        this.clearResult();
        this.states().forEach(function (state) {
            this.updateStateSteps(state);
        }, this);
    };

    //NEW
    Game_EnemyABS.prototype.executeFloorDamage = function () {
        var damage = Math.floor(this.basicFloorDamage() * this.fdr);
        damage = Math.min(damage, this.maxFloorDamage());
        this.gainHp(-damage);
        if (damage > 0) {
            this.startDamagePopup();
        }
    };

    //NEW
    Game_EnemyABS.prototype.updateStateSteps = function (state) {
        if (state.removeByWalking) {
            if (this._stateSteps[state.id] > 0) {
                if (--this._stateSteps[state.id] === 0) {
                    this.removeState(state.id);
                }
            }
        }
    };

    //NEW
    Game_EnemyABS.prototype.onTurnEnd = function () {
        Game_Enemy.prototype.onTurnEnd.call(this);
        this._absParams.myTurnCount += 1;
    };

    //NEW
    Game_EnemyABS.prototype.attackAnimationId1 = function () {
        return 6;
    };

    Game_EnemyABS.prototype.onBattleEnd = function () {
        Game_Enemy.prototype.onBattleEnd.call(this);
        this._absParams.myTurnCount = 0;
        this.removeBattleStates();
        this.removeAllBuffs();
    };

    Game_EnemyABS.prototype.onDamage = function (value) {
        Game_Enemy.prototype.onDamage.call(this, value);
        if (this._absParams.rageContainer) {

        }
    };

    //PRIVATE
    Game_EnemyABS.prototype._initBattleSkills = function () {
        Game_Enemy.prototype._initBattleSkills.call(this);
    };

    Game_EnemyABS.prototype._createBattleSkills = function () {
        $dataEnemies[this._enemyId].actions.forEach(function (t) {
            var skill = $dataSkills[t.skillId];
            if (skill.meta.ABS && skill.meta.ABS <= 2) //Can't use radius and zones skills
                this._absParams.battleSkillsABS.push(t.skillId, false);
        }.bind(this));
    };
    //END Game_EnemyABS
    //------------------------------------------------------------------------------

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    //?[NEW]
    Game_Event.prototype.isABSEvent = function () {
        try {
            var ev = this.event();
            if (ev.meta && ev.meta.ABS) {
                return true;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
        return false;
    };
})();
// ■ END Game_Event.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Follower.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Game_Follower_refresh = Game_Follower.prototype.refresh;
    Game_Follower.prototype.refresh = function () {
        _alias_Game_Follower_refresh.call(this);
        this.refreshABSMotion();
    };

    //?[NEW]
    Game_Follower.prototype.refreshABSMotion = function () {
        if (this._absParams.absMotion != null) {
            this._absParams.absMotion.clearMotion();
            this._absParams.absMotion = null;
        }
        if(this.isHasABSMotion()) {
            this._absParams.absMotion = new AlphaABS.LIBS.ABSMotion();
            var skill = this.actor()._firstBattleABSSkill();
            this._absParams.absMotion.setMotion(skill.motion, skill.motionOffset, this);
            this._absParams.absMotion.applyMotionIdle();
        }
    };

    //?[NEW]
    Game_Follower.prototype.isHasABSMotion = function () {
        if(this.actor()) {
            if (this.actor().isHasABSMotion()) {
                return true;
            }
        }
        return false;
    };

    //?[NEW]
    Game_Follower.prototype.inABSMotion = function () {
        if (this.ABSParams() == null)
            return false;
        return this.ABSParams().absMotion != null;
    };
})();
// ■ END Game_Follower.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Followers.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  //?[NEW]
  Game_Followers.prototype.initializeABS = function() {
    var i, results;
    this._data = [];
    i = 1;
    results = [];
    while (i < $gameParty.maxBattleMembers()) {
      this._data.push(new Game_AI2Bot(i));
      results.push(i++);
    }
    return results;
  };
})();

// ■ END Game_Followers.coffee
//---------------------------------------------------------------------------

(function () {
  //Game_Interpreter
  //------------------------------------------------------------------------------
  //OVER
  Game_Interpreter.prototype.character = function (param) {
    if (param < 0) {
      return $gamePlayer;
    } else if (this.isOnCurrentMap()) {
      return $gameMap.event(param > 0 ? param : this._eventId);
    } else {
      return null;
    }
  };

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'ABS') {
      switch (args[0]) {
        case 'revive':
          var revive = 5;
          if (args[1])
            revive = parseInt(args[1]);
          if (args[2]) {
            var x = $gameMap.events().filter(function (ev) {
              return (ev.event().name == args[2]);
            });
            if (x.length > 0) {
              x.first().setRevive(revive);
            }
          } else
            this.character(this._eventId).setRevive(revive);
          break;
        case 'loot':
          this.character(this._eventId).loot();
          break;
        case 'showUI':
          AlphaABS.BattleUI.showUI();
          break;
        case 'hideUI':
          AlphaABS.BattleUI.hideUI();
          break;
        case 'activate':
          this._activateABSEnemy(args[1] || null);
          break;
        case 'deactivate':
          this._deactivateABSEnemy(args[1] || null);
          break;
        case 'param':
          this._onABSEnemyParam(args[1] || null, args[2] || null, args[3] || null);
          break;
        case 'spawn': //spawn EventId (x y | regionId)
          if (AlphaABS.Parameters.get_SpawnMapId() > 0)
            this._onABSSpawn(args[1], args[2], args[3] || null);
          break;

      }
    }
  };

  //NEW
  Game_Interpreter.prototype._activateABSEnemy = function (name) {
    var enemy = this._getAbsAI(name);
    if (enemy)
      enemy.activate();
  };

  //NEW
  Game_Interpreter.prototype._getAbsAI = function (name) {
    if (name == null) {
      try {
        name = $dataMap.events[this.eventId()].name;
      } catch (e) {
        console.error(e);
        return null;
      }
    }
    if (name) {
      var x = $gameMap.events().filter(function (ev) {
        return (ev.event().name == name);
      });
      if (x.length > 0) {
        return x.first();
      }
    }
    return null;
  };

  //NEW
  Game_Interpreter.prototype._deactivateABSEnemy = function (name) {
    var enemy = this._getAbsAI(name);
    if (enemy)
      enemy.deactivate();
  };

  //NEW
  Game_Interpreter.prototype._onABSEnemyParam = function (paramName, paramValue, aiEventName) {
     if (!paramName) return;
     if (!paramValue) {
       paramValue = 0;
     }
     var event = this._getAbsAI(aiEventName);
     if (event == null) {
       event = $dataMap.events[this.eventId()];
     }
     if(event instanceof Game_AIBot) {
       var index = AlphaABS.LIBS.Game_AIBehavior.PARAMS.indexOf(paramName);
       if(index >= 0) {
         event.behaviorModel()[paramName] = paramValue;
         event.LOG.p("New value " + paramValue + " of " + paramName);
         if(event.inBattle())
            event.refreshBehavior();
       }
     }
  };

  //?[NEW]
  Game_Interpreter.prototype._onABSSpawn = function (eventId, xOrRegion, y) {
     if(!AlphaABS.isABS()) return;
     try {
          if (y == null) {
            var point = $gameMap.getRandomSpawnPointOnRegionABS(xOrRegion);
            if(point) {
              $gameMap.spawnABSBot(eventId, point.x, point.y);
            }
          } else {
            var x = Number(xOrRegion);
            var y2 = Number(y);
            if ($gameMap.canSpawnABSOn(x, y2)) {
              $gameMap.spawnABSBot(eventId, x, y2);
            }
          }
     } catch (e) {
      console.error(e);
     }
  };

  // Change Party Member

  var _Game_Interpreter_command129 = Game_Interpreter.prototype.command129;
  Game_Interpreter.prototype.command129 = function () {
    if ($gameMap.isABS()) {
      if (_Game_Interpreter_command129.call(this)) {
        AlphaABS.BattleManagerABS.updateABSSession();
        return true;
      }
    }
    return _Game_Interpreter_command129.call(this);
  };

  // Transfer Player
  var _Game_Interpreter_command201 = Game_Interpreter.prototype.command201;
  Game_Interpreter.prototype.command201 = function () {
    if (AlphaABS.Parameters.get_AllowTransferState() == true) {
      if(AlphaABS.isABS())
        $gamePlayer.stopABS();
      return _Game_Interpreter_command201.call(this);
    } else {
      if ($gameParty.inBattle()) {
        AlphaABS.BattleManagerABS.alertNoInBattle();
        AlphaABS.BattleManagerABS.warning(1);
        return true;
      } else {
        return _Game_Interpreter_command201.call(this);
      }
    }
  };

  // Scroll Map
  var _Game_Interpreter_command204 = Game_Interpreter.prototype.command204;
  Game_Interpreter.prototype.command204 = function () {
    if ($gameParty.inBattle()) {
      AlphaABS.BattleManagerABS.alertNoInBattle();
      AlphaABS.BattleManagerABS.warning(1);
      return true;
    }
    return _Game_Interpreter_command204.call(this);
  };

  // Getting On and Off Vehicles
  var _Game_Interpreter_command206 = Game_Interpreter.prototype.command206;
  Game_Interpreter.prototype.command206 = function () {
    if ($gameMap.isABS()) {
      AlphaABS.BattleManagerABS.warning(0);
      return true;
    } else
      return _Game_Interpreter_command206.call(this);
  };

  // Change Player Followers
  var _Game_Interpreter_command216 = Game_Interpreter.prototype.command216;
  Game_Interpreter.prototype.command216 = function () {
    if ($gameMap.isABS()) {
      AlphaABS.BattleManagerABS.warning(0);
      return true;
    }
    return _Game_Interpreter_command216.call(this);
  };

  // Gather Followers
  var _Game_Interpreter_command217 = Game_Interpreter.prototype.command217;
  Game_Interpreter.prototype.command217 = function () {
    if ($gameMap.isABS()) {
      AlphaABS.BattleManagerABS.warning(0);
      return true;
    }
    return _Game_Interpreter_command217.call(this);
  };

  // Set Weather Effect
  //OVER
  Game_Interpreter.prototype.command236 = function () {
    //if (!$gameParty.inBattle()) {
    $gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]);
    if (this._params[3] && !$gameParty.inBattle()) {
      this.wait(this._params[2]);
    }
    //}
    return true;
  };

  // Battle Processing
  //OVER
  Game_Interpreter.prototype.command301 = function () {
    //EMPTY
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  // Shop Processing
  var _Game_Interpreter_command302 = Game_Interpreter.prototype.command302;
  Game_Interpreter.prototype.command302 = function () {
    if ($gameParty.inBattle()) {
      AlphaABS.BattleManagerABS.alertNoInBattle();
      AlphaABS.BattleManagerABS.warning(1);
      return true;
    } else
      return _Game_Interpreter_command302.call(this);
  };

  // Name Input Processing
  var _Game_Interpreter_command303 = Game_Interpreter.prototype.command303;
  Game_Interpreter.prototype.command303 = function () {
    if ($gameParty.inBattle()) {
      AlphaABS.BattleManagerABS.alertNoInBattle();
      AlphaABS.BattleManagerABS.warning(1);
      return true;
    } else
      return _Game_Interpreter_command303.call(this);
  };

  // Change Class
  var _Game_Interpreter_command321 = Game_Interpreter.prototype.command321;
  Game_Interpreter.prototype.command321 = function () {
    if ($gameMap.isABS()) {
      AlphaABS.BattleManagerABS.warning(321);
      return true;
    } else
      return _Game_Interpreter_command321.call(this);
  };

  // Change Actor Images
  var _Game_Interpreter_command322 = Game_Interpreter.prototype.command322;
  Game_Interpreter.prototype.command322 = function () {
    if ($gameMap.isABS()) {
      _Game_Interpreter_command322.call(this);
      AlphaABS.BattleUI.refreshPlayerFace();
      return true;
    } else
      return _Game_Interpreter_command322.call(this);
  };

  Game_Interpreter.prototype.command331 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command332 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command333 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command334 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command335 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command336 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command337 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command338 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command339 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  Game_Interpreter.prototype.command340 = function () {
    AlphaABS.BattleManagerABS.warning(2);
    return true;
  };

  // Open Menu Screen
  var _Game_Interpreter_command351 = Game_Interpreter.prototype.command351;
  Game_Interpreter.prototype.command351 = function () {
    if ($gameParty.inBattle()) {
      AlphaABS.BattleManagerABS.alertNoInBattle();
      AlphaABS.BattleManagerABS.warning(1);
      return true;
    } else
      return _Game_Interpreter_command351.call(this);
  };

  // Open Save Screen
  var _Game_Interpreter_command352 = Game_Interpreter.prototype.command352;
  Game_Interpreter.prototype.command352 = function () {
    if ($gameParty.inBattle()) {
      AlphaABS.BattleManagerABS.alertNoInBattle();
      AlphaABS.BattleManagerABS.warning(1);
      return true;
    } else
      return _Game_Interpreter_command352.call(this);
  };

  //END Game_Interpreter
  //------------------------------------------------------------------------------

})();
(function () {
  var LOG = new PLATFORM.DevLog("Game_Map");
  //Game_Map
  //------------------------------------------------------------------------------
  var _Game_Map_setupEvents = Game_Map.prototype.setupEvents;
  Game_Map.prototype.setupEvents = function () {
    _Game_Map_setupEvents.call(this);
    AlphaABS.ABSPathfinding.init();
    AlphaABS.ABSPathfinding.setup();
    this._isABSMap = false;
    if (!$dataMap.meta) return;
    if ($dataMap.meta.ABS) {
      this._isABSMap = true;
      this._absParams = {};
      this._absParams.sVectors = [];
      this._absParams.animationABS = null;
      this._absParams.targetCircle = null;
      this._absParams.targetCircleNeedLock = false;
      this._absParams.needCast = null;
      this._absParams.menuClickCount = 1;
      this.setupEventsABS();
    }
  };

  //NEW
  Game_Map.prototype.ABSParams = function () {
    return this._absParams;
  };

  //NEW
  Game_Map.prototype.isABS = function () {
    return this._isABSMap;
  };

  //NEW
  Game_Map.prototype.stopABS = function () {
    this._isABSMap = false;
  };

  //NEW
  Game_Map.prototype.characterABS = function (battler) {
    //TODO:Возвращает Game_AIBot по battler
  };

  //NEW
  Game_Map.prototype.addSVector = function (item) {
    this._absParams.sVectors.push(item);
  };

  //NEW
  Game_Map.prototype.requestCast = function (who) {
    LOG.p("Map : Cast requested");
    this._absParams.needCast = who;
  };

  //NEW
  Game_Map.prototype.requestAnimationABS = function (animationData) { //{sprite, id}
    LOG.p("Map : Animation requested");
    this._absParams.animationABS = animationData;
  };

  //NEW
  Game_Map.prototype.requestPlayerTargetCircle = function (skill) {
    LOG.p("Map : Target Circle requested");
    this._absParams.menuClickCount = 0;
    this._absParams.targetCircle = skill;
  };

  //NEW
  Game_Map.prototype.lockPlayerTargetCircle = function () {
    LOG.p("Map : Target Circle locked");
    this._absParams.targetCircleNeedLock = true;
  };

  //NEW
  Game_Map.prototype.stopPlayerTargetCircle = function () {
    LOG.p("Map : Target Circle stop!");
    this._absParams.targetCircle = null;
    this._absParams.targetCircleNeedLock = false;
  };

  //NEW
  Game_Map.prototype.setupEventsABS = function () {
    LOG.p("setupEventsABS");
    for (var i = 0; i < this._events.length; i++) {
      if (!this._events[i]) continue;
      this.addABSEvent(i);
    }
    $gamePlayer.followers().initializeABS();
  };

  //?[NEW]
  Game_Map.prototype.addABSEvent = function (id) {
    var ev = this._events[id].event();
    var enemyId = this._getABSEnemyId(ev);
    if (enemyId > 0) {
      this._events[id] = new Game_AIBot(this._mapId, id, enemyId);
    }
  };

  Game_Map.prototype._getABSEnemyId = function (event) {
    try {
      if (event.meta.ABS) {
        var enemyId = parseInt(event.meta.ABS);
        if (enemyId > 0) {
          return enemyId;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return 0;
  };

  //?[NEW]
  Game_Map.prototype.spawnABSBot = function (id, x, y) {
    try {
      var event = $dataSpawnMapAI.events[id];
      if (event) {
        DataManager.extractMetadata(event);
        var enemyId = this._getABSEnemyId(event);
        if (enemyId > 0) {
          var eId = this._events.length;
          var newAi = new Game_SpawnedAiBot(this._mapId, eId, enemyId, x, y, id);
          this._events.push(newAi);
          newAi.initABS();
          $gameTroop.setup();
          SceneManager._scene._spriteset.createSpawnEventABS(eId);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  //?[NEW]
  Game_Map.prototype.getRandomSpawnPointOnRegionABS = function (regionId) {
    var possiblePoints = [];
    for (var x = 0; x < this.width(); x++) {
      for (var y = 0; y < this.height(); y++) {
        if (this.regionId(x, y) == regionId) {
          if (this.canSpawnABSOn(x, y))
            possiblePoints.push(new AlphaABS.UTILS.PointX(x, y));
        }
      }
    }
    if (possiblePoints.length > 0)
      return possiblePoints.sample();
    return null;
  };

  Game_Map.prototype.canSpawnABSOn = function (x, y) {
    if (this.eventsXy(x, y).length > 0) return false;
    if ($gamePlayer.x == x && $gamePlayer.y == y) return false;
    if (Game_CharacterBase.prototype.isCollidedWithVehicles(x, y)) return false;
    return this.isPassable(x, y);
  };



  //END Game_Map
  //------------------------------------------------------------------------------
})();
(function () {
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;
  //Game_Party
  //------------------------------------------------------------------------------
  //NEW
  Game_Party.prototype.initABS = function () {
    this._membersABS = null;
    this.members().forEach(function (member) {
      member.initABS();
    });
    this._inBattle = false;
    this._noNotifyABS = false;
  };

  Game_Party.prototype.membersABS = function () {
    if (!this._membersABS) {
      this._membersABS = [];
      var bots = $gamePlayer.followers();
      bots.forEach(function (item) {
        if (item instanceof Game_AI2Bot) {
          if (item.battler() != null)
            this._membersABS.push(item);
        }
      }, this);
    }
    return this._membersABS;
  };

  //?[NEW]
  Game_Party.prototype.getAIBotByBattler = function (battler) {
    try {
      if (battler == $gamePlayer.battler())
        return $gamePlayer;
      var members = this.membersABS();
      for (var i = 0; i < members.length; i++) {
        if (members[i].battler() == battler)
          return members[i];
      }
    } catch (error) {
      console.error(error);
      return null;
    }
    return null;
  };


  //?[NEW]
  Game_Party.prototype.terminateABSSession = function () {
    this.membersABS().forEach(function (e) {
      e.onGameSave();
    });
  };

  //?[NEW]
  Game_Party.prototype.stopABS = function () {
    this.selectOnMap(null);
    this.membersABS().forEach(function (e) {
      e.stopABS();
    });
    this._membersABS = null;
  };

  //?[NEW]
  Game_Party.prototype.refreshABS = function () {
    this._membersABS = null;
    this.membersABS().forEach(function (e) {
      e.refreshABS();
    });
    $gamePlayer.refreshABS();
  };

  Game_Party.prototype.selectOnMap = function (who) {
    this.membersABS().forEach(function (e) {
      e.selectOnMap(false);
    });
    if (who) who.selectOnMap(true);
  };

  Game_Party.prototype.gainExpForAllABS = function (exp, shared) {
    if (shared == true) {
      exp = Math.round(exp / (this.membersABS().length + 1));
    }
    $gamePlayer.battler().gainExp(exp);
    this.membersABS().forEach(function (member) {
      member.battler().gainExp(exp);
    });
  };


  var _Game_Party_gainGold = Game_Party.prototype.gainGold;
  Game_Party.prototype.gainGold = function (amount) {
    _Game_Party_gainGold.call(this, amount);
    if ($gameMap.isABS()) {
      if (amount > 0) {
        AudioManager.playSe({
          name: 'Coin',
          pan: 0,
          pitch: 100,
          volume: 90
        });
        AlphaABS.BattleUI.pushGoldOnPanel(amount);
      }
    }
  };

  var _Game_Party_gainItem = Game_Party.prototype.gainItem;
  Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
    _Game_Party_gainItem.call(this, item, amount, includeEquip);
    try {
      if ($gameMap.isABS()) {
        if (amount > 0 && !this._noNotifyABS) {
          AudioManager.playSe({
            name: 'Equip2',
            pan: 0,
            pitch: 140,
            volume: 90
          });
        }
        if (amount > 0) {
          AlphaABS.BattleUI.pushItemOnPanel(item);
          AlphaABS.BattleUI.refresh();
          if (!$gamePlayer.inBattle()) {
            $gamePlayer.battler().checkAutoReloadFirearm(item);
          }
        }

        if (DataManager.isWeapon(item)) {
          AlphaABS.BattleUI.refreshWeaponCircle();
        }
      }
    } catch (error) {
      AlphaABS.error(error, ' gain item to party');
    }
  };

  Game_Party.prototype.inBattle = function () {
    return $gamePlayer.inBattle();
  };

  //? А нужна ли возможность добавлять в группу на ABS карте?
  var _alias_Game_Party_addActor = Game_Party.prototype.addActor;
  Game_Party.prototype.addActor = function (actorId) {
    _alias_Game_Party_addActor.call(this, actorId);
    if (!AlphaABS.isABS()) return;
    try {
      var bots = $gamePlayer.followers();
      var ls = $gameParty.members().length - 1;
      bots._data[ls - 1].reInitABS(ls);
      bots._data[ls - 1].initABS();
      this._membersABS = undefined;
      this.membersABS();
      $gamePlayer.refresh();
      $gameMap.requestRefresh();
      AlphaABS.BattleManagerABS.updateABSSession();
    } catch (e) {
      console.error(e);
    }
  };

  //TODO: Это работает с косяком
  var _alias_Game_Party_removeActor = Game_Party.prototype.removeActor;
  Game_Party.prototype.removeActor = function (actorId) {
    var index = this._actors.indexOf(actorId);
    _alias_Game_Party_removeActor.call(this, actorId);
    if (!AlphaABS.isABS()) return;
    $gamePlayer.followers().initializeABS();
    this._membersABS = undefined;
    this.membersABS();
    $gamePlayer.followers().forEach(function (f) {
      f.initABS();
    }, this);
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
    AlphaABS.BattleManagerABS.updateABSSession();
  };

  //END Game_Party
  //------------------------------------------------------------------------------

})();
(function () {

  var LOG = new PLATFORM.DevLog("Game_Player");
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;
  var ABSUtils = AlphaABS.UTILS;
  var SMouse = AlphaABS.UTILS.SMouse;
  var Consts = AlphaABS.SYSTEM;
  var PointX = AlphaABS.UTILS.PointX;
  var BattleProcessABS = BattleManagerABS.battleProcess();
  var BattleUI = AlphaABS.BattleUI;

  //Game_Player
  //------------------------------------------------------------------------------
  var _Game_Player_initMembers = Game_Player.prototype.initMembers;
  Game_Player.prototype.initMembers = function () {
    _Game_Player_initMembers.call(this);

    this._absParams.battler = null;
    this._absParams.active = true; //Со мной можно взаимодействовать (я под управлением)
    this._absParams.inBattle = false;
    this._absParams.control = true; //Отвечат на управление
    this._absParams.dead = false;

    this._teamId = 0;

    this._absParams.inputMode = 0; //0 - ControllPanel, 1 - Weapons

    this._absParams.state = 'free'; //Состояние
    this._absParams.target = null; //Моя цель
    this._absParams.autoAttackMode = false; //Режим автоматической атаки
    this._absParams.targetFollowMode = false; //Следовать к цели

    this._absParams.currentAction = null;
    this._absParams.expPopup = null;
    this._absParams.motion = null;

    this._absParams.isWeapRecharge = false;
    this._absParams.casting = false;
    this._absParams.castingSkill = null;

    this._absParams.inBattleTimer = null;
    this._absParams.absMapData = []; //TODO: Создать что-то отдельное
  };

  Game_Player.prototype.teamId = function () {
    return this._teamId;
  };

  Game_Player.prototype.isCasting = function () {
    return this._absParams.casting == true; //TODO: Ugly! У нас есть текущее действие и его свойство isCasting, см. AI_Bot
  };

  Game_Player.prototype.isAlly = function (who) {
    if (who)
      return (this.teamId() == who.teamId());
    return false;
  };


  //OVER
  Game_Player.prototype.executeMove = function (direction) {
    if (!this.inActive()) return;

    this.stopFollowMode();
    this.interruptCast();
    if (this._absParams.state != 'targetCircle') {
      this.moveStraight(direction);
    }
  };

  //NEW
  Game_Player.prototype.changeInputMode = function (mode) {
    if (mode == 0) {
      if (BattleUI.isWeaponCircleOpen()) {
        BattleUI.closeWeaponCircle();
        this._absParams.inputMode = mode;
        BattleUI.selectOnControlPanel(4);
      }
    } else {
      if (!BattleUI.isWeaponCircleOpen()) {
        BattleUI.openWeaponCircle();
        this._absParams.inputMode = mode;
        BattleUI.diselectOnControlPanel(4);
      }
    }
  };

  //NEW
  Game_Player.prototype.onGameLoad = function () {
    LOG.p("PL : On Game Load");
    this.battler().onGameLoad();
    this.refreshABSMotion();
  };

  //NEW
  Game_Player.prototype.target = function () {
    return this._absParams.target;
  };

  //NEW
  Game_Player.prototype.stopFollowMode = function () {
    if (this._absParams.targetFollowMode)
      BattleUI.diselectOnControlPanel(1);
    this._absParams.targetFollowMode = false;
  };

  //NEW
  Game_Player.prototype.battler = function () {
    return this._absParams.battler;
  };

  //NEW
  Game_Player.prototype.initABS = function () {
    LOG.p("Player inited");
    this._absParams.battler = $gameParty.leader();
    if (!Imported.Quasi_Movement)
      this._absParams.useAStar = true;
    this.followers().forEach(function (f) {
      f.initABS();
    }, this);
    this.battler().reloadFirearm();
    this.refreshABSMotion();
  };

  //NEW
  Game_Player.prototype.stopABS = function () {
    this._resetTarget();
    this.controlOn();
    this._absParams.inBattle = false;
    this._absParams.battler.stopABS();
    this._absParams.active = true;
    this._absParams.dead = false;
    this._absParams.useAStar = false;
    $gameParty.stopABS();
    this.refreshABSMotion();
  };

  //NEW
  Game_Player.prototype.prepareABS = function () {
    this.battler().clearInfoPops();
    this.battler().clearActions();
    this.clearExpPopup();
    this._resetTarget();
    this.battler().refreshABSSkills();
    this.changeInputMode(0);
  };

  //NEW
  Game_Player.prototype.clearExpPopup = function () {
    this._absParams.expPopup = null;
  };

  //NEW
  Game_Player.prototype.isExpPopupRequested = function () {
    return (this._absParams.expPopup != null);
  };

  //NEW
  Game_Player.prototype.isMotionRequested = function () {
    return (this._absParams.motion != null);
  };

  //NEW
  Game_Player.prototype.requestMotion = function (motion) {
    this._absParams.motion = motion;
  };

  //NEW
  Game_Player.prototype.motionType = function () {
    return this._absParams.motion;
  };

  //NEW
  Game_Player.prototype.clearMotion = function () {
    this._absParams.motion = null;
  };

  //NEW
  Game_Player.prototype.requestExpPopup = function (value) {
    this._absParams.expPopup = value;
  };

  //NEW
  Game_Player.prototype.getExpPopup = function () {
    return this._absParams.expPopup;
  };

  //NEW
  Game_Player.prototype.inBattle = function () {
    return this._absParams.inBattle;
  };

  //NEW
  Game_Player.prototype.canControl = function () {
    return this.inActive() && this.battler().canMove() && this._absParams.control;
  };

  //NEW
  Game_Player.prototype.refreshBattleState = function () {
    if (!this.inBattle()) {
      this.onBattleStart();
      $gameParty.membersABS().forEach(function (member) {
        if (!member.inBattle()) {
          member.changeStateToSearch($gamePlayer);
        }
      });
    }
  };

  //NEW
  Game_Player.prototype.onBattleStart = function () {
    LOG.p("PL : Battle start");
    //BattleManagerABS.alertOnUI(Consts.STRING_ALERT_INBATTLE);
    this._absParams.inBattle = true;
    this._absParams.inBattleTimer = new Game_TimerABS();
    this._absParams.inBattleTimer.start(120);
    this.refreshABSMotionState(true);
  };

  //NEW
  Game_Player.prototype.onBattleEnd = function () {
    LOG.p("PL : Battle end");
    //BattleManagerABS.alertOnUI(Consts.STRING_ALERT_OUTBATTLE);
    this._absParams.inBattle = false;
    this._absParams.inBattleTimer = null;
    this.refreshABSMotionState(false);
  };

  //NEW
  Game_Player.prototype.inActive = function () {
    return this._absParams.active;
  };

  //NEW
  Game_Player.prototype.controlOff = function () {
    $gameTemp.clearDestination();
    this._absParams.control = false;
    LOG.p("Control OFF");
  };

  //NEW
  Game_Player.prototype.controlOn = function () {
    this._absParams.control = true;
    LOG.p("Control ON");
  };

  //NEW
  Game_Player.prototype.onTurnEnd = function () {
    this.battler().onTurnEnd();
  };

  //NEW
  Game_Player.prototype.touchSkillAt = function (index) {
    if (!this.canControl()) return;
    var skillABS = this.battler().skillByKeyIndex(index);
    if (skillABS) {
      if (this._absParams.currentAction != skillABS) {
        BattleUI.touchOnSkillPanel(index);
        this._onNewSkillActivate();
        this._absParams.currentAction = skillABS;
        this._changeState('prepare');
      }
    }
  };

  //NEW
  Game_Player.prototype.touchControlAt = function (index) {
    if (!this.canControl()) return;
    if (index > 4) {
      return;
    }

    switch (index) {
      case 0:
        this._onAttackClick();
        break;
      case 1: //Follow Mode
        var followAllowed = AlphaABS.Parameters.isFollowAllowed();
        if (this.target() && followAllowed == true) {
          if (!this._absParams.autoAttackMode)
            this._onNewSkillActivate();
          this._absParams.targetFollowMode = !this._absParams.targetFollowMode;
          if (this._absParams.targetFollowMode) {
            BattleUI.selectOnControlPanel(index);
          } else {
            BattleUI.diselectOnControlPanel(index);
          }
          BattleUI.touchOnControlPanel(index);
        }
        break;
      case 2:
        var jumpAllowed = AlphaABS.Parameters.isJumpAllowed() && !this._absJumpOffByUAPI;
        if (jumpAllowed == true) {
          if (this.canMove()) {
            if (Imported.YEP_SmartJump == true) {
              if (this._absParams.state == 'free' && !this.isJumping())
                $gamePlayer.smartJump(1);
            } else {
              if (this._absParams.state == 'free' && !this.isJumping() && this.canPass(this.x, this.y, this.direction())) {
                switch (ABSUtils.getDirKey(this)) {
                  case 'u':
                    this.jump(0, -1);
                    break;
                  case 'd':
                    this.jump(0, 1);
                    break;
                  case 'l':
                    this.jump(-1, 0);
                    break;
                  case 'r':
                    this.jump(1, 0);
                    break;
                }
              }
            }
            BattleUI.touchOnControlPanel(index);
          }
        }
        break;
      case 3:
        var rotateAllowed = AlphaABS.Parameters.isRotateAllowed() && !this._absRotateOffByUAPI;
        if (rotateAllowed == true) {
          if (this.canMove()) {
            if (this._absParams.state == 'free' && !this._absParams.targetFollowMode) {
              if (this.target()) {
                this.turnTowardCharacter(this.target());
              } else {
                if (!Utils.isMobileDevice())
                  this.turnTowardCharacter(SMouse.getMousePosition().convertToMap());
              }
            }
            BattleUI.touchOnControlPanel(index);
          }
        }
        break;
      case 4:
        var weapAllowed = AlphaABS.Parameters.isWeaponsAllowed() && !this._absWeapOffByUAPI;
        if (weapAllowed == true) {
          if (this.canMove()) {
            if (!this.battler().isFavWeapExists()) return;
            BattleUI.touchOnControlPanel(index);
            if (this._absParams.inputMode == 0) {
              this.changeInputMode(1);
            } else {
              this.changeInputMode(0);
            }
          }
        }
        break;
    }
  };

  //NEW
  Game_Player.prototype.touchWeaponAt = function (index) {
    if (this._absParams.inputMode == 0) return;
    BattleUI.touchOnWeaponCircle(index);
    if (this.battler().changeFavWeap(index)) {
      SoundManager.playEquip();
      this.changeInputMode(0);
    } else
      SoundManager.playBuzzer();

    BattleUI.refreshWeaponCircle();
  };

  //NEW
  Game_Player.prototype.onActionOnMe = function (who) {
    if (who && who.target() == this) {
      this.refreshBattleState();
      if (!this.target()) {
        BattleManagerABS.setPlayerTarget(who);
      }
    }
  };

  var _Game_Player_update = Game_Player.prototype.update;
  Game_Player.prototype.update = function (sceneActive) {
    _Game_Player_update.call(this, sceneActive);
    this._updateABS(sceneActive);
  };

  //NEW
  Game_Player.prototype.interruptCast = function () {
    var t = this._absParams.currentAction;
    if (t && t.isCasting()) {
      LOG.p("PL : Cast intterupt");
      BattleManagerABS.alertOnUI(Consts.STRING_ALERT_INTERRUPT);
      t.resetCast();
      this._absParams.casting = false;
      this._absParams.castingError = true;
      this._changeState('free');
    }
  };

  Game_Player.prototype.setFavWeapForce = function (itemId, segmentSymbol) {
    var index = 0;
    segmentSymbol = SDK.check(segmentSymbol, 'top');
    switch (segmentSymbol) {
      case 'left':
        index = 3;
        break;
      case 'top':
        index = 0;
        break;
      case 'bottom':
        index = 2;
        break;
      case 'right':
        index = 1;
        break;
    }
    var item = $dataWeapons[itemId];
    var owner = this.battler();
    if (owner == null) {
      owner = $gameParty.leader();
    }
    owner.setFavWeap(item, index);
    BattleUI.refreshWeaponCircle();
  };
  //RPIVATE

  Game_Player.prototype._deactivate = function () {
    BattleManagerABS.setPlayerTarget(null);
    $gameMap.stopPlayerTargetCircle();
    this._stopTargetSelect();
    this._absParams.active = false;
    if (!this.battler().isAlive()) {
      this._dead();
    }
  };

  Game_Player.prototype._dead = function () {
    AudioManager.playMe($gameSystem.defeatMe());
    this._absParams.dead = true;
    this._absParams.deadTimer = new Game_TimerABS();
    this._absParams.deadTimer.start(90);
    //$gameScreen.startFadeOut(60);
    this.requestMotion('sleep');
  };

  //NEW
  Game_Player.prototype.setTarget = function (target) {
    this._absParams.target = target;
    if (!target || target.isAlly(this)) {
      this._resetTarget();
    } else {
      BattleUI.changeRotateIconToTarget();
      BattleUI.enableOnControlPanel(0);
      BattleUI.enableOnControlPanel(1);
    }
  };

  Game_Player.prototype._resetTarget = function () {
    this.stopFollowMode();
    this.interruptCast();
    this._absParams.target = null;
    this._absParams.autoAttackMode = false;
    if (!this.battler().skillABS_attack().isNoTarget())
      BattleUI.disableOnControlPanel(0);
    BattleUI.disableOnControlPanel(1);
    BattleUI.changeRotateIconToMouse();
    this._changeState('free');
  };

  Game_Player.prototype._changeState = function (newState) {
    this._absParams.state = newState;
    switch (newState) {
      case 'free':
        this._stopTargetSelect();
        this._absParams.currentAction = null;
        break;
      case 'cast':
        if ((this._absParams.currentAction.isRadiusType() &&
            this._absParams.currentAction.isNeedTarget()) || this._absParams.currentAction.isVectorTypeR())
          $gameMap.lockPlayerTargetCircle();
        $gameTemp.clearDestination();
        this.stopFollowMode();
        break;
      case 'targetCircle':
        $gameTemp.clearDestination();
        $gameMap.requestPlayerTargetCircle(this._absParams.currentAction);
        this.stopFollowMode();
        break;
    }
  };

  Game_Player.prototype._performAction = function () {
    this.battler().makeActions();
    if (this._absParams.currentAction.isItem()) {
      this.battler().action(0).setItem(this._absParams.currentAction.skillId);
    } else
      this.battler().action(0).setSkill(this._absParams.currentAction.skillId);

    LOG.p("PL : Perform! " + this._absParams.currentAction.name());
    var selfAction = false;
    if (this._absParams.currentAction.isVectorType()) {
      if (this._absParams.currentAction.isVectorTypeR()) {
        BattleProcessABS.startPostBattleAction(this, new PointX(TouchInput.x, TouchInput.y).convertToMap(), this.battler().action(0), this._absParams.currentAction);
      }
      else {
        var target = this.target();
        if(this._absParams.currentAction.isNoTarget()) {
          target = this._findEndPointForVectorSkill();
        } 
        if (this.target() != null)
          this.turnTowardCharacter(this.target());
        BattleProcessABS.startPostBattleAction(this, target, this.battler().action(0), this._absParams.currentAction);
      }
    } else {
      if (this._absParams.currentAction.isRadiusType()) {
        if (this._absParams.currentAction.isNeedTarget()) {
          BattleProcessABS.performBattleActionRadius(this, new PointX(TouchInput.x, TouchInput.y).convertToMap(), this.battler().action(0), this._absParams.currentAction);
        } else
          BattleProcessABS.performBattleActionRadius(this, this.toPoint(), this.battler().action(0), this._absParams.currentAction);
      } else {
        if (this._absParams.currentAction.isZoneType()) {
          BattleProcessABS.performBattleActionZone(this, this.battler().action(0));
        } else {
          if (this._absParams.currentAction.isNeedTarget())
            BattleProcessABS.performBattleAction(this, this.target());
          else {
            this.battler().performCurrentAction();
            this.battler().action(0)._forcing = true;
            BattleProcessABS.performBattleAction(this, this); //On self
            selfAction = true;
          }
        }
      }
    }

    if (!selfAction) {
      this.battler().performCurrentAction();
    }

    this._absParams.currentAction.playStartSound(null);

    if (this._absParams.currentAction == this.battler().skillABS_attack()) {
      this.battler().performAttack();
    }

    if (!this.inBattle() && this.target() != this && selfAction == false) {
      this.onBattleStart();
    }
    if (this._absParams.autoAttackModeLast) {
      if (this._turnAutoAttack()) {
        this._absParams.autoAttackModeLast = false;
      }
    }
    this.refreshBattleState();
    this._changeState('free');
  };

  Game_Player.prototype._onNewSkillActivate = function () {
    if (this._absParams.autoAttackMode == true) {
      this._absParams.autoAttackModeLast = true;
      this._absParams.autoAttackMode = false;
    }
    this._stopTargetSelect();
    this.interruptCast();
  };

  Game_Player.prototype._updateABS = function (sceneActive) {
    if (!sceneActive) return;
    if (!this.battler()) return;

    if (this._absParams.dead === true && this._absParams.deadTimer != null) {
      this._absParams.deadTimer.update();
      if (this._absParams.deadTimer.isReady()) {
        this._processOnPlayerDead();
      }
    }

    if (!this.inActive()) return;

    if (!this.battler().isAlive() && this.inActive()) {
      this._deactivate();
    }

    if (!this.battler().canMove() && this._absParams.control) {
      this.controlOff();
      this._resetTarget();
      LOG.p("PL: Battle cannot move");
    }

    if (this.battler().canMove() && !this._absParams.control && !BattleUI.isUIFree()) {
      this.controlOn();
      LOG.p("PL: Battle can move alredy");
    }

    if (this._absParams.inBattleTimer) {
      this._absParams.inBattleTimer.update();
      if (this._absParams.inBattleTimer.isReady()) {
        if (this._checkInBattleStatus()) {
          this._absParams.inBattleTimer.reset();
        } else {
          this.onBattleEnd();
        }
      }
    }

    this.battler().updateABS();
    this._update_attackReload();
    if (!this.inActive()) return;
    if (!this.canControl()) return;

    this._update_input();
    if (this._absParams.autoAttackMode) {
      this._update_on_autoAttackMode();
    } else {
      switch (this._absParams.state) {
        case 'free':
          //this._checkInBattleStatus(); //@opt Можно выделить в процесс
          break;
        case 'prepare':
          this._update_on_prepare();
          break;
        case 'action':
          this._update_on_action();
          break;
        case 'cast':
          this._update_on_cast();
          break;
        case 'targetCircle':
          this._update_on_targetCircle();
          break;
      }
    }

    if (this._absParams.targetFollowMode == true) {
      if (!this.isMoving()) {
        this.moveToPoint(this.target());
      }
    }

    this._moveSpeed = 4 + this.battler().ABSParams().moveSpeedUpKoef;
  };

  Game_Player.prototype._processOnPlayerDead = function () {
    try {
      var deadEventId = AlphaABS.Parameters.get_DeadMapCommonEventId();
      if (deadEventId > 0) {
        if ($dataCommonEvents[deadEventId]) {
          this.startCommonEventABS(deadEventId);
        }
      }
      var deadMapId = AlphaABS.Parameters.get_DeadMapId();
      if (deadMapId > 0) {
        this._processOnPlayerDeadMap(deadMapId);
      } else {
        SceneManager.goto(Scene_Gameover);
      }
    } catch (e) {
      console.error(e);
      SceneManager.goto(Scene_Gameover);
    }
  };

  Game_Player.prototype._processOnPlayerDeadMap = function (deadMapId) {
    var position = AlphaABS.Parameters.get_DeadMapPosition();
    var direction = AlphaABS.Parameters.get_DeadMapDirection();
    $gameTemp.transferedByDeathABS = true;
    this.reserveTransfer(AlphaABS.Parameters.get_DeadMapId(), position.X, position.Y, direction, 0);
    this.battler().gainHp(1);
    this._absParams.deadTimer = null;
    setTimeout(function () {
      try {
        $gamePlayer.requestMotion('none');
      } catch (error) {

      }
    }, 1000);
  };

  Game_Player.prototype._update_on_autoAttackMode = function () {
    var t = this.battler();
    var skill = t.skillABS_attack();
    this._absParams.currentAction = skill;
    if (ABSUtils.distanceTo(this, this.target()) <= 1) {
      this.turnTowardCharacter(this.target());
    }
    if (this.battler().canUse(skill.skill())) {
      if (BattleManagerABS.canUseSkillByTimer(skill)) {
        if (BattleManagerABS.canUseSkillByRange(this, this.target(), skill)) {
          this.turnTowardCharacter(this.target());
          if (BattleManagerABS.canUseSkillByAmmo(skill)) {
            if (skill.isVectorType()) {
              if (!this.isMoving()) {
                this.turnTowardCharacter(this.target());
                BattleProcessABS.startPostBattleAction(this, this.target(), this.battler().action(0), skill);
              } else {
                return;
              }
            } else
              BattleProcessABS.performBattleAction(this, this.target());

            t.performCurrentAction();
            skill.playStartSound(null);
            t.performAttack();
            this.refreshBattleState();
            AlphaABS.BattleUI.refreshFirearmPanel();
          } else {
            if (skill.isFirearm()) {
              this.battler().reloadFirearm();
              AlphaABS.BattleUI.refreshFirearmPanel();
            }
            LOG.p("PL : Skill need ammo!");
            BattleManagerABS.alertOnUI(Consts.STRING_ALERT_NOCHARGES);
          }
        }
      }
    } else {
      LOG.p("PL : Can't use auto attack");
      BattleManagerABS.alertOnUI(Consts.STRING_ALERT_NOAUTOA);
      this._absParams.autoAttackMode = false;
    }
  };

  Game_Player.prototype._update_input = function () {
    if (!AlphaABS.isABS()) return;
    if (Input.isTriggered(AlphaABS.LIBS.IKey.WC())) {
      if ($gameMap.isABS()) {
        this.touchControlAt(4);
      }
      return;
    }

    if (this._absParams.inputMode == 0) {
      if (Input.isTriggered(AlphaABS.LIBS.IKey.CP_W())) {
        this.touchControlAt(1);
        return;
      }

      var isSp = AlphaABS.LIBS.IKey.isTriggeredSkillPanelIndex();
      if (isSp != null) {
        this.touchSkillAt(isSp);
      }

      if (Input.isTriggered(AlphaABS.LIBS.IKey.CP_A())) {
        this.touchControlAt(0);
        return;
      }

      if (Input.isTriggered(AlphaABS.LIBS.IKey.CP_D())) {
        this.touchControlAt(3);
        return;
      }

      if (Input.isTriggered(AlphaABS.LIBS.IKey.CP_S())) {
        this.touchControlAt(2);
        return;
      }

      if (Input.isTriggered(AlphaABS.LIBS.IKey.TS())) {
        var t = BattleManagerABS.nextPlayerTarget();
        if (t) BattleManagerABS.setPlayerTarget(t);
      }

      if (Input.isTriggered(AlphaABS.LIBS.IKey.WR())) {
        this.battler().reloadFirearm();
        return;
      }

    } else {
      var index = AlphaABS.LIBS.IKey.isTriggeredWeapCircleIndex();
      if (index != null) {
        this.touchWeaponAt(index);
        return;
      }
    }

  };

  Game_Player.prototype._update_on_targetCircle = function () {
    var t = this._absParams.currentAction;
    if (t) {
      if (this.battler().canUse(t.skill())) {
        if (TouchInput.isTriggered()) {
          var p = SMouse.getMousePosition().convertToMap();
          var d = ABSUtils.distanceTo(this, p);
          var lineOfSight = true;
          if (!t.isIgnoreObstacles())
            lineOfSight = BattleManagerABS.checkLineOfSight(this.toPoint(), p);
          if (d <= t.range && lineOfSight) {
            if (BattleManagerABS.canUseSkillByAmmo(t)) {
              this._changeState('action');
              return;
            } else {
              BattleManagerABS.alertOnUIbySym('noAmmo');
            }
          } else {
            LOG.p("PL : Can't use, too far!");
            BattleManagerABS.alertOnUIbySym('toFar');
            return;
          }
        }
        return;
      } else {
        LOG.p("PL : Can't use, not resources or restricted!");
        BattleManagerABS.alertOnUIbySym('noUse');
      }
    } else {
      LOG.p("PL : Can't use, NULL");
    }

    this._changeState('free');
  };

  Game_Player.prototype._update_on_prepare = function () {
    var t = this._absParams.currentAction;
    if (t) {
      LOG.p("PL : Prepare action " + t.skill().name);
      if (t.cEonStart != 0) {
        LOG.p("PL : Common Event " + t.cEonStart);
        this.startCommonEventABS(t.cEonStart);
      }
      if (this.battler().canUse(t.skill())) {
        if (BattleManagerABS.canUseSkillByAmmo(t)) {
          if (t.isRadiusType()) {
            LOG.p("PL : Radius type ");
            if (BattleManagerABS.canUseSkillByTimer(t)) {
              if (t.isNeedTarget()) {
                this._changeState('targetCircle');
                return;
              } else
                this._changeState('action');
              return;
            } else {
              LOG.p("PL : Can't use, recharge now");
              BattleManagerABS.alertOnUIbySym('recharge');
            }
          } else {
            if (t.isVectorTypeR()) {
              if (BattleManagerABS.canUseSkillByTimer(t)) {
                this._changeState('targetCircle');
                return;
              } else {
                LOG.p("PL : Can't use, recharge now");
                BattleManagerABS.alertOnUIbySym('recharge');
              }
            } else {
              this._prepareNormal();
              return;
            }
          }
        } else {
          BattleManagerABS.alertOnUIbySym('noAmmo');
        }
      } else {
        LOG.p("PL : Can't use, not resources or restricted!");
        BattleManagerABS.alertOnUIbySym('noUse');
      }
    } else {
      LOG.p("PL : Can't use, NULL");
    }

    this._changeState('free');
  };

  Game_Player.prototype._prepareNormal = function () {
    var t = this._absParams.currentAction;
    if (BattleManagerABS.canUseSkillByTimer(t)) {
      if (t.isNeedTarget()) {
        if(t.isNoTarget()) {
          this._changeState('action');
          return;
        } else {
          if (this.target()) {
            if (BattleManagerABS.canUseSkillByRange(this, this.target(), t)) {
              this._changeState('action');
              return;
            } else {
              LOG.p("PL : Can't use, target too far");
              BattleManagerABS.alertOnUIbySym('toFar');

            }
          } else {
            LOG.p("PL : Can't use, need target");
            BattleManagerABS.alertOnUIbySym('noTarget');
          }
        }
      } else {
        this._changeState('action');
        return;
      }
    } else {
      LOG.p("PL : Can't use, recharge now");
      BattleManagerABS.alertOnUIbySym('recharge');
    }
    this._changeState('free');
  };

  Game_Player.prototype._update_on_action = function () {
    var t = this._absParams.currentAction;
    if (t) {
      if (t.isNeedCast()) {
        if (t.isCasting()) {
          if (t.isReady()) {
            this._performAction();
            this._absParams.casting = false;
          }
        } else {
          if (!this.isMoving()) {
            LOG.p("PL : Start cast!");
            this._absParams.casting = true;
            this._absParams.castingError = false;
            this.executeMove(0);
            t.startCast(this.battler());
            this._absParams.castingSkill = t;
            this._changeState('cast');
          } else {
            LOG.p("PL : Can't start cast, i'am moving!");
            BattleManagerABS.alertOnUI(Consts.STRING_ALERT_CASTMOVE);
            this._changeState('free');
          }
        }
      } else {
        this._performAction();
      }
    } else {
      this._changeState('free');
    }
  };

  Game_Player.prototype._update_on_cast = function () {
    var t = this._absParams.currentAction;
    if (this.target())
      this.turnTowardCharacter(this.target());
    else {
      if (t) {
        if (!t.isZoneType()) {
          this.turnTowardCharacter(new PointX(TouchInput.x, TouchInput.y).convertToMap());
        }
      }
    }
    if (t && t.isCasting()) {
      if (t.isRadiusType()) {
        if (this.battler().canUse(t.skill())) {
          if (t.isReady()) {
            LOG.p("PL : Cast END");
            this._changeState('action');
          }
        } else {
          this.interruptCast();
          LOG.p("PL : Can't cast, not resources or restricted!");
          BattleManagerABS.alertOnUIbySym('noUse');
        }
      } else {
        if (t.isNeedTarget() && !BattleManagerABS.canUseSkillByRange(this, this.target(), t)) {
          this.interruptCast();
          LOG.p("PL : Target too far");
          BattleManagerABS.alertOnUIbySym('toFar');
        } else {
          if (this.battler().canUse(t.skill())) {
            if (t.isReady()) {
              LOG.p("PL : Cast END");
              this._changeState('action');
            }
          } else {
            this.interruptCast();
            LOG.p("PL : Can't cast, not resources or restricted!");
            BattleManagerABS.alertOnUIbySym('noUse');
          }
        }
      }
    } else {
      this._absParams.casting = false;
      this._changeState('free');
    }
  };

  Game_Player.prototype._checkInBattleStatus = function () {
    var t = BattleManagerABS.whoTargetOnMe(this, $gameTroop.membersABS());
    if (t) { //Если игрок чья-то цель (врага)
      return true;
    }
    if (BattleProcessABS.isPostProcessExists()) {
      return true; //Если есть действия PostProcess
    }
    return false;
  };

  Game_Player.prototype._turnAutoAttack = function () {
    if (this.target()) {
      this._onNewSkillActivate();
      this.turnTowardCharacter(this.target());
      this._absParams.currentAction = this.battler().skillABS_attack();
      this._absParams.autoAttackMode = true;
      var t = this.battler();
      t.makeActions();
      t.action(0).setAttack();
      return true;
    }
    return false;
  };

  Game_Player.prototype._update_attackReload = function () {
    var t = this.battler().skillABS_attack();
    this._absParams.isWeapRecharge = !t.isReady();
  };

  Game_Player.prototype._stopTargetSelect = function () {
    $gameMap.stopPlayerTargetCircle();
  };

  //OVER
  Game_Player.prototype.jump = function (xPlus, yPlus) {
    Game_Character.prototype.jump.call(this, xPlus, yPlus);
  };

  //?[NEW]
  Game_Player.prototype.startCommonEventABS = function (commonEventId) {
    if ((typeof commonEventId !== "undefined" && commonEventId !== null) > 0) {
      if ($dataCommonEvents[commonEventId] != null) {
        $gameTemp.reserveCommonEvent(commonEventId);
      }
    }
  };

  //?[NEW]
  Game_Player.prototype.isNoTargetAttackMode = function () {
    var b = this.battler();
    if (b == null) return false;
    var absSkill = b.skillABS_attack();
    return absSkill.isNoTarget();
  };

  //?[NEW]
  Game_Player.prototype.onMouseAttackOnTarget = function () {
      if(this.target() == null) return;
      this._onMouseAttackOnTarget();
  }; 

  //END Game_Player
  //------------------------------------------------------------------------------

})();
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_PlayerABSInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {})();

// ■ END Game_PlayerABSInput.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_PlayerABSLogic.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {})();

// ■ END Game_PlayerABSLogic.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var BattleUI, _;
  //@[CLASS PART]
  //@[CLASS IMPL ONLY]

  //@[DEFINES]
  _ = Game_Player.prototype;
  BattleUI = AlphaABS.BattleUI;
  _._onAttackClick = function() {
    if (this._absParams.autoAttackMode) {
      this.turnTowardCharacter(this.target());
      return;
    }
    if (this.isNoTargetAttackMode() === true) {
      return this._onNoTargetAttackClick();
    } else {
      return this._onAutoAttackClick();
    }
  };
  _._onNoTargetAttackClick = function() {
    BattleUI.touchOnControlPanel(0);
    return this._performNoTargetAction();
  };
  _._performNoTargetAction = function() {
    var absSkill, e, proc, target, targets;
    try {
      if (!this._checkNoTargetAction()) {
        return;
      }
      this._prepareNoTargetAction();
      absSkill = this.battler().skillABS_attack();
      if (absSkill.isVectorType()) {
        this._absParams.currentAction = absSkill;
        target = this._findEndPointForVectorSkill();
        proc = AlphaABS.BattleManagerABS.battleProcess();
        proc.startPostBattleAction(this, target, this.battler().action(0), absSkill);
        this._completeNoTargetAction([]);
      } else {
        targets = this._findTargetForNoTargetAction($gameTroop.membersABS());
        this._completeNoTargetAction(targets);
      }
    } catch (error) {
      e = error;
      return AlphaABS.error(e, 'while perfrom attack');
    }
  };
  _._checkNoTargetAction = function() {
    var absSkill;
    absSkill = this.battler().skillABS_attack();
    if (absSkill.isFirearm() && absSkill.isNeedReloadStack()) {
      this.battler().reloadFirearm();
      return false;
    }
    if (!absSkill.isReady()) {
      return false;
    }
    if (this._absParams.state !== 'free') {
      return false;
    }
    if (!AlphaABS.BattleManagerABS.canUseABSSkillNow(this, null, absSkill)) {
      return false;
    }
    return true;
  };
  _._prepareNoTargetAction = function() {
    var b;
    b = this.battler();
    b.makeActions();
    return b.action(0).setAttack();
  };
  //TODO:  Поиск целей вынести в отдельный класс
  _._findTargetForNoTargetAction = function(members) {
    var absSkill, finalTargets, nearest, targets;
    finalTargets = [];
    absSkill = this.battler().skillABS_attack();
    if (absSkill.isSimpleNoTarget()) {
      if (absSkill.range === 1) {
        finalTargets = this._findTargetsForSimpleNoTargetWeapon(members);
      } else {
        targets = this._findTargetsForPierceNoTargetWeapon(members);
        if (targets.length <= 1) {
          finalTargets = targets;
        } else {
          nearest = this._findNearestTarget(targets);
          if (nearest != null) {
            finalTargets = [nearest];
          }
        }
      }
    } else if (absSkill.isPierce()) {
      finalTargets = this._findTargetsForPierceNoTargetWeapon(members);
      if (absSkill.pierce > 1) { // * Ограниченное количество пробиваний
        finalTargets = finalTargets.slice(0, absSkill.pierce);
      }
    } else if (absSkill.isSwing()) {
      finalTargets = this._findTargetsForSwingNoTargetWeapon(members);
    }
    return finalTargets;
  };
  _._findTargetsForSimpleNoTargetWeapon = function(members) {
    var absSkill, inRadius, targets;
    targets = [];
    absSkill = this.battler().skillABS_attack();
    inRadius = AlphaABS.UTILS.inRadius(this, absSkill.range + 1, members);
    if (inRadius.length > 0) {
      inRadius.forEach(function(member) {
        if (member == null) {
          return;
        }
        if (!member.isAlive()) {
          return;
        }
        if (!member.inActive()) {
          return;
        }
        if (AlphaABS.UTILS.inFront($gamePlayer, member)) {
          return targets[0] = member;
        }
      });
    }
    return targets;
  };
  _._findTargetsForPierceNoTargetWeapon = function(members) {
    var absSkill, inRadius, targets;
    targets = [];
    absSkill = this.battler().skillABS_attack();
    inRadius = AlphaABS.UTILS.inRadius(this, absSkill.range + 1, members);
    if (inRadius.length > 0) {
      inRadius.forEach(function(member) {
        if (member == null) {
          return;
        }
        if (!member.isAlive()) {
          return;
        }
        if (!member.inActive()) {
          return;
        }
        if (AlphaABS.UTILS.inDirectionHard($gamePlayer, member)) {
          return targets.push(member);
        }
      });
    }
    return targets;
  };
  _._findTargetsForSwingNoTargetWeapon = function(members) {
    var absSkill, inRadius, targets;
    targets = [];
    absSkill = this.battler().skillABS_attack();
    inRadius = AlphaABS.UTILS.inRadius(this, absSkill.range + 2, members);
    if (inRadius.length > 0) {
      inRadius.forEach(function(member) {
        if (member == null) {
          return;
        }
        if (!member.isAlive()) {
          return;
        }
        if (!member.inActive()) {
          return;
        }
        if (AlphaABS.UTILS.inFront($gamePlayer, member)) {
          targets.push(member);
        }
        if (AlphaABS.UTILS.isFrontNeighbor($gamePlayer, member)) {
          return targets.push(member);
        }
      });
    }
    return targets;
  };
  _._findNearestTarget = function(members) {
    var dist, nearest;
    if (members.length === 0) {
      return null;
    }
    nearest = members.first();
    dist = AlphaABS.UTILS.distanceTo($gamePlayer, nearest);
    members.forEach(function(member) {
      var newDist;
      if (member == null) {
        return;
      }
      if (!member.isAlive()) {
        return;
      }
      if (!member.inActive()) {
        return;
      }
      newDist = AlphaABS.UTILS.distanceTo($gamePlayer, member);
      if (newDist < dist) {
        dist = newDist;
        return nearest = member;
      }
    });
    return nearest;
  };
  _._completeNoTargetAction = function(targets) {
    var b, bProcess, i, j, ref;
    b = this.battler();
    bProcess = AlphaABS.LIBS.BattleManagerABS.battleProcess();
    if (targets.length > 0) {
      for (i = j = 0, ref = targets.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        bProcess.performBattleAction(this, targets[i]);
      }
    }
    b.performCurrentAction();
    b.performAttack();
    b.skillABS_attack().playStartSound(null);
    if (!this.inBattle()) {
      this.onBattleStart();
    }
    if ((targets != null) && targets.length > 0) {
      if (targets[0] !== this.target()) {
        AlphaABS.BattleManagerABS.setPlayerTarget(targets[0]);
      }
    }
  };
  _._onAutoAttackClick = function() {
    if (this._turnAutoAttack()) {
      BattleUI.touchOnControlPanel(0);
      BattleUI.selectOnControlPanel(0);
    } else {
      BattleUI.diselectOnControlPanel(0);
      if (this.target() == null) {
        BattleUI.disableOnControlPanel(0);
      }
    }
  };
  _._onMouseAttackOnTarget = function() {
    var absSkill, inRadius, t;
    if (!this._checkNoTargetAction()) {
      return;
    }
    t = this.target();
    this.turnTowardCharacter(t);
    absSkill = this.battler().skillABS_attack();
    inRadius = AlphaABS.UTILS.inRadius(this, absSkill.range + 1, [t]);
    if (inRadius.length > 0) {
      this._performNoTargetAction();
      if (t !== this.target()) {
        AlphaABS.BattleManagerABS.setPlayerTarget(t);
      }
    }
  };
  _._isRangeToTargetGood = function() {
    var absSkill, d;
    if (this.battler() == null) {
      return false;
    }
    absSkill = this.battler().skillABS_attack();
    if (this.target() == null) {
      return true;
    }
    d = AlphaABS.UTILS.distanceTo(this, this.target());
    if (absSkill.range >= d) {
      return AlphaABS.UTILS.inDirectionHard(this, this.target());
    }
    return false;
  };
  //TODO: Пока это всё в предварительном варианте, так что будут отдельные функции для поиска и определения целей для ABS:1
  _._findEndPointForVectorSkill = function() {
    var absSkill;
    absSkill = this._absParams.currentAction;
    return AlphaABS.UTILS.getEndPointFromCharToRange(this, absSkill.range);
  };
})();

// ■ END Game_Player_private.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player2.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////

(function () {
    //?{params : mapId, enemyId, x, y, isLooted}
    Game_Player.prototype.setNewABSMapData = function (params) {
        try {
            var candidate = this.getABSMapData(params.mapId, params.enemyId);
            if (candidate != null) {
                this._absParams.absMapData.delete(candidate);
            }
            this._absParams.absMapData.push(params);
        } catch (error) {
            console.error(error);
        }
    };

    Game_Player.prototype.getABSMapData = function (mapId, enemyId) {
        var candidates = this._absParams.absMapData.filter(function (item) {
            return (item.mapId == mapId && item.enemyId == enemyId);
        });
        if (candidates.length > 0) {
            return candidates[0];
        }
        return null;
    };

    //?[NEW]
    Game_Player.prototype.inABSMotion = function () {
        if (this.ABSParams() == null)
            return false;
        return this.ABSParams().absMotion != null;
    };

    //?[NEW]
    Game_Player.prototype._updateABSMotion = function () {
        if (this.battler() == null) return;
        if (this.battler().isNeedABSMotionRefresh()) {
            this.refreshABSMotion();
            this.battler().onABSMotionRefresh();
        }
        if (this.battler().isNeedABSMotionAction()) {
            this.battler().onABSMotionActionDone();
            var motion = this.ABSParams().absMotion;
            if(motion != null) {
                motion.applyMotionAction();
            }
        }
    };

    //?[NEW]
    Game_Player.prototype.refreshABSMotion = function () {
        if (this._absParams.absMotion != null) {
            this._absParams.absMotion.clearMotion();
            this._absParams.absMotion = null;
        }
        if (this.battler().isHasABSMotion()) {
            this._absParams.absMotion = new AlphaABS.LIBS.ABSMotion();
            var skill = this.battler()._firstBattleABSSkill();
            this._absParams.absMotion.setMotion(skill.motion, skill.motionOffset, this);
            this.refreshABSMotionState(this.inBattle());
        }
    };

    //?[NEW]
    Game_Player.prototype.refreshABSMotionState = function (toState) {
        if (this._absParams.absMotion != null) {
            if (toState == true) {
                this._absParams.absMotion.applyMotionState();
            } else {
                this._absParams.absMotion.applyMotionIdle();
            }
        }
    };

    //?[NEW]
    Game_Player.prototype.refreshABS = function () {
        this.refreshABSMotion();
    };

    //?[NEW]
    Game_Player.prototype.isAlive = function () {
        if(this.battler()) {
            return this.battler().isAlive();
        }
        return false;
    };

})();

// ■ END Game_Player.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_RageContainer.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var RageContainer;
  RageContainer = class RageContainer {
    constructor() {
      this.clear();
    }

    clear() {
      this.rageDict = {};
      return this.targets = [];
    }

    addDealer(who) {
      if (who != null) {
        return this.makeDamageBy(0, who);
      }
    }

    makeDamageBy(damage, byWho) {
      var index;
      index = this.targets.indexOf(byWho);
      if (index > 0) {
        return this.rageDict[index] += damage;
      } else {
        this.targets.push(byWho);
        return this.rageDict[this.targets.length - 1] = damage;
      }
    }

    getHigherDealer() {
      var arr, error, max1, max2;
      try {
        arr = this._getArrayOfDmg();
        if (arr.length > 1) {
          max1 = arr.max();
          max2 = arr.delete(max1).max();
          if (max1 > (max2 * 3)) {
            return this._getDealerByDmg(max1);
          }
        }
      } catch (error1) {
        error = error1;
        console.error(error);
      }
      return null;
    }

    _getArrayOfDmg() {
      return Object.keys(this.rageDict).map((function(v) {
        return this.rageDict[v];
      }).bind(this));
    }

    _getDealerByDmg(dmg) {
      var key, ref, value;
      ref = this.rageDict;
      for (key in ref) {
        value = ref[key];
        if (value === dmg) {
          return this.targets[key];
        }
      }
    }

  };
  AlphaABS.register(RageContainer);
})();

// ■ END Game_RageContainer.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_SkillABS_@.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//@[GLOBAL DEFINITION]
function Game_SkillABS() {
  this.initialize.apply(this, arguments);
}

(function () {
  var Consts = AlphaABS.SYSTEM;
  var LOG = new PLATFORM.DevLog("Game_SkillABS");

  //@[CLASS HEADER PART]

  Game_SkillABS.prototype.initialize = function (skillId, isItem) {
    this.skillId = skillId;
    this._isItem = SDK.check(isItem, false);
    this.timer = new Game_TimerABS();
    this.timer.start(0);

    var metaCode = this.skill().meta.ABS;
    if (metaCode) {
      this.type = parseInt(metaCode);
    } else {
      this.type = 0;
      this._hasError = true;
      LOGW.p("Warning! ABS Skill has no type! " + this.skill().name);
    }

    ABSSkillLoader.loadBaseParams(this);
    ABSSkillLoader.loadUserParams(this);
    ABSSkillLoader.loadSelfMetaParams(this);
    this._checkParams();
    if(this.img != 0 && this.img != null && this.img != 'null') {
      try {
        ImageManager.loadPicture(this.img);
      } catch (error) {
        AlphaABS.error(error, ' load ABS skill <IMG> parameter');
      }
    }
  };

  // * Расчитать формулу можно только на Battler
  Game_SkillABS.prototype.getCastTime = function (caster) {
    if (this.castTimeFormula == null)
      return this.castTime;
    else {
      try {
        /* jshint -W061 */
        if (caster && caster instanceof Game_Battler) {
          var time = caster._calculateABSSkillReloadParam(this.castTimeFormula);
          return time;
        }
      } catch (error) {
        AlphaABS.error(error, ' info');
      }
      return 120;
    }
  };

  Game_SkillABS.prototype.update = function () {
    this.timer.update();
  };

  Game_SkillABS.prototype.preUse = function (param) {
    this.reloadTimeA = param + this.reloadTime;
  };

  Game_SkillABS.prototype.playStartSound = function (point) {
    this._playSoundAt(this.startSound, point);
  };

  Game_SkillABS.prototype.playReloadSound = function (point) {
    this._playSoundAt(this.reloadSound, point);
  };

  Game_SkillABS.prototype.startCast = function (caster) {
    this._castDelay = 0;
    this._startCast = true;
    this.timer.start(this.getCastTime(caster));
  };

  Game_SkillABS.prototype.onCastDelay = function (delay) {
    this._castDelay += delay;
    this.timer.setMaxTime(this.getCastTime() + this._castDelay);
  };

  Game_SkillABS.prototype.resetCast = function () {
    this._startCast = false;
    this.timer.start(0);
  };

  Game_SkillABS.prototype.loadExternal = function (params, type) {
    if (type !== undefined) {
      this.type = type;
      var t = this.reloadParam;
      ABSSkillLoader.loadBaseParams(this);
      this.reloadParam = t;
    }
    this.castTime = 0;
    ABSSkillLoader.loadMetaParams(this, params);
    this._checkParams();
    if (this.castTime > 0 || this.castTimeFormula != null) {
      this.castTime = 0;
      this.castTimeFormula = null;
      LOGW.p(Consts.STRING_WARNING_SKILLWC);
    }
    if (this.isVectorTypeR()) {
      LOGW.p(Consts.STRING_WARNING_SKILLWVR);
      this.radius = 0;
      this.needTarget = true;
    }
    LOG.p("Skill " + this.name() + " loaded external params");
  };

  Game_SkillABS.prototype.chargeStack = function (size) {
    if (size === undefined) {
      this._currentStack = this.stack;
      return 0;
    } else {

      if (this._currentStack === undefined) {
        this._currentStack = 0;
      }

      var d = 0;

      if (size > 0) {
        var n = Math.abs(this._currentStack - this.stack);
        d = size - n;
        if (d < 0) {
          this._currentStack = this.stack - Math.abs(d);
        } else {
          this._currentStack = this.stack;
          return d;
        }
      } else {
        this._currentStack -= Math.abs(size);
      }


      LOG.p("Skill: Current stack " + this._currentStack);
      if (this._currentStack <= 0) {
        this._stackNeedReload = true;
        this._currentStack = 0;
        LOG.p("Skill: Stack need reload all");
      }
      if (d >= 0)
        return d; //Остаток
      else
        return 0;
    }
  };

  Game_SkillABS.prototype.reloadFirearm = function (count) {
    if (!this.isFirearm()) return;
    this._currentStack = count;
    if (this._currentStack > 0) {
      this.resetCast();
      LOG.p("Firearm reload " + this.skill().name + " reload time " + this.stackTime);
      this.timer.start(this.stackTime);
      this.playReloadSound();
      this._stackNeedReload = false;
    } else {
      this._stackNeedReload = true;
    }
    if(this._currentStack == null)
      this._currentStack = 0;
  };

  Game_SkillABS.prototype.onUse = function () {
    if (this.isFirearm()) {
      this._onUseFirearm();
    } else if (this.isStackType()) {
      this._onUseStackType();
    } else
      this._onUseNormal();
  };

  Game_SkillABS.prototype._onUseStackType = function () {
    this.chargeStack(-1);
    if (this.isAutoReloadStack() && this.isNeedReloadStack()) {
      LOG.p("Skill: Reload stack auto");
      this.preUse(this.stackTime);
      this._stackNeedReload = false;
      this._currentStack = this.stack;
    }
    this._onUseNormal();

    if (this.isAutoReloadStack() && !this.isNeedReloadStack()) {
      this.preUse(0);
    }
  };

  Game_SkillABS.prototype._onUseNormal = function () {
    this.resetCast();
    LOG.p("On use " + this.skill().name + " reload time " + this.reloadTimeA);
    this.timer.start(this.reloadTimeA);

    if (this.isNeedAmmo() && !this.isFirearm()) {
      $gameParty.loseItem($dataItems[this.ammo], 1, true);
    }

    if (this.getCastTime() == 0 && this.reloadTimeA == 0) {
      LOG.p("Skill " + this.skill().name + " use PostUse");
      this.timer.start(20); //Post Use
    }
  };

  Game_SkillABS.prototype.postUse = function () { //Delay between skill activation (called when another skill is start)
    if (this.isReady() && this.skillId != 1) { //Attack not need postUse
      this.timer.start(20);
      LOG.p("Skill " + this.skill().name + " use PostUse");
    }
  };

  //PRIVATE

  Game_SkillABS.prototype._checkParams = function () {

    ABSSkillLoader.checkParams(this);

    if (this.reloadParam != null) {
      //If i can use 'with' keyword in strict mode, this is not happened :(
      if (!this.reloadParam.contains('this')) {
        if (this.reloadParam.trim() == 'attackSpeed') { //for performance
          this.reloadParam = this.reloadParam.replace(/attackSpeed/i, 'this.attackSpeed()');
        } else {
          this.reloadParam = ABSSkillLoader._convertFormula(this.reloadParam);
        }
      }
    }

    if (this.castTimeFormula != null) {
      if (!this.castTimeFormula.contains('this')) {
        this.castTimeFormula = ABSSkillLoader._convertFormula(this.castTimeFormula);
      }
    }

    this.reloadTimeA = this.reloadTime;
  };

})();
// ■ END Game_SkillABS_@.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_SkillABS_private.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _S;
  //@[CLASS IMPL ONLY]
  //@[CLASS PART]

  //@[DEFINES]
  _S = Game_SkillABS;
  _S.prototype._playSoundAt = function(sound, point) {
    var _;
    if (sound == null) {
      return;
    }
    _ = AlphaABS.LIBS.BattleManagerABS;
    if ((point != null) && _ && _.isABSAudio()) {
      return AudioManager.playSeAt(sound, point);
    } else {
      return AudioManager.playSe(sound);
    }
  };
  _S.prototype._onUseFirearm = function() {
    this.chargeStack(-1);
    this._onUseNormal();
    if (!this.isNeedReloadStack()) {
      return this.preUse(0);
    }
  };
})();

// ■ END Game_SkillABS_private.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_SkillABS_public.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _S;
  //@[CLASS PART]

  //@[DEFINES]
  _S = Game_SkillABS;
  _S.prototype.hasError = function() {
    return this._hasError === true;
  };
  _S.prototype.hasParticle = function() {
    return this.isVectorType() && this.pType !== null;
  };
  _S.prototype.hasLight = function() {
    return this.isVectorType() && this.light !== null;
  };
  _S.prototype.isItem = function() {
    return this._isItem === true;
  };
  _S.prototype.isReady = function() {
    return this.timer.isReady();
  };
  _S.prototype.isNeedReloadParam = function() {
    return this.reloadParam !== null;
  };
  _S.prototype.isDirectionFix = function() {
    return this.directionFix === true;
  };
  _S.prototype.isNeedTarget = function() {
    return this.needTarget === true;
  };
  _S.prototype.isNeedCast = function() {
    return this.castTime !== 0 || this.castTimeFormula !== null;
  };
  _S.prototype.isVectorType = function() {
    return this.type === 1;
  };
  _S.prototype.isVectorTypeR = function() {
    return this.isVectorType() && this.radius > 0 && !this.isNeedTarget();
  };
  _S.prototype.isZoneType = function() {
    return this.type === 3;
  };
  _S.prototype.isRadiusType = function() {
    return this.type === 2;
  };
  _S.prototype.isCasting = function() {
    return this._startCast === true;
  };
  _S.prototype.isNeedAmmo = function() {
    return this.ammo > 0;
  };
  _S.prototype.isHasImpulse = function() {
    return this.impulse !== 0;
  };
  _S.prototype.isRandomImpulseDirecton = function() {
    return this.impulseRandom !== 0;
  };
  _S.prototype.isIgnoreObstacles = function() {
    return this.ignoreObstacles !== 0;
  };
  _S.prototype.isNoTarget = function() {
    return this.noTarget === 1;
  };
  _S.prototype.isHasMotion = function() {
    return this.motion !== null && this.motion !== "" && this.motion !== 0;
  };
  _S.prototype.isSimpleNoTarget = function() {
    return this.isNoTarget() && !this.isSwing() && !this.isPierce();
  };
  _S.prototype.isSwing = function() {
    return this.swing > 0 && this.isNoTarget();
  };
  _S.prototype.isPierce = function() {
    return this.pierce > 0 && this.isNoTarget();
  };
  _S.prototype.isFirearm = function() {
    return this.firearm === 1;
  };
  _S.prototype.isStackType = function() {
    return this.stackTime > 0;
  };
  _S.prototype.isAutoReloadStack = function() {
    return this.isStackType() && !this.isFirearm();
  };
  _S.prototype.isNeedReloadStack = function() {
    return this.isStackType() && this._stackNeedReload === true;
  };
  _S.prototype.getReloadTime = function() {
    return this.reloadTimeA;
  };
  _S.prototype.skill = function() {
    if (this.isItem()) {
      return $dataItems[this.skillId];
    } else {
      return $dataSkills[this.skillId];
    }
  };
  _S.prototype.name = function() {
    return this.skill().name;
  };
})();

// ■ END Game_SkillABS_public.coffee
//---------------------------------------------------------------------------

function Game_SkillManagerABS() {
  this.initialize.apply(this, arguments);
}
(function () {
  //Game_SkillManagerABS
  //------------------------------------------------------------------------------

  Game_SkillManagerABS.prototype.initialize = function () {
    this._skillsABS = [];
    this._requestRefresh();
  };

  Game_SkillManagerABS.prototype.all = function () {
    return this._skillsABS;
  };

  Game_SkillManagerABS.prototype.remove = function (objId, isItem) {
    for (var i = 0; i < this._skillsABS.length; i++) {
      var item = this._skillsABS[i];
      if (isItem) {
        if (item.skillId == objId && item.isItem()) {
          this._skillsABS.splice(i, 1);
          this._requestRefresh();
          break;
        }
      } else {
        if (item.skillId == objId && !item.isItem()) {
          this._skillsABS.splice(i, 1);
          this._requestRefresh();
          break;
        }
      }
    }
  };

  Game_SkillManagerABS.prototype.push = function (objId, isItem) {
    var item = new Game_SkillABS(objId, isItem);
    if (!item.hasError()) {
      this._skillsABS.push(item);
      this._requestRefresh();
    }
  };

  Game_SkillManagerABS.prototype.update = function () {
    this._skillsABS.forEach(function (item) {
      item.update();
    });
  };

  Game_SkillManagerABS.prototype.skills = function () {
    if (this._needRefreshSkills) {
      this._skills = [];
      for (var i = 0; i < this._skillsABS.length; i++) {
        var item = this._skillsABS[i];
        if (!item.isItem()) {
          this._skills.push(item);
        }
      }
      this._needRefreshSkills = false;
    }
    return this._skills;
  };

  Game_SkillManagerABS.prototype.items = function () {
    if (this._needRefreshItems) {
      this._items = [];
      for (var i = 0; i < this._skillsABS.length; i++) {
        var item = this._skillsABS[i];
        if (item.isItem()) {
          this._items.push(item);
        }
      }
      this._needRefreshItems = false;
    }
    return this._items;
  };

  Game_SkillManagerABS.prototype.skillById = function (id) {
    for (var i = 0; i < this._skillsABS.length; i++) {
      var item = this._skillsABS[i];
      if (item.skillId == id && !item.isItem()) {
        return item;
      }
    }
    return null;
  };

  Game_SkillManagerABS.prototype.itemById = function (id) {
    for (var i = 0; i < this._skillsABS.length; i++) {
      var item = this._skillsABS[i];
      if (item.skillId == id && item.isItem()) {
        return item;
      }
    }
    return null;
  };

  //PRIVATE

  Game_SkillManagerABS.prototype._requestRefresh = function () {
    this._needRefreshSkills = true;
    this._needRefreshItems = true;
  };

  //END Game_SkillManagerABS
  //------------------------------------------------------------------------------

})();
(function () {

  var ABSUtils = AlphaABS.UTILS;
  var LOG = new PLATFORM.DevLog("Game_SVector");
  var BattleManagerABS = AlphaABS.BattleManagerABS;

  //Game_SVector
  //------------------------------------------------------------------------------
  class Game_SVector {
    constructor(data) {
      this._data = data;
      this._disposed = false;
      this._started = false;
      this._setImage(data.skill.img); 
      this._emit = null;
      if (data.skill.vSpeed > 0) {
        this._speed = data.skill.vSpeed / 32;
      } else
        this._speed = Game_SVector.SPEED;
      this._isNoTargetMode = data.skill.isNoTarget();
      this._isPiercing = data.skill.isPierce();
      if(this._isPiercing == true) {
        this._pierceCountMax = data.skill.pierce;
        this._pierced = 0;
      }
    }

    update() {
      try {
        if (!this.sprite) return;
        if (!this._started) return;

        var ep = this._endPoint();
        if (!this._myPoint) {
          LOG.p("SVector : Point MISS : Target Reached!");
          this.dispose();
          return;
        }

        if (BattleManagerABS.isABSLightingExt()) {
          $gameMap.deleteLight(this._myPoint.x, this._myPoint.y);
        }

        this._myPoint = ABSUtils.SMath.moveTo(this._myPoint, ep, this._speed);

        if (BattleManagerABS.isABSLightingExt()) {
          $gameMap.setLight(this._myPoint.x, this._myPoint.y, this._data.skill.lightSize, this._data.skill.light, 0, true);
        }

        this._imageToPoint();

        //Emitter move
        if (this._emit) {
          this._emit.move(this.sprite.x, this.sprite.y);
        }

        //Rotation
        var angle = Math.atan2(ep.screenY() - this.sprite.y, ep.screenX() - this.sprite.x);
        this.sprite.rotation = angle;

        if(this._isNoTargetMode == true) {
          if(this._isAnyOnMyPosition()) {
            if(this._isPiercing == true) {
              if(this._target != this._lastPiercedTarget) {
                this._lastPiercedTarget = this._target;
                  BattleManagerABS.battleProcess()._processAction(this._data.subject, this._target, this._data.action);
                  // * Если _pierceCount = 1, то всех
                  if (this._pierceCountMax > 1) {
                    this._pierced += 1;
                      if (this._pierced == this._pierceCountMax) {
                        this._target = null;
                        // * Уничтожаем вектор без поражения
                        this.dispose();
                      }
                  }

                  return;
              }
            } else {
                this._data.target = this._target;
                this.dispose();
                return;
            }

          }
        } 
        var t = new Rectangle(ep.x - 0.5, ep.y - 0.5, 1.5, 1.5);
        if (ABSUtils.SMath.inRect(this._myPoint, t)) {
          LOG.p("SVector : Target Reached!");
          this.dispose();
        }
      } catch (e) {
        console.error(e);
        this.dispose();
      }
    }

    _isAnyOnMyPosition() {
      var all = BattleManagerABS.getAllBotsOnMap().concat($gamePlayer);
      var inRadius = AlphaABS.UTILS.inRadius(this._myPoint, 2, all);
      this._target = null;
      var candidate = null;
      for(var i = 0; i<inRadius.length; i++) {
        candidate = inRadius[i];
        if(candidate != this._data.subject &&
          candidate.isAlive() && candidate.teamId() != this._data.subject.teamId())
          {
            var checkPoint = candidate.toPoint();
            var t = new Rectangle(checkPoint.x - 0.5, checkPoint.y - 0.5, 1.5, 1.5);
            if (ABSUtils.SMath.inRect(this._myPoint, t)) {
              this._target = candidate;
              break;
            }
          }
      }
      if (this._target != null) {
        return true;
      }
      return false;
    }

    start() {
      if (ABSUtils.inFront(this._data.subject, this._data.target)) {
        this._started = true;
        this._disposed = true;
        LOG.p("SVector : Target in Front!");
        return;
      }
      this._myPoint = this._startPoint();
      this._started = true;
      LOG.p("SVector : Start at " + this._myPoint.toString());
      LOG.p("SVector : To " + this._endPoint().toString());

      try {
        if (BattleManagerABS.isABSParticleSystem() && this.data().skill.hasParticle()) {
          var generator = this.data().skill.initGenerator();
          if (generator != null) {
            this._emit = AlphaABS.SYSTEM.EXTENSIONS.ABSPE.initEmitter(this.sprite.x, this.sprite.y, this.data().skill.pCount, generator);
            this._emit.setOuterData(this.data().skill.particleData);
          } else {
            LOGW.p(this._data.skill.name() + " particle data is missing, check ABSDataUser.json");
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    hasEmitter() {
      return (this._emit != null);
    }

    emitter() {
      return this._emit;
    }

    data() {
      return this._data;
    }

    isStarted() {
      return (this._started == true);
    }

    isAlive() {
      return (this._disposed == false);
    }

    dispose() {
      try {
        LOG.p("SVector : Disposed ");
        var t = this.sprite.parent;
        if (t) {
          t.removeChild(this.sprite);
        }
        if (this._emit) {
          this._emit.stop();
          this._emit.clear();
        }

        if (BattleManagerABS.isABSLightingExt() && this._myPoint) {
          $gameMap.deleteLight(this._myPoint.x, this._myPoint.y);
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.sprite = null;
        this._disposed = true;
      }
    }

    //PRIVATE
    _startPoint() {
      var point = this._data.subject.toPoint();
      try {
        var direction = this._data.subject.direction();
        this._applyAnchorByDirection(direction);
      } catch (e) {
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
      }
      return point;
    }

    _applyAnchorByDirection(direction) {
      var dx = 0.5;
      var dy = 0.5;
      if (direction == 6) {
        dy = 1;
        dx = 0;
      }
      if (direction == 4) {
        dy = 0;
        dx = 0;
      }
      if (direction == 2) {
        dy = 0.5;
        dx = 0.5;
      }
      if (direction == 8) {
        dy = 0.5;
        dx = -0.5;
      }
      this.sprite.anchor.x = dx;
      this.sprite.anchor.y = dy;
    }

    //TODO: Надо разделить точку поиска и координаты спрайта!
    _imageToPoint() {
      if(this._myPoint == null)
        return;
      var x = this._myPoint.screenX();
      var y = this._myPoint.screenY();
      //console.log(this.sprite.rotation);
      //3var rot = Math.floor(this.sprite.rotation);
      this.sprite.x = x;
      this.sprite.y = y;
    }

    _endPoint() {
      return this._data.target.toPoint();
    }

    _setImage(name) {
      if (name) {
        if (name == 'null')
          this.sprite = new Sprite(AlphaABS.DATA.IMG.Vector.bitmap);
        else {
          this.sprite = new AlphaABS.LIBS.Sprite_Vector(name);
        }
      } else {
        this.sprite = new Sprite(new Bitmap(76, 38));
      }
    }
  }

  SDK.setConstant(Game_SVector, 'SPEED', 0.15);
  //END Game_SVector
  //------------------------------------------------------------------------------

  AlphaABS.register(Game_SVector);

})();
function Game_TimerABS() {
  this.initialize.apply(this, arguments);
}
(function () {
  //Game_TimerABS
  //------------------------------------------------------------------------------
  Game_TimerABS.prototype.initialize = function () {
    this._paused = false;
    this._mValue = 0;
    this._value = 0;
  };

  Game_TimerABS.prototype.getMaxValue = function () {
    return this._mValue;
  };

  Game_TimerABS.prototype.getValue = function () {
    return this._value;
  };

  Game_TimerABS.prototype.setMaxTime = function (frameCount) {
    frameCount = Math.abs(Math.round(frameCount));
    this._mValue = frameCount;
    if (this._value > this._mValue)
      this._value = this._mValue;
  };

  Game_TimerABS.prototype.reset = function () {
    this._value = 0;
  };

  Game_TimerABS.prototype.update = function () {
    if (!this.isReady()) {
      if (!this._paused) {
        if (this._value < this._mValue)
          this._value += 1;
      }
    }
  };

  Game_TimerABS.prototype.isReady = function () {
    return (this._value >= this._mValue);
  };

  Game_TimerABS.prototype.stop = function () {
    this.start(0);
  };

  Game_TimerABS.prototype.start = function (frameCount) {
    this._value = 0;
    this._mValue = Math.abs(Math.round(frameCount));
    this._paused = false;
  };

  Game_TimerABS.prototype.pause = function () {
    if (this._paused)
      return;
    if (this._mValue == 0)
      return;
    this._paused = true;
  };

  Game_TimerABS.prototype.resume = function () {
    this._paused = false;
  };

  //END Game_TimerABS
  //------------------------------------------------------------------------------

})();
(function () {
  //Game_Troop
  //------------------------------------------------------------------------------
  //OVER
  Game_Troop.prototype.setup = function (troopId) {
    this.clear();
    this._enemies = [];
    this._enemiesABS = [];

    $gameMap.events().forEach(function (e) {
      if (e instanceof Game_AIBot) {
        this._enemiesABS.push(e);
      }
    }.bind(this));
  };

  Game_Troop.prototype.membersABS = function () {
    return this._enemiesABS;
  };

  //OVER
  Game_Troop.prototype.initABS = function () {
    this.setup();
    this.membersABS().forEach(function (member) {
      member.initABS();
      this._enemies.push(member.battler());
    }.bind(this));
    this._inBattle = true;
  };

  //?[NEW]
  Game_Troop.prototype.deactivateABS = function () {
    try {
      var members = this.membersABS();
      if (members != null) {
        members.forEach(function (member) {
          member._deactivate();
        }.bind(this));
      }
    } catch (error) {
      AlphaABS.error(error, ' deactivateABS');
    }
    this._inBattle = false;
  };

  //NEW
  Game_Troop.prototype.onTurnEnd = function () {
    try {
      this._enemiesABS.forEach(function (e) {
        e.onTurnEnd();
      });
    } catch (error) {
      AlphaABS.error(error, ' onTurnEnd');
    }
  };

  Game_Troop.prototype.aliveMembersABS = function () {
    return this.membersABS().filter(function (member) {
      return member.battler().isAlive();
    });
  };

  Game_Troop.prototype.deadMembersABS = function () {
    return this.membersABS().filter(function (member) {
      return member.battler().isDead();
    });
  };

  //NEW
  Game_Troop.prototype.selectOnMap = function (who) {
    this.membersABS().forEach(function (e) {
      e.selectOnMap(false);
    });
    if (who) who.selectOnMap(true);
  };
  //END Game_Troop
  //------------------------------------------------------------------------------

})();
(function () {
    //------------------------------------------------------------------------------
    //NotifyMachine
    class NotifyMachine extends Sprite {
        constructor(x, y, w, h, lines) {
            super();
            this.x = x;
            this.y = y;
            this._maxItems = lines;
            this._items = [];
            this._timers = [];
            this._lineH = h + 4;
            this._newItem = null;
            //this.setFrame(w,this._lineH * lines);
            this._setupMode();
            this._initItems();
            this._newItemTimer = new Game_TimerABS();
            this.bitmap = new Bitmap(w, this._lineH * lines);
            //this.bitmap.fillRect(0,0,w,this._lineH*lines,Color.RED.CSS);
        }

        maxHeight() {
            return this._lineH * this._maxItems;
        }

        update() {
            this._update_new_item();
            this._update_items_fade();
            this._update_timers();
        }

        refresh() {
            this._setupMode();
        }

        push(item) {
            var lastItem = this._items.shift();
            if (lastItem != null)
                this.removeChild(lastItem);

            this._items.push(item);
            if (this._newItem) {
                this._newItem.opacity = 255;
                this._newItem.x = 0;
            }
            this._newItem = item;
            this._newItemTimer.start(NotifyMachine.TIME + 60);
            this._configNewItem();
            this._timers.shift();
            this._timers.push(new Game_TimerABS());
            this.addChild(this._newItem);
            this._step();
        }

        clear() {
            this._items.forEach(function (item) {
                if (item) this.removeChild(item);
            });
            this._timers = [];
            this._items = [];
            this._newItem = null;
            this._initItems();
        }

        //PRIVATE
        _setupMode() {
            this._mode = 'right'; //Apper from right of Screen
            if (SDK.toGlobalCoord(this, 'x') < Graphics.width / 2) {
                this._mode = 'left'; //Apper from left of Screen
            }
        }

        _update_new_item() {
            if (this._newItem == null) return;
            this._fadeOut(this._newItem);
            if (this._mode == 'right') {
                if (this._newItem.x > 2)
                    this._newItem.x -= 4;
            } else {
                if (this._newItem.x < 0)
                    this._newItem.x += 4;
            }
        }

        _update_items_fade() {
            for (var i = 0; i < this._items.length; i++) {
                if (!this._timers[i]) continue;
                if (this._timers[i].isReady()) {
                    if (this._items[i] != this._newItem)
                        this._fadeIn(this._items[i]);
                }
            }
        }

        _update_timers() {
            this._timers.forEach(function (timer) {
                if (timer) {
                    timer.update();
                }
            });

            this._newItemTimer.update();
            if (this._newItemTimer.isReady() && this._newItem) {
                this._timers[this._maxItems - 1].start(1);
                this._newItem = null;
            }
        }

        _step() {
            SDK.times(this._items.length, function (i) {
                var index = (this._items.length - 1) - i; //Reverse
                var item = this._items[index];
                if (item == null) return;
                var newY = this.height - (this._lineH * (i + 1));
                if (index != (this._items.length - 1)) { //New Item
                    item.x = 0;
                    if (this._timers[index].isReady())
                        this._timers[index].start(NotifyMachine.TIME);
                }
                item.y = newY;

            }.bind(this));
        }

        _initItems() {
            SDK.times(this._maxItems, function () {
                this._items.push(null);
                this._timers.push(null);
            }.bind(this));
        }

        _configNewItem() {
            this._newItem.opacity = 0;
            if (this._mode == 'right') {
                this._newItem.x += (this.width + 2);
            } else
                this._newItem.x -= (this.width + 2);
        }

        _fadeIn(item) {
            if (item.opacity > 2) {
                item.opacity -= 2;
            }
        }

        _fadeOut(item) {
            if (item.opacity < (251)) {
                item.opacity += 4;
            }
        }

    }

    SDK.setConstant(NotifyMachine, 'TIME', 240);
    //END NotifyMachine
    //------------------------------------------------------------------------------
    AlphaABS.register(NotifyMachine);
})();
(function () {
  //PKD_Object_Bar
  //------------------------------------------------------------------------------
  class PKD_Object_Bar {
    constructor(bitmap) {
      this._bitmap = bitmap;
      this._rect = undefined;
      this._bColor = Color.BLACK;
      this._color = Color.WHITE;
      this._isGradient = true;
      this._mValue = 0;
      this._text_l = null;
      this._text_r = null;
      this._text_c = null;
      this._lValue = -1; //Last value
      this._value = 0;

      this._calculate_gradient();
    }

    setPosition(x, y, w, h) {
      this._rect = new Rectangle(x, y, w, h);
    }

    setValue(value) {
      if (value <= 0)
        value = 0;
      if (value > this._mValue)
        value = this._mValue;
      this._value = value;
    }

    getValue() {
      return this._value;
    }

    refresh() // 1.1
    {
      if (this._rect === undefined)
        return;
      this._draw_back_bar();
      if (this._mValue != 0)
        this._draw_main_bar();
    }

    //PARAMS
    //color , bColor, maxValue, value
    config(params) {
      this._color = params.color || Color.WHITE;
      this._bColor = params.bColor || Color.BLACK;
      this._mValue = params.maxValue || 0;
      this.setValue(params.value || 0);
    }

    setText(text, position) {
      switch (position) {
        case 'center':
          this._text_c = text;
          break;
        case 'left':
          this._text_l = text;
          break;
        case 'right':
          this._text_r = text;
          break;
      }
    }

    allowGradient(isAllowed) {
      isAllowed = SDK.check(isAllowed, true);
      this._isGradient = isAllowed;
      if (this._isGradient)
        this._calculate_gradient();
    }

    update() {
      if (this._lValue == this._value)
        return; //No drawing if not changes
      this.refresh();
      this._lValue = this._value;
    }


    //PRIVATE
    _draw_back_bar() {
      this._bitmap.fillRect(this._rect.x, this._rect.y, this._rect.width, this._rect.height, this._bColor.CSS);
    }

    _draw_main_bar() {
      var width = Math.floor((100 * this._value / this._mValue) * (this._rect.width - 2) / 100);

      if (this._isGradient) {
        this._bitmap.gradientFillRect(this._rect.x + 1, this._rect.y + 1, width, this._rect.height - 2,
          this._color.CSS, this._gColor.CSS, false);
      } else {
        this._bitmap.fillRect(this._rect.x + 1, this._rect.y + 1, width, this._rect.height - 2, this._color.CSS);
      }

      var size = this._bitmap.fontSize;
      this._bitmap.fontFace = AlphaABS.SYSTEM.FONT;
      this._bitmap.fontSize = this._rect.height - 4;

      if (this._text_c != null)
        this._bitmap.drawText(this._text_c, this._rect.x + 2, this._rect.y, this._rect.width - 4, this._rect.height, 'center');
      if (this._text_l != null)
        this._bitmap.drawText(this._text_l, this._rect.x + 4, this._rect.y, this._rect.width - 8, this._rect.height, 'left');
      if (this._text_r != null)
        this._bitmap.drawText(this._text_r, this._rect.x + 2, this._rect.y, this._rect.width - 6, this._rect.height, 'right');
      this._bitmap.fontSize = size;
    }

    _calculate_gradient() {
      this._gColor = this._color.getLightestColor(230);
    }
  }
  //END PKD_Object_Bar
  //------------------------------------------------------------------------------

  AlphaABS.register(PKD_Object_Bar);

})();
// Generated by CoffeeScript 2.3.1
var Game_AI2Bot;

Game_AI2Bot = function() {
  this.initialize.apply(this, arguments);
};

(function() {
  var __interface_method_onSwitchToFreeState, __interface_method_performAction, __interface_method_setTarget, __super_deactivate;
  Game_AI2Bot.prototype = Object.create(Game_Follower.prototype);
  Game_AI2Bot.prototype.constructor = Game_AI2Bot;
  PLATFORM.SDK.applyInterface(Game_AI2Bot, AlphaABS.LIBS.Interface_AIBot);
  PLATFORM.SDK.applyInterface(Game_AI2Bot, AlphaABS.LIBS.Interface_AIBotABS);
  PLATFORM.SDK.applyInterface(Game_AI2Bot, AlphaABS.LIBS.Interface_AIBotABSEvents);
  PLATFORM.SDK.applyInterface(Game_AI2Bot, AlphaABS.LIBS.Interface_AIBotActions);
  PLATFORM.SDK.applyInterface(Game_AI2Bot, AlphaABS.LIBS.Interface_AIBotABSMoving);
  Game_AI2Bot.prototype.initialize = function(index) {
    Game_Follower.prototype.initialize.call(this, index);
    this.initializeABS();
    return this.reInitABS(index);
  };
  Game_AI2Bot.prototype.reInitABS = function(index) {
    this._absParams.battler = $gameParty.members()[index];
    if (this._absParams.battler != null) {
      this._stateMachine = new AlphaABS.LIBS.AIStateMachineParty();
      this._absParams.partyIndex = index;
      //@_absParams.partyActorId = @_absParams.battler.actorId()
      this.aiName = this._absParams.battler.name();
      this.LOG.setColors(Color.BLUE, Color.BLACK.getLightestColor(225));
      this.LOG.p("AI inited " + this.aiName);
      this._absParams.motion = null;
      this._absParams.deactivatedByDead = false;
      this._absParams.behavior.loadAlly();
      this.pursuitTarget = false;
      this.setThrough(false);
      return this._createSlowUpdateThread();
    } else {
      return this._deactivate();
    }
  };
  Game_AI2Bot.prototype._createSlowUpdateThread = function() {
    return this._slowUpdateThread = setInterval(this.slowUpdate.bind(this), 500);
  };
  //?NEW
  Game_AI2Bot.prototype.slowUpdate = function() {
    var e;
    try {
      if (!AlphaABS.isABS()) {
        return;
      }
      if (!this.inActive()) {
        return;
      }
      this.checkCollisionWithPlayer();
      return this.checkCollisionWithParty();
    } catch (error) {
      e = error;
      return console.error(e);
    }
  };
  
  //?NEW
  Game_AI2Bot.prototype.refreshABS = function() {
    clearInterval(this._slowUpdateThread);
    this._createSlowUpdateThread();
    this.changeStateToFree();
    return this.refreshABSMotion();
  };
  //?OVER Super
  Game_AI2Bot.prototype.onGameSave = function() {
    Game_AIBot.prototype.onGameSave.call(this);
    return clearInterval(this._slowUpdateThread);
  };
  
  //?OVER Super
  Game_AI2Bot.prototype.onGameLoad = function() {
    Game_AIBot.prototype.onGameLoad.call(this);
    clearInterval(this._slowUpdateThread);
    this._createSlowUpdateThread();
    return this.refreshABSMotion();
  };
  Game_AI2Bot.prototype.stopABS = function() {
    this._deactivate();
    if (this._absParams.battler != null) {
      this._absParams.battler.stopABS();
      this._absParams.battler = null;
    }
    return this.refreshABSMotion();
  };
  
  //OVER Super
  Game_AI2Bot.prototype.chaseCharacter = function(character) {}; //*EMPTY
  Game_AI2Bot.prototype.partyActorIndexId = function() {
    if (this.battler() != null) {
      return this.battler().actorId();
    }
  };
  //OVER Super
  Game_AI2Bot.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    //TODO: MoveSpeed и directionFix не должно быть как у Game_Player если в бою
    this.setTransparent($gamePlayer.isTransparent());
    this._updateABS();
    return this._updateDeadState();
  };
  Game_AI2Bot.prototype.getHomePosition = function() {
    if (!this.isNearThePlayerX()) {
      return $gamePlayer.toPoint();
    } else {
      return null;
    }
  };
  //OVER I
  Game_AI2Bot.prototype._updateABS = function() {
    if (this.inActive()) {
      this.battler().updateABS();
      this._stateMachine.update(this);
      if (this.pursuitTarget) {
        return this._performPursuitTarget();
      }
    }
  };
  //else
  //    @_deactivate()
  Game_AI2Bot.prototype._performPursuitTarget = function() {
    this._absParams.useAStar = true;
    if (!this.isMoving()) {
      return this.moveTypeTowardTarget();
    }
  };
  //@turnTowardCharacter @target()
  __super_deactivate = Game_AI2Bot.prototype._deactivate;
  Game_AI2Bot.prototype._deactivate = function() {
    __super_deactivate.call(this);
    this.hideHpBarABS();
    this.refreshABSMotion();
    return SlowUpdateManager.clear(this._absParams.partyIndex + 900);
  };
  //NEW
  Game_AI2Bot.prototype.checkCollisionWithPlayer = function() {
    if (!this.inBattle()) {
      return this.checkCollisionWith($gamePlayer);
    }
  };
  //NEW
  Game_AI2Bot.prototype.checkCollisionWith = function(other) {
    var me, pl;
    me = this.toPoint();
    pl = other.toPoint();
    if (me.x === pl.x && me.y === pl.y) {
      if (!this.isMoving()) {
        return this.moveFromPoint(other);
      }
    }
  };
  //NEW
  Game_AI2Bot.prototype.checkCollisionWithParty = function() {
    var i, len, other, ref;
    if (this.inBattle()) {
      ref = $gameParty.membersABS();
      for (i = 0, len = ref.length; i < len; i++) {
        other = ref[i];
        this.checkCollisionWithPartyMember(other);
      }
    }
  };
  //NEW
  Game_AI2Bot.prototype.checkCollisionWithPartyMember = function(member) {
    if (member.inBattle() && member !== this) {
      return this.checkCollisionWith(member);
    }
  };
  //NEW
  Game_AI2Bot.prototype._updateDeadState = function() {
    if (this._absParams.deactivatedByDead && this.isAlive()) {
      this._absParams.deactivatedByDead = false;
      this.requestMotion('none');
      return this.initABS();
    }
  };
  //OVER I
  Game_AI2Bot.prototype.initABS = function() {
    if (this._absParams.battler != null) {
      this.battler().initABS();
      SlowUpdateManager.register(900 + this._absParams.partyIndex, this._stateMachine, 300);
      this._absParams.active = true;
      if (this.isNeedHpBarShow()) {
        this.showHpBarABS();
      }
      this.refreshABSMotion();
      return this.changeStateToFree();
    }
  };
  //OVER I
  Game_AI2Bot.prototype.startCommonEvent = function(commonEventId) {
    if ((commonEventId != null) > 0) {
      if ($dataCommonEvents[commonEventId] != null) {
        return $gameTemp.reserveCommonEvent(commonEventId);
      }
    }
  };
  //OVER I
  Game_AI2Bot.prototype.createNewHomePoint = function() {}; //*EMPTY
  
  //OVER I
  Game_AI2Bot.prototype.onReturnEnd = function() {
    this.LOG.p('return END');
    this._absParams.active = true;
    if (this.inBattle()) {
      return this._onBattleEnd();
    }
  };
  Game_AI2Bot.prototype.onSwitchToReturnState = function() {
    this._resetTarget();
    return this.LOG.p('Return');
  };
  Game_AI2Bot.prototype.onSwitchToSearchState = function() {
    this.LOG.p('Curious! I\'am searching...');
    if (!this.behaviorModel().noEmote) {
      return this.requestBalloon(2);
    }
  };
  __interface_method_onSwitchToFreeState = Game_AI2Bot.prototype.onSwitchToFreeState;
  Game_AI2Bot.prototype.onSwitchToFreeState = function() {
    __interface_method_onSwitchToFreeState.call(this);
    this.pursuitTarget = false;
    return this._absParams.useAStar = false;
  };
  //OVER I
  Game_AI2Bot.prototype.startPursuitTarget = function() {
    this.LOG.p('Start pursuit');
    return this.pursuitTarget = true;
  };
  //OVER I
  Game_AI2Bot.prototype.returnSlow = function() {
    this._performReturnToPartyLeader();
    if (this.getHomePosition() == null) {
      return this.onReturnEnd();
    }
  };
  //NEW
  Game_AI2Bot.prototype._performReturnToPartyLeader = function() {
    if (!this.isMoving()) {
      return this.moveTypeTowardPlayer();
    }
  };
  //OVER I
  Game_AI2Bot.prototype.isNearThePointX = function(point) {
    var sx, sy;
    try {
      sx = Math.abs(this.deltaXFrom(point.x));
      sy = Math.abs(this.deltaYFrom(point.y));
      if (this.inBattle()) {
        return (sx + sy) < 1;
      } else {
        return (sx + sy) < (1 + this._absParams.partyIndex);
      }
    } catch (error) {
      return false;
    }
  };
  //OVER I
  Game_AI2Bot.prototype.stay = function() {
    return this.pursuitTarget = false;
  };
  //OVER I
  Game_AI2Bot.prototype.changeStateToFree = function() {
    if ($gamePlayer.inBattle() && ($gamePlayer.target() != null)) {
      return this.changeStateToBattle($gamePlayer.target());
    } else {
      return this._stateMachine.switchStateToFree(this);
    }
  };
  __interface_method_setTarget = Game_AI2Bot.prototype.setTarget;
  Game_AI2Bot.prototype.setTarget = function(target) {
    if (target instanceof Game_AI2Bot) {
      return this._resetTarget();
    } else {
      return __interface_method_setTarget.call(this, target);
    }
  };
  //OVER I
  Game_AI2Bot.prototype.onSwitchToDeadState = function() {
    this._absParams.allyToSearch = null;
    this.stay();
    this._deactivate();
    this.requestMotion('sleep');
    this._absParams.deactivatedByDead = true;
  };
  //NEW
  Game_AI2Bot.prototype.requestMotion = function(motion) {
    return this._absParams.motion = motion;
  };
  //NEW
  Game_AI2Bot.prototype.isMotionRequested = function() {
    return this._absParams.motion != null;
  };
  
  //NEW
  Game_AI2Bot.prototype.motionType = function() {
    return this._absParams.motion;
  };
  //NEW
  Game_AI2Bot.prototype.clearMotion = function() {
    return this._absParams.motion = null;
  };
  __interface_method_performAction = Game_AI2Bot.prototype._performAction;
  Game_AI2Bot.prototype._performAction = function() {
    __interface_method_performAction.call(this);
    if (this.battler().action(0).isAttack()) {
      this.battler().performAttack();
    }
  };
  //$[OVER I]
  Game_AI2Bot.prototype.isNeedHpBarShow = function() {
    return Game_AIBot.prototype.isNeedHpBarShow.call(this);
  };
  //$[OVER I]
  Game_AI2Bot.prototype.selectOnMap = function(isSelect) {
    return Game_AIBot.prototype.selectOnMap.call(this, isSelect);
  };
  Game_AI2Bot.prototype.refreshABSMotion = function() {
    var skill;
    if (this._absParams.absMotion != null) {
      this._absParams.absMotion.clearMotion();
      this._absParams.absMotion = null;
    }
    if (!this.battler()) {
      return;
    }
    if (this.battler().isHasABSMotion()) {
      this._absParams.absMotion = new AlphaABS.LIBS.ABSMotion();
      skill = this.battler()._firstBattleABSSkill();
      this._absParams.absMotion.setMotion(skill.motion, skill.motionOffset, this);
      return this._absParams.absMotion.applyMotionIdle();
    }
  };
  Game_AI2Bot.prototype.inABSMotion = function() {
    return (this.battler() != null) && (this._absParams.absMotion != null);
  };
  Game_AI2Bot.prototype._updateABSMotion = function() {
    if (!this.inABSMotion()) {
      return;
    }
    if (this.battler().isNeedABSMotionRefresh()) {
      this.refreshABSMotion();
      this.battler().onABSMotionRefresh();
    }
    if (this.battler().isNeedABSMotionAction()) {
      this.battler().onABSMotionActionDone();
      if (this._absParams.absMotion != null) {
        return this._absParams.absMotion.applyMotionAction();
      }
    }
  };
  Game_AI2Bot.prototype.refreshABSMotionState = function(toState) {
    if (!this.inABSMotion()) {
      return;
    }
    if (toState === true) {
      return this._absParams.absMotion.applyMotionState();
    } else {
      return this._absParams.absMotion.applyMotionIdle();
    }
  };
})();

(function () {
  //Scene_InterfaceEdit
  //------------------------------------------------------------------------------
  function Scene_InterfaceEdit() {
    this.initialize.apply(this, arguments);
  }

  Scene_InterfaceEdit.prototype = Object.create(Scene_Base.prototype);
  Scene_InterfaceEdit.prototype.constructor = Scene_InterfaceEdit;

  Scene_InterfaceEdit.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this._draw_background();
    this.createWindowLayer();

    AlphaABS.BattleUI.requestFreeMode();
    this._spritesetUI = new AlphaABS.LIBS.Spriteset_InterfaceABS();
    this.addChild(this._spritesetUI);
    this._spritesetUI.initABS();
    this._spritesetUI.setEditMode();
  };

  Scene_InterfaceEdit.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    //EXIT
    if (this.isExit()) {
      this._spritesetUI.terminate();
      this.popScene();
    }
  };

  Scene_InterfaceEdit.prototype.isExit = function () {
    return (Input.isTriggered('cancel') || TouchInput.isCancelled());
  };

  //RPIVATE
  Scene_InterfaceEdit.prototype._draw_background = function () {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this._backgroundSprite.setBlendColor([16, 16, 16, 128]);
    this.addChild(this._backgroundSprite);
  };
  //END Scene_InterfaceEdit
  //------------------------------------------------------------------------------

  AlphaABS.register(Scene_InterfaceEdit);

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Manager_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //?[NEW]
    SceneManager.isCurrentSceneIsMap = function () {
        return (this._scene != null && this._scene instanceof Scene_Map);
    };
})();
// ■ END Scene_Manager_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {

  var LOG = new PLATFORM.DevLog("Scene_Map");
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;

  var _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    _Scene_Map_onMapLoaded.call(this);
    BattleManagerABS.onMapLoaded();
    if ($gameMap.isABS()) {
      this._sVectors = []; //Vectors to delete from $gameMap
      this._spriteset.initABS();
      if ($gameTemp.transferedByDeathABS == true) {
        SceneManager.goto(Scene_Gameover);
        return;
      }
      $gameParty.refreshABS();
    }
    $gameTemp.transferedByDeathABS = false;
  };

  var _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function () {
    _Scene_Map_update.call(this);
    if ($gameMap.isABS()) {
      BattleManagerABS.updateABS();
      this._updateABS();
      if (AlphaABS.BattleUI.isUI()) {
        if (this._spriteset && this._spriteset._spritePlayerABS) {
          var p = this._spriteset._spritePlayerABS;
          AlphaABS.BattleUI.moveWeaponCircle(p.x, p.y - 24);
        }
      }
    }
  };

  var _Scene_Map_checkGameover = Scene_Map.prototype.checkGameover;
  Scene_Map.prototype.checkGameover = function () {
    if ($gameMap.isABS()) {
      //NOTHING! see Game_Player
    } else
      _Scene_Map_checkGameover.call(this);
  };

  var _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function () {
    if ($gameMap.isABS()) {
      AlphaABS.BattleUI.terminate();
      if (this._pEngine)
        this._pEngine.terminate();
    }
    _Scene_Map_terminate.call(this);
  };

  var _Scene_Map_stop = Scene_Map.prototype.stop;
  Scene_Map.prototype.stop = function () {
    if ($gameMap.isABS()) {
      BattleManagerABS.setPlayerTarget(null);
      $gamePlayer.prepareABS();
      if (AlphaABS.BattleUI.isUI())
        AlphaABS.BattleUI.getUI().hide();
      $gameParty.terminateABSSession();
    }
    _Scene_Map_stop.call(this);
  };

  //NEW
  Scene_Map.prototype._updateABS = function () {
    $gameMap.ABSParams().sVectors.forEach(function (item) {
      if (item) {
        if (item.isStarted()) {
          if (!item.isAlive()) {
            AlphaABS.BattleManagerABS.battleProcess().performPostBattleAction(item);
            LOG.p("Delete SVector from Map");
            this._sVectors.push(item);
          }
        } else {
          this._spriteset.addChild(item.sprite);
          item.start();
          try {
            if (item.hasEmitter() && this._pEngine)
              this._pEngine.addEmitter(item.emitter(), true);
          } catch (e) {
            console.error(e);
          }
        }
        item.update();
      }
    }.bind(this));

    if (this._sVectors.length > 0) {
      this._sVectors.forEach(function (item) {
        $gameMap.ABSParams().sVectors.delete(item);
      });
      this._sVectors = [];
    }
  };

  //OVER
  var _Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function () {

    if (!$gameMap.isABS()) {
      _Scene_Map_processMapTouch.call(this);
      return;
    }

    if (!$gamePlayer.inActive()) {
      return;
    }

    if (!$gamePlayer.canControl()) {
      return;
    }

    if (TouchInput.isCancelled()) {
      if (BattleManagerABS.getPlayerTarget() == null) {
        $gameMap.ABSParams().menuClickCount++;
      } else {
        BattleManagerABS.setPlayerTarget(null);
      }
    }

    if (TouchInput.isTriggered() || this._touchCount > 0) {
      if (TouchInput.isPressed()) {
        if (this._touchCount === 0 || this._touchCount >= 15) {

          if (AlphaABS.BattleUI.isWeaponCircleTouchedAny()) {
            return;
          }

          var indexT = AlphaABS.BattleUI.isTouched();
          if (indexT != null && indexT[1] != null) {
            if (indexT[0] == 'skill')
              $gamePlayer.touchSkillAt(indexT[1]);
            if (indexT[0] == 'panel')
              $gamePlayer.touchControlAt(indexT[1]);
            return;
          } else {
            var selected = null;
            var t = this._spriteset.spritesABS();
            for (var i = 0; i < t.length; i++) {
              if (t[i].isTouched()) {
                selected = t[i];
                break;
              }
            }

            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);

            if (selected && selected.character().inActive()) {
              if (selected.character() != BattleManagerABS.getPlayerTarget()) {
                BattleManagerABS.setPlayerTarget(selected.character());

                if (!selected.character().isAlly($gamePlayer))
                  LOG.p("Selected " + selected.character().event().name);
                else
                  LOG.p("Selected ally " + selected.character().battler().name());

                $gameMap.ABSParams().menuClickCount = 0;
              } else {
                $gamePlayer.stopFollowMode();
                if ($gamePlayer.isNoTargetAttackMode()) {
                  $gamePlayer.onMouseAttackOnTarget();
                  if (!$gamePlayer._isRangeToTargetGood())
                    $gameTemp.setDestination(x, y);
                } else {
                  $gameTemp.setDestination(x, y);
                }
                $gamePlayer.stopFollowMode();
              }
            } else {
              $gamePlayer.stopFollowMode();
              $gameTemp.setDestination(x, y);
            }
          }
        }
        this._touchCount++;
      } else {
        this._touchCount = 0;
      }
    }
  };

  var _Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
  Scene_Map.prototype.isMenuCalled = function () {
    if ($gameMap.isABS())
      if (BattleManagerABS.getPlayerTarget() == null &&
        $gameMap.ABSParams().menuClickCount > 0) {
        return TouchInput.isCancelled() || Input.isTriggered('menu');
      } else
        return Input.isTriggered('menu');
    else
      return _Scene_Map_isMenuCalled.call(this);
  };

  //OVER
  Scene_Map.prototype.updateCallMenu = function () {
    if (this.isMenuEnabled()) {
      if (this.isMenuCalled()) {
        this.menuCalling = true;
      }
      if (this.menuCalling && !$gamePlayer.isMoving()) {
        if ($gamePlayer.inBattle()) {
          BattleManagerABS.alertNoInBattle();
          this.menuCalling = false;
        } else
          this.callMenu();
      }
    } else {
      this.menuCalling = false;
    }
  };

  var _Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
  Scene_Map.prototype.createSpriteset = function () {
    _Scene_Map_createSpriteset.call(this);
    if ($gameMap.isABS()) {
      this._spritesetUI = new AlphaABS.LIBS.Spriteset_InterfaceABS();
      this.addChild(this._spritesetUI);
      AlphaABS.BattleUI.setUI(this._spritesetUI);
    }
  };
})();
// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SlowUpdateManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[GLOBAL DEFINITION]
var SlowUpdateManager;

SlowUpdateManager = function() {
  throw new Error('Static class');
};

SlowUpdateManager.init = function() {
  this._threadOwners = [];
  this._threadObjects = [];
  return this._threadTimers = [];
};

SlowUpdateManager.register = function(objectId, object, time) {
  var index, thread, timeout;
  if (!(SlowUpdateManager._getOwnerIndex(objectId) >= 0)) {
    this._threadOwners.push(objectId);
    this._threadObjects.push(object);
    object.activateSlowUpdate();
  }
  
  //"REGISTER".p(objectId)
  index = SlowUpdateManager._getOwnerIndex(objectId);
  clearInterval(this._threadTimers[index]);
  thread = setInterval((timeout = function() {
    index = SlowUpdateManager._getOwnerIndex(objectId);
    if (SlowUpdateManager._threadObjects[index] != null) {
      SlowUpdateManager._threadObjects[index].slowUpdate();
    }
  }), time);
  this._threadTimers[index] = thread;
};

SlowUpdateManager._getOwnerIndex = function(owner) {
  return this._threadOwners.indexOf(owner);
};

SlowUpdateManager.clear = function(objectId) {
  var index;
  //"CLEAR".p(objectId)
  index = SlowUpdateManager._getOwnerIndex(objectId);
  if (index >= 0) {
    clearInterval(this._threadTimers[index]);
    this._threadTimers[index] = null;
    this._threadOwners[index] = null;
    this._threadObjects[index] = null;
    this._threadObjects.delete(null);
    this._threadOwners.delete(null);
    this._threadTimers.delete(null);
  }
};

SlowUpdateManager.clearAll = function() {
  this._threadOwners.forEach(function(id) {
    return SlowUpdateManager.clear(id);
  });
  this._threadOwners = [];
  this._threadObjects = [];
  this._threadTimers = [];
};

// ■ END SlowUpdateManager.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SpawnedAiBot.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
function Game_SpawnedAiBot() {
    this.initialize.apply(this, arguments);
}

(function(){
    Game_SpawnedAiBot.prototype = Object.create(Game_AIBot.prototype);
    Game_SpawnedAiBot.prototype.constructor = Game_SpawnedAiBot;

    Game_SpawnedAiBot.prototype.initialize = function (mapId, eventId, enemyId, x, y, spawnEventId) {
        this._spawnX = x;
        this._spawnY = y;
        this._spawnEventId = spawnEventId;
        Game_AIBot.prototype.initialize.call(this, mapId, eventId, enemyId);
        DataManager.extractMetadata(this.event());
    };
    Game_SpawnedAiBot.prototype.event = function () {
        return $dataSpawnMapAI.events[this._spawnEventId];
    };
    Game_SpawnedAiBot.prototype.locate = function () {
        var x = this._spawnX;
        var y = this._spawnY;
        Game_AIBot.prototype.locate.call(this, x, y);
    };
})();

// ■ END SpawnedAiBot.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {
  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;
  //Sprite_Animation
  //------------------------------------------------------------------------------
  //NEW
  Sprite_Animation.prototype.setABSMode = function () {
    this._absMode = true;
  };

  Sprite_Animation.prototype.setABSModeMap = function () {
    this._absMode = true;
    this._absModeMap = true;
    this._mapPoint = null;
  };

  var pkd_SpriteAnimation_updatePosition = Sprite_Animation.prototype.updatePosition;
  Sprite_Animation.prototype.updatePosition = function () {
    try {
      if (this._absMode && !this._absModeMap) {
        if (this._animation.position === 3) {
          this.x = this.parent.width / 2;
          this.y = this.parent.height / 2;
        } else {
          var parent = this._target.parent;
          var grandparent = parent ? parent.parent : null;
          this.x = this._target.x;
          this.y = this._target.y;
          if (this.parent === grandparent) {
            this.x += parent.x;
            this.y += parent.y;
          }
          if (this._animation.position === 0) {
            this.y -= this._target.height;
            //this.y -= this._target.height / 2;
          }
        }
        if (this._animation.position === 2) { //FEET
          this.y -= 32;
        }
      } else if (this._absMode && this._absModeMap) {
        if (this._animation.position == 3) {
          this.x = this.parent.width / 2;
          this.y = this.parent.height / 2;
        } else {
          if (!this._mapPoint) {
            this._mapPoint = new AlphaABS.UTILS.PointX(this._target.x, this._target.y);
            this._mapPoint.convertToMap();
          }

          var mapPoint = this._mapPoint.mapPointOnScreen();
          this.x = mapPoint.x + 24;
          this.y = mapPoint.y + 24;
        }
      } else {
        pkd_SpriteAnimation_updatePosition.call(this);
      }
    } catch (e) {
      console.error(e);
    }
  };

  var pkd_SpriteAnimation_updateCellSprite = Sprite_Animation.prototype.updateCellSprite;
  Sprite_Animation.prototype.updateCellSprite = function (sprite, cell) {
    pkd_SpriteAnimation_updateCellSprite.call(this, sprite, cell);
    if (this._absMode) {
      var pattern = cell[0];
      if (pattern >= 0) {
        sprite.x = 0;
        sprite.y = 0;
        var t = 4;
        if (this._absModeMap) {
          t = 2;
        }
        if (this._animation.position != 3) {
          sprite.scale.x = (sprite.scale.x / t);
          sprite.scale.y = (sprite.scale.y / t);
        }
      }
    }
  };

  var _Sprite_Animation_initMembers = Sprite_Animation.prototype.initMembers;
  Sprite_Animation.prototype.initMembers = function () {
    _Sprite_Animation_initMembers.call(this);
    this._lightDuration = null;
    this._lightPoint = null;
  };

  var _Sprite_Animation_startFlash = Sprite_Animation.prototype.startFlash;
  Sprite_Animation.prototype.startFlash = function (color, duration) {
    _Sprite_Animation_startFlash.call(this, color, duration);

    try {
      if (!BattleManagerABS.isABSLightingExt() || !this._absMode) return;
      if (this._lightPoint != null) {
        this._deleteLight();
      }
      this._lightDuration = duration;
      if (this._absModeMap)
        this._lightPoint = new AlphaABS.UTILS.PointX(this.x - 48, this.y - 48);
      else
        this._lightPoint = new AlphaABS.UTILS.PointX(this.x, this.y);
      this._lightPoint.convertToMap();
      var lightColor = new PLATFORM.Color(color[0], color[1], color[2]);
      $gameMap.setLight(this._lightPoint.x, this._lightPoint.y, 150, lightColor.toHex(), 0, true);
    } catch (e) {
      console.error(e);
    }
  };

  var _Sprite_Animation_updateFlash = Sprite_Animation.prototype.updateFlash;
  Sprite_Animation.prototype.updateFlash = function () {
    _Sprite_Animation_updateFlash.call(this);

    if (this._lightDuration == null) return;
    this._lightDuration--;
    if (this._lightDuration <= 1) {
      this._deleteLight();
    }
  };

  var _Sprite_Animation_remove = Sprite_Animation.prototype.remove;
  Sprite_Animation.prototype.remove = function () {
    _Sprite_Animation_remove.call(this);
    if (this._lightDuration || this._lightPoint) {
      this._deleteLight();
    }
  };

  //NEW
  Sprite_Animation.prototype._deleteLight = function () {
    if (this._lightPoint) {
      $gameMap.deleteLight(this._lightPoint.x, this._lightPoint.y);
      this._lightPoint = null;
    }
    this._lightDuration = null;
  };
  //END Sprite_Animation
  //------------------------------------------------------------------------------

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Button.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
    Sprite_Button.prototype.isHoverByMouse = function () {
        var x = this.canvasToLocalX(TouchInput.mX);
        var y = this.canvasToLocalY(TouchInput.mY);
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    };
// ■ END Sprite_Button.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////

(function () {
  class Sprite_CastProgress extends Sprite {
    constructor(width, height) {
      super(new Bitmap(width, height));
      this._timer = null;
      this._bar = new AlphaABS.LIBS.PKD_Object_Bar(this.bitmap);
      this._bar.setPosition(0, 0, width, height);
      this._needText = false;
      //this._thread = setInterval(function() { this._update_bar(); }.bind(this), 10);
    }

    setText() {
      this._needText = true;
    }

    setColor(color) {
      this._bar._color = color;
    }

    start(timer) {
      //this.visible = true;
      this._timer = timer;
    }

    cancel() {
      //this.visible = false;
      this._timer = null;
    }

    bar() {
      return this._bar;
    }

    update() {
      //super();
      this._update_bar();
    }

    terminate() {
      clearInterval(this._thread);
    }

    //PRIVATE
    _update_bar() {
      if (!this.bitmap) return;
      if (!this._timer) return;

      var t = this._timer.getMaxValue();
      var t2 = this._timer.getValue();
      this._bar._mValue = t;
      this._bar.setValue(t2);
      if (this._needText)
        this._bar.setText(AlphaABS.UTILS.framesToTimeA(t - t2), 'center');
      this._bar.update();

      if (this._timer.isReady()) {
        this.cancel();
      }
    }
  }

  AlphaABS.register(Sprite_CastProgress);

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
    Sprite_Character.prototype.updatePosition = function () {
        _alias_Sprite_Character_updatePosition.call(this);
        if (this._character.inABSMotion()) {
            this.y += this._absMotionOffset();
        }
    };

    //?[NEW]
    Sprite_Character.prototype._absMotionOffset = function () {
        return this._character.ABSParams().absMotion.getOffset();
    };

    //@[ALIAS]
    var _alias_Sprite_Character_patternWidth = Sprite_Character.prototype.patternWidth;
    Sprite_Character.prototype.patternWidth = function () {
        if (this._character.inABSMotion()) {
            return this.bitmap.width / 3;
        } else {
            return _alias_Sprite_Character_patternWidth.call(this);
        }
    };
})();
// ■ END Sprite_Character.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {

  var Consts = AlphaABS.SYSTEM;

  var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;
  var PointX = AlphaABS.UTILS.PointX;


  //Sprite_CharacterABS
  //------------------------------------------------------------------------------
  function Sprite_CharacterABS() {
    this.initialize.apply(this, arguments);
  }

  Sprite_CharacterABS.prototype = Object.create(Sprite_Character.prototype);
  Sprite_CharacterABS.prototype.constructor = Sprite_CharacterABS;

  Sprite_CharacterABS.MOTIONS = {
    none: {
      index: 0,
      loop: true
    },
    sleep: {
      index: 17,
      loop: true
    }
  };

  Sprite_CharacterABS.prototype.initialize = function (character, type) {
    Sprite_Character.prototype.initialize.call(this, character);
    this._absParams = {};
    this._absParams.type = type;
    this._absParams.damages = [];
  };

  Sprite_CharacterABS.prototype.isAlly = function () {
    return this._absParams.type == 2;
  };

  Sprite_CharacterABS.prototype.isEnemy = function () {
    return this._absParams.type == 0;
  };

  Sprite_CharacterABS.prototype.isPlayer = function () {
    return this._absParams.type == 1;
  };

  Sprite_CharacterABS.prototype.ABSParams = function () {
    return this._absParams;
  };

  Sprite_CharacterABS.prototype.update = function () {
    Sprite_Character.prototype.update.call(this);
    this._updateABS();
      if(this.isAlly()) {
        
      }
  };

  Sprite_CharacterABS.prototype.toPoint = function () {
    return new PointX(this.x, this.y);
  };

  Sprite_CharacterABS.prototype.isTouched = function () {
    return AlphaABS.UTILS.SMath.inRect(new PointX(TouchInput.x, TouchInput.y), this._getRectangle());
  };

  Sprite_CharacterABS.prototype.character = function () {
    return this._character;
  };

  Sprite_CharacterABS.prototype.initABS = function () {
    this._isABS = true;

    this._stateIconSprite = new Sprite_StateIcon();
    this.addChild(this._stateIconSprite);
    this._stateIconSprite.setup(this._character.battler());
    this._stateIconSprite.scale.x = 0.7;
    this._stateIconSprite.scale.y = 0.7;

    this._animationCast = null;
    this._animationCastAudio = null;

    this._stateSpriteOverlay = new Sprite_StateOverlay();
    this._stateSpriteOverlay.setup(this._character.battler());
    this.addChild(this._stateSpriteOverlay);
    this._stateSpriteOverlay.scale.x = 0.7;
    this._stateSpriteOverlay.scale.y = 0.7;

    if (!this.isPlayer()) {
      this._effectType = null;
      this._effectDuration = 0;
      this._shake = 0;
    } else {
      this._stateIconSprite.setPriority(90);
    }
  };

  //PRIVATE
  Sprite_CharacterABS.prototype._updateABS = function () {
    if (!this._isABS) return;
    if (this._character.battler() == null) return;

    if (this.isEnemy()) {
      this._setupSelection();
    } else {
      this._setupWeaponAnimation();
      this._setupMotion();
      this._updateMotion();
    }

    this._updateStateSprite();
    this._setupAnimationABS();
    this._updateDamagePopup();
    this._setupAnimationCastABS();
    this._setupPopUp();
  };

  Sprite_CharacterABS.prototype._updateEffect = function () {
    var t = this._character.battler();

    if (t.isEffectRequested()) { //setupEffect
      this._startEffect(t.effectType());
      t.clearEffect();
    }

    if (this._effectDuration > 0) {
      this._effectDuration--;
      switch (this._effectType) {
        case 'whiten':
          var alpha = 128 - (16 - this._effectDuration) * 10;
          this.setBlendColor([255, 255, 255, alpha]);
          break;
        case 'blink':
          this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
          break;
        case 'collapse':
          this.blendMode = Graphics.BLEND_ADD;
          this.setBlendColor([255, 128, 128, 128]);
          this.opacity *= this._effectDuration / (this._effectDuration + 1);
          break;
      }
      if (this._effectDuration === 0) {
        this._effectType = null;
      }
    }
  };

  Sprite_CharacterABS.prototype._startEffect = function (effectType) {
    this._effectType = effectType;
    switch (this._effectType) {
      case 'whiten':
        this._effectDuration = 16;
        break;
      case 'blink':
        this._effectDuration = 20;
        break;
      case 'collapse':
        this._effectDuration = 32;
        break;
    }

    this._shake = 0;
    this.blendMode = 0;
    this.opacity = 255;
    this.setBlendColor([0, 0, 0, 0]);
  };

  Sprite_CharacterABS.prototype._updateStateSprite = function () {
    this._stateIconSprite.y = -Math.round((this.patternHeight() + 40) * 0.9);
    if (this._stateIconSprite.y < 20 - this.y) {
      this._stateIconSprite.y = 20 - this.y;
    }

    this._stateIconSprite.visible = this._character.inActive();
  };

  Sprite_CharacterABS.prototype._updateDamagePopup = function () {
    this._setupDamagePopup();
    var t = this._absParams.damages;
    if (t.length > 0) {
      for (var i = 0; i < t.length; i++) {
        t[i].z = 10;
        t[i].update();
      }
      if (!t[0].isPlaying()) {
        this.parent.removeChild(t[0]);
        t.shift();
      }
    }
  };

  Sprite_CharacterABS.prototype._setupSelection = function () {
    if (!this._absParams.spriteSelect) {
      var selectedBitmap = null;
      var blendColor = Color.RED.ARR;
      if (this.isAlly())
        blendColor = Color.BLUE.ARR;
      if (AlphaABS.Parameters.isLoaded()) {
        var parameters = AlphaABS.Parameters.get_UIE_PlayerTarget();
        selectedBitmap = parameters.Selected_Image;
        if (parameters.Selected_Color) {
          var color = parameters.Selected_Color;
          color = PLATFORM.Color.FromHex(color);
          blendColor = color.ARR;
        }
      } else {
        selectedBitmap = AlphaABS.DATA.IMG.TargetCircle.bitmap;
      }
      this._absParams.spriteSelect = new Sprite(selectedBitmap);
      var t = this._absParams.spriteSelect;
      t.visible = false;
      t.anchor.x = 0.5;
      t.anchor.y = 0.5;
      t.setBlendColor(blendColor);
      t.opacity = 200;
      t.z = 0;
      this.parent.addChild(t);
    }

    this._absParams.spriteSelect.visible = this._character.ABSParams().selected;
    this._absParams.spriteSelect.x = this.x;
    this._absParams.spriteSelect.y = this.y;
    if(this._character.inABSMotion()) {
      this._absParams.spriteSelect.y -= this._absMotionOffset();
    }
  
    if (this.isAlly()) {
      this._absParams.spriteSelect.visible = this._character.isSelected();
    }
  
  };

  Sprite_CharacterABS.prototype._setupDebugInfo = function () {
    var t;
    if (!this._absParams.spriteDebug1) {
      t = this._character.ABSParams();

      var bitmap = new Bitmap(t.viewRadius * 64, t.viewRadius * 64);
      bitmap.drawCircle(bitmap.width / 2, bitmap.height / 2, bitmap.width / 2, Color.BLUE.CSS);

      this._absParams.spriteDebug1 = new Sprite(bitmap);
      this._absParams.spriteDebug1.z = 0;
      this._absParams.spriteDebug1.opacity = 64;
      this._absParams.spriteDebug1.anchor.x = 0.5;
      this._absParams.spriteDebug1.anchor.y = 0.5;
      this.parent.addChild(this._absParams.spriteDebug1);

      bitmap = new Bitmap(t.returnRadius * 64, t.returnRadius * 64);
      bitmap.drawCircle(bitmap.width / 2, bitmap.height / 2, bitmap.width / 2, Color.RED.CSS);

      this._absParams.spriteDebug2 = new Sprite(bitmap);
      this._absParams.spriteDebug2.z = 0;
      this._absParams.spriteDebug2.opacity = 120;
      this._absParams.spriteDebug2.anchor.x = 0.5;
      this._absParams.spriteDebug2.anchor.y = 0.5;
      this.parent.addChild(this._absParams.spriteDebug2);
    }

    this._absParams.spriteDebug1.visible = this._character.ABSParams().selected;
    this._absParams.spriteDebug2.visible = this._absParams.spriteDebug1.visible;

    this._absParams.spriteDebug1.x = this.x;
    this._absParams.spriteDebug1.y = this.y;

    t = this._character.ABSParams();
    if (t.myHomePosition) {
      this._absParams.spriteDebug2.x = t.myHomePosition.screenX();
      this._absParams.spriteDebug2.y = t.myHomePosition.screenY();
    } else {
      this._absParams.spriteDebug2.x = this.x;
      this._absParams.spriteDebug2.y = this.y;
    }
  };

  Sprite_CharacterABS.prototype._setupMotion = function () {
    if (this._character.isMotionRequested()) {
      if (!this._motionSprite) {
        this._motionSprite = new Sprite();
        this._motionSprite.anchor.x = 0.5;
        this._motionSprite.anchor.y = 1;
        this._motionSprite.bitmap = ImageManager.loadSvActor(this._character.battler().battlerName());
        this._motionSprite.visible = false;
        this._motionSprite.scale.x = 0.8;
        this._motionSprite.scale.y = 0.8;

        this.parent.addChild(this._motionSprite);
      }
      this.startMotion(this._character.motionType());
      this._character.clearMotion();
    }
  };

  Sprite_CharacterABS.prototype.startMotion = function (motionType) {
    var newMotion = Sprite_CharacterABS.MOTIONS[motionType];
    if (newMotion.index == 0) {
      this._motion = null;
      this._motionSprite.visible = false;
      this._character.setTransparent(false);
      return;
    }

    if (this._motion !== newMotion) {
      this._motion = newMotion;
      this._motionCount = 0;
      this._pattern = 0;
      this._motionSprite.x = this.x;
      this._motionSprite.y = this.y;
      this._character.setTransparent(true);
      this._motionSprite.visible = true;
    }
  };

  Sprite_CharacterABS.prototype._updateMotion = function () {
    if (this._motion) {
      var bitmap = this._motionSprite.bitmap;
      var motionIndex = this._motion ? this._motion.index : 0;
      var pattern = this._pattern < 3 ? this._pattern : 1;
      var cw = bitmap.width / 9;
      var ch = bitmap.height / 6;
      var cx = Math.floor(motionIndex / 6) * 3 + pattern;
      var cy = motionIndex % 6;
      this._motionSprite.setFrame(cx * cw, cy * ch, cw, ch);
      this._motionSprite.x = this._character.screenX();
      this._motionSprite.y = this._character.screenY();
    }
  };


  Sprite_CharacterABS.prototype._setupPopUpExp = function () {
    if (!this._absParams.popUpMachineExp) {
      this._absParams.popUpMachineExp = new ABS.ABSObject_PopUpMachine(0, 0, this.patternWidth(), 4, this.parent);
      this._absParams.popUpMachineExp.setUpMode();
    }

    this._absParams.popUpMachineExp.update();

    if (this._character.isExpPopupRequested()) {
      var t = this._character.getExpPopup();
      this._absParams.popUpMachineExp.push(ABS.PopInfoManagerABS.EXP(t));
      var point = this._getCornerPoint();
      this._absParams.popUpMachineExp.move(point.x, point.y - 32);
      this._character.clearExpPopup();
    }
  };

  Sprite_CharacterABS.prototype._setupPopUp = function () {
    var items = this._character.battler().getInfoPops();
    if (items.length != 0) {
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        this._pushPopOnUI(item);
      }
    }
    this._character.battler().clearInfoPops();
  };

  Sprite_CharacterABS.prototype._pushPopOnUI = function (item) {
    if (this.isPlayer()) {
      AlphaABS.BattleUI.addPopUpForPlayer(item);
    } else {
      AlphaABS.BattleUI.addPopUpForTarget(this.character(), item);
    }
  };

  Sprite_CharacterABS.prototype._setupAnimationABS = function () {
    if (this._character.ABSParams().animationABS > 0) {
      var anim = $dataAnimations[this._character.ABSParams().animationABS];
      this._character.ABSParams().animationABS = 0;
      this._startAnimationABS(anim, false, 0);
    }
  };

  Sprite_CharacterABS.prototype._setupAnimationCastABS = function () {
    if (this._character.isCasting()) {
      if (!this._animationCast) {
        this._createAnimataionCast();
      } else {
        if (!this._animationCast.isPlaying()) {
          this._animationCast.remove();
          this._createAnimataionCast();
        }
      }

    } else {
      if (this._animationCast) {
        this._animationCast.remove();
        this._animationCast = null;
        if (this._animationCastAudio) {
          this._animationCastAudio.stop();
          this._animationCastAudio = null;
        }
      }
    }
  };

  Sprite_CharacterABS.prototype._createAnimataionCast = function () {
    this._animationCast = new Sprite_Animation();

    var anim = null;
    var own = false;

    if (this._character.ABSParams().currentAction.castAnim > 0) {
      anim = $dataAnimations[this._character.ABSParams().currentAction.castAnim];
      own = true;
    } else {
      anim = AlphaABS.Parameters.get_CastAnimation();
    }

    this._animationCast.setup(this._effectTarget, anim, false, 0);
    this._animationCast.setABSMode();
    this.parent.addChild(this._animationCast);
    if (!this._animationCastAudio) {
      var se = AlphaABS.Parameters.get_CastAnimationSE();
      if (se != null && own == false) {
        var point = this._character.toPoint();
        if (BattleManagerABS.isABSAudio())
          this._animationCastAudio = AudioManager.playSeLoopAt(se, point.mapPointOnScreen());
        else
          this._animationCastAudio = AudioManager.playSeLoop(se);
      }
    }
  };

  Sprite_CharacterABS.prototype._setupDamagePopup = function () {
    var t = this._character.battler();
    if (t && t.isDamagePopupRequested()) {
      var sprite = new Sprite_Damage();
      sprite.x = this.x;
      sprite.y = this.y - this.patternHeight() - 10;
      sprite.setup(t);
      sprite.scale.x = 0.6;
      sprite.scale.y = 0.6;
      this._absParams.damages.push(sprite);
      this.parent.addChild(sprite);
      t.clearDamagePopup();
      t.clearResult();
    }
  };

  Sprite_CharacterABS.prototype._setupWeaponAnimation = function () {
    if (!this._absParams.spriteWeapon) {
      this._absParams.spriteWeapon = new Sprite_Weapon();
      this.addChild(this._absParams.spriteWeapon);
    }

    var t = this.character().battler();
    if (t && t.isWeaponAnimationRequested()) {
      this._absParams.spriteWeapon.setup(t.weaponImageId());
      this._absParams.spriteWeapon.setDirectionABS(AlphaABS.UTILS.getDirKey(this.character()));
      t.clearWeaponAnimation();
    }
  };

  Sprite_CharacterABS.prototype._startAnimationABS = function (animation, mirror, delay) {
    var sprite = new Sprite_Animation();
    sprite.setup(this._effectTarget, animation, mirror, delay);
    sprite.setABSMode();
    this.parent.addChild(sprite);
    this._animationSprites.push(sprite);
  };

  Sprite_CharacterABS.prototype._getCornerPoint = function () { //Левый верхний угол спрайта
    var p1 = this.x - (this.patternWidth() / 2);
    var p2 = this.y - this.patternHeight();
    return new PointX(p1, p2);
  };

  Sprite_CharacterABS.prototype._getRectangle = function () { //Прямоугольник, содержащий спрайт
    var p = this._getCornerPoint();
    return new Rectangle(p.x, p.y, this.patternWidth(), this.patternHeight());
  };

  Sprite_CharacterABS.prototype._getCenterPoint = function () { //Центральная точка
    return new PointX(this.x, this.y - this.patternHeight() / 2);
  };

  //?[NEW]
  Sprite_CharacterABS.prototype.getStartPointToVector = function () {
      return this._getCenterPoint().convertToMap();
  };

  //END Sprite_CharacterABS
  //------------------------------------------------------------------------------

  AlphaABS.register(Sprite_CharacterABS);

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Damage.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //@[ALIAS]
    var _alias_Sprite_Damage_setup = Sprite_Damage.prototype.setup;
    Sprite_Damage.prototype.setup = function (target) {
        this._absDigitsSprites = [];
        _alias_Sprite_Damage_setup.call(this, target);
        if (target && target.isPlayer()) {
            var result = target.result();
            if (result.hpAffected) {
                if (this._absDigitsSprites) {
                    this._applyABSColor();
                }
            }
        }
    };

    //?[NEW]
    Sprite_Damage.prototype._applyABSColor = function () {
        var color = KDCore.Color.BLACK.ARR;
        if (AlphaABS.Parameters.isLoaded()) {
            color = AlphaABS.Parameters.get_UI_PlayerDamageColor();
        }

        this._absDigitsSprites.forEach(function (sprite) {
            sprite.setColorTone(color);
        });
    };

    //@[ALIAS]
    var _alias_Sprite_Damage_createChildSprite = Sprite_Damage.prototype.createChildSprite;
    Sprite_Damage.prototype.createChildSprite = function () {
        var sprite = _alias_Sprite_Damage_createChildSprite.call(this);
        this._absDigitsSprites.push(sprite);
        return sprite;
    };
})();
// ■ END Sprite_Damage.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {

  class Sprite_EnemyStatusBar extends Sprite {
    constructor(width, height) {
      super(new Bitmap(width, height));
      this._createSprites();
      this.setTarget(null);
      this._limit = 0;
      this._iconSize = 20;

      this._thread = setInterval(function () {
        this._updateABS();
      }.bind(this), 200);
    }

    refresh() {
      this.bitmap.clear();
      this._drawItems();
    }

    terminate() {
      clearInterval(this._thread);
    }

    setLimit(limit) {
      this._limit = limit;
    }

    setTarget(target) {
      this.target = target;
      if (target) {
        this.refresh();
      } else {
        this.visible = false;
      }
    }

    //PRIVATE
    _createSprites() {}

    _drawItems() {
      try {
        var icons = this.target.battler().allIcons();
        if (icons.length == 0) {
          this.visible = false;
          return;
        } else {
          this.visible = true;
        }

        var size = (this._limit == 0) ? icons.length : this._limit;
        size = this._limit > icons.length ? icons.length : this._limit;
        for (var i = 0; i < size; i++) {
          this.bitmap.drawIcon(this._xVal(i), 0, icons[i], this._iconSize);
        }
      } catch (e) {
        console.error(e);
      }
    }

    _xVal(index) {
      return index * (this._iconSize + 2);
    }

    _updateABS() {
      if (this.target) {
        this.refresh();
      }
    }
  }

  AlphaABS.register(Sprite_EnemyStatusBar);

})();
(function () {
  class Sprite_EnemyUI extends Sprite {
    constructor() {
      super(new Bitmap(180, 70));
      this._loadParameters();
      this._createSprites();
      this.setTarget(null);

      this._thread = setInterval(function () {
        this._updateABS();
      }.bind(this), 20);
    }

    _loadParameters() {
      this.pluginParameters = null;
      if (AlphaABS.Parameters.isLoaded()) {
        this.pluginParameters = AlphaABS.Parameters.get_UIE_PlayerTarget();
      }
    }

    infoWidth() {
      return 120;
    }

    refresh() {
      if (this.target) {
        this.hpGauge.setBattler(this.target.battler());
      }

      this.spriteInfo.bitmap.clear();
      this.spriteInfo.bitmap.fontSize = 18;
      this.spriteInfo.bitmap.drawText(this.target.battler().name(), 0, 0, this.spriteInfo.bitmap.width, 20, 'left');
    }

    terminate() {
      this.castBar.terminate();
      clearInterval(this._thread);
    }


    setTarget(target) {
      this.target = target;
      if (target) {
        this.spriteMask.stopMask();
        this.refresh();
        if (this.pluginParameters)
          this.visible = this.pluginParameters.Visible;
        else
          this.visible = true;
      } else {
        this.spriteMask.stopMask();
        this.castBar.cancel();
        this.castBar.visible = false;
        this.visible = false;
      }
    }

    //PRIVATE
    _createSprites() {
      this.spriteBackground = new Sprite(new Bitmap(this.bitmap.width, this.bitmap.height));
      var backgroundColor = Color.BLACK.CSS;
      if (this.pluginParameters) {
        backgroundColor = this.pluginParameters.Back_color || backgroundColor;
      }
      this.spriteBackground.bitmap.fillRect(0, 0, this.infoWidth(), this.bitmap.height, backgroundColor);
      this.spriteBackground.opacity = 120;

      this.spriteInfo = new Sprite(new Bitmap(this.infoWidth() - 40, 22));
      this.spriteInfo.x = 10;
      this.spriteInfo.y = 5;
      if (this.pluginParameters) {
        if (this.pluginParameters['Font Name'])
          this.spriteInfo.bitmap.fontFace = this.pluginParameters['Font Name'];
        this.spriteInfo.visible = this.pluginParameters.Name;
      }

      this.spriteBarHp = new Sprite(new Bitmap(this.infoWidth() - 20, 18));
      this.spriteBarHp.x = 10;
      this.spriteBarHp.y = 28;

      this.hpGauge = this._createHpGauge();
      this.spriteBarHp.addChild(this.hpGauge);

      this.spriteInfo_Battle = new Sprite(AlphaABS.DATA.IMG.IconInBattle.bitmap);
      this.spriteInfo_Battle.anchor.y = 0.5;
      this.spriteInfo_Battle.x = this.infoWidth() - 24;
      this.spriteInfo_Battle.y = 12;
      this.spriteInfo_Battle.visible = false;

      this.castBar = new AlphaABS.LIBS.Sprite_CastProgress(this.infoWidth() - 20, 14);
      this.castBar.x = 10;
      this.castBar.y = 48;

      var maskBitmap = null;
      if (this.pluginParameters) {
        maskBitmap = this.pluginParameters.Mask;
      } else {
        maskBitmap = AlphaABS.DATA.IMG.TargetBattleMask.bitmap;
      }
      this.spriteMask = new AlphaABS.LIBS.Sprite_Mask(maskBitmap);
      this.spriteMask.x = -3;
      this.spriteMask.y = -3;
      this.spriteMask.setParams(220);

      this.addChild(this.spriteMask);
      this.addChild(this.spriteBackground);
      this.addChild(this.spriteInfo);
      this.addChild(this.spriteBarHp);
      this.addChild(this.spriteInfo_Battle);
      this.addChild(this.castBar);
    }

    _createHpGauge() {
      var hpGauge = new AlphaABS.LIBS.UI_GaugeABS_HPE(this.spriteBarHp.width, this.spriteBarHp.height);
      if (this.target)
        hpGauge.setBattler(this.target.battler());
      if (this.pluginParameters) {
        hpGauge.applyPluginParameters(this.pluginParameters['HP Bar']);
        hpGauge.setShowInPercent(this.pluginParameters.HP_text == '%');
      }
      return hpGauge;
    }

    _updateABS() {
      if (this.target) {
        this.spriteBarHp.update();
        this.castBar.update();
        this.spriteMask.update();

        if (this.target.inBattle()) {
          this.spriteMask.showMaskOne(20);
          this.spriteInfo_Battle.visible = true;
        } else {
          this.spriteInfo_Battle.visible = false;
        }

        if (this.target.ABSParams().casting) {
          if (!this.castBar._timer)
            this.castBar.visible = true;
          this.castBar.start(this.target.ABSParams().currentAction.timer);
        } else {
          this.castBar.cancel();
          this.castBar.visible = false;
        }
      }
    }
  }

  AlphaABS.register(Sprite_EnemyUI);

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Ext.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    var LOG = new PLATFORM.DevLog("Sprite_Ext");
    var ABSUtils = AlphaABS.UTILS;

    function Sprite_Ext() {
        this.initialize.apply(this, arguments);
    }

    Sprite_Ext.prototype = Object.create(Sprite_Base.prototype);
    Sprite_Ext.prototype.constructor = Sprite_Ext;

    Sprite_Ext.prototype.initialize = function () {
        Sprite_Base.prototype.initialize.call(this);
        this._free = false; //Can be moved

        this._lastMousePoint = null; //Prev Mouse x,y (PointX)
        this._newMousePoint = null; //New Mouse x,y (PointX)
        this._touched = false; //Mouse pressed on this Sprite
    };

    Sprite_Ext.prototype.update = function () {
        Sprite_Base.prototype.update.call(this);
        this._updateMove();
    };

    //NEW
    Sprite_Ext.prototype.free = function () {
        this._free = true;
        this.onFree();
    };

    Sprite_Ext.prototype.onFree = function () {

    };

    Sprite_Ext.prototype.onFreeze = function () {

    };

    Sprite_Ext.prototype.onStartMove = function () {

    };

    Sprite_Ext.prototype.onEndMove = function () {

    };

    Sprite_Ext.prototype.canMove = function () {
        return (this._free == true);
    };

    Sprite_Ext.prototype.freeze = function () {
        this._free = false;
        if (this._touched) {
            this._endMove();
        }
        this.onFreeze();
    };

    //PRIVATE
    Sprite_Ext.prototype._updateMove = function () {
        if (this.canMove()) {
            this._updateTouch();
            if (this._touched) {
                this._updateMovePlace();
            } else
                this._newMousePoint = null;
        }
    };

    Sprite_Ext.prototype._updateTouch = function () {
        if (TouchInput.isTriggered()) {
            if (this._touched) {
                this._endMove();
            } else {
                LOG.p("Mouse at " + new ABSUtils.PointX(TouchInput.x, TouchInput.y));
                if (ABSUtils.SMath.inRect(new ABSUtils.PointX(TouchInput.x, TouchInput.y), this._myRectangle())) {
                    this._startMove();
                }
            }
        }
    };

    Sprite_Ext.prototype._updateMovePlace = function () {
        this._lastMousePoint = this._newMousePoint;

        LOG.p("Update placement");
        var mp = ABSUtils.SMouse.getMousePosition();
        var mx = mp.x;
        var my = mp.y;

        if (mx == 0 && my == 0) {
            mx = TouchInput.x;
            my = TouchInput.y;
        }

        this._newMousePoint = new ABSUtils.PointX(mx, my);

        if (this._lastMousePoint != null) {
            var dx = mx - this._lastMousePoint.x;
            var dy = my - this._lastMousePoint.y;
            this.move(this.x + dx, this.y + dy);
        }
    };

    Sprite_Ext.prototype._myRectangle = function () {
        var x = ABSUtils.toGlobalCoord(this, 'x');
        var y = ABSUtils.toGlobalCoord(this, 'y');
        return new Rectangle(x, y, this.width, this.height);
    };

    Sprite_Ext.prototype._startMove = function () {
        LOG.p("Start moving");
        this._touched = true;
        this.onStartMove();
        if (!ABSUtils.SMouse.isTracked())
            ABSUtils.SMouse.setTrack(true);
    };

    Sprite_Ext.prototype._endMove = function () {
        LOG.p("End moving");
        this._touched = false;
        this.onEndMove();
    };

    AlphaABS.register(Sprite_Ext);
})();

// ■ END Sprite_Ext.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function () {
    var ABSUtils = AlphaABS.UTILS;
    //Sprite_Ext2
    //------------------------------------------------------------------------------
    function Sprite_Ext2() {
        this.initialize.apply(this, arguments);
    }

    Sprite_Ext2.prototype = Object.create(AlphaABS.LIBS.Sprite_Ext.prototype);
    Sprite_Ext2.prototype.constructor = Sprite_Ext2;

    Sprite_Ext2.prototype.initialize = function (frames) {
        AlphaABS.LIBS.Sprite_Ext.prototype.initialize.call(this);

        this._mouseIn = false;
        this._ready = false;
        this._readyHandler = null;
        this._outHandler = null;
        this._readyCalled = false;
        this._frames = frames;
        this.timerA = new Game_TimerABS();
        this.thread = setInterval(function () {
            this._checkMouseIn();
        }.bind(this), (16.666));
    };

    Sprite_Ext2.prototype.setReadyHandler = function (func) {
        this._readyHandler = func;
    };

    Sprite_Ext2.prototype.setOutHandler = function (func) {
        this._outHandler = func;
    };

    Sprite_Ext2.prototype.update = function () {
        AlphaABS.LIBS.Sprite_Ext.prototype.update.call(this);
        if (this._mouseIn) {
            this.timerA.update();
            if (this.timerA.isReady()) {
                this._ready = true;
                this._onReady();
            }
        }
    };

    Sprite_Ext2.prototype.isReady = function () {
        return (this._ready == true);
    };

    Sprite_Ext2.prototype.terminate = function () {
        clearInterval(this.thread);
    };


    //PRIVATE
    Sprite_Ext2.prototype._checkMouseIn = function () {
        var mp = ABSUtils.SMouse.getMousePosition();
        if (ABSUtils.SMath.inRect(mp, this._myRectangle())) {
            this._mouseInF();
        } else {
            this._mouseOutF();
        }
    };

    Sprite_Ext2.prototype._mouseOutF = function () {
        if (this._mouseIn == true) {
            //LOG.p("Mouse OUT");
            this._mouseIn = false;
            this.timerA.reset();
            if (this.isReady()) {
                this._onOut();
            }
        }
    };

    Sprite_Ext2.prototype._mouseInF = function () {
        if (this._mouseIn == false) {
            //LOG.p("Mouse IN");
            this._mouseIn = true;
            this.timerA.start(this._frames);
        }
    };

    Sprite_Ext2.prototype._onOut = function () {
        //LOG.p("on OUT");
        this.ready = false;
        if (this._outHandler) {
            this._outHandler.call();
        }
        this._readyCalled = false;
    };

    Sprite_Ext2.prototype._onReady = function () {
        if (this._readyCalled == true) return;
        if (this._readyHandler) {
            this._readyHandler.call();
        }
        this._readyCalled = true;
    };

    AlphaABS.register(Sprite_Ext2);
    //END Sprite_Ext2
    //------------------------------------------------------------------------------

})();
(function () {
  //Sprite_Hover
  //------------------------------------------------------------------------------
  function Sprite_Hover() {
    this.initialize.apply(this, arguments);
  }

  Sprite_Hover.prototype = Object.create(Sprite_Button.prototype);
  Sprite_Hover.prototype.constructor = Sprite_Hover;

  Sprite_Hover.CWHITE = Color.WHITE.reAlpha(220);
  Sprite_Hover.CWHITE2 = Color.WHITE.reAlpha(60);


  Sprite_Hover.prototype.initialize = function (w, h) {
    Sprite_Button.prototype.initialize.call(this);
    this._step = 0;
    this._free = true;
    this._createHover(w, h);
  };

  Sprite_Hover.prototype.isFree = function () {
    return (this._free == true);
  };

  Sprite_Hover.prototype.update = function () {
    Sprite_Button.prototype.update.call(this);
    if (this._free) {
      if (this.isHoverByMouse()) {
        this._step++;
        this._onHover();
      } else {
        this._reset();
      }
    }
  };

  Sprite_Hover.prototype.freeze = function () {
    this._free = false;
    this.alpha = 1;
  };

  Sprite_Hover.prototype.free = function () {
    this._free = true;
    this._reset();
  };

  Sprite_Hover.prototype.standardFrameWidth = function () {
    return 2;
  };

  Sprite_Hover.prototype._createHover = function (w, h) {
    this.bitmap = new Bitmap(w, h);
    var color1 = Sprite_Hover.CWHITE.CSS;
    var color2 = Sprite_Hover.CWHITE2.CSS;
    this._drawFrame(color1, color2, this.standardFrameWidth());
    this.alpha = 0;
  };

  Sprite_Hover.prototype._reset = function () {
    this._step = 0;
    this.alpha = 0;
  };

  Sprite_Hover.prototype._drawFrame = function (color1, color2, w) {
    this.bitmap.clear();
    this.bitmap.gradientFillRect(0, 0, w, this.height, color1, color2);
    this.bitmap.gradientFillRect(this.width - w, 0, w, this.height, color2, color1);
    this.bitmap.gradientFillRect(0, 0, this.width, w, color1, color2, true);
    this.bitmap.gradientFillRect(0, this.height - w, this.width, w, color2, color1, true);
  };

  Sprite_Hover.prototype._onHover = function () {
    this.alpha = 0.6 - Math.abs((this._step * 0.01) % 0.5);
  };

  AlphaABS.register(Sprite_Hover);
  //END Sprite_Hover
  //------------------------------------------------------------------------------

})();
(function(){
  //Sprite_HoverIcon
  //------------------------------------------------------------------------------
      function Sprite_HoverIcon() {
          this.initialize.apply(this, arguments);
      }

      Sprite_HoverIcon.prototype = Object.create(AlphaABS.LIBS.Sprite_Hover.prototype);
      Sprite_HoverIcon.prototype.constructor = Sprite_HoverIcon;

      Sprite_HoverIcon.prototype.initialize = function(w,h,fw) {
          this._fwidth = fw || 2;
          AlphaABS.LIBS.Sprite_Hover.prototype.initialize.call(this, w, h);
      };

      Sprite_HoverIcon.prototype.standardFrameWidth = function() {
          return this._fwidth;
      };
      //END Sprite_HoverIcon
  //------------------------------------------------------------------------------

  AlphaABS.register(Sprite_HoverIcon);

})();

(function () {
    //------------------------------------------------------------------------------
    //ItemLineSprite
    class ItemLineSprite extends Sprite {
        constructor(text, iconSymbol, textColor) {
            super();
            this._text = text || '';
            this._textColor = textColor || Color.WHITE;
            this._iconSymbol = iconSymbol || null;
            this._create();
            this._draw();
        }

        width() {
            return 120;
        }

        height() {
            return 24;
        }

        static Item(name, iconIndex) {
            return new ItemLineSprite(name, iconIndex);
        }

        static Gold(count) {
            return new ItemLineSprite(count, AlphaABS.Parameters.get_GoldIconIndex(), ItemLineSprite.COLOR_GOLD);
        }

        static Exp(count) {
            return new ItemLineSprite(TextManager.exp + ' ' + count, null, ItemLineSprite.COLOR_EXP);
        }

        //PRIVATE

        _create() {
            var w = this.width();
            var h = this.height();
            this._backSurface = new Sprite();
            this._backSurface.bitmap = new Bitmap(w, h);
            var color1 = Color.BLACK.CSS;
            var color2 = Color.BLACK.getLightestColor(128).CSS;
            this._backSurface.bitmap.gradientFillRect(0, 0, w, h, color1, color2, false);
            this._backSurface.opacity = 180;
            this.addChild(this._backSurface);
        }

        _draw() {
            this._drawSurface = new Sprite();
            this._drawSurface.bitmap = new Bitmap(this.width(), this.height());
            this.addChild(this._drawSurface);
            if (this._iconSymbol != null)
                this._drawIcon();
            if (this._text != '')
                this._drawText();
        }

        _drawText() {
            var startX = this._iconSymbol != null ? 26 : 0;
            this._drawSurface.bitmap.textColor = this._textColor.CSS;
            this._drawSurface.bitmap.fontSize = 18;
            this._drawSurface.bitmap.outlineWidth = 2;
            this._drawSurface.bitmap.drawText(this._text, startX + 2, this.height() / 2, this.width() - startX, 1, 'left');
        }

        _drawIcon() {
            this._drawSurface.bitmap.drawIcon(0, 0, this._iconSymbol, 24);
        }

    }

    ItemLineSprite.COLOR_GOLD = Color.YELLOW;
    ItemLineSprite.COLOR_EXP = Color.MAGENTA.getLightestColor(128);

    AlphaABS.register(ItemLineSprite);
    //END ItemLineSprite
    //------------------------------------------------------------------------------

})();
(function(){
  class Sprite_Mask extends Sprite {
    constructor(args) {
      super(args);
      this._maxOpacity = 255;
      this._reset();
    }

    setParams(opacity, color) {
      if(color)
        this.setBlendColor(color.ARR);
      this._maxOpacity = opacity;
      this.opacity = opacity;
    }

    showMask(time) {
      this.visible = true;
      this._show = true;
      this._time = 60 / time;
    }

    isReady() {
      return (this._show == false);
    }

    showMaskOne(time) {
      if(!this._show) {
        this.showMask(time);
        this._oneTime = true;
      }
    }

    stopMask() {
      this._reset();
    }

    update() {
      //super();
      if(this._show) {
        if(!this._toD) {
          this.opacity += this._time;
          if(this.opacity >= (this._maxOpacity - this._time)) {
            this.opacity = this._maxOpacity;
            this._toD = true;
          }
        } else {
          this.opacity -= this._time;
          if(this.opacity <= this._time) {
            this.opacity = 0;
            this._toD = false;
            if(this._oneTime) {
              this._reset();
            }
          }
        }

      }
    }

    //PRIVATE
    _reset() {
      this._show = false;
      this.visible = false;
      this.opacity = 0;
      this._time = 0;
      this._toD = false;
      this._oneTime = false;
    }
  }

  AlphaABS.register(Sprite_Mask);

})();

(function(){
  class Sprite_ObjectWithMask extends Sprite {
    constructor(image, maskImage) {
      super(image);
      this._spriteMask = new AlphaABS.LIBS.Sprite_Mask(maskImage);
      this.addChild(this._spriteMask);
    }

    setParams(opacity, color) {
      this._spriteMask.setParams(opacity, color);
    }

    isReady() {
      return this._spriteMask.isReady();
    }

    pulse(time) {
      this._spriteMask.showMaskOne(time);
    }

    update() {
      //super();
      this._spriteMask.update();
    }
  }

  AlphaABS.register(Sprite_ObjectWithMask);

})();

(function(){
  class Sprite_SkillPanelABS extends Sprite
  {
    constructor() {
      super();

      this._isVisible = true;
      if(AlphaABS.Parameters.isLoaded()) {
        var parameters = AlphaABS.Parameters.get_UIE_PlayerSpellsPanel();
        this.bitmap = parameters.Image;
        this._isVisible = parameters.Visible;
      } else {
        this.bitmap = AlphaABS.DATA.IMG.SkillPanel.bitmap;
      }
      this._initSkills();
    }

    showPanel() {
      this.visible = this._isVisible;
    }

    hidePanel() {
      this.visible = false;
    }

    refresh() {
      this.items.forEach(function(item){
        if(item)
          item._createHelp();
      });
    }

    checkTouch() {
      for(var i = 0; i<this.items.count(); i++) {
        if(this.items[i].isTouched()) {
          return i + 1;
        }
      }
      return null;
    }

    setEditMode() {
      this.items.forEach(function(item) {
        item.setEditMode();
      });
    }

    terminate() {
      this.items.forEach(function(item) {
        item.terminate();
      });
    }

    touchSkillAt(index) {
      if(index != null)
        this.items[index - 1].pulse();
    }

    //PRIVATE
    _initSkills() {
      this.items = [];

      for(var i = 1; i<9; i++) { //ALL
        var item = new AlphaABS.LIBS.UIObject_SkillPanelItem(i - 1);
        item.x = ((i - 1) * 42);
        item.y = 0;
        this.items.push(item);
        this.addChild(item);
      }
    }
  }

  AlphaABS.register(Sprite_SkillPanelABS);
})();

(function(){
  class Sprite_SkillPanelABS_L extends AlphaABS.LIBS.Sprite_SkillPanelABS {
    constructor() {
      super();
    }

    refresh(actor) {
      this.terminate();
      this.actor = actor;
      this._initSkills2();
    }

    _initSkills() {
      this.items = [];
    }

    _initSkills2() {
      this.items = [];
      for(var i = 1; i<9; i++) { //ALL
        var item = new AlphaABS.LIBS.UIObject_SkillPanelItem_L(i - 1, this.actor);
        item.x = ((i - 1) * 42);
        item.y = 0;
        this.items.push(item);
        this.addChild(item);
      }
    }

  }

  AlphaABS.register(Sprite_SkillPanelABS_L);

})();

(function(){

  //Sprite_StateIcon
  //------------------------------------------------------------------------------
    //NEW
    Sprite_StateIcon.prototype.setPriority = function(value) {
      this._priority = value;
    };

    //OVER
    Sprite_StateIcon.prototype.updateIcon = function() {
        var icons = [];
        if (this._battler && this._battler.isAlive()) {
          if(!this._priority)
              icons = this._battler.allIcons();
            else {
              icons = this._battler.allIconsWithPriority(this._priority);
            }
        }
        if (icons.length > 0) {
            this._animationIndex++;
            if (this._animationIndex >= icons.length) {
                this._animationIndex = 0;
            }
            this._iconIndex = icons[this._animationIndex];
        } else {
            this._animationIndex = 0;
            this._iconIndex = 0;
        }
    };

    //END Sprite_Sprite_StateIcon
  //------------------------------------------------------------------------------

})();

(function(){
  class Sprite_UserStatusIcon extends Sprite {
    constructor() {
      super(new Bitmap(32, 54));
      this._spriteTime = new Sprite(new Bitmap(32, 20));
      this._spriteTime.y = 36;
      this._spriteTime.bitmap.textColor = Sprite_UserStatusIcon.TIMECOLOR.CSS;
      this._spriteTime.bitmap.fontSize = 18;

      this._index = null;
      this.addChild(this._spriteTime);

      this._thread = setInterval(function() { this._updateABS(); }.bind(this), 100);
    }

    setIndex(index) {
      this._index = index;
      this._drawItem();
      this.refresh();
    }

    refresh() {
      this._spriteTime.bitmap.clear();
      if(this._index != null) {
        var items = $gamePlayer.battler().states();
        if(this._index >= items.length) {
          var index2 = this._index - items.length;
          items = $gamePlayer.battler()._buffTurns;
          if(items[index2] == 0) {
            this._index = null;
            this.bitmap.clear();
            return;
          } else
            this._drawBuffTime(index2, items);
        } else {
          this._drawStateTime(this._index, items);
        }
      }
    }

    terminate() {
      clearInterval(this._thread);
      this.visible = false;
      this.bitmap.clear();
      this._spriteTime.bitmap.clear();
      if(this.parent)
        this.parent.removeChild(this);
    }

    //PRIVATE

    _drawItem() {
      this.bitmap.clear();
      if(this._index != null) {
        var icon = $gamePlayer.battler().allIcons()[this._index];
        this.bitmap.drawIcon(0, 0, icon, 32);
      }
    }

    _updateABS() {
      if(this._index != null)
        this.refresh();
    }

    _drawStateTime(index, items) {
      var stateTimes = $gamePlayer.battler()._stateTurns;
      var state = items[index];
      var time = stateTimes[state.id];
      var stringToDraw = '';
      if(state.autoRemovalTiming == 1) {
        stringToDraw = 'A';
      } else {
        if(state.autoRemovalTiming == 0) {
          stringToDraw = '';
        } else
          stringToDraw = AlphaABS.UTILS.framesToTimeA(time);
      }
      //this._spriteTime.textColor = Sprite_UserStatusIcon.TIMECOLOR.CSS;
      this._spriteTime.bitmap.drawText(stringToDraw, 0, 0, this._spriteTime.bitmap.width, this._spriteTime.bitmap.height, 'center');
    }

    _drawBuffTime(index, items) {
      var time = items[index];
      if(time) {
        var stringToDraw = AlphaABS.UTILS.framesToTimeA(time);
        this._spriteTime.bitmap.drawText(stringToDraw, 0, 0, this._spriteTime.bitmap.width, this._spriteTime.bitmap.height, 'center');
      }
    }
  }

  Sprite_UserStatusIcon.TIMECOLOR = Color.FromHex('#CECE00');

  AlphaABS.register(Sprite_UserStatusIcon);

})();

(function () {
  class Sprite_UserUI extends Sprite {
    constructor(backgroundImage) {
      super(backgroundImage || AlphaABS.DATA.IMG.UserFaceBack.bitmap);

      this.faceSize = 86;
      this.faceX = 2;
      this.faceY = 2;
      this._oldLevel = 1;

      this._loadParameters();
      this._init();
      this._updateABS();

      this._thread = setInterval(function () {
        this._updateABS();
      }.bind(this), 10);
    }

    _loadParameters() {
      if (AlphaABS.Parameters.isLoaded()) {
        var parameters = AlphaABS.Parameters.get_UIE_PlayerStatus();
        this.visible = parameters.Visible;
        this._isShowLevel = parameters.Level;
        //this._isShowFace = parameters.Portrait; //TODO: Игра зависает! Если false
        this._isShowFace = true;
        this._inBattleBitmap = parameters['In battle Icon'];
        this._maskBitmap = parameters.Mask;
      } else {
        this._isShowLevel = true;
        this._isShowFace = true;
        this._inBattleBitmap = AlphaABS.DATA.IMG.IconInBattle.bitmap;
        this._maskBitmap = AlphaABS.DATA.IMG.InBattleMask.bitmap;
      }
      this.faceSize = 86; //this._isShowFace ? 86 : 4;
    }

    refresh() { //Этот метод вызывается вручную
      this._drawPlayerFace();
    }


    terminate() {
      clearInterval(this._thread);
    }

    //PRIVATE
    _init() {
      this._createPlayerFace();
      this._createInBattleInfo();
      this._createPlayerInfo();
      this._createPlayerGauges();
    }

    _createPlayerGauges() {
      var gaugesSprite = new Sprite();
      gaugesSprite.setFrame(0, 0, 160, 90);
      gaugesSprite.x = this.x + this.faceSize;
      gaugesSprite.y = this.y;
      gaugesSprite.opacity = 200;

      try {
        var hpGauge = this._createGaugeHP(4, 8, 120, 24);
        gaugesSprite.addChild(hpGauge);

        var mpGauge = this._createGaugeMP(4, 34, 120, 22);
        gaugesSprite.addChild(mpGauge);

        if ($dataSystem.optDisplayTp) {
          var tpGauge = this._createGaugeTP(4, 58, 120, 22);
          gaugesSprite.addChild(tpGauge);
        }
      } catch (e) {
        console.error(e);
      }

      this.gaugesSprite = gaugesSprite;
      this.addChild(this.gaugesSprite);
    }

    _createGaugeHP(x, y, w, h) {
      var gauge = new AlphaABS.LIBS.UI_GaugeABS_HP(w, h);
      gauge.setBattler($gamePlayer.battler());
      gauge.move(x, y);
      gauge = this._applyParametersToGauge(gauge, 'HP');
      return gauge;
    }

    _applyParametersToGauge(gauge, symbol) {
      if (AlphaABS.Parameters.isLoaded()) {
        var params = AlphaABS.Parameters.get_UIE_PlayerGauge(symbol);
        gauge.applyPluginParameters(params);
      }
      return gauge;
    }

    _createGaugeMP(x, y, w, h) {
      var gauge = new AlphaABS.LIBS.UI_GaugeABS_MP(w, h);
      gauge.setBattler($gamePlayer.battler());
      gauge.move(x, y);
      gauge = this._applyParametersToGauge(gauge, 'MP');
      return gauge;
    }

    _createGaugeTP(x, y, w, h) {
      var gauge = new AlphaABS.LIBS.UI_GaugeABS_TP(w, h);
      gauge.setBattler($gamePlayer.battler());
      gauge.move(x, y);
      gauge = this._applyParametersToGauge(gauge, 'TP');
      return gauge;
    }

    _updateABS() {
      try {
        if (this.visible == false)
          return;

        if ($gamePlayer.inBattle()) {
          if (this.spriteBattleMask)
            this.spriteBattleMask.showMaskOne(30);

          if (this.spriteInfo_Battle)
            this.spriteInfo_Battle.visible = true;

          if (this.spriteInfo_LevelText)
            this.spriteInfo_LevelText.visible = false;

        } else {

          if (this.spriteInfo_Battle)
            this.spriteInfo_Battle.visible = false;

          if (this.spriteInfo_LevelText)
            this.spriteInfo_LevelText.visible = true;

          if (this._oldLevel != $gamePlayer.battler().level) {
            this._drawPlayerLevel();
          }

        }

        if (this.spriteBattleMask)
          this.spriteBattleMask.update();

        this.gaugesSprite.update();
      } catch (e) {
        console.error(e);
      }
    }

    _createPlayerFace() {
      this.spriteFace = new Sprite(new Bitmap(this.faceSize, this.faceSize));
      this._drawPlayerFace();
      this.spriteFace.x = this.faceX + this.faceSize;
      this.spriteFace.scale.x *= -1;
      this.addChild(this.spriteFace);
    }

    _drawPlayerFace() {
      this.spriteFace.bitmap.clear();
      if(this._isShowFace == true) {
        var faceName = $gamePlayer.battler().faceName();
        var faceIndex = $gamePlayer.battler().faceIndex();
        var bitmap = ImageManager.loadFace(faceName);
        bitmap.addLoadListener(function () {
          var pw = Window_Base._faceWidth;
          var ph = Window_Base._faceHeight;
          var sx = faceIndex % 4 * pw;
          var sy = Math.floor(faceIndex / 4) * ph;
          this.spriteFace.bitmap.blt(bitmap, sx, sy, pw, ph, this.faceX, this.faceY, this.faceSize, this.faceSize);
        }.bind(this));
      } else {

      }
    }

    _drawPlayerLevel() {
      if (this._isShowLevel == false) return;
      this._oldLevel = $gamePlayer.battler().level;
      this.spriteInfo_LevelText.bitmap.clear();
      this.spriteInfo_LevelText.bitmap.drawText(this._oldLevel, 0, 0, 24, 24, 'center');
    }

    _createPlayerInfo() {
      this.spriteInfo = new Sprite(new Bitmap(45, 48));
      this.spriteInfo.anchor.y = 0.5;
      this.spriteInfo.x = 0;
      this.spriteInfo.y = this.faceSize;

      if (this._isShowLevel == true) {
        try {
          this.spriteInfo_LevelText = new Sprite(new Bitmap(24, 24));
          this.spriteInfo_LevelText.bitmap.fontSize = 18;
          this.spriteInfo_LevelText.anchor.y = 0.5;
          this._drawPlayerLevel();

          this.spriteInfo_Level = new Sprite(AlphaABS.DATA.IMG.LevelBar.bitmap);
          this.spriteInfo_Level.opacity = 200;
          this.spriteInfo_Level.anchor.y = 0.5;
          this.spriteInfo_Level.x = 1;
          this.spriteInfo_Level.y = -10;

          this.spriteInfo.addChild(this.spriteInfo_Level);
          this.spriteInfo_Level.addChild(this.spriteInfo_LevelText);
        } catch (e) {
          console.error(e);
        }
      }

      if (this._inBattleBitmap.url) {
        try {
          this.spriteInfo_Battle = new Sprite(this._inBattleBitmap);
          this.spriteInfo_Battle.anchor.y = 0.5;
          this.spriteInfo_Battle.x = 1;
          this.spriteInfo_Battle.y = -10;
          this.spriteInfo_Battle.visible = false;
          this.spriteInfo.addChild(this.spriteInfo_Battle);
        } catch (e) {
          console.error(e);
        }
      }


      this.addChild(this.spriteInfo);
    }

    _createInBattleInfo() {
      try {
        if (!this._maskBitmap.url) return;
        this.spriteBattleMask = new AlphaABS.LIBS.Sprite_Mask(this._maskBitmap);
        this.spriteBattleMask.x = -6;
        this.spriteBattleMask.y = -6;
        this.spriteBattleMask.setParams(255);
        this.addChild(this.spriteBattleMask);
      } catch (e) {
        console.error(e);
      }
    }
  }

  AlphaABS.register(Sprite_UserUI);

})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Vector.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
    function Sprite_Vector() {
        this.initialize.apply(this, arguments);
    }

    AlphaABS.register(Sprite_Vector);

    Sprite_Vector.prototype = Object.create(Sprite.prototype);
    Sprite_Vector.prototype.constructor = Sprite_Vector;

    Sprite_Vector.prototype.initialize = function (imageName) {
        Sprite.prototype.initialize.call(this);
        this.bitmap = ImageManager.loadPicture(imageName);
        this._frameCount = 1;
        this._animIndex = -1;
        this._wait = 0;
        this._parseAnimatedVectorName(imageName);
        if (this.isAnimated()) {
            this._maxWait = 6;
            this._animIndex = 0;
            this._calculateFrameSize();
            this.setIdleFrame(0);
            //TODO: Скорость анимации
        }
    };

    var _ = Sprite_Vector.prototype;

    _._parseAnimatedVectorName = function (name) {
        if(name.contains("_")){
            var last = name.split("_").last();
            var number = Number(last);
            if(!isNaN(number)) {
                this._frameCount = number;
                //"IS ANIMATED".p();
                return true;
            }
        }
        return false;
    };

    _.isAnimated = function () {
        return this._frameCount > 1;
    };

    _._calculateFrameSize = function () {
        this._frameW = Math.round(this.bitmap.width / this._frameCount);
        this._frameH = this.bitmap.height;
    };

    _.setIdleFrame = function (frameNumber) {
        var frame = this._createFrame(frameNumber, 0);
        this.setFrame(frame[0], frame[1], frame[2], frame[3]);
    };

    _._createFrame = function (i, j) {
        return [i * this._frameW, j * this._frameH, this._frameW, this._frameH];
    };

    _.update = function() {
        Sprite.prototype.update.call(this);
        this._updateFrame();
        this._updateWait();
    };

    _._updateFrame = function () {
        if (this._animIndex >= 0 && this._wait == 0) {
            this.setIdleFrame(this._animIndex);
            //console.log(this._animIndex);
            this._animIndex += 1;
            this._wait = 1;
        }
        if(this._animIndex == this._frameCount) {
            this._animIndex = 0;
        }
    };

    _._updateWait = function() {
        if (this._wait > 0) {
            this._wait++;
            if (this._wait > this._maxWait)
                this._wait = 0;
        }
    };
})();
// ■ END Sprite_Vector.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Weapon.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function () {
  //OVER
  Sprite_Weapon.prototype.animationWait = function () {
    return 6;
  };

  //NEW
  Sprite_Weapon.prototype.setDirectionABS = function (directionKey) {
    if (this._weaponImageId <= 0) return;

    this.scale.x = 0.7;
    this.scale.y = 0.7;
    this.y = 0;
    this.x = 0;
    this.opacity = 255;

    switch (directionKey) {
      case 'r':
        this.x = 8;
        this.scale.x *= -1;
        break;
      case 'l':
        this.x = -8;
        break;
      case 'u':
        this.opacity = 0;
        break;
      case 'd':
        this.y = 5;
        break;
    }
  };
})();
// ■ END Sprite_Weapon.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function(){
  var LOG = new PLATFORM.DevLog("Spriteset_InterfaceABS");

  var ABSObject_PopUpMachine = AlphaABS.LIBS.ABSObject_PopUpMachine;
  var UIObject_Container;
  var ItemLineSprite = AlphaABS.LIBS.ItemLineSprite;
  var PointX = AlphaABS.UTILS.PointX;

  //Spriteset_InterfaceABS
  //------------------------------------------------------------------------------
    class Spriteset_InterfaceABS extends Sprite {
      constructor() {
        super();
        UIObject_Container = AlphaABS.LIBS.UIObject_Container;
        this.setFrame(0, 0, Graphics.width, Graphics.height);
        this._moveElements = [];
        this._free = false; //Can be edited
        this._isABS = false;
        this._needFree = $gameVariables.getUIParam('free') || false;
        this._showUI = $gameVariables.getUIParam('show');
        if(this._showUI == null) this._showUI = true;
        this._showUI = AlphaABS.Parameters.isUIVisible();
        this.z = 10;
        this._autoHideSkillPanel = true;
        this.update();
      }

      initABS() {
        LOG.p("Init ABS!");
        this._isABS = true;
        this._createElements();
        this._createUIContainers();
        this._refreshPlacement();
        if(!this._showUI) {
          this.hide();
        } else {
          if(this._needFree) {
            this.freeElements();
            this._needFree = false;
          } else
            this.show();
        }
      }

      setEditMode() {
        //Чтобы заблокировать некоторые способновсти элементов, например Hover когда мышь наведина
        if(!this._isABS) return;
        this.spriteSkillPanel.setEditMode();
        this.spriteControlPanel.setEditMode();
      }

      hide() {
        this.freezeElements();
        this._isABS = false;
        this.visible = false;
        this.hideControl();
      }

      show() {
        this._isABS = true;
        this.visible = true;
        this.showControl();
      }

      isVisible() {
        return (this._showUI == true);
      }

      isFree() {
        return (this._free == true);
      }

      needFree() {
        $gameVariables.setUIParam('free', true);
        this._needFree = true;
      }

      setShowUI(value) {
        $gameVariables.setUIParam('show', value);
        this._showUI = value;
      }

      freeElements() {
        if(this._free) return;
        if(this.visible == false)
          this.show();
        $gamePlayer.controlOff();
        this._moveElements.forEach(function(item) {
          item[1].free();
        });
        this._free = true;
      }

      freezeElements() {
        if(!this._free) return;
        $gameVariables.setUIParam('free', false);
        this._moveElements.forEach(function(item) {
          item[1].freeze();
          $gameVariables.setUIPosition(item[0],
            item[1].x,
            item[1].y,
            item[1].visibleMode(),
            item[1].specialMode());
        });
        this._free = false;
        $gamePlayer.controlOn();
      }

      hideControl() {
        this.hideSkillPanel();
        this.hideControlPanel();
      }

      showControl() {
        if($gamePlayer.battler().uiPanelObjectsCount() > 0)
          this.showSkillPanel();
        this.showControlPanel();
      }

      showTarget(target) {
        this.popUpMachineTarget.clear();
        this.spriteTarget.setTarget(target);
        this.spriteTargetStatuses.setTarget(target);
      }

      controlPanel() {
        return this.spriteControlPanel;
      }

      pushOnItemPanel(type, value) {
        switch(type) {
          case 'item':
            this.itemsBar.push(ItemLineSprite.Item(value.name, value.iconIndex));
          break;
          case 'exp':
            this.itemsBar.push(ItemLineSprite.Exp(value));
          break;
          case 'gold':
            this.itemsBar.push(ItemLineSprite.Gold(value));
          break;
          default:
            this.itemsBar.push(new ItemLineSprite(value));
          break;
        }
      }

      isTouched() {
        var y = TouchInput.y;
        if(this._checkLayerTouch(this._layerSkillPanel)) {
          //LOG.p("Mouse in interface");
          return ['skill', this.spriteSkillPanel.checkTouch()];
        }
        if(this._checkLayerTouch(this._layerControlPanel)) {
          return ['panel', this.spriteControlPanel.checkTouch()];
        }
        if (this.spriteFirearmBar && this.spriteFirearmBar.isTouched()) {
          return ['firearm', true];
        }
        return null;
      }

      addPopUp(popObject) {
        this.popUpMachine.push(popObject);
      }

      addPopUpUser(popObject) {
        if(popObject.hasIcon())
          this.popUpMachineUser2.push(popObject);
        else
          this.popUpMachineUser.push(popObject);
      }

      addPopUpTarget(target, popObject) {
        if(target == this.spriteTarget.target) {
          if(popObject.hasIcon())
            this.popUpMachineTarget2.push(popObject);
          else
            this.popUpMachineTarget.push(popObject);
        }
      }

      touchSkillAt(index) {
        this.spriteSkillPanel.touchSkillAt(index);
      }

      refreshSkillPanel() {
        if(this.spriteSkillPanel)
          this.spriteSkillPanel.refresh();
      }

      terminate() {
        this.freezeElements();
        this.spriteUserUI.terminate();
        this.spriteSkillPanel.terminate();
        this.spriteControlPanel.terminate();
        this.spriteTarget.terminate();
        this.spriteTargetStatuses.terminate();
        this.userStatusPanel.terminate();
        this.spriteCastBar.terminate();
        this.spriteAttackBar.terminate();
        this._moveElements = [];
        this._isABS = false;
        LOG.p("Terminate!");
      }

      update() {
        this._updatePosition();
        if(this._isABS) {
          this.popUpMachine.update();
          this.popUpMachineUser.update();
          this.popUpMachineUser2.update();
          this.popUpMachineTarget.update();
          this.popUpMachineTarget2.update();
          this.userStatusPanel.update();

          if(this._free) {
            this._moveElements.forEach(function(item) {
              item[1].update();
            });
          } else {
            this.itemsBar.update();
            if (this.spriteFirearmBar) {
              this.spriteFirearmBar.update();
            }

          }
          
          if(this._sCircle)
                    this._sCircle.update();
        }
      }

      refresh() {
        if($gamePlayer.battler() == null) return;
        this._refreshSkillPanelVisibility();
        this.refreshSkillPanel();
      }

      refreshFirearmPanel() {
        if (this.spriteFirearmBar && this.spriteFirearmBar.visible == true) {
          this.spriteFirearmBar.refresh();
        }
      }

      showFirearmPanel() {
        if (this.spriteFirearmBar) {
          this.spriteFirearmBar.show();
          this.spriteFirearmBar.refresh();
        }
      }

      _refreshSkillPanelVisibility() {
        if ($gamePlayer.battler().uiPanelObjectsCount() > 0)
          this.showSkillPanel();
        else {
          if (this._autoHideSkillPanel == true)
            this.hideSkillPanel();
          else
            this.showSkillPanel();
        }
      }

      refreshFace() {
        this.spriteUserUI.refresh();
      }

      showSkillPanel() {
        if(this.spriteSkillPanel)
          this.spriteSkillPanel.showPanel();
      }

      hideSkillPanel() {
        if(this.spriteSkillPanel)
          this.spriteSkillPanel.hidePanel();
      }

      showControlPanel() {
        this.spriteControlPanel.showPanel();
      }

      hideControlPanel() {
        this.spriteControlPanel.hidePanel();
      }

      saveUIPattern() {
        var _items = {};
        this._moveElements.forEach(function(item) {
          _items[item[0]] = [item[1].x, item[1].y, item[1].visibleMode(), item[1].specialMode()];
        });
      }

      weapCircle() {
        return this._sCircle;
      }

      weapCircleRefresh() {
        if(this.weapCircle())
                  this.weapCircle().refresh();

              if(this.controlPanel()) {
                  if($gamePlayer.battler().isFavWeapExists()) {
                      this.controlPanel().disableItemAt(4, false);
                  } else {
                      this.controlPanel().disableItemAt(4, true);
                  }
              }
      }

      //PRIVATE
      _refreshPlacement() {
        this._moveElements.forEach(function(item) {
          var p = $gameVariables.getUIPosition(item[0]);
          if(p) {
            item[1].move(p.x,p.y);

            if(p.vis !== null) {
              item[1].setElementVisibility(p.vis);
            }

            if(p.extra!= null) {
              item[1].setSpecialMode(p.extra);
            }

          }
        });
        this.itemsBar.refresh();
      }

      _createElements() {
        this._createSkillPanel();
        this._createUserUI();
        this._createTargetUI();
        this._createControlPanel();
        this._createUserStatusBar();
        this._createAlertBar();
        this._createItemsBar();
        this._createFavWeapCircle();
        this._createFirearmBar();
      }

      _createUIContainers() {
        var parameters;
        var skillCtn = new UIObject_Container(0,0,342,48);
        skillCtn.addUI(this.spriteSkillPanel);
        skillCtn.setText("Skill panel", true);
        skillCtn.x = SDK.toCX(skillCtn.width);
        skillCtn.y = Graphics.height - skillCtn.height - 10;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerSpellsPanel();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              skillCtn.x = posX;
            if(posY)
              skillCtn.y = posY;
          }
        }
        skillCtn.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerSpellsPanel();
          this._autoHideSkillPanel = parameters.AutoHide;
          this._refreshSkillPanelVisibility();
          if(parameters.Visible)
            this.addChild(skillCtn);
        } else
          this.addChild(skillCtn);
        this._moveElements.push(['skillPanel',skillCtn]);
        this._layerSkillPanel = skillCtn; //For touch

        var userCtn = new UIObject_Container(0,0,242,98);
        userCtn.addUI(this.spriteUserUI);
        userCtn.setText("Player", true);
        userCtn.x = 6;
        userCtn.y = 4;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerStatus();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              userCtn.x = posX;
            if(posY)
              userCtn.y = posY;
          }
        }
        userCtn.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerStatus();
          if(parameters.Visible)
            this.addChild(userCtn);
        } else
          this.addChild(userCtn);
        this._moveElements.push(['userPanel',userCtn]);

        var userCastBars = new UIObject_Container(0,0,150,80);
        userCastBars.addChild(this.spriteCastBar);
        userCastBars.addUI(this.spriteAttackBar);
        userCastBars.setText('Cast bar', false);
        userCastBars.x = userCtn.x + 10;
        userCastBars.y = userCtn.height + 24;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerCastBar();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              userCastBars.x = posX;
            if(posY)
              userCastBars.y = posY;
          }
        }
        userCastBars.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerCastBar();
          if(parameters.Visible)
            this.addChild(userCastBars);
        } else
          this.addChild(userCastBars);
        this._moveElements.push(['userCastBars',userCastBars]);

        var targetUI = new UIObject_Container(0,0,180,100);
        targetUI.addChild(this.spriteTarget );
        targetUI.addUI(this.spriteTargetStatuses);
        targetUI.setText('Target', false);
        targetUI.x = 250;
        targetUI.y = 50;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerTarget();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              targetUI.x = posX;
            if(posY)
              targetUI.y = posY;
          }
        }
        targetUI.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerTarget();
          if(parameters.Visible)
            this.addChild(targetUI);
        } else
          this.addChild(targetUI);
        this._moveElements.push(['targetUI',targetUI]);

        var controlPanel = new UIObject_Container(0,0,this.spriteControlPanel.width,this.spriteControlPanel.height);
        controlPanel.addUI(this.spriteControlPanel);
        controlPanel.setText('CP', false);
        controlPanel.x = 4;
        controlPanel.y = SDK.toCX(controlPanel.height, Graphics.height);

        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerHotBar();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              controlPanel.x = posX;
            if(posY)
              controlPanel.y = posY;
          }
        }

        controlPanel.addVisButtton();
        controlPanel.addSpecialButton({
              image: AlphaABS.DATA.IMG.IconTransfer.bitmap,
              func: (function () {
            this._uiElement.transfer();
            this.width = this._uiElement.width;
            this.height = this._uiElement.height;
            if(this.backSprite) {
              this.removeChild(this.backSprite);
              this.removeChild(this._hover);
              this.backSprite = null;
              this.onFree();
              this.update();
            }
            this._specMode = !this._specMode;
            this._updateButtonsPlacement();
          }.bind(controlPanel))});
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerHotBar();
          if(parameters.Visible)
            this.addChild(controlPanel);
        } else
          this.addChild(controlPanel);
        this._moveElements.push(['controlPanel',controlPanel]);
        this._layerControlPanel = controlPanel; //For touch

        var alertBar = new UIObject_Container(0,0,this.spriteAlertLayer.width,this.spriteAlertLayer.height);
        alertBar.addUI(this.spriteAlertLayer);
        alertBar.setText("System messages", true);
        alertBar.x = SDK.toCX(alertBar.width);
        alertBar.y = Graphics.height - alertBar.height - this._layerSkillPanel.height - 4;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerMessageBar();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              alertBar.x = posX;
            if(posY)
              alertBar.y = posY;
          }
          this.spriteAlertLayer.visible = parameters.Visible;
        }
        alertBar.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerMessageBar();
          if(parameters.Visible)
            this.addChild(alertBar);
        } else
          this.addChild(alertBar);
        this._moveElements.push(['alertBar',alertBar]);

        var statusBar = new UIObject_Container(0,0,180,100);
        statusBar.addUI(this.userStatusPanel);
        statusBar.setText("Player Statuses", true);
        statusBar.x = Graphics.width - statusBar.width - 4;
        statusBar.y = 4;
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerStates();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              statusBar.x = posX;
            if(posY)
              statusBar.y = posY;
          }
        }
        statusBar.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_PlayerStates();
          if(parameters.Visible)
            this.addChild(statusBar);
        } else
          this.addChild(statusBar);
        this._moveElements.push(['statusBar',statusBar]);

        var h = this.itemsBar.maxHeight();
        var itemsBarC = new UIObject_Container(Graphics.width - this.itemsBar.width, (Graphics.height / 2) - h / 2, this.itemsBar.width, h);
        itemsBarC.addUI(this.itemsBar);
        itemsBarC.setText('Items', true);
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_ItemList();
          if(parameters.Position) {
            var posX = parameters.Position.X;
            var posY = parameters.Position.Y;
            if(posX)
              itemsBarC.x = posX;
            if(posY)
              itemsBarC.y = posY;
          }
        }
        itemsBarC.addVisButtton();
        if(AlphaABS.Parameters.isLoaded()) {
          parameters = AlphaABS.Parameters.get_UIE_ItemList();
          if(parameters.Visible)
            this.addChild(itemsBarC);
        } else
          this.addChild(itemsBarC);
        this.itemsBar.refresh();
        this._moveElements.push(['itemsBar', itemsBarC]);

        this._createFirearmContainer();
      }

      _createItemsBar() {
        this.itemsBar = new AlphaABS.LIBS.NotifyMachine(0,0,120,24,5);
      }

      _createSkillPanel() {
        this.spriteSkillPanel = new AlphaABS.LIBS.Sprite_SkillPanelABS();
        this._refreshSkillPanelVisibility();
      }

      _createControlPanel() {
        this.spriteControlPanel = new AlphaABS.LIBS.UIObject_ControlPanel();
        this.spriteControlPanel.createBaseItems();
        if(AlphaABS.Parameters.isLoaded()) {
          var parameters = AlphaABS.Parameters.get_UIE_PlayerHotBar();
          if(parameters.Orientation && parameters.Orientation == 'Horizontal') {
            this.spriteControlPanel.transfer();
          }
        }
      }

      _checkLayerTouch(layer) {
        var rect = new Rectangle(layer.x, layer.y, layer.width, layer.height);
        return AlphaABS.UTILS.SMath.inRect(new PointX(TouchInput.x, TouchInput.y), rect);
      }

      _createTargetUI() {
        this.spriteTarget = new AlphaABS.LIBS.Sprite_EnemyUI();

        this.spriteTargetStatuses = new AlphaABS.LIBS.Sprite_EnemyStatusBar(this.spriteTarget.width, 24);
        this.spriteTargetStatuses.y = this.spriteTarget.height + 2;
        this.spriteTargetStatuses.setLimit(6);

        this.popUpMachineTarget = new ABSObject_PopUpMachine(0, 0, this.spriteTarget.width - 60, 1, this.spriteTarget);
        this.popUpMachineTarget2 = new ABSObject_PopUpMachine(0, -20, this.spriteTarget.width - 60, 1, this.spriteTarget);
        this.popUpMachineTarget.setEffectSettings(ABSObject_PopUpMachine.SETTINGS);
      }

      _createUserUI() {
        var userUiBackground = null;
        if(AlphaABS.Parameters.isLoaded()) {
          var parameters = AlphaABS.Parameters.get_UIE_PlayerStatus();
          userUiBackground = parameters.Background;
        }

        this.spriteUserUI = new AlphaABS.LIBS.Sprite_UserUI(userUiBackground);
        this.popUpMachineUser = new ABSObject_PopUpMachine(6, 12, this.spriteUserUI.faceSize, 1, this.spriteUserUI);
        this.popUpMachineUser2 = new ABSObject_PopUpMachine(6, 12, 200, 1, this.spriteUserUI);
        this.popUpMachineUser.setEffectSettings(ABSObject_PopUpMachine.SETTINGS);

        this.spriteAttackBar = new AlphaABS.LIBS.UIObject_BarAttackReload(140,40);
        this.spriteCastBar = new AlphaABS.LIBS.UIObject_BarUserCast(150,36);
      }

      _createUserStatusBar() {
        this.userStatusPanel = new AlphaABS.LIBS.UIObject_UserStatusBar(4);
      }

      _createAlertBar() {
        this.spriteAlertLayer = new Sprite();
        this.spriteAlertLayer.setFrame(0,0,Graphics.width/2,60);
        this.popUpMachine = new ABSObject_PopUpMachine(0, 0, this.spriteAlertLayer.width, 3, this.spriteAlertLayer);
        this.popUpMachine.setEffectSettings([1.0, false, 0]);
        this.popUpMachine.setUpMode();
      }

      _createFavWeapCircle() {
        this._sCircle = new AlphaABS.LIBS.UI_SelectCircleFW($gamePlayer.battler(), function (index) {
          if(this.isOpen())
            $gamePlayer.touchWeaponAt(index);
        });
        this.addChild(this._sCircle);
        this.weapCircleRefresh();
      }

      _updatePosition() {
        var screen = $gameScreen;
          var scale = screen.zoomScale();
          this.scale.x = scale;
          this.scale.y = scale;
          this.x = Math.round(-screen.zoomX() * (scale - 1));
          this.y = Math.round(-screen.zoomY() * (scale - 1));
          this.x += Math.round(screen.shake());

          if(this._isABS) {
            if(this.spriteAttackBar.visible) {
              this.spriteCastBar.y = this.spriteAttackBar.y + this.spriteAttackBar.height;
            } else {
              this.spriteCastBar.y = this.spriteAttackBar.y - 2;
            }
        }
      }
    }
    //END Spriteset_InterfaceABS
  //------------------------------------------------------------------------------

  AlphaABS.register(Spriteset_InterfaceABS);

})();

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_InterfaceABS2.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Spriteset_InterfaceABS;
  //@[CLASS PART]
  //@[CLASS IMPL ONLY]
  Spriteset_InterfaceABS = AlphaABS.LIBS.Spriteset_InterfaceABS;
  Spriteset_InterfaceABS.prototype._createFirearmBar = function() {
    return this.spriteFirearmBar = new AlphaABS.LIBS.UIObject_FirearmPanel();
  };
  Spriteset_InterfaceABS.prototype._createFirearmContainer = function() {
    var firearmCtn;
    firearmCtn = new AlphaABS.LIBS.UIObject_Container(0, 0, 280, 20);
    firearmCtn.addUI(this.spriteFirearmBar);
    firearmCtn.setText("Weapon panel", true);
    firearmCtn.x = KDCore.SDK.toCX(firearmCtn.width);
    firearmCtn.y = this._layerSkillPanel.y - firearmCtn.height - 10;
    firearmCtn.addVisButtton();
    this._setupWithParameters(firearmCtn, "get_UIE_PlayerFirearm");
    return this._moveElements.push(['weaponPanel', firearmCtn]);
  };
  Spriteset_InterfaceABS.prototype._setupWithParameters = function(item, parametersMethod) {
    var e, parameters;
    if (AlphaABS.Parameters.isLoaded()) {
      try {
        parameters = AlphaABS.Parameters[parametersMethod]();
        if (parameters.Position) {
          this._setPosFromParameters(item, parameters);
        }
        if (parameters.Visible) {
          this.addChild(item);
        }
      } catch (error) {
        e = error;
        AlphaABS.error(e, " while load plugin parameters for component " + parametersMethod);
      }
    } else {
      this.addChild(item);
    }
  };
  Spriteset_InterfaceABS.prototype._setPosFromParameters = function(item, parameters) {
    var pX, pY;
    pX = parameters.Position.X;
    pY = parameters.Position.Y;
    if (pX) {
      item.x = pX;
    }
    if (pY) {
      item.y = pY;
    }
  };
})();

// ■ END Spriteset_InterfaceABS2.coffee
//---------------------------------------------------------------------------

(function () {
  var LOG = new PLATFORM.DevLog("Spriteset_Map");
  //Spriteset_Map
  //------------------------------------------------------------------------------
  var Sprite_CharacterABS;
  var SMouse = AlphaABS.UTILS.SMouse;

  //OVER
  Spriteset_Map.prototype.createCharacters = function () {
    LOG.p("createCharacters");
    Sprite_CharacterABS = AlphaABS.LIBS.Sprite_CharacterABS;

    this._characterSprites = [];
    this._characterSpritesABS = [];
    this._spritePlayerABS = null;

    $gameMap.events().forEach(function (event) {
      if (event instanceof Game_AIBot) {
        var t = new Sprite_CharacterABS(event, 0);
        this._characterSprites.push(t);
        this._characterSpritesABS.push(t);
      } else
        this._characterSprites.push(new Sprite_Character(event));
    }, this);
    $gameMap.vehicles().forEach(function (vehicle) {
      this._characterSprites.push(new Sprite_Character(vehicle));
    }, this);

    if ($gameMap.isABS()) {
      $gamePlayer.followers().forEach(function (f) {
        var t = new Sprite_CharacterABS(f, 2);
        this._characterSprites.push(t);
        this._characterSpritesABS.push(t);
      }, this);
    } else {
      $gamePlayer.followers().reverseEach(function (follower) {
        this._characterSprites.push(new Sprite_Character(follower));
      }, this);
    }

    var t = new Sprite_CharacterABS($gamePlayer, 1);
    this._characterSprites.push(t);
    this._spritePlayerABS = t;

    for (var i = 0; i < this._characterSprites.length; i++) {
      this._tilemap.addChild(this._characterSprites[i]);
    }
  };

  var _Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
  Spriteset_Map.prototype.initialize = function () {
    _Spriteset_Map_initialize.call(this);
    this._absParams = {};
    this._absParams.animationSprites = [];
    this._absParams.targetConfig = false;
  };

  //NEW
  Spriteset_Map.prototype.spritesABS = function () {
    return this._characterSpritesABS;
  };

  //?[NEW]
  Spriteset_Map.prototype.getSpriteForCharacter = function (character) {
      try {
          if (this._spritePlayerABS.character() == character)
            return this._spritePlayerABS;
          var sprites = this.spritesABS();
          return sprites.find(spr => spr.character() == character);
      } catch (error) {
        
      }
      return null;
  };

  //NEW
  Spriteset_Map.prototype.initABS = function () {
    this.spritesABS().forEach(function (item) {
      item.initABS();
    });
    this._spritePlayerABS.initABS();
  };

  //NEW
  Spriteset_Map.prototype.spritePlayerABS = function () {
    return this._spritePlayerABS;
  };

  var _Spriteset_Map_update = Spriteset_Map.prototype.update;
  Spriteset_Map.prototype.update = function () {
    _Spriteset_Map_update.call(this);
    if ($gameMap.isABS()) {
      this._setupAnimationABS();
      this._updateAnimationABS();
      this._setupPlayerTargetCircle();
    }
  };

  //?NEW
  Spriteset_Map.prototype.refreshAfterABS = function () {
    this._characterSprites.forEach(function (char) {
      this._tilemap.removeChild(char);
    }.bind(this));
    this.createCharacters();
  };

  //PRIVATE
  Spriteset_Map.prototype._setupAnimationABS = function () {
    if ($gameMap.ABSParams().animationABS != null) {
      var anim = $dataAnimations[$gameMap.ABSParams().animationABS.id];
      this._startAnimationABS($gameMap.ABSParams().animationABS.sprite, anim, false, 0);
      $gameMap.ABSParams().animationABS = null;
    }
  };

  Spriteset_Map.prototype._setupPlayerTargetCircle = function () {
    if (!$gameMap.isABS()) return;
    if (!this._absParams) return;
    if (!this._absParams.spriteTargetCircle) {
      //LOG.p("MAP : Target sprite created!");
      var targetCircleSprite;
      if (AlphaABS.Parameters.isLoaded()) {
        targetCircleSprite = AlphaABS.Parameters.get_UIE_SpellSelectZoneImage();
      } else {
        targetCircleSprite = AlphaABS.DATA.IMG.TargetCircle.bitmap;
      }
      this._absParams.spriteTargetCircle = new Sprite(targetCircleSprite);
      this.addChildAtLayer(this._absParams.spriteTargetCircle, -1);
      this._absParams.spriteTargetCircle.anchor.x = 0.5;
      this._absParams.spriteTargetCircle.anchor.y = 0.5;
      this._absParams.spriteTargetCircle.visible = false;
    }
    if ($gameMap.ABSParams().targetCircle != null) {
      if (!this._absParams.targetConfig) {

        var r = $gameMap.ABSParams().targetCircle.radius;

        this._absParams.spriteTargetCircle.scale.x = 0.5 * r;
        if (r > 3)
          this._absParams.spriteTargetCircle.scale.x += (r - 3) * 0.2;
        this._absParams.spriteTargetCircle.scale.y = this._absParams.spriteTargetCircle.scale.x;

        var t3 = SMouse.getMousePosition();
        this._absParams.spriteTargetCircle.x = t3.x;
        this._absParams.spriteTargetCircle.y = t3.y;
        this._absParams.targetConfig = true;
      }

      var t = this._absParams.spriteTargetCircle;
      var t2 = SMouse.getMousePosition();
      if ($gameMap.ABSParams().targetCircleNeedLock) {
        t2 = new AlphaABS.UTILS.PointX(TouchInput.x, TouchInput.y);
      }

      var color = Color.GREEN;
      var point2 = t2.clone().convertToMap();
      var dist = AlphaABS.UTILS.distanceTo($gamePlayer, point2);
      if (dist > $gameMap.ABSParams().targetCircle.range) {
        color = Color.RED;
      }
      if (!$gamePlayer._absParams.currentAction.isIgnoreObstacles())
        if (!AlphaABS.BattleManagerABS.checkLineOfSight($gamePlayer.toPoint(), point2)) {
          color = Color.RED;
        }

      t.x = t2.x;
      t.y = t2.y;
      t.setBlendColor(color.ARR);
      t.visible = true;
    } else {
      this._absParams.spriteTargetCircle.visible = false;
      this._absParams.targetConfig = false;
    }
  };

  Spriteset_Map.prototype.addChildAtLayer = function (sprite, layerIndex) {
    switch (layerIndex) {
      case 0: //HEAD
        this._tilemap.addChild(sprite);
        break;
      case 1: //CENTER
        if (this._tilemap._upperLayer)
          this._tilemap._upperLayer.addChild(sprite);
        else
          this._tilemap.addChild(sprite);
        //else
        //  this._tilemap.upperLayer.children[0].addChild(sprite);
        break;
      case 2: //FEET
        sprite.z = 1;
        if (this._tilemap._lowerLayer)
          this._tilemap._lowerLayer.addChild(sprite);
        else
          this._tilemap.addChild(sprite);
        break;
      default: //SCREEN
        this.addChild(sprite);
        break;
    }
  };

  Spriteset_Map.prototype._startAnimationABS = function (target, animation, mirror, delay) {
    var sprite = new Sprite_Animation();
    sprite.setup(target, animation, mirror, delay);
    sprite.setABSModeMap();
    if (animation)
      this.addChildAtLayer(sprite, animation.position);
    this._absParams.animationSprites.push(sprite);
  };

  Spriteset_Map.prototype._updateAnimationABS = function () {
    if (!this._absParams) return;
    if (this._absParams.animationSprites.length > 0) {
      var sprites = this._absParams.animationSprites.clone();
      this._absParams.animationSprites = [];
      for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite.isPlaying()) {
          this._absParams.animationSprites.push(sprite);
        } else {
          sprite.remove();
        }
      }
    }
  };

  //?[NEW]
  Spriteset_Map.prototype.createSpawnEventABS = function (id) {
    var event = $gameMap.event(id);
    var newChar = new AlphaABS.LIBS.Sprite_CharacterABS(event, 0);
    this._characterSprites.push(newChar);
    this._characterSpritesABS.push(newChar);
    this._tilemap.addChild(newChar);
    newChar.initABS();
    newChar.update();
  };
})();
// Generated by CoffeeScript 2.3.1
(function() {
  var StringsLoader;
  StringsLoader = class StringsLoader {
    constructor(_parameters) {
      this._parameters = _parameters;
    }

    loadAllStrings(object) {
      var strings;
      strings = this._collect(object);
      this._writeNewString(object, strings);
    }

    _collect(object) {
      var properties, strings;
      properties = Object.getOwnPropertyNames(object);
      strings = properties.filter(function(item) {
        return item.includes("STRING_");
      });
      return strings;
    }

    _writeNewString(object, strings) {
      var i, len, string;
      for (i = 0, len = strings.length; i < len; i++) {
        string = strings[i];
        this._setStringFromPluginParametersToObject(object, string);
      }
    }

    _setStringFromPluginParametersToObject(object, stringName) {
      var newValue;
      newValue = this._parameters[stringName];
      if (newValue) {
        object[stringName] = newValue;
      }
    }

  };
  AlphaABS.register(StringsLoader);
})();

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ User API.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
//@[GLOBAL DEFINITION]
var uAPI;

uAPI = function() {
  throw new Error("This is a static class");
};

uAPI.putLine = function(text) {
  var ref;
  return (ref = AlphaABS.BattleUI) != null ? ref._pushOnPanel(null, text) : void 0;
};

uAPI.putText = function(text) {
  var ui;
  if (AlphaABS.BattleUI != null) {
    ui = AlphaABS.BattleUI.getUI();
    if (ui != null) {
      return ui.addPopUp(AlphaABS.PopInfoManagerABS.ALERT(text));
    }
  }
};

uAPI.findEnemy = function(id) {
  var ref;
  if (id == null) {
    return null;
  }
  return (ref = $gameTroop.membersABS()) != null ? ref.find(function(item) {
    return item.eventId() === id;
  }) : void 0;
};

uAPI.activateE = function(id) {
  var ref;
  return (ref = uAPI.findEnemy(id)) != null ? ref.activate() : void 0;
};

uAPI.deactivateE = function(id) {
  var ref;
  return (ref = uAPI.findEnemy(id)) != null ? ref.deactivate() : void 0;
};

uAPI.reviveE = function(id, time) {
  var ref;
  return (ref = uAPI.findEnemy(id)) != null ? ref.setRevive(time) : void 0;
};

uAPI.loot = function(id) {
  var ref;
  return (ref = uAPI.findEnemy(id)) != null ? ref.loot() : void 0;
};

uAPI.spawn = function(id, regionOrX, region) {
  return Game_Interpreter.prototype._onABSSpawn(id, regionOrX, region);
};

uAPI.setParamE = function(id, paramName, newValue) {
  var e;
  try {
    if (paramName == null) {
      return;
    }
    if (newValue == null) {
      newValue = 0;
    }
    e = uAPI.findEnemy(id);
    if (e == null) {
      return;
    }
    if (AlphaABS.LIBS.Game_AIBehavior.PARAMS.indexOf(paramName) > 0) {
      e.behaviorModel()[paramName] = newValue;
      e.LOG.p("New value " + newValue + " of " + paramName);
      if (e.inBattle()) {
        e.refreshBehavior();
      }
    }
    return;
  } catch (error) {
    e = error;
    AlphaABS.error(e, 'while you call setParamE with uAPI');
  }
};

Object.defineProperties(uAPI, {
  isABS: {
    get: function() {
      return AlphaABS.isABS(); // * Активирована ли ABS (мы на ABS карте?)
    }
  },
  player: {
    get: function() {
      return $gamePlayer;
    }
  },
  actor: {
    get: function() {
      return $gamePlayer.battler();
    }
  },
  party: {
    get: function() {
      return $gameParty.membersABS();
    }
  },
  pActor: {
    get: function() {
      return $gameParty.membersABS().map(function(item) {
        return item.battler();
      });
    }
  },
  actorId: {
    get: function() {
      var ref;
      return (ref = uAPI.actor) != null ? ref.actorId() : void 0;
    }
  },
  pActorId: {
    get: function() {
      return uAPI.pActor.map(function(item) {
        return item.actorId();
      });
    }
  },
  isUI: {
    get: function() {
      return uAPI.isABS && AlphaABS.BattleUI.isUI() && AlphaABS.BattleUI.getUI().isVisible();
    }
  },
  hide: {
    get: function() {
      if (AlphaABS.BattleUI.isUI()) {
        return AlphaABS.BattleUI.hideUI();
      }
    }
  },
  show: {
    get: function() {
      if (AlphaABS.BattleUI.isUI()) {
        return AlphaABS.BattleUI.showUI();
      }
    }
  },
  isBattle: {
    get: function() {
      var ref;
      return (ref = uAPI.player) != null ? ref.inBattle() : void 0;
    }
  },
  hideSkills: {
    get: function() {
      var ref;
      return (ref = AlphaABS.BattleUI.getUI()) != null ? ref.hideSkillPanel() : void 0;
    }
  },
  hideControls: {
    get: function() {
      var ref;
      return (ref = AlphaABS.BattleUI.getUI()) != null ? ref.hideControlPanel() : void 0;
    }
  },
  showSkills: {
    get: function() {
      var ref;
      return (ref = AlphaABS.BattleUI.getUI()) != null ? ref.showSkillPanel() : void 0;
    }
  },
  showControls: {
    get: function() {
      var ref;
      return (ref = AlphaABS.BattleUI.getUI()) != null ? ref.showControlPanel() : void 0;
    }
  },
  target: {
    get: function() {
      return uAPI.player.target();
    }
  },
  tActor: {
    get: function() {
      var ref;
      return (ref = uAPI.target) != null ? ref.battler() : void 0;
    }
  },
  tId: {
    get: function() {
      var ref;
      return (ref = uAPI.target) != null ? ref.eventId() : void 0;
    }
  },
  jumpOff: {
    get: function() {
      return $gamePlayer._absJumpOffByUAPI = true;
    }
  },
  jumpOn: {
    get: function() {
      return $gamePlayer._absJumpOffByUAPI = false;
    }
  },
  rotateOff: {
    get: function() {
      return $gamePlayer._absRotateOffByUAPI = true;
    }
  },
  rotateOn: {
    get: function() {
      return $gamePlayer._absRotateOffByUAPI = false;
    }
  },
  weaponsOff: {
    get: function() {
      return $gamePlayer._absWeapOffByUAPI = true;
    }
  },
  weaponsOn: {
    get: function() {
      return $gamePlayer._absWeapOffByUAPI = false;
    }
  }
});

(Object.freeze || Object)(uAPI);

// ■ END User API.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UI_Circle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var UI_Circle;
  UI_Circle = class UI_Circle extends Sprite {
    constructor(segmentBitmap, iconSize) {
      super(new Bitmap(200, 200));
      this.segmentBitmap = segmentBitmap;
      this.iconSize = iconSize;
      this.iconSize = SDK.check(this.iconSize, 36);
      this._initParameters();
      this._createSegments();
      this._moveSegments(this._maxRadius());
      this._postConfigurate();
    }

    _initParameters() {
      this.anchor.x = 0.5;
      return this.anchor.y = 0.5;
    }

    _createSegments() {
      this._segments = [];
      this._icons = [];
      this._helpers = [];
      this._inputs = [];
      this._createSegment(0, 0);
      this._createSegment(1, Math.PI / 2);
      this._createSegment(2, Math.PI);
      this._createSegment(3, -Math.PI / 2);
      this._segments.forEach((function(segment) {
        return this.addChild(segment);
      }).bind(this));
      this._configurateSegmentsElements();
      return this._createInputZones();
    }

    _createSegment(index, rotation) {
      var helper, icon, segment;
      rotation = SDK.check(rotation, 0);
      segment = this._createSegmentElement(rotation);
      icon = this._createIconForSegment(rotation);
      helper = this._createHelperForSegment();
      if (index === 2) { //down text upwards
        helper.rotation = -rotation;
      }
      segment.addChild(icon);
      segment.addChild(helper);
      this._segments[index] = segment;
      this._icons[index] = icon;
      this._helpers[index] = helper;
    }

    _createSegmentElement(rotation) {
      var segment;
      rotation = SDK.check(rotation, 0);
      segment = new Sprite();
      segment.bitmap = this.segmentBitmap;
      segment.anchor.x = 0.5;
      segment.anchor.y = 0.5;
      segment.rotation = rotation;
      return segment;
    }

    _createIconForSegment(rotation) {
      var icon;
      rotation = SDK.check(rotation, 0);
      icon = new Sprite(new Bitmap(this.iconSize, this.iconSize));
      icon.anchor.x = 0.5;
      icon.anchor.y = 0.5;
      icon.rotation = -rotation;
      return icon;
    }

    _createHelperForSegment() {
      var help;
      help = new Sprite(new Bitmap(this.segmentBitmap.width, this.segmentBitmap.height));
      help.anchor.x = 0.5;
      help.anchor.y = 0.5;
      return help;
    }

    _configurateSegmentsElements() {
      var dy;
      dy = -this.segmentBitmap.height;
      this._helpers.forEach(function(item) {
        return item.move(0, dy);
      });
      return this._icons.forEach(function(item) {
        return item.move(0, -5);
      });
    }

    _createInputZones() {
      var down, left, raduis, right, top;
      raduis = this._maxRadius();
      top = new Sprite_Button();
      top.bitmap = new Bitmap(this.segmentBitmap.width, this.segmentBitmap.height);
      top.moveToCenter(0, -raduis);
      this._inputs.push(top);
      right = new Sprite_Button();
      right.bitmap = new Bitmap(this.segmentBitmap.height, this.segmentBitmap.width);
      right.moveToCenter(raduis, 0);
      this._inputs.push(right);
      down = new Sprite_Button();
      down.bitmap = top.bitmap;
      down.moveToCenter(0, raduis);
      this._inputs.push(down);
      left = new Sprite_Button();
      left.bitmap = right.bitmap;
      left.moveToCenter(-raduis, 0);
      this._inputs.push(left);
      return this._inputs.forEach((function(item) {
        return this.addChild(item);
      }).bind(this));
    }

    _moveSegments(radius) {
      if (radius == null) {
        radius = this._maxRadius();
      }
      this._segments[0].move(0, -radius); //TOP
      this._segments[2].move(0, radius); //DOWN
      this._segments[3].move(-radius, 0); //LEFT
      return this._segments[1].move(radius, 0); //RIGHT
    }

    _maxRadius() {
      return Math.floor(this.segmentBitmap.height / 4 + this.segmentBitmap.width / 2);
    }

    _minRadius() {
      return Math.floor(this.segmentBitmap.width / 2);
    }

    _postConfigurate() {} //EMPTY

  };
  if (window.KDCore !== void 0) {
    KDCore.register(UI_Circle);
  }
})();

// ■ END UI_Circle.coffee
//---------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UI_Gauge.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------
(function () {

  function UI_Gauge() {
    this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_Gauge);

  UI_Gauge.prototype = Object.create(Sprite.prototype);
  UI_Gauge.prototype.constructor = UI_Gauge;

  UI_Gauge.prototype.initialize = function (width, height) {
    Sprite.prototype.initialize.call(this, new Bitmap(width || 1, height || 1));
    this.reset();
  };

  UI_Gauge.prototype.reset = function () {
    this._backgroundColor = '#000000';
    this._startColor = '#FFFFFF';
    this._endColor = '#FFFFFF';
    this._currentValue = 0;
    this._maxValue = 0;
    this._centerText = null;
    this._leftText = null;
    this._rightText = null;
    this._gaugeWidth = 0;
    this._lastValue = -1;
  };

  UI_Gauge.prototype.applyGeneratedGradient = function () {
    if (window.PLATFORM === undefined) return;
    var color = PLATFORM.Color.FromHex(this._startColor);
    this._endColor = color.getLightestColor(230).CSS;
  };

  UI_Gauge.prototype.setFont = function (fontName) {
    this.bitmap.fontFace = fontName;
  };

  UI_Gauge.prototype.setMaxValue = function (value) {
    this._maxValue = value;
    this._updateGaugeWidth();
  };

  UI_Gauge.prototype._updateGaugeWidth = function () {
    if (this._maxValue > 0 && this._currentValue < this._maxValue)
      this._gaugeWidth = Math.floor(
        (100 * this._currentValue / this._maxValue) * ((this.bitmap.width - 2) / 100));
    else
      this._gaugeWidth = this.bitmap.width - 2;
  };

  UI_Gauge.prototype.setValue = function (value) {
    this._currentValue = value;
    this._updateGaugeWidth();
  };

  UI_Gauge.prototype.setGaugeColors = function (startHexColor, endHexColor) {
    this._startColor = startHexColor;
    this._endColor = endHexColor || this._startColor;
  };

  UI_Gauge.prototype.setBackgroundColor = function (hexColor) {
    this._backgroundColor = hexColor;
  };

  UI_Gauge.prototype.setCenterText = function (text, color) {
    this._centerText = this._makeTextData(text, color);
  };

  UI_Gauge.prototype._makeTextData = function (textValue, colorValue) {
    return {
      text: textValue || '',
      color: colorValue || '#FFFFFF'
    };
  };

  UI_Gauge.prototype.setRightText = function (text, color) {
    this._rightText = this._makeTextData(text, color);
  };

  UI_Gauge.prototype.setLeftText = function (text, color) {
    this._leftText = this._makeTextData(text, color);
  };

  UI_Gauge.prototype.update = function () {
    Sprite.prototype.update.call(this);
    this._updateValues();
    if (this._isValueChanged()) {
      this.refresh();
    }
  };

  UI_Gauge.prototype._updateValues = function () {
    //EMPTY
  };

  UI_Gauge.prototype._isValueChanged = function () {
    return (this._currentValue != this._lastValue);
  };

  UI_Gauge.prototype.refresh = function () {
    this._lastValue = this._currentValue;
    this._drawAll();
  };

  UI_Gauge.prototype._drawAll = function () {
    this._drawBackground();
    this._drawGaugeLine();
    this._drawTexts();
  };

  UI_Gauge.prototype._drawBackground = function () {
    this.bitmap.fillRect(0, 0, this.bitmap.width, this.bitmap.height, this._backgroundColor);
  };

  UI_Gauge.prototype._drawGaugeLine = function () {
    this.bitmap.gradientFillRect(1, 1, this._gaugeWidth, this.bitmap.height - 2,
      this._startColor,
      this._endColor,
      false);

  };

  UI_Gauge.prototype._drawTexts = function () {
    this._setTextFontSize();
    this._drawText(this._leftText, 'left');
    this._drawText(this._centerText, 'center');
    this._drawText(this._rightText, 'right');
  };

  UI_Gauge.prototype._setTextFontSize = function () {
    this.bitmap.fontSize = this.bitmap.height - 4;
  };

  UI_Gauge.prototype._drawText = function (textData, position) {
    if (textData && textData.text != '') {
      var prevtextColor = this.bitmap.textColor;
      this.bitmap.textColor = textData.color;
      this.bitmap.drawText(textData.text, 4, 0, this.bitmap.width - 8, this.bitmap.height, position);
      this.bitmap.textColor = prevtextColor;
    }
  };

})();

//■ END UI_Gauge
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UI_GaugeABS.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------
(function () {

  function UI_GaugeABS() {
    this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_GaugeABS);
  var UI_Gauge = AlphaABS.LIBS.UI_Gauge;

  UI_GaugeABS.prototype = Object.create(UI_Gauge.prototype);
  UI_GaugeABS.prototype.constructor = UI_GaugeABS;

  UI_GaugeABS.prototype.initialize = function (width, height) {
    UI_Gauge.prototype.initialize.call(this, width, height);
    this._battler = null;
    this._isShowValue = true;
  };

  UI_GaugeABS.prototype.setBattler = function (battler) {
    this._battler = battler;
    if (this._battler) {
      this._configGaugeForBattler();
    } else {
      this.reset();
    }
    this.refresh();
  };

  UI_GaugeABS.prototype._configGaugeForBattler = function () {
    //EMPTY
  };

  //{Font Name, Color, Background Color, Visible, Show value}
  UI_GaugeABS.prototype.applyPluginParameters = function (pluginParams) {
    try {
      this._applyFont(pluginParams['Font Name']);
      this._applyColors(pluginParams);

      this._isShowValue = pluginParams['Show value'];
      this.visible = pluginParams.Visible;

    } catch (e) {
      //LOGW(AlphaABS.SYSTEM.) //TODO:: Лог что ошибка при применении
      console.log('ERROR while apply Plugin Parameters on UI_Gauge ' + e.name);
      this.reset();
    } finally {
      this.refresh();
    }
  };

  UI_GaugeABS.prototype._applyFont = function (fontName) {
    if (fontName)
      this.setFont(fontName);
  };

  UI_GaugeABS.prototype._applyColors = function (pluginParams) {
    this.setBackgroundColor(pluginParams['Background Color']);
    this._applyGaugeColors(pluginParams.Color);
  };

  UI_GaugeABS.prototype._applyGaugeColors = function (colors) {
    if (colors) {
      var color1 = colors['Color 1'];
      var color2 = colors['Color 2'];
      this.setGaugeColors(color1, color2);
      if (color2 == '')
        this.applyGeneratedGradient();
    }
  };

})();


//■ END UI_GaugeABS
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
(function(){

  function UI_GaugeABS_HP() {
      this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_GaugeABS_HP);
  var UI_GaugeABS = AlphaABS.LIBS.UI_GaugeABS;
  var Color = PLATFORM.Color;

  UI_GaugeABS_HP.prototype = Object.create(UI_GaugeABS.prototype);
  UI_GaugeABS_HP.prototype.constructor = UI_GaugeABS_HP;

  UI_GaugeABS_HP.prototype.initialize = function(width, height) {
    UI_GaugeABS.prototype.initialize.call(this, width, height);
    this.setGaugeColors(this._mainGaugeHexColor());
    this.applyGeneratedGradient();
  };

  UI_GaugeABS_HP.prototype._mainGaugeHexColor = function() {
    return Color.RED.toHex();
  };

  //OVER
  UI_GaugeABS_HP.prototype._configGaugeForBattler = function() {
    UI_GaugeABS.prototype._configGaugeForBattler.call(this);
    this.setLeftText(this._leftGaugeText());
  };

  UI_GaugeABS_HP.prototype._leftGaugeText = function() {
    return TextManager.hpA;
  };

  //OVER
  UI_GaugeABS_HP.prototype._updateValues = function() {
    UI_GaugeABS.prototype._updateValues.call(this);
    if(this._battler) {
      this._updateMaxValue();
      this.setValue(this._currentGaugeValue());
    }
  };

  UI_GaugeABS_HP.prototype._updateMaxValue = function() {
    if(this._maxGaugeValue() != this._maxValue) {
      this.setMaxValue(this._maxGaugeValue());
      this.refresh();
    }
  };

  UI_GaugeABS_HP.prototype._maxGaugeValue = function() {
    return this._battler.mhp;
  };

  UI_GaugeABS_HP.prototype._currentGaugeValue = function() {
    return this._battler.hp;
  };

  //OVER
  UI_GaugeABS_HP.prototype.refresh = function() {
    if(this._isShowValue == true)
      this.setRightText(this._currentValue);
    UI_GaugeABS.prototype.refresh.call(this);
  };



  function UI_GaugeABS_MP() {
      this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_GaugeABS_MP);
  var UI_GaugeABS_HP = AlphaABS.LIBS.UI_GaugeABS_HP;

  UI_GaugeABS_MP.prototype = Object.create(UI_GaugeABS_HP.prototype);
  UI_GaugeABS_MP.prototype.constructor = UI_GaugeABS_MP;

  UI_GaugeABS_MP.prototype.initialize = function(width, height) {
    UI_GaugeABS_HP.prototype.initialize.call(this, width, height);
  };

  UI_GaugeABS_MP.prototype._mainGaugeHexColor = function() {
    return Color.BLUE.toHex();
  };

  UI_GaugeABS_MP.prototype._leftGaugeText = function() {
    return TextManager.mpA;
  };

  UI_GaugeABS_MP.prototype._maxGaugeValue = function() {
    return this._battler.mmp;
  };

  UI_GaugeABS_MP.prototype._currentGaugeValue = function() {
    return this._battler.mp;
  };



  function UI_GaugeABS_TP() {
      this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_GaugeABS_TP);
  var UI_GaugeABS_HP = AlphaABS.LIBS.UI_GaugeABS_HP;

  UI_GaugeABS_TP.prototype = Object.create(UI_GaugeABS_HP.prototype);
  UI_GaugeABS_TP.prototype.constructor = UI_GaugeABS_TP;

  UI_GaugeABS_TP.prototype.initialize = function(width, height) {
    UI_GaugeABS_HP.prototype.initialize.call(this, width, height);
  };

  UI_GaugeABS_TP.prototype._mainGaugeHexColor = function() {
    return Color.GREEN.toHex();
  };

  UI_GaugeABS_TP.prototype._leftGaugeText = function() {
    return TextManager.tpA;
  };

  UI_GaugeABS_TP.prototype._maxGaugeValue = function() {
    return this._battler.maxTp();
  };

  UI_GaugeABS_TP.prototype._currentGaugeValue = function() {
    return this._battler.tp;
  };



  function UI_GaugeABS_HPE() {
      this.initialize.apply(this, arguments);
  }

  AlphaABS.register(UI_GaugeABS_HPE);
  var UI_GaugeABS_HP = AlphaABS.LIBS.UI_GaugeABS_HP;

  UI_GaugeABS_HPE.prototype = Object.create(UI_GaugeABS_HP.prototype);
  UI_GaugeABS_HPE.prototype.constructor = UI_GaugeABS_HPE;

  UI_GaugeABS_HPE.prototype.initialize = function(width, height) {
    UI_GaugeABS_HP.prototype.initialize.call(this, width, height);
    this._isShowInPercent = true;
  };

  UI_GaugeABS_HPE.prototype.setShowInPercent = function(bool) {
    this._isShowInPercent = bool;
  };

  UI_GaugeABS_HPE.prototype._leftGaugeText = function() {
    return '';
  };

  //OVER
  UI_GaugeABS_HPE.prototype.refresh = function() {
    if(this._isShowValue == true && this._battler)
      this.setCenterText(this._textForValue());
    UI_GaugeABS.prototype.refresh.call(this);
  };

  UI_GaugeABS_HPE.prototype._textForValue = function() {
    if(this._isShowInPercent) {
      return this._getValueInPercent();
    } else {
      return this._currentValue;
    }
  };

  UI_GaugeABS_HPE.prototype._getValueInPercent = function() {
    var percent = Math.floor((this._currentValue * 100) / this._maxGaugeValue());
    if(percent <= 0)
      percent = 1;
    return (percent + '%');
  };

})();


// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UI_SelectCircle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Color, SDK, UI_Circle, UI_SelectCircle;
  UI_Circle = KDCore.LIBS.UI_Circle;
  Color = KDCore.Color;
  SDK = KDCore.SDK;
  UI_SelectCircle = (function() {
    class UI_SelectCircle extends UI_Circle {
      constructor(segmentBitmap, isOpen, iconSize) {
        super(segmentBitmap, SDK.check(iconSize, 36));
        this._isOpen = SDK.check(isOpen, true);
        if (!this._isOpen) {
          this.opacity = 0;
        }
      }

      _initParameters() {
        UI_Circle.prototype._initParameters.call(this);
        this._clickedSegmentIndex = null;
        this._selectedSegmentIndex = null;
        this._isHelperVisible = false;
        this._isAnimated = false;
        this._clickTimer = new Game_TimerABS();
        this._newRadius = this._maxRadius();
        return this._disabledIndexes = [];
      }

      isOpen() {
        return this._isOpen === true;
      }

      isClicked() {
        return this._clickedSegmentIndex !== null;
      }

      isSelected() {
        return this._selectedSegmentIndex !== null;
      }

      isAnimated() {
        return this._isAnimated === true;
      }

      isHelpersVisible() {
        return this._isHelperVisible === true;
      }

      showHelpers() {
        return this._isHelperVisible = true;
      }

      hideHelpers() {
        return this._isHelperVisible = false;
      }

      select(index) {
        this.deselectAll();
        this._segments[index].setBlendColor(UI_SelectCircle.COLOR_SELECT.ARR);
        return this._selectedSegmentIndex = index;
      }

      deselectAll() {
        this._selectedSegmentIndex = null;
        return this._resetSegmentsColors();
      }

      _resetSegmentsColors() {
        var index, j, len, ref, results, segment;
        ref = this._segments;
        results = [];
        for (index = j = 0, len = ref.length; j < len; index = ++j) {
          segment = ref[index];
          if (!this._disabledIndexes.includes(index)) {
            results.push(this._resetSegmentColor(segment));
          }
        }
        return results;
      }

      _resetSegmentColor(segment) {
        return segment.setBlendColor(Color.NONE.ARR);
      }

      click(index) {
        this.deselectAll();
        this._clickTimer.start(UI_SelectCircle.CLICK_TIME);
        this._clickedSegmentIndex = index;
        return this._segments[index].setBlendColor(UI_SelectCircle.COLOR_CLICK.ARR);
      }

      update() {
        UI_Circle.prototype.update.call(this);
        if (this.isClicked()) {
          this._updateClick();
        }
        this._updateHelpers();
        return this._updateAnimation();
      }

      _updateClick() {
        this._clickTimer.update();
        if (this._clickTimer.isReady()) {
          this._resetSegmentsColors();
          return this._clickedSegmentIndex = null;
        }
      }

      _updateHelpers() {
        if (!this.isAnimated() && this.isOpen() && this.isHelpersVisible()) {
          return this._showHelpers();
        } else {
          return this._hideHelpers();
        }
      }

      _hideHelpers() {
        return this._helpers.forEach(function(item) {
          return item.visible = false;
        });
      }

      _showHelpers() {
        return this._helpers.forEach(function(item) {
          return item.visible = true;
        });
      }

      _updateAnimation() {
        if (!this.isAnimated()) {
          return;
        }
        this._moveSegments(this._newRadius);
        if (this.isOpen()) {
          return this._closeCircle();
        } else {
          return this._openCircle();
        }
      }

      _closeCircle() {
        var minRadius;
        minRadius = this._minRadius();
        if (this.opacity > 30) {
          this.opacity -= 30;
        }
        if (this._newRadius > minRadius) {
          this._newRadius -= 2;
        }
        if (this._newRadius <= minRadius) {
          this._isOpen = false;
          this._isAnimated = false;
          return this.opacity = 0;
        }
      }

      _openCircle() {
        var maxRadius;
        maxRadius = this._maxRadius();
        if (this.opacity <= 225) {
          this.opacity += 30;
        }
        if (this._newRadius < maxRadius) {
          this._newRadius += 2;
        }
        if (this._newRadius >= maxRadius) {
          this._isOpen = true;
          this._isAnimated = false;
          return this.opacity = 255;
        }
      }

      hideAllSegments() {
        return SDK.times(4, (function(i) {
          this.hideSegment(i);
        }).bind(this));
      }

      hideSegment(index) {
        return this._segments[index].visible = false;
      }

      showAllSegments() {
        return SDK.times(4, (function(i) {
          this.showSegment(i);
        }).bind(this));
      }

      showSegment(index) {
        return this._segments[index].visible = true;
      }

      disableAllSegments() {
        return SDK.times(4, (function(i) {
          this.disableSegment(i);
        }).bind(this));
      }

      disableSegment(index) {
        this._segments[index].setBlendColor(UI_SelectCircle.COLOR_DISABLED.ARR);
        this._icons[index].setBlendColor(UI_SelectCircle.COLOR_DISABLED.ARR);
        return this._disabledIndexes.push(index);
      }

      enableAllSegments() {
        return SDK.times(4, (function(i) {
          this.enableSegment(i);
        }).bind(this));
      }

      enableSegment(index) {
        this._disabledIndexes.delete(index);
        this._resetSegmentColor(this._segments[index]);
        return this._resetIconColor(this._icons[index]);
      }

      _resetIconColor(icon) {
        return icon.setBlendColor(Color.NONE.ARR);
      }

      resetAllSegments() {
        this.showAllSegments();
        this.deselectAll();
        return this.enableAllSegments();
      }

      addClickListener(index, method) {
        return this._inputs[index].setClickHandler(method);
      }

      setIcons(iconsArray) {
        return iconsArray.forEach(this.setIcon.bind(this));
      }

      setIcon(icon, index) {
        return this._drawIcon(icon, index);
      }

      _drawIcon(icon, index) {
        if (icon === null) {
          this._icons[index].bitmap.clear();
        }
        if (icon instanceof Bitmap) {
          return this._icons[index].bitmap.drawOnMe(icon, 0, 0, this.iconSize, this.iconSize);
        } else {
          return this._icons[index].bitmap.drawIcon(0, 0, icon, this.iconSize);
        }
      }

      setHelpers(textArray) {
        return textArray.forEach(this.setHelper.bind(this));
      }

      setHelper(text, index) {
        return this._drawHelperText(text, index);
      }

      _drawHelperText(text, index) {
        var helper;
        helper = this._helpers[index].bitmap;
        helper.clear();
        return helper.drawText(text, 0, 0, helper.width, helper.height, 'center');
      }

      open() {
        if (this.isOpen()) {
          return;
        }
        return this._changeOpenClose(0, this._minRadius());
      }

      _changeOpenClose(beginOpacity, newRadius) {
        if (this.isAnimated()) {
          return;
        }
        this._newRadius = newRadius;
        return this._isAnimated = true;
      }

      close() {
        if (!this.isOpen()) {
          return;
        }
        return this._changeOpenClose(255, this._maxRadius());
      }

      _setOpacity(opacity) {
        var icon, j, len, ref, results;
        this.opacity = opacity;
        ref = this._icons;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          icon = ref[j];
          results.push(icon.opacity = opacity);
        }
        return results;
      }

    };

    UI_SelectCircle.COLOR_CLICK = new Color(98, 225, 236, 220);

    UI_SelectCircle.COLOR_SELECT = new Color(164, 255, 164, 220);

    UI_SelectCircle.COLOR_DISABLED = new Color(89, 89, 89, 120);

    UI_SelectCircle.CLICK_TIME = 5;

    return UI_SelectCircle;

  }).call(this);
  AlphaABS.register(UI_SelectCircle);
})();

// ■ END UI_SelectCircle.coffee
//---------------------------------------------------------------------------

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UI_SelectCircleFW.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var UI_SelectCircleFW;
  UI_SelectCircleFW = class UI_SelectCircleFW extends AlphaABS.LIBS.UI_SelectCircle {
    constructor(battler, callHandler) {
      super(AlphaABS.DATA.IMG.circleSegment.bitmap, false, 24);
      this.battler = battler;
      this.callHandler = callHandler;
      this.refresh();
      this._setHelpers();
      this.addClickListener(0, (function() {
        return this.callHandler(0);
      }).bind(this));
      this.addClickListener(1, (function() {
        return this.callHandler(1);
      }).bind(this));
      this.addClickListener(2, (function() {
        return this.callHandler(2);
      }).bind(this));
      this.addClickListener(3, (function() {
        return this.callHandler(3);
      }).bind(this));
    }

    refresh() {
      var index;
      this.setIcons(this.battler.getFavWeapIcons());
      index = 0;
      this.enableAllSegments();
      this.battler.ABSParams().favoriteWeapons.forEach((function(i) {
        var weap;
        if (i != null) {
          weap = $dataWeapons[i];
          if (!$gameParty.hasItem(weap, true)) {
            this.disableSegment(index);
          }
          if (this.battler.hasWeapon(weap)) {
            this.disableSegment(index);
          }
        }
        return index++;
      }).bind(this));
    }

    _setHelpers() {
      var x;
      x = AlphaABS.LIBS.IKey;
      this.setHelper(x.convertIKeyToLetter(x.SC_W()).toUpperCase(), 0);
      this.setHelper(x.convertIKeyToLetter(x.SC_D()).toUpperCase(), 1);
      this.setHelper(x.convertIKeyToLetter(x.SC_S()).toUpperCase(), 2);
      return this.setHelper(x.convertIKeyToLetter(x.SC_A()).toUpperCase(), 3);
    }

    isTouchedAny() {
      if (this.visible === true) {
        return this._inputs.some(function(i) {
          return i.isButtonTouched();
        });
      } else {
        return false;
      }
    }

  };
  AlphaABS.register(UI_SelectCircleFW);
})();

// ■ END UI_SelectCircleFW.coffee
//---------------------------------------------------------------------------

(function () {
    //UIObject_ABSSkillInfo
    //------------------------------------------------------------------------------
    function UIObject_ABSSkillInfo() {
        this.initialize.apply(this, arguments);
    }

    UIObject_ABSSkillInfo.prototype = Object.create(Sprite.prototype);
    UIObject_ABSSkillInfo.prototype.constructor = UIObject_ABSSkillInfo;

    UIObject_ABSSkillInfo.prototype.initialize = function (absSkill, isWeaponMode) {
        Sprite.prototype.initialize.call(this);

        this.width = 200;
        this.height = 600;
        this._skill = absSkill;
        this.bitmap = new Bitmap(this.width, this.height);
        this._descriptionText = null;
        isWeaponMode = SDK.check(isWeaponMode, false);
        this._weaponMode = isWeaponMode;

        this.refresh();
    };

    UIObject_ABSSkillInfo.prototype.refresh = function () {
        this.bitmap.clear();

        if (this._descriptionText) {
            this.removeChild(this._descriptionText);
            this._descriptionText.destroy();
            this._descriptionText = null;
        }

        if (this._weaponMode)
            this._skill = $gamePlayer.battler().skillABS_attack();

        this._deltaY = 0;
        this._deltaX = 0;
        this._textPosition = 'center';
        if (this._skill == null) return;
        this._createBackground();
        this._drawInfo();
        this.height = this._deltaY + 8;
    };

    UIObject_ABSSkillInfo.prototype._createBackground = function () {
        this.bitmap.fillAll(UIObject_ABSSkillInfo.COLOR_BACKGROUND.CSS);
    };

    UIObject_ABSSkillInfo.prototype._drawInfo = function () {
        this._nextLine(4);
        this._drawName();
        this._drawLine(4, 4);
        this._setFontSize(16);
        this._deltaX = 8;
        this._drawCost();
        this._nextLine(4);
        this._drawTargetType();
        this._nextLine(10);
        this._drawABSInfo();
        this._drawDescription();
        this._drawRecharge();
        this._drawDamageFormula();
    };

    UIObject_ABSSkillInfo.prototype._drawName = function () {
        try {
            this._setFontSize(24);
            this._setColor(Color.WHITE);
            this.bitmap.outlineWidth = 2;
            this.bitmap.outlineColor = Color.BLACK.CSS;
            var name = this._skill.name();
            if (this._weaponMode) {
                if ($gamePlayer.battler().weapons().length > 0) {
                    name = $gamePlayer.battler().weapons()[0].name;
                }
            }
            this._drawText(name, this.width, 32);
            this._nextLine(28);
            this.bitmap.outlineWidth = 1;
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawCost = function () {
        try {
            if (this._skill.isItem()) return;
            var mvSkill = this._skill.skill();
            if (mvSkill.mpCost > 0) {
                this._drawPair(UIObject_ABSSkillInfo.COLOR_TEXT, TextManager.mpA + " ", UIObject_ABSSkillInfo.COLOR_VALUE, mvSkill.mpCost, 'left');
                this._nextLine();
            }
            if (mvSkill.tpCost > 0) {
                this._drawPair(UIObject_ABSSkillInfo.COLOR_TEXT, TextManager.tpA + " ", UIObject_ABSSkillInfo.COLOR_VALUE, mvSkill.tpCost, 'left');
                this._nextLine();
            }
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawTargetType = function () {
        try {
            var targetText = this._extractTargetMode();
            if (targetText != "") {
                var offset = 10;
                this._deltaX += offset;
                this._drawRectInner(this.width - (offset * 2), 30);
                this._textPosition = 'center';
                this._setColor(UIObject_ABSSkillInfo.COLOR_TEXT);
                this._drawText(targetText, this.width - (offset * 2) - this._deltaX, 24);
                this._nextLine();
            }
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawABSInfo = function () {
        try {
            var text_color = new Color(128, 128, 255);
            var value_color = UIObject_ABSSkillInfo.COLOR_VALUE.reAlpha(220);

            if (this._skill.isRadiusType() && !this._skill.isNeedTarget()) {
                this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RADIUS, value_color, this._skill.radius, 'left');
                this._nextLine();
            } else {
                if (this._skill.range > 0) {
                    if (this._skill.radius > 0) {
                        this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RANGE2, value_color, this._skill.range, 'left');
                        this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RADIUS, value_color, this._skill.radius, 'right');
                    } else {
                        this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RANGE, value_color, this._skill.range, 'left');
                    }
                    this._nextLine();
                } else {
                    if (this._skill.range == 0 && this._skill.isNeedTarget()) {
                        this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RANGE2, value_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_MELEE, 'left');
                        this._nextLine();
                    }
                }
            }

            var repeats = this._skill.skill().repeats;
            if (repeats > 1) {
                this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_REPEATS, value_color, repeats, 'left');
                this._nextLine();
            }

            if (this._skill.isNeedCast()) {
                this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_CAST, value_color,
                    SDK.decimalAdjust('round', this._skill.getCastTime($gamePlayer.battler()) / AlphaABS.BattleManagerABS.TURN, -1) +
                    AlphaABS.SYSTEM.STRING_SKILL_INFO_SEC, 'left');
                this._nextLine();
            }

            if (this._skill.getReloadTime() > 0 || this._skill.isNeedReloadParam()) {
                var reloadTime = this._skill.getReloadTime();
                if (this._skill.isNeedReloadParam()) {
                    reloadTime += $gamePlayer.battler()._calculateABSSkillReloadParam(this._skill.reloadParam);
                }
                reloadTime = SDK.decimalAdjust('round', reloadTime / AlphaABS.BattleManagerABS.TURN, -1);
                this._drawPair(text_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_COOLDOWN, value_color, reloadTime +
                    AlphaABS.SYSTEM.STRING_SKILL_INFO_SEC, 'left');
                this._nextLine();
            }
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawDescription = function () {
        try {
            var descriptionText = this._skill.skill().description;
            if (this._skill.skillId == $gamePlayer.battler().attackSkillId() && descriptionText == "") {
                if ($gamePlayer.battler().weapons().length > 0) {
                    var playerWeapon = $gamePlayer.battler().weapons()[0];
                    descriptionText = playerWeapon.description;
                    if (playerWeapon.meta.noDescription && playerWeapon.meta.noDescription == "1") {
                        descriptionText = ""; //used weapon instead
                    }
                }
            }

            if (descriptionText == "") return;
            if (this._skill.noDescription == true) return;

            this._deltaX = 0;
            this._drawLine(4, 2);
            this._deltaX = 4;

            this._setColor(UIObject_ABSSkillInfo.COLOR_TEXT);
            this._textPosition = 'center';
            this._drawText(AlphaABS.SYSTEM.STRING_SKILL_INFO_DESCRIPTION, this.width - this._deltaX, 24);
            this._nextLine(26);

            this._descriptionTextWidth = this.width - (this._deltaX * 4);

            var style = this._getDescriptionStyle(this._descriptionTextWidth);

            this._descriptionText = new PIXI.Text(descriptionText, style);
            this._descriptionText.x = this._deltaX + 2;
            this._descriptionText.y = this._deltaY + 2;
            this.addChild(this._descriptionText);

            this._drawRectInner(this.width - this._deltaX, this._descriptionText.height + 8);

            this._nextLine(this._descriptionText.height + 12);
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawDamageFormula = function () {
        try {
            var mvSkill = this._skill.skill();
            var damage = mvSkill.damage;
            if (damage.type == 0) return;

            this._deltaX = 0;
            this._drawLine(4, 2);
            this._deltaX = 12;

            var damageTypeText = AlphaABS.SYSTEM.STRING_SKILL_INFO_DAMAGE;
            switch (damage.type) {
                case 1:
                    damageTypeText += TextManager.hpA;
                    break;
                case 2:
                    damageTypeText += TextManager.mpA;
                    break;
                case 3:
                    damageTypeText = AlphaABS.SYSTEM.STRING_SKILL_INFO_RECOVER + TextManager.hpA;
                    break;
                case 4:
                    damageTypeText = AlphaABS.SYSTEM.STRING_SKILL_INFO_RECOVER + TextManager.mpA;
                    break;
                case 5:
                    damageTypeText = AlphaABS.SYSTEM.STRING_SKILL_INFO_DRAIN + TextManager.hpA;
                    break;
                case 6:
                    damageTypeText = AlphaABS.SYSTEM.STRING_SKILL_INFO_DRAIN + TextManager.mpA;
                    break;
            }

            var damageValueText = '';

            var isForUser = (this._skill.type == 0 && !this._skill.isNeedTarget());
            var isNeedTarget = damage.formula.contains('b');
            var tempTarget = null;

            if (isNeedTarget) {
                if (isForUser)
                    tempTarget = $gamePlayer.battler();
                else
                    tempTarget = AlphaABS.BattleManagerABS.getPlayerTarget();

                if (tempTarget == null) {
                    damageValueText = AlphaABS.SYSTEM.STRING_SKILL_INFO_TARGET;
                } else
                    damageValueText = this._getPotentialDamage(tempTarget.battler());

            } else {
                damageValueText = this._getPotentialDamage($gamePlayer.battler());
            }

            this._drawPair(UIObject_ABSSkillInfo.COLOR_TEXT, damageTypeText + " ", UIObject_ABSSkillInfo.COLOR_VALUE, damageValueText, 'center');
            this._nextLine();
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._drawRecharge = function () {
        try {
            if (this._skill.isNeedAmmo() || this._skill.isStackType()) {
                this._deltaX = 0;
                this._drawLine(4, 2);
                this._deltaX = 12;
            }

            this._setFontSize(14);
            var value_color = new Color(252, 157, 101);
            if (this._skill.isNeedAmmo()) {
                var ammoName = $dataItems[this._skill.ammo].name;
                this._drawPair(value_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_USE, UIObject_ABSSkillInfo.COLOR_VALUE, ammoName, 'left');
                this._drawPair(value_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_HAS, UIObject_ABSSkillInfo.COLOR_VALUE, $gameParty.numItems($dataItems[this._skill.ammo]), 'right');
                this._nextLine();
            }
            if (this._skill.isStackType()) {
                var stackText = this._skill._currentStack + '/' + this._skill.stack;
                this._drawPair(value_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_CHARGES, UIObject_ABSSkillInfo.COLOR_VALUE, stackText, 'left');
                this._nextLine();
                var reloadStack = SDK.decimalAdjust('round', this._skill.stackTime / AlphaABS.BattleManagerABS.TURN, -1) + AlphaABS.SYSTEM.STRING_SKILL_INFO_SEC;
                this._drawPair(value_color, AlphaABS.SYSTEM.STRING_SKILL_INFO_RELOADCHR, UIObject_ABSSkillInfo.COLOR_VALUE, reloadStack, 'left');
                this._nextLine();
            }
            this._setFontSize(18);
        } catch (e) {
            console.error(e);
        }
    };

    UIObject_ABSSkillInfo.prototype._setFontSize = function (size) {
        this.bitmap.fontSize = size;
    };

    UIObject_ABSSkillInfo.prototype._setColor = function (color) {
        this.bitmap.textColor = color.CSS;
    };

    UIObject_ABSSkillInfo.prototype._drawLine = function (offsetTop, offsetBottom) {
        offsetTop = SDK.check(offsetTop, 0);
        offsetBottom = SDK.check(offsetBottom, 0);
        this._deltaY += offsetTop;
        this._deltaX += this._lineOffsetX();
        this._drawRect(this.width - (this._deltaX + this._lineOffsetX()), 1, Color.WHITE.reAlpha(50));
        this._deltaX -= this._lineOffsetX();
        this._deltaY += offsetBottom;
    };

    UIObject_ABSSkillInfo.prototype._drawPair = function (color1, text1, color2, text2, position) {
        var textOffset = 12;
        var offset = 0;
        var dx = this._deltaX;
        var width = this.width - (this._deltaX * 2);
        if (position != 'center') {
            width = this.bitmap.measureTextWidth(text1) + this.bitmap.measureTextWidth(text2) + textOffset;
        }

        if (position == 'right') {
            this._deltaX = this.width - width - this._deltaX;
        } else {
            offset = this._deltaX - textOffset;
        }

        var oldColor = this.bitmap.textColor;
        this._textPosition = 'left';
        this._setColor(color1);
        this._drawText(text1, width - offset);
        this._textPosition = 'right';
        this._setColor(color2);
        this._drawText(text2, width - offset);

        this.bitmap.textColor = oldColor;
        this._textPosition = 'center';

        if (position == 'right')
            this._deltaX = dx;
    };

    UIObject_ABSSkillInfo.prototype._drawRect = function (width, height, color) {
        this.bitmap.fillRect(this._deltaX, this._deltaY, width, height, color.CSS);
    };

    UIObject_ABSSkillInfo.prototype._drawRectInner = function (width, height) {
        this._deltaX -= 1;
        this._deltaY -= 1;
        this._drawRect(width - this._deltaX, 1, UIObject_ABSSkillInfo.COLOR_BACKGROUND);
        this._drawRect(1, height + 1, UIObject_ABSSkillInfo.COLOR_BACKGROUND);
        this._deltaX += 1;
        this._deltaY += 1;
        this._drawRect(width - this._deltaX, height, UIObject_ABSSkillInfo.COLOR_BACKGROUND.getLightestColor(30));
    };

    UIObject_ABSSkillInfo.prototype._drawText = function (text, width, height) {
        height = SDK.check(height, 24);
        width = SDK.check(width, this.width);
        this.bitmap.drawText(text, this._deltaX, this._deltaY, width, height, this._textPosition);
    };

    UIObject_ABSSkillInfo.prototype._nextLine = function (offset) {
        offset = SDK.check(offset, 24);
        this._deltaY += offset;
    };

    UIObject_ABSSkillInfo.prototype._lineOffsetX = function () {
        return 18;
    };

    UIObject_ABSSkillInfo.prototype._getDescriptionStyle = function (width) {
        var style = {
            fontStyle: 'italic',
            fontFamily: 'Arial',
            fontSize: '12px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 1,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
            wordWrap: true,
            wordWrapWidth: width
        };
        return style;
    };

    UIObject_ABSSkillInfo.prototype._extractTargetMode = function () {
        var targetText = "";
        if (!this._skill) return "";
        switch (this._skill.type) {
            case 0:
                if (this._skill.isNeedTarget()) {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_ONTARGET;
                } else {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_ONUSER;
                }
                break;
            case 1:
                if (this._skill.isVectorTypeR()) {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_AREA;
                } else {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_ONTARGET;
                }
                break;
            case 2:
                if (this._skill.isNeedTarget()) {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_AREA;
                } else {
                    targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_CIRCLE;
                }
                break;
            case 3:
                targetText = AlphaABS.SYSTEM.STRING_SKILL_INFO_ZONE;
                break;
            default:
        }
        return targetText;
    };

    UIObject_ABSSkillInfo.prototype._getPotentialDamage = function (target) {
        try {
            var damageValueText = '';
            var action = new Game_Action($gamePlayer.battler());
            if (this._skill.isItem()) {
                action.setItem(this._skill.skill().id);
            } else {
                action.setSkill(this._skill.skill().id);
            }
            var damageValue = Math.abs(action.evalDamageFormula(target));
            if (damageValue > 0 && this._skill.skill().damage.variance > 0) {
                var dm = this._skill.skill().damage.variance;
                var percent = Math.round((damageValue / 100) * dm);
                var min = damageValue - percent;
                var max = damageValue + percent;
                damageValueText = min + '-' + max;
            } else {
                damageValueText = damageValue;
            }
            return damageValueText;
        } catch (e) {
            console.error(e);
            return "?";
        }
    };

    UIObject_ABSSkillInfo.COLOR_TEXT = Color.AQUA.reAlpha(200);
    UIObject_ABSSkillInfo.COLOR_VALUE = Color.ORANGE.reAlpha(200);
    UIObject_ABSSkillInfo.COLOR_BACKGROUND = Color.BLACK.reAlpha(200);

    AlphaABS.register(UIObject_ABSSkillInfo);
    //END UIObject_ABSSkillInfo
    //------------------------------------------------------------------------------

})();
(function () {
  class UIObject_BarAttackReload extends Sprite {
    constructor(width, height) {
      super(new Bitmap(width, height));
      this._drawItem = new AlphaABS.LIBS.Sprite_ObjectWithMask(AlphaABS.DATA.IMG.BarSmall.bitmap, AlphaABS.DATA.IMG.BarSmallMask.bitmap);
      this._drawItem.setParams(150, Color.AQUA);

      this._progressBar = new AlphaABS.LIBS.Sprite_CastProgress(110, 10);
      this._progressBar.setColor(Color.AQUA);

      this._drawItem.z = 10;
      this._drawItem.x = 28;
      this._progressBar.x = this._drawItem.x + 4;
      this._progressBar.y = 4;

      this.addChild(this._progressBar);
      this.addChild(this._drawItem);

      this.visible = false;
      this._timer = null;

      this._thread = setInterval(function () {
        this._update();
      }.bind(this), 10);
    }

    start() {
      if ($gamePlayer.ABSParams().isWeapRecharge) {
        var skill = $gamePlayer.battler().skillABS_attack();
        if (skill && !skill.isReady() && skill.getReloadTime() > 30) {
          this.visible = true;
          var t = $gamePlayer.battler().weapons().first();
          if (t && t.iconIndex > 0) {
            this.bitmap.drawIcon(0, 0, t.iconIndex, 24);
          } else {
            this.bitmap.drawIcon(0, 0, AlphaABS.DATA.IMG.IconNoWeapon.bitmap, 24);
          }
          this._timer = skill.timer;
          this._progressBar.start(skill.timer);
        }
      } else {
        if (!this._waitPulse) {
          this.visible = false;
        }
      }
    }

    finish() {
      this._timer = null;
    }

    pulse() {
      this._waitPulse = true;
      this._drawItem.pulse(10);
    }

    terminate() {
      this._progressBar.terminate();
      clearInterval(this._thread);
    }
    //PRIVATE
    _update() {
      this.start(); //Auto
      this._drawItem.update();
      this._progressBar.update();
      if (this._timer) {
        if (this._isChottoReady()) {
          this.pulse();
        }
        if (this._timer.isReady()) {
          this.finish();
        }
      }
      if (this._waitPulse) {
        if (this._drawItem.isReady()) {
          //LOG.p("Pulse ready");
          this._waitPulse = false;
          if (this._timer == null)
            this.visible = false;
        }
      }
    }

    _isChottoReady() {
      var t = this._timer.getValue();
      var t2 = this._timer.getMaxValue();
      t = Math.abs(t2 - t);
      return (t == 1);
    }
  }

  AlphaABS.register(UIObject_BarAttackReload);

})();
(function(){
  class UIObject_BarUserCast extends Sprite {
    constructor(width, height) {
      super(new Bitmap(width, height));
      this._drawItem = new AlphaABS.LIBS.Sprite_ObjectWithMask(AlphaABS.DATA.IMG.Bar.bitmap, AlphaABS.DATA.IMG.BarMask.bitmap);
      this._progressBar =  new AlphaABS.LIBS.Sprite_CastProgress(125, 18);
      this._progressBar.setText();
      this._progressBar.setColor(Color.MAGENTA);

      this._drawItem.z = 10;
      this._drawItem.x = 28;
      this._progressBar.x = this._drawItem.x + 9;
      this._progressBar.y = 6;

      this.addChild(this._progressBar);
      this.addChild(this._drawItem);

      this.visible = false;
      this._timer = null;

      this._thread = setInterval(function() { this._update(); }.bind(this), 10);
    }

    start(skill) {
      if(skill && !skill.isReady() && skill.isCasting()) {
        this.visible = true;
        var iconIndex = skill.skill().iconIndex;
        if(iconIndex > 0)
          this.bitmap.drawIcon(0, 2, iconIndex, 26);
        else
          this.bitmap.clear();
        this._timer = skill.timer;
        this._progressBar.start(skill.timer);
      }
    }

    stop() {
      this._drawItem.setParams(150, Color.RED);
      this._waitPulse = true;
      this._drawItem.pulse(10);
      this.finish();
    }

    finish() {
      this._timer = null;
    }

    pulse() {
      this._drawItem.setParams(150, Color.MAGENTA);
      this._waitPulse = true;
      this._drawItem.pulse(10);
    }

    terminate() {
      this._progressBar.terminate();
      clearInterval(this._thread);
    }
    //PRIVATE
    _update() {
      this._start(); //Auto
      this._drawItem.update();
      this._progressBar.update();
      if(this._timer){
        if(this._isChottoReady()) {
          this.pulse();
        }
        if(this._timer.isReady()) {
          this.finish();
        }
      }
      if(this._waitPulse) {
        if(this._drawItem.isReady()) {
          //LOG.p("Pulse ready");
          this._waitPulse = false;
          if(this._timer == null || this._timer.isReady())
            this.visible = false;
        }
      }
    }

    _start() {
      if($gamePlayer.ABSParams().casting) {
        var skill = $gamePlayer.ABSParams().castingSkill;
        if(skill && !skill.isReady() && skill.isCasting()) {
          this.visible = true;
          var iconIndex = skill.skill().iconIndex;
          if(iconIndex > 0)
            this.bitmap.drawIcon(0, 2, iconIndex, 26);
          else
            this.bitmap.clear();
          this._timer = skill.timer;
          this._progressBar.start(skill.timer);
        }
      } else {
        if($gamePlayer.ABSParams().castingError) {
          $gamePlayer.ABSParams().castingError = false;
          this.stop();
        }
        if(!this._waitPulse)
          this.visible = false;
      }
    }

    _isChottoReady() {
      var t = this._timer.getValue();
      var t2 = this._timer.getMaxValue();
      t = Math.abs(t2 - t);
      return (t == 1);
    }
  }

  AlphaABS.register(UIObject_BarUserCast);

})();

(function () {
    //UIObject_ClickIcon
    //------------------------------------------------------------------------------
    function UIObject_ClickIcon() {
        this.initialize.apply(this, arguments);
    }

    UIObject_ClickIcon.prototype = Object.create(Sprite_Button.prototype);
    UIObject_ClickIcon.prototype.constructor = UIObject_ClickIcon;

    UIObject_ClickIcon.prototype.initialize = function (iconSymbol) {
        Sprite_Button.prototype.initialize.call(this);
        this.bitmap = new Bitmap(30, 30);
        this._hover = null;
        this.bitmap.addLoadListener(function () {
            this.bitmap.drawIcon(0, 0, iconSymbol);
            this._hover = new AlphaABS.LIBS.Sprite_HoverIcon(this.width, this.height, 18);
            this.addChild(this._hover);
        }.bind(this));

        this._clicked = false;
        this._keySymbol = null;
    };

    UIObject_ClickIcon.prototype.setClickHandler = function (handler) {
        this._handlerX = handler;
        Sprite_Button.prototype.setClickHandler.call(this, function () {
            //LOG.p("Clicked");
            if (this.isClicked()) {
                this._clicked = false;
                this._hover.free();
                this._handlerX();
            } else {
                this._clicked = true;
                this._hover.freeze();
                this._handlerX();
            }
        });
    };

    UIObject_ClickIcon.prototype.update = function () {
        Sprite_Button.prototype.update.call(this);
        if (this._keySymbol != null) {
            if (this.visible && Input.isTriggered(this._keySymbol)) {
                this.callClickHandler();
            }
        }
    };

    UIObject_ClickIcon.prototype.drawIconText = function (text) {
        var spr = new Sprite();
        spr.bitmap = new Bitmap(this.width, this.height);
        spr.bitmap.fontSize = 22;
        spr.bitmap.drawText(text, 0, 0, this.width - 2, this.height, 'right');
        this.addChild(spr);
    };

    UIObject_ClickIcon.prototype.setKeyHandler = function (symbol) {
        this._keySymbol = symbol;
        if (!Utils.isMobileDevice())
            this.drawIconText(AlphaABS.LIBS.IKey.convertIKeyToLetter(this._keySymbol).toUpperCase());
    };

    UIObject_ClickIcon.prototype.isClicked = function () {
        return (this._clicked == true);
    };
    //END UIObject_ClickIcon
    //------------------------------------------------------------------------------

    AlphaABS.register(UIObject_ClickIcon);

})();
(function () {

  var UIObject_ContainerButton;

  //UIObject_Container
  //------------------------------------------------------------------------------
  function UIObject_Container() {
    this.initialize.apply(this, arguments);
  }

  UIObject_Container.prototype = Object.create(AlphaABS.LIBS.Sprite_Ext.prototype);
  UIObject_Container.prototype.constructor = UIObject_Container;

  UIObject_Container.prototype.initialize = function (x, y, w, h) {
    AlphaABS.LIBS.Sprite_Ext.prototype.initialize.call(this);
    UIObject_ContainerButton = AlphaABS.LIBS.UIObject_ContainerButton;
    this.setFrame(0, 0, w, h);
    this.x = x;
    this.y = y;
    this.backSprite = null;
    this.text = null;
    this.text_vis_always = false;
    this._uiElement = null;
    this._uiElementVisMode = true;
    this._specButton = null;
    this._specMode = false;
  };

  UIObject_Container.prototype.update = function () {
    AlphaABS.LIBS.Sprite_Ext.prototype.update.call(this);
    if(this._hover && !this._hover.isFree()) {
      if (this.backSprite)
        this._checkIsNeedDrawText();
    }
  };

  UIObject_Container.prototype.setText = function (text, always) {
    this.text = text;
    this.text_vis_always = always || false;
  };

  UIObject_Container.prototype.addUI = function (element) {
    this._uiElement = element;
    this.addChild(element);
  };

  UIObject_Container.prototype.onStartMove = function () {
    if (this._hover) this._hover.freeze();
  };

  UIObject_Container.prototype.onEndMove = function () {
    if (this._hover) this._hover.free();
    this._updateButtonsPlacement();
  };

  UIObject_Container.prototype.onFree = function () {
    if (this.backSprite) {
      this.backSprite.visible = true;
    } else {
      this.backSprite = new Sprite();
      this.backSprite.bitmap = new Bitmap(this.width, this.height);
      this.backSprite.bitmap.fillRect(0, 0, this.width, this.height, Color.BLACK.CSS);
      this.backSprite.opacity = 100;
      this.addChild(this.backSprite);
      this._checkIsNeedDrawText();
    }
    this.visible = true;
    this.refreshVisButtons();
    this._hover = new AlphaABS.LIBS.Sprite_Hover(this.width, this.height);
    this.addChild(this._hover);
  };

   UIObject_Container.prototype._checkIsNeedDrawText = function() {
    if (this.text) {
      if (this.text_vis_always)
        this._drawText();
      else {
        if (this._uiElement && this._uiElement.visible == false) {
          this._drawText();
        }
      }
    }
  };

  UIObject_Container.prototype._drawText = function () {
    this.backSprite.bitmap.fillRect(0, 0, this.width, this.height, Color.BLACK.CSS);
    this.backSprite.opacity = 100;
    var text = this.text + ' (' + this.x + ',' + this.y + ')';
    this.backSprite.bitmap.drawText(text, 4, this.height / 2, this.width-8, 0, 'center');
  };

  UIObject_Container.prototype.onFreeze = function () {
    if (this.backSprite) {
      this.backSprite.visible = false;
    }
    if (this._uiElementVisMode == false)
      this.visible = false;

    if (this._visibleButton) {
      this._visibleButton.visible = false;
      this._visibleButton2.visible = false;
    }
  };

  UIObject_Container.prototype.setElementVisibility = function (isVis) {
    this._uiElementVisMode = isVis;
    if (this._uiElementVisMode == false && this._free == false) {
      this.visible = false;
    }
    this.refreshVisButtons();
  };

  UIObject_Container.prototype.setSpecialMode = function (value) {
    if (value == true) {
      this._specButton.callClickHandler();
    }

    this._specMode = value;
  };

  UIObject_Container.prototype.visibleMode = function () {
    return this._uiElementVisMode;
  };

  UIObject_Container.prototype.specialMode = function () {
    return this._specMode;
  };

  UIObject_Container.prototype.addSpecialButton = function (button_config) {
    this._specButton = new UIObject_ContainerButton(button_config.image);
    this._specButton.setClickHandler(function () {
      button_config.func();
      this.removeChild(this._hover);
      this._hover = new AlphaABS.LIBS.Sprite_Hover(this.width, this.height);
      this.addChild(this._hover);
    }.bind(this));
    this._updateButtonsPlacement();
    this.addChild(this._specButton);
    this._specButton.visible = false;
  };

  //TODO: Надо создать отдельную кнопку (класс) от Sprite_Button
  UIObject_Container.prototype.addVisButtton = function () {
    //LOG.p("Visible buttons created");
    this._visibleButton = new UIObject_ContainerButton(AlphaABS.DATA.IMG.IconEyeOn.bitmap);
    this._visibleButton2 = new UIObject_ContainerButton(AlphaABS.DATA.IMG.IconEyeOff.bitmap);
    this.refreshVisButtons();

    this._visibleButton.setClickHandler(function () {
      this._visClickHandler();
    }.bind(this));
    this._visibleButton2.setClickHandler(function () {
      this._visClickHandler();
    }.bind(this));
    this._updateButtonsPlacement();

    this.addChild(this._visibleButton);
    this.addChild(this._visibleButton2);
  };

  UIObject_Container.prototype._updateButtonsPlacement = function () {
    if (!this._visibleButton) return;

    var _r = 0;
    var _u = 0;
    if (SDK.toGlobalCoord(this, 'x') < Graphics.width / 2) {
      _r = 1;
    }

    if (SDK.toGlobalCoord(this, 'y') < Graphics.height / 2) {
      _u = 1;
    }

    if (_r == 1) {
      this._visibleButton.x = this.width;
      if (this._specButton)
        this._specButton.x = this._visibleButton.x + 24;
    } else {
      this._visibleButton.x = -24;
      if (this._specButton)
        this._specButton.x = this._visibleButton.x - 24;
    }

    if (_u == 1) {
      this._visibleButton.y = this.height;
      if (this._specButton)
        this._specButton.y = this._visibleButton.y;
    } else {
      this._visibleButton.y = -24;
      if (this._specButton)
        this._specButton.y = this._visibleButton.y;
    }


    this._visibleButton2.x = this._visibleButton.x;
    this._visibleButton2.y = this._visibleButton.y;

    if (this.backSprite) {
      this.backSprite.bitmap.clear();
      this.backSprite.bitmap.fillRect(0, 0, this.width, this.height, Color.BLACK.CSS);
      this.backSprite.opacity = 100;
      this._checkIsNeedDrawText();
    }
  };



  UIObject_Container.prototype.refreshVisButtons = function () {
    //LOG.p("Refresh visible buttons");
    if (!this._visibleButton) return;
    if (this._uiElementVisMode == false) {
      this._visibleButton.visible = false;
      this._visibleButton2.visible = true;
    } else {
      this._visibleButton.visible = true;
      this._visibleButton2.visible = false;
    }

    if (this._specButton)
      this._specButton.visible = true;

    if (!this._free) {
      if (this._visibleButton) {
        this._visibleButton.visible = false;
        this._visibleButton2.visible = false;
      }
      if (this._specButton)
        this._specButton.visible = false;
    }
  };


  UIObject_Container.prototype._visClickHandler = function () {
    //LOG.p("Visible button clicked");
    this.setElementVisibility(!this._uiElementVisMode);
    $gameVariables.setUIParam('visX', this._uiElementVisMode);
    this.refreshVisButtons();
  };

  //END UIObject_Container
  //------------------------------------------------------------------------------
  AlphaABS.register(UIObject_Container);
})();
(function(){

  //UIObject_ContainerButton
  //------------------------------------------------------------------------------
    class UIObject_ContainerButton extends Sprite_Button
    {
      constructor(iconBitmap) {
        super();
        this.image = iconBitmap;
        this.refresh();
      }

      refresh() {
        this.bitmap = new Bitmap(this.image.width, this.image.height);
        //this.bitmap.fillRect(0,0,this.image.width, this.image.height, Color.BLACK.CSS); //getLightestColor(250)
        this.bitmap.blt(this.image, 0, 0, this.image.width, this.image.height, 0, 0);
      }
    }

    //END UIObject_ContainerButton
  //------------------------------------------------------------------------------

  AlphaABS.register(UIObject_ContainerButton);


})();

(function(){
  //UIObject_ControlPanel
  //------------------------------------------------------------------------------
    function UIObject_ControlPanel() {
        this.initialize.apply(this, arguments);
    }

    UIObject_ControlPanel.prototype = Object.create(Sprite.prototype);
    UIObject_ControlPanel.prototype.constructor = UIObject_ControlPanel;

    UIObject_ControlPanel.prototype.initialize = function() {
        Sprite.prototype.initialize.call(this);
      this.items = [];
      this._transfered = false;
      this._isVisible = true;
      this.setFrame(0,0,this._getY(1),this._getY(4));

      this._iconParameters = [];
      if(AlphaABS.Parameters.isLoaded()) {
        var parameters = AlphaABS.Parameters.get_UIE_PlayerHotBar();
        this._isVisible = parameters.Visible;
        for(var i = 1; i<6; i++)
          this._iconParameters[i-1] = parameters['Item'+i];
      } else {
        this._iconParameters = [true,true,true,true,true];
      }
      this.visible = this._isVisible;
    };

    UIObject_ControlPanel.prototype.showPanel = function() {
      this.visible = this._isVisible;
    };

    UIObject_ControlPanel.prototype.hidePanel = function() {
      this.visible = false;
    };

    UIObject_ControlPanel.prototype.terminate = function() {
      this.items.forEach(function(item) {
        item.terminate();
      });
    };

    UIObject_ControlPanel.prototype.checkTouch = function() {
      if(!this.visible) return null;
      if(this.parent) {
        if(this.parent.visible == false)
          return null;
      }
      for(var i = 0; i<this.items.count(); i++) {
        if(this.items[i].isTouched()) {
          return i;
        }
      }
      return null;
    };

    UIObject_ControlPanel.prototype.setEditMode = function() {
      this.items.forEach(function(item) {
        item.setEditMode();
      });
    };

    UIObject_ControlPanel.prototype.touchItemAt = function(index) {
      this.items[index].pulse();
    };

    UIObject_ControlPanel.prototype.selectItemAt = function(index, isSelect) {
      this.items[index].setSelected(isSelect);
    };

    UIObject_ControlPanel.prototype.disableItemAt = function(index, isDisable) {
      this.items[index].setDisabled(isDisable);
    };

    UIObject_ControlPanel.prototype.setIconAt = function(index, iconIndex) {
      this.items[index].setIcon(iconIndex);
    };

    UIObject_ControlPanel.prototype.setKeyAt = function(index, symbol) {
      this.items[index].setKey(symbol);
    };

    UIObject_ControlPanel.prototype.addItem = function() {
      this.items.push(new AlphaABS.LIBS.UIObject_ControlPanelItem());
      var item = this.items.last();
      item.y = this._getY(this.items.count() - 1);
      this.addChild(item);
      return item;
    };

    UIObject_ControlPanel.prototype.addEmptyItem = function() {
      this.items.push(new AlphaABS.LIBS.UIObject_ControlPanelItemDummy());
      var item = this.items.last();
      if(this.items.length > 1) {
        var prevItem = this.getPrevItem();
        item.y = this.getPrevItem().y;
      }
      this._emptyItems += 1;
      this.addChild(item);
      return item;
    };

    UIObject_ControlPanel.prototype.refreshWeaponIconAt = function(index) {
      if(!$gamePlayer.battler()) {
              this.setIconAt(index, AlphaABS.DATA.IMG.IconNoWeapon.bitmap);
              return;
          }
          var t = $gamePlayer.battler().weapons().first();
          if(t && (t.iconIndex > 0)) {
              this.setIconAt(index, t.iconIndex);
          } else {
              this.setIconAt(index, AlphaABS.DATA.IMG.IconNoWeapon.bitmap);
          }
          this.items[index].setSkill($gamePlayer.battler().skillABS_attack());
    };

    UIObject_ControlPanel.prototype.getLastItemIndex = function() {
      return this.items.count() - 1;
    };

    UIObject_ControlPanel.prototype.createBaseItems = function() {
      this._emptyItems = 0;
      //Attack
      var item = (this._iconParameters[0]) ? this.addItem() : this.addEmptyItem();
      var index = this.getLastItemIndex();
      this.refreshWeaponIconAt(index);
      item.setKey(AlphaABS.LIBS.IKey.CP_A());
      //Follow
      item = (this._iconParameters[1]) ? this.addItem() : this.addEmptyItem();
      item.setIcon(AlphaABS.DATA.IMG.IconFollow.bitmap);
      item.setKey(AlphaABS.LIBS.IKey.CP_W());
      //Jump
      item = (this._iconParameters[2]) ? this.addItem() : this.addEmptyItem();
      item.setIcon(AlphaABS.DATA.IMG.IconJump.bitmap);
      item.setKey(AlphaABS.LIBS.IKey.CP_S());
      //Rotate
      item = (this._iconParameters[3]) ? this.addItem() : this.addEmptyItem();
      item.setIcon(AlphaABS.DATA.IMG.IconToMouse.bitmap);
      item.setKey(AlphaABS.LIBS.IKey.CP_D());

      //SwitchWeapon
        item = (this._iconParameters[4]) ? this.addItem() : this.addEmptyItem();
        item.setIcon(AlphaABS.DATA.IMG.IconSwitchWeapon.bitmap);
        item.setKey(AlphaABS.LIBS.IKey.WC());

      this._setFrame();
      this._rearangeInVertical();
    };

    UIObject_ControlPanel.prototype.refresh = function() {
      for(var i = 0; i<this.items.length; i++) {
              this.items[i].refresh();
          }
    };

    UIObject_ControlPanel.prototype.transfer = function() {
      if(this._transfered) {
        this._transferOut();
      } else {
        this._transferIn();
      }
    };

    UIObject_ControlPanel.prototype.isHorizontal = function() {
      return (this._transfered == true);
    };

    UIObject_ControlPanel.prototype.getRealCount = function() {
      return (this.items.length - this._emptyItems);
    };


    UIObject_ControlPanel.prototype.getPrevItem = function() {
      return this.items[this.items.length - 2];
    };

    //PRIVATE
    UIObject_ControlPanel.prototype._getY = function(index) {
      return 38 * index;
    };

    UIObject_ControlPanel.prototype._setFrame = function() {
      this.width = this._getY(1);
      this.height = this._getY(1) * this.getRealCount();
      this.setFrame(this.x,this.y,this.width,this.height);
    };

    UIObject_ControlPanel.prototype._transferIn = function() {
      //LOG.p("Transfer IN");
      this._transfered = true;

      this._oldWidth = this.width;
      this._oldHeigth = this.height;

      this.width = this._getY(1) * this.getRealCount();
      this.height = this._getY(1);

      this.setFrame(this.x,this.y,this.width,this.height);
      this._rearangeInHorizontal();
    };

    UIObject_ControlPanel.prototype._transferOut = function() {
      //LOG.p("Transfer OUT");
      this._transfered = false;

      this.width = this._oldWidth;
      this.height = this._oldHeigth;

      this.setFrame(this.x,this.y,this.width, this.height);
      this._rearangeInVertical();
    };

    UIObject_ControlPanel.prototype._rearangeInHorizontal = function() {
      for(var i = 0; i<this.items.length; i++) {
        var item = this.items[i];
        item.y = 0;
        if(i > 0) {
          if(item.isEmpty()) {
            item.x = this.items[i-1].x;
          } else
            item.x = this.items[i-1].x + this._getY(1);
        } else {
          item.x = 0;
        }
      }
    };

    UIObject_ControlPanel.prototype._rearangeInVertical = function() {
      for(var i = 0; i<this.items.length; i++) {
        var item = this.items[i];
        item.x = 0;
        if(i > 0) {
          if(item.isEmpty()) {
            item.y = this.items[i-1].y;
          } else
            item.y = this.items[i-1].y + this._getY(1);
        } else {
          item.y = 0;
        }
      }
    };

    AlphaABS.register(UIObject_ControlPanel);
    //END UIObject_ControlPanel
  //------------------------------------------------------------------------------
})();

(function () {

  var ABSUtils = AlphaABS.UTILS;

  class UIObject_ControlPanelItem extends Sprite {
    constructor() {
      super(new Bitmap(40, 40));
      this._iconIndex = null; //No icon

      this._createBorder();
      this._createMask();
      this._createOverlay();
      this._createHover();

      this._help = null;
      this._symbol = null;
      this._absSkill = null;

      this._thread = setInterval(function () {
        this._updateABS();
      }.bind(this), 10);
    }

    setEditMode() {
      this._hover.visible = false;
      if (this._help) {
        this._help.visible = false;
      }
    }

    setIcon(index) {
      this._iconIndex = index;
      this._drawIcon();
    }

    setKey(symbol) {
      this._symbol = symbol;
      this._drawSymbol();
    }

    setSkill(absSkill) {
      this._absSkill = absSkill;
      if (!this.spriteAmmoCount) {
        this.spriteAmmoCount = new Sprite(new Bitmap(this.bitmap.width, this.bitmap.height));
        this.addChild(this.spriteAmmoCount);
      } else {
        if (this._absSkill == null) this.spriteAmmoCount.bitmap.clear();
      }

      if (absSkill != null && this._help == null) {
        this._createHelp();
      }
    }

    refresh() {
      this._drawSymbol();
    }

    pulse() {
      this._spriteMask.setParams(140, Color.BLUE);
      this._spriteMask.showMaskOne(15);
    }

    isEmpty() {
      return (this._iconIndex == null);
    }

    setSelected(isSelect) {
      if (isSelect) {
        this.spriteOverlay.bitmap.fillRect(0, 0, this.spriteOverlay.bitmap.width, this.spriteOverlay.bitmap.height, Color.RED.CSS);
      } else {
        this.spriteOverlay.bitmap.clear();
      }
    }

    setDisabled(isDisabled) {
      if (isDisabled) {
        this.spriteOverlay.bitmap.fillRect(0, 0, this.spriteOverlay.bitmap.width, this.spriteOverlay.bitmap.height, Color.BLACK.CSS);
      } else {
        this.spriteOverlay.bitmap.clear();
      }
    }

    isTouched() {
      return ABSUtils.SMath.inRect(new ABSUtils.PointX(TouchInput.x, TouchInput.y), this._getRectangle());
    }

    terminate() {
      clearInterval(this._thread);
    }

    //PRIVATE
    _getRectangle() {
      return new Rectangle(ABSUtils.toGlobalCoord(this, 'x'), ABSUtils.toGlobalCoord(this, 'y'), this.width, this.height);
    }

    _updateABS() {
      this._spriteMask.update();
      this._drawAmmoCount();

      this._hover.update();
      if (this._help)
        this._help.update();
    }

    _drawSymbol() {
      if (!this.spriteText) {
        this.spriteText = new Sprite(new Bitmap(this.bitmap.width, this.bitmap.height));
        this.spriteText.bitmap.fontSize = 16;
        this.addChild(this.spriteText);
      }
      this.spriteText.bitmap.clear();
      if (this._symbol != null && !Utils.isMobileDevice()) {
        var x = AlphaABS.LIBS.IKey;
        var symb = x.convertIKeyToLetter(this._symbol);
        this.spriteText.bitmap.drawText(symb.toUpperCase(), 0, 0, this.spriteText.bitmap.width - 6, 24, 'right');
      }
    }

    _drawAmmoCount() {
      if (this._absSkill == null) return;
      this.spriteAmmoCount.bitmap.clear();
      if (this._absSkill.isNeedAmmo() && !this._absSkill.isFirearm()) {
        var b = this.spriteAmmoCount.bitmap;
        var count = $gameParty.numItems($dataItems[this._absSkill.ammo]);
        var c = b.textColor;
        if (count > 0) {
          b.textColor = Color.WHITE.CSS;
        } else
          b.textColor = Color.RED.CSS;

        var c2 = b.fontSize;
        b.fontSize = 14;
        b.drawText(count, 8, 2, 32, 24, 'left');

        b.textColor = c;
        b.fontSize = c2;
      }
    }

    _drawIcon() {
      this.bitmap.clear();
      if (this._iconIndex != null) {
        this.bitmap.drawIcon(4, 5, this._iconIndex, 30);
      }
    }

    _createBorder() {
      this.spriteBorder = new Sprite(AlphaABS.DATA.IMG.ControlPanelItem.bitmap);
      this.spriteBorder.x = 2;
      this.spriteBorder.y = 3;
      //this.spriteBorder.opacity = 150;
      this.addChild(this.spriteBorder);
    }

    _createOverlay() {
      this.spriteOverlay = new Sprite(new Bitmap(30, 30));
      this.spriteOverlay.x = 4;
      this.spriteOverlay.y = 5;
      this.spriteOverlay.opacity = 100;
      this.addChild(this.spriteOverlay);
    }

    _createMask() {
      this._spriteMask = new AlphaABS.LIBS.Sprite_Mask(AlphaABS.DATA.IMG.ItemMask.bitmap);
      this._spriteMask.x = 1;
      this._spriteMask.y = 2;
      this._spriteMask.scale.x = 0.85;
      this._spriteMask.scale.y = this._spriteMask.scale.x;
      this.addChild(this._spriteMask);
    }

    _createHover() {
      this._hover = new AlphaABS.LIBS.Sprite_Hover(30, 30);
      this._hover.x = 4;
      this._hover.y = 5;
      this.addChild(this._hover);
    }

    _createHelp() {
      this._help = new AlphaABS.LIBS.UIObject_HelpHover(30, 30);
      this._help.move(4, 5);
      this._help.setHover(this._hover);
      this._help.setSkillABS(this._absSkill);
      this._help.setWeaponMode();
      this.addChild(this._help);
    }
  }

  AlphaABS.register(UIObject_ControlPanelItem);
})();
(function(){
  //UIObject_ControlPanelItemDummy
  //------------------------------------------------------------------------------
    function UIObject_ControlPanelItemDummy() {
        this.initialize.apply(this, arguments);
    }

    UIObject_ControlPanelItemDummy.prototype = Object.create(AlphaABS.LIBS.UIObject_ControlPanelItem.prototype);
    UIObject_ControlPanelItemDummy.prototype.constructor = UIObject_ControlPanelItemDummy;

    UIObject_ControlPanelItemDummy.prototype.initialize = function() {
        Sprite.prototype.initialize.call(this);

    };

    UIObject_ControlPanelItemDummy.prototype.setEditMode = function() {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.setIcon = function(index) {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.setKey = function(symbol) {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.setSkill = function(absSkill) {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.refresh = function() {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.pulse = function() {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.isEmpty = function() {
      return true;
    };

    UIObject_ControlPanelItemDummy.prototype.setSelected = function(isSelect) {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.setDisabled = function(isDisabled) {
      //EMPTY
    };

    UIObject_ControlPanelItemDummy.prototype.isTouched = function() {
      return false;
    };

    UIObject_ControlPanelItemDummy.prototype.terminate = function() {
      //EMPTY
    };
    //END UIObject_ControlPanelItemDummy
  //------------------------------------------------------------------------------
  AlphaABS.register(UIObject_ControlPanelItemDummy);
})();

// Generated by CoffeeScript 2.3.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ UIObject_FirearmPanel.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var UIObject_FirearmPanel;
  UIObject_FirearmPanel = (function() {
    var Color;

    class UIObject_FirearmPanel extends Sprite {
      constructor() {
        super();
        this._createGlowFilter();
        this._createGauge();
        this._createWeaponNameText();
        this._createAmmoInfo();
        this.refresh();
      }

      _createGlowFilter() {
        this.glow = new Sprite(new Bitmap(UIObject_FirearmPanel.WIDTH, UIObject_FirearmPanel.HEIGHT));
        this.glow.bitmap.fillAll(Color.GREEN);
        this.glow.filters = [new PIXI.filters.GlowFilter(4, 4, 0, 0xFF0000, 0.5)];
        this.glow.visible = false;
        return this.addChild(this.glow);
      }

      _createGauge() {
        this.gauge = new AlphaABS.LIBS.UI_Gauge(UIObject_FirearmPanel.WIDTH, UIObject_FirearmPanel.HEIGHT);
        this.gauge.setGaugeColors(UIObject_FirearmPanel.FILL, UIObject_FirearmPanel.BLACK);
        this.gauge.setBackgroundColor(Color.BLACK.HEX);
        this.gauge.setValue(0);
        this.gauge.setMaxValue(100);
        this.gauge.opacity = 140;
        return this.addChild(this.gauge);
      }

      _createWeaponNameText() {
        var colorB;
        this.weapText = new Sprite(new Bitmap(60, UIObject_FirearmPanel.HEIGHT));
        colorB = Color.BLACK.reAlpha(180);
        this.weapText.bitmap.gradientFillRect(0, 0, 60, UIObject_FirearmPanel.HEIGHT, colorB.CSS, Color.NONE.CSS, false);
        return this.addChild(this.weapText);
      }

      _createAmmoInfo() {
        this.ammoInfo = new Sprite();
        this.ammoInfo.move(UIObject_FirearmPanel.WIDTH - 100, 4);
        this.ammoIcon = new Sprite(new Bitmap(16, 16));
        this.ammoIcon.move(0, -2);
        this.ammoInfo.addChild(this.ammoIcon);
        this.ammoCount = new Sprite(new Bitmap(30, UIObject_FirearmPanel.HEIGHT));
        this.ammoCount.move(10, 0);
        this.ammoInfo.addChild(this.ammoCount);
        this.addChild(this.ammoInfo);
        this.charges = new Sprite(new Bitmap(30, UIObject_FirearmPanel.HEIGHT));
        this.charges.move(UIObject_FirearmPanel.WIDTH - 40, 4);
        return this.addChild(this.charges);
      }

      refresh() {
        var e, weapData;
        if (!$gamePlayer.battler()) {
          return;
        }
        try {
          weapData = $gamePlayer.battler().weapons()[0];
          if (weapData != null) {
            this._drawWeaponText(weapData.name);
          }
          this._absSkill = $gamePlayer.battler()._firstBattleABSSkill();
          if ((this._absSkill != null) && this._absSkill.isFirearm()) {
            return this._drawWeaponInfo();
          } else {
            return this.hide();
          }
        } catch (error) {
          e = error;
          AlphaABS.error(e, 'while refresh FirearmPanel');
          return this.hide();
        }
      }

      _drawWeaponText(text) {
        this.weapText.bitmap.clear();
        this.weapText.bitmap.fontSize = 12;
        return this.weapText.bitmap.drawText(text, 0, 10, 60, 1, 'center');
      }

      _drawWeaponInfo() {
        var ammoItem;
        ammoItem = $dataItems[this._absSkill.ammo];
        if (ammoItem == null) {
          return;
        }
        this._drawIcon(ammoItem.iconIndex);
        this._drawAmmoCount($gameParty.numItems(ammoItem));
        return this._drawChargesCount(this._absSkill._currentStack, this._absSkill.stack);
      }

      _drawIcon(index) {
        this.ammoIcon.bitmap.clear();
        return this.ammoIcon.bitmap.drawIcon(0, 0, index, 14);
      }

      _drawAmmoCount(count) {
        this.ammoCount.bitmap.clear();
        this.ammoCount.bitmap.fontSize = 12;
        this.ammoCount.bitmap.textColor = Color.WHITE.CSS;
        if (count === 0) {
          this.ammoCount.bitmap.textColor = Color.RED.CSS;
        }
        return this.ammoCount.bitmap.drawText(count, 0, 5, 30, 1, 'center');
      }

      _drawChargesCount(current, max) {
        var text;
        this.charges.bitmap.clear();
        this.charges.bitmap.fontSize = 12;
        this.charges.bitmap.textColor = Color.WHITE.CSS;
        if (current === 0) {
          this.charges.bitmap.textColor = Color.RED.CSS;
        }
        if (current == null) {
          current = 0;
        }
        text = current.toString() + '/' + max.toString();
        return this.charges.bitmap.drawText(text, 0, 5, 30, 1, 'center');
      }

      hide() {
        return this.visible = false;
      }

      show() {
        return this.visible = true;
      }

      isTouched() {
        var isTouch, point;
        try {
          if (this.visible === false) {
            return false;
          }
          point = new AlphaABS.UTILS.PointX(TouchInput.x, TouchInput.y);
          return isTouch = AlphaABS.UTILS.SMath.inRect(point, this._getRectangle());
        } catch (error) {
          return false;
        }
      }

      _getRectangle() {
        return new Rectangle(AlphaABS.UTILS.toGlobalCoord(this, 'x'), AlphaABS.UTILS.toGlobalCoord(this, 'y'), this.gauge.width, this.gauge.height);
      }

      update() {
        var ref;
        super.update();
        if (this.visible === false) {
          return;
        }
        if (TouchInput.isLongPressed() && this.isTouched()) {
          if ((ref = $gamePlayer.battler()) != null) {
            ref.reloadFirearm();
          }
          this._pulse(0x00FF00);
          TouchInput.clear();
        }
        this.gauge.setMaxValue(this._absSkill.timer.getMaxValue());
        if (AlphaABS.BattleManagerABS.canUseSkillByAmmo(this._absSkill)) {
          this.gauge.setGaugeColors(UIObject_FirearmPanel.FILL, UIObject_FirearmPanel.BLACK);
          this.gauge.setValue(this._absSkill.timer.getValue());
          if (this._absSkill.timer.getMaxValue() === this._absSkill.timer.getValue()) {
            this.gauge.setValue(0);
            return this.refresh();
          }
        } else {
          this._drawChargesCount(this._absSkill._currentStack, this._absSkill.stack);
          this.gauge.setGaugeColors(UIObject_FirearmPanel.ALERT, UIObject_FirearmPanel.BLACK);
          return this.gauge.setValue(this._absSkill.timer.getMaxValue());
        }
      }

      _pulse(color) {
        var gl, tFunc, thread32, up;
        this.glow.filters[0].color = color;
        this.glow.opacity = 0;
        this.glow.visible = true;
        gl = this.glow;
        up = true;
        return thread32 = setTimeout((tFunc = function() {
          if (up === true) {
            gl.opacity += 30;
          }
          if (gl.opacity >= 255) {
            up = false;
          }
          if (up === false) {
            gl.opacity -= 60;
          }
          if (gl.opacity > 0) {
            return setTimeout(tFunc, 100);
          }
        }), 100);
      }

    };

    Color = KDCore.Color;

    UIObject_FirearmPanel.WIDTH = 280;

    UIObject_FirearmPanel.HEIGHT = 20;

    UIObject_FirearmPanel.FILL = Color.GREEN.reAlpha(200).HEX;

    UIObject_FirearmPanel.ALERT = Color.RED.reAlpha(200).HEX;

    UIObject_FirearmPanel.BLACK = Color.BLACK.reAlpha(200).HEX;

    return UIObject_FirearmPanel;

  }).call(this);
  AlphaABS.register(UIObject_FirearmPanel);
})();

// ■ END UIObject_FirearmPanel.coffee
//---------------------------------------------------------------------------

(function(){
  //UIObject_HelpHover
  //------------------------------------------------------------------------------
    function UIObject_HelpHover() {
        this.initialize.apply(this, arguments);
    }

    UIObject_HelpHover.prototype = Object.create(Sprite.prototype);
    UIObject_HelpHover.prototype.constructor = UIObject_HelpHover;

    UIObject_HelpHover.prototype.initialize = function(width, height) {
        Sprite.prototype.initialize.call(this);

        this.setFrame(0,0,width, height);
        this._hoverHelp = new AlphaABS.LIBS.Sprite_Ext2(120);
        this._hoverHelp.bitmap = new Bitmap(width, height);

        this._skillInfo = null;
        this._swing = null;
        this._skillABS = null;
        this._infoVisible = false;
        this._updateTimer = new Game_TimerABS();
        this._updateTimer.start(60);
        this._weaponMode = false;

        this.addChild(this._hoverHelp);

        this._setup();
    };

    UIObject_HelpHover.prototype.terminate = function() {
      this._hoverHelp.terminate();
    };

    UIObject_HelpHover.prototype.update = function() {
      Sprite.prototype.update.call(this);
      this._hoverHelp.update();
      if(this._swing)
        this._swing.update();

      if(this._infoVisible === true) {
        this._updateTimer.update();
        if(this._updateTimer.isReady()) {
          this._skillInfo.refresh();
          this._updateTimer.reset();
        }
      }
    };

    UIObject_HelpHover.prototype.setHover = function(hover) {
      this._hover = hover;
    };

    UIObject_HelpHover.prototype.setSkillIndex = function(index) {
      this._skillABS = $gamePlayer.battler().uiPanelSkills()[index];
    };

    UIObject_HelpHover.prototype.setSkillABS = function(skillABS) {
      this._skillABS = skillABS;
    };

    UIObject_HelpHover.prototype.setWeaponMode = function() {
      this._weaponMode = true;
    };

    //PRIVATE
    UIObject_HelpHover.prototype._setup = function() {
      this._hoverHelp.setReadyHandler(function(){
        if(!this._isSkillExist()) return;

        this._createSkillInfo();
        this._createSwing();
        this._swing.start();

        if(this._hover)
                this._hover.freeze();

              this._infoVisible = true;
          }.bind(this));

          this._hoverHelp.setOutHandler(function(){
            if(!this._isSkillExist()) return;

            if(this._skillInfo) {
                this._skillInfo.visible = false;
                this.removeChild(this._skillInfo);
                this._skillInfo = null;
            }
              this._swing.stop();
              if(this._hover)
                this._hover.free();

              this._infoVisible = false;
          }.bind(this));
    };

    UIObject_HelpHover.prototype._createSkillInfo = function() {
      if(this._weaponMode) {
        this._skillABS = $gamePlayer.battler().skillABS_attack();
      }
      this._skillInfo = new AlphaABS.LIBS.UIObject_ABSSkillInfo(this._skillABS, this._weaponMode);
      AlphaABS.UTILS.linkSprite(this._hoverHelp, this._skillInfo);
      this.addChild(this._skillInfo);
    };

    UIObject_HelpHover.prototype._createSwing = function() {
      this._swing = new AlphaABS.LIBS.UIObject_OpacitySwing(this._skillInfo, 30);
          this._swing.setToUp();
    };

    UIObject_HelpHover.prototype._isSkillExist = function() {
      return (this._skillABS != null);
    };
    //END UIObject_HelpHover
  //------------------------------------------------------------------------------

  AlphaABS.register(UIObject_HelpHover);

})();

(function () {
    //UIObject_OpacitySwing
    //------------------------------------------------------------------------------
    class UIObject_OpacitySwing {
        constructor(object, time) { //object with opacity, timer = Game_TimerABS
            this._main = object;
            this.mode = 1;
            this.repeat = false;
            this.ready = false;
            this._start = false;
            this.config = {};
            this.config.start = object.opacity;
            this.config.step = Math.round(object.opacity / time); //timer.getMaxValue()
            this._refreshConfig();
        }

        start() {
            this.ready = false;
            this._start = true;
        }

        reset() {
            this.ready = true;
            this._main.opacity = this.config.start;
        }

        stop() {
            this._start = false;
        }

        isStarted() {
            return (this._start == true);
        }

        isReady() {
            return (this.ready == true);
        }

        setToUp() {
            //LOG.p("toUP");
            this.mode = 0;
            this._start = false;
            this._refreshConfig();
        }

        setToDown() {
            //LOG.p("toDWN");
            this.mode = 1;
            this._start = false;
            this._refreshConfig();
        }

        setRepeat() {
            this.repeat = true;
        }

        isUp() {
            return (this.mode == 0);
        }

        update() {
            if (this._start == false) return;

            if (this.isUp())
                this._updateUp();
            else
                this._updateDown();

            if (this.isReady() && this.repeat == true) {
                if (this.isUp()) {
                    this.setToDown();
                    this.start();
                } else {
                    this.setToUp();
                    this.start();
                }
            }
        }

        //PRIVATE
        _refreshConfig() {
            if (this.isUp()) {
                this.config.toV = this.config.start;
                this.config.from = 0;
            } else {
                this.config.toV = 0;
                this.config.from = this.config.start;
            }
            this._main.opacity = this.config.from;
        }

        _updateUp() {
            if (this.ready) return;

            if (this._main.opacity < (this.config.toV - this.config.step)) {
                this._main.opacity += this.config.step;
            } else {
                this._main.opacity = this.config.toV;
                this.ready = true;
            }
        }

        _updateDown() {
            if (this.ready) return;

            if (this._main.opacity > (this.config.toV + this.config.step)) {
                this._main.opacity -= this.config.step;
            } else {
                this._main.opacity = this.config.toV;
                this.ready = true;
            }
        }
    }
    AlphaABS.register(UIObject_OpacitySwing);
    //END UIObject_OpacitySwing
    //------------------------------------------------------------------------------

})();
(function () {

  var PointX = AlphaABS.UTILS.PointX;

  // vscode-fold=#

  class UIObject_SkillPanelItem extends Sprite {
    constructor(index) {
      super(new Bitmap(40, 40));
      this.index = index;
      this.item = null;
      this._thread = setInterval(function () {
        this._updateABS();
      }.bind(this), 10);
      this.bitmap.fontSize = 18;
      this.bitmap.outlineWidth = 3;
      this.bitmap.outlineColor = Color.BLACK.CSS;
      this._pulsed = true;
      this._createOverlay();
      this._createHover();
      this._createHelp();
      this._createRecharge();
      this._createMask();
      this._updateABS();
    }

    setEditMode() {
      this.removeChild(this._hover);
      this.removeChild(this._help);
      this._help.visible = false;
    }

    pulse() {
      this._spriteMask.setParams(120, Color.BLUE);
      this._spriteMask.showMaskOne(15);
    }

    pulseReady() {
      if (!this._pulsed) {
        this._spriteMask.setParams(120, Color.GREEN);
        this._spriteMask.showMaskOne(15);
        this._pulsed = true;
      }
    }

    isTouched() {
      return AlphaABS.UTILS.SMath.inRect(new PointX(TouchInput.x, TouchInput.y), this._getRectangle());
    }

    terminate() {
      if (this.parent)
        this.parent.removeChild(this);
      clearInterval(this._thread);
      this._help.terminate();
    }

    //PRIVATE
    _getRectangle() {
      return new Rectangle(AlphaABS.UTILS.toGlobalCoord(this, 'x'), AlphaABS.UTILS.toGlobalCoord(this, 'y'), this.width, this.height);
    }

    _updateABS() {
      if (!this.bitmap) return;
      this.bitmap.clear();
      if (this.spriteRecharge)
        this.spriteRecharge.bitmap.clear();
      this.item = $gamePlayer.battler().uiPanelSkills()[this.index];
      if (this.item !== null) {
        this._hover.update();
        this._help.update();
        this._hover.visible = true;
        var object = this.item.skill();
        this.bitmap.drawIcon(6, 7, object.iconIndex, 32);
        if (AlphaABS.BattleManagerABS.canUseABSSkillUI(this.item)) {
          this.bitmap.textColor = Color.WHITE.CSS;
          //this.spriteOverlay.visible = false;
          this.pulseReady();

        } else {
          this.bitmap.textColor = Color.RED.CSS;
          if (AlphaABS.BattleManagerABS.canUseSkillByTimer(this.item)) {
            //this.spriteOverlay.visible = true;
            if (!Utils.isMobileDevice())
              this._drawKeySymbol();
          } else {
            //this.bitmap.drawText(this._framesToTime(t.timer.getMaxValue() - t.timer.getValue()), 6,6, 32, 24, 'right');
            this._pulsed = false;
            this._drawRecharge(this.item);
          }
        }

        if (!Utils.isMobileDevice())
          this._drawKeySymbol();
        if (this.item.isItem()) {
          var count = $gameParty.numItems(object);
          var c = this.bitmap.textColor;
          if (count > 0) {
            this.bitmap.textColor = Color.WHITE.CSS;
          } else
            this.bitmap.textColor = Color.RED.CSS;

          var c2 = this.bitmap.fontSize;
          this.bitmap.fontSize = 14;
          this.bitmap.drawText(count, 8, 22, 32, 24, 'left');

          this.bitmap.textColor = c;
          this.bitmap.fontSize = c2;
        }

        if (this.item.isNeedAmmo()) {
          var count = $gameParty.numItems($dataItems[this.item.ammo]);
          var c = this.bitmap.textColor;
          if (count > 0) {
            this.bitmap.textColor = Color.WHITE.CSS;
          } else
            this.bitmap.textColor = Color.RED.CSS;

          var c2 = this.bitmap.fontSize;
          this.bitmap.fontSize = 14;
          this.bitmap.drawText(count, 8, 2, 32, 24, 'left');

          this.bitmap.textColor = c;
          this.bitmap.fontSize = c2;
        }
      } else {
        this._hover.visible = false;
      }
      if (this._spriteMask)
        this._spriteMask.update();
    }

    _drawKeySymbol() {
      var x = AlphaABS.LIBS.IKey;
      var symb = x['SP_' + (this.index + 1)]();
      symb = x.convertIKeyToLetter(symb);
      this.bitmap.drawText(symb.toUpperCase(), 6, 6, 32, 24, 'right');
    }

    _calc_px_percent(current, max) {
      var c_inp = (100 * current) / max;
      return Math.floor((32 * c_inp) / 100);
    }

    _createMask() {
      this._spriteMask = new AlphaABS.LIBS.Sprite_Mask(AlphaABS.DATA.IMG.ItemMask.bitmap);
      this._spriteMask.x = -1;
      this._spriteMask.y = 1;
      this.addChild(this._spriteMask);
    }

    _drawRecharge(skill) {
      var height = this._calc_px_percent(skill.timer.getValue(), skill.timer.getMaxValue());
      var color = (height < 32) ? ((height < 16) ? Color.RED : Color.YELLOW) : Color.GREEN;
      this.spriteRecharge.bitmap.fillRect(0, 32 - height, 32, height, color.CSS);
    }

    _createRecharge() {
      this.spriteRecharge = new Sprite(new Bitmap(32, 32));
      this.spriteRecharge.x = 6;
      this.spriteRecharge.y = 7;
      this.spriteRecharge.opacity = 100;
      this.addChild(this.spriteRecharge);
    }

    _createHover() {
      this._hover = new AlphaABS.LIBS.Sprite_Hover(32, 32);
      this._hover.x = 6;
      this._hover.y = 7;
      this.addChild(this._hover);
    }

    _createHelp() {
      if(this._help)
        this.removeChild(this._help);
      this._help = new AlphaABS.LIBS.UIObject_HelpHover(32, 32);
      this._help.move(6, 7);
      this._help.setHover(this._hover);
      this._help.setSkillIndex(this.index);
      this.addChild(this._help);
    }

    _createOverlay() {
      //EMPTY
    }

  }

  AlphaABS.register(UIObject_SkillPanelItem);

})();
(function () {
  class UIObject_SkillPanelItem_L extends Sprite {
    constructor(index, actor) {
      super(new Bitmap(40, 40));
      this.actor = actor;
      this.index = index;
      this.item = null;
      this.bitmap.fontSize = 18;
      this.bitmap.outlineWidth = 3;
      this.bitmap.outlineColor = Color.BLACK.CSS;
      this._pulsed = true;
      this._createMask();
      this._update();
    }

    pulse() {
      this._spriteMask.setParams(120, Color.BLUE);
      this._spriteMask.showMaskOne(15);
    }

    pulseReady() {
      if (!this._pulsed) {
        this._spriteMask.setParams(120, Color.GREEN);
        this._spriteMask.showMaskOne(15);
        this._pulsed = true;
      }
    }

    isTouched() {
      return AlphaABS.UTILS.SMath.inRect(new AlphaABS.UTILS.PointX(TouchInput.x, TouchInput.y), this._getRectangle());
    }

    update() {
      //super();
      this._update();
    }

    terminate() {
      if (this.parent)
        this.parent.removeChild(this);
    }

    //PRIVATE
    _getRectangle() {
      return new Rectangle(AlphaABS.UTILS.toGlobalCoord(this, 'x'), AlphaABS.UTILS.toGlobalCoord(this, 'y'), this.width, this.height);
    }

    _update() {
      if (!this.bitmap) return;
      this.bitmap.clear();
      if (this.actor && this.actor.uiPanelSkills()) {
        this.item = this.actor.uiPanelSkills()[this.index];
        if (this.item !== null) {
          var object = this.item.skill();
          this.bitmap.drawIcon(6, 7, object.iconIndex, 32);
          if (this.item.isItem()) {
            var count = $gameParty.numItems(object);
            var c = this.bitmap.textColor;
            if (count > 0) {
              this.bitmap.textColor = Color.WHITE.CSS;
            } else
              this.bitmap.textColor = Color.RED.CSS;

            var c2 = this.bitmap.fontSize;
            this.bitmap.fontSize = 14;
            this.bitmap.drawText(count, 8, 22, 32, 24, 'left');

            this.bitmap.textColor = c;
            this.bitmap.fontSize = c2;
          }
        }
        this.bitmap.textColor = Color.WHITE.CSS;
        if (!Utils.isMobileDevice())
          this._drawKeySymbol();
        this._spriteMask.update();
      } else {
        this.bitmap.textColor = Color.WHITE.CSS;
        if (!Utils.isMobileDevice())
          this._drawKeySymbol();
      }
    }

    _drawKeySymbol() {
      var x = AlphaABS.LIBS.IKey;
      var symb = x['SP_' + (this.index + 1)]();
      symb = x.convertIKeyToLetter(symb);
      this.bitmap.drawText(symb.toUpperCase(), 6, 6, 32, 24, 'right');
    }

    _createMask() {
      this._spriteMask = new AlphaABS.LIBS.Sprite_Mask(AlphaABS.DATA.IMG.ItemMask.bitmap);
      this._spriteMask.x = -1;
      this._spriteMask.y = 1;
      this.addChild(this._spriteMask);
    }
  }

  AlphaABS.register(UIObject_SkillPanelItem_L);
})();
(function () {
  class UIObject_UserStatusBar extends Sprite {
    constructor(rowCount) {
      super();
      this._rowCount = rowCount;
      this._lastXPos = 0;
      this._lastYPos = 0;
      this._items = [];
      this._lastCount = 0;

      this._firstItemX = 34 * rowCount;
    }

    update() {
      //super();
      this._updateABS();
    }

    terminate() {
      this._items.forEach(function (item) {
        item.forEach(function (i) {
          if (i) i.terminate();
        });
      });
    }

    //PRIVATE
    _updateABS() {
      var items;
      try {
        items = $gamePlayer.battler().allIcons();
      } catch (e) {
        console.error(e);
        items = [];
      }
      if (this._lastCount == items.length) return;

      this._lastCount = items.length;
      for (var i = 0; i < items.length; i++) {
        var index = this._getIJForItem(i);
        var item = null;
        if (this._items[index.x]) {
          if (this._items[index.y]) {
            item = this._items[index.x][index.y];
          }
        }
        if (item) {
          item.setIndex(i);
        } else {
          if (!this._items[index.x]) {
            this._items[index.x] = [];
          }
          this._items[index.x][index.y] = new AlphaABS.LIBS.Sprite_UserStatusIcon();
          item = this._items[index.x][index.y];
          item.setIndex(i);
          var position = this._getXYForIJ(index.x, index.y);
          item.x = position.x;
          item.y = position.y;
          this.addChild(item);
        }
      }
    }

    _getIJForItem(index) {
      var i = 0;
      var j = 0;

      i = this._rowCount - (this._rowCount - index);
      while (i >= this._rowCount) {
        j++;
        i = i - this._rowCount;
      }

      return new AlphaABS.UTILS.PointX(i, j);
    }

    _getXYForIJ(i, j) {
      return new AlphaABS.UTILS.PointX(this._firstItemX - (i * 34), j * 64);
    }

  }

  AlphaABS.register(UIObject_UserStatusBar);

})();
// Generated by CoffeeScript 2.3.1
AlphaABS.printVersionInfo = function() {
  return LOGW.p(AlphaABS.Version + " build " + AlphaABS.Build + " on MV " + Utils.RPGMAKER_VERSION);
};

(function () {
    //Window_EquipItem
    //------------------------------------------------------------------------------
    Window_EquipItem.prototype.onTouch = function (triggered) {
        if (this._sCircle) {
            if (this._sCircle.isOpen() && this._sCircle.isTouchedAny()) {
                return;
            }
        }
        Window_ItemList.prototype.onTouch.call(this, triggered);
    };

    var _Window_EquipItem_setActor = Window_EquipItem.prototype.setActor;
    Window_EquipItem.prototype.setActor = function (actor) {
        _Window_EquipItem_setActor.call(this, actor);
        if (this._actor != null && AlphaABS.Parameters.isWeaponsAllowed() == true) {
            this._createFavWeapCircle();
            this._createFavWeapButton();
        }
    };

    Window_EquipItem.prototype.update = function () {
        Window_ItemList.prototype.update.call(this);
        if (this._sCircle && this._sCircle.isOpen()) {
            var index = AlphaABS.LIBS.IKey.isTriggeredWeapCircleIndex();
            if (index != null) {
                this.touchWeaponAt(index);
                this.refresh();
                return;
            }
        }
    };

    Window_EquipItem.prototype.drawItemNumber = function (item, x, y, width) {
        Window_ItemList.prototype.drawItemNumber.call(this, item, x, y, width);
        try {
            if (!this._actor) {
                return;
            }
            if (!DataManager.isWeapon(item))
                return;

            var symbol = this._actor.getFavWeapSymbol(item);
            if (symbol != null) {
                this.changeTextColor(Color.ORANGE.CSS);
                var spacer = '0000';
                if (Imported.YEP_ItemCore == true) {
                    spacer += '00';
                }
                if (!Utils.isMobileDevice())
                    this.drawText('[' + symbol.toUpperCase() + ']', x, y, width - this.textWidth(spacer), 'right');
                else
                    this.drawText('■', x, y, width - this.textWidth(spacer), 'right');
            }
        } catch (e) {
            console.error(e);
        }
    };

    //NEW
    Window_EquipItem.prototype.touchWeaponAt = function (index) {
        try {
            if (this._sCircle) {
                if (DataManager.isWeapon(this.item())) {
                    this._sCircle.click(index);
                    this._actor.setFavWeap(this.item(), index);
                    SoundManager.playEquip();
                    this._sCircle.refresh();
                    this.refresh();
                } else
                    SoundManager.playBuzzer();
            }
        } catch (e) {
            console.error(e);
        }
    };


    Window_EquipItem.prototype.refresh = function () {
        Window_ItemList.prototype.refresh.call(this);

    };

    Window_EquipItem.prototype.activate = function () {
        Window_ItemList.prototype.activate.call(this);
        if (this._sCircleButton) {
            this._sCircleButton.visible = true;
        }
    };

    Window_EquipItem.prototype.deactivate = function () {
        Window_ItemList.prototype.deactivate.call(this);
        try {
            if (this._sCircleButton) {
                this._sCircleButton.visible = false;
                if (this._sCircle && this._sCircle.isOpen())
                    this._sCircleButton.callClickHandler();
            }
        } catch (e) {
            console.error(e);
        }
    };

    Window_EquipItem.prototype._createFavWeapCircle = function () {
        try {
            this._sCircleBackSprite = new Sprite(new Bitmap((this.width / 2) - 4, this.height - 8));
            this._sCircleBackSprite.bitmap.addLoadListener(function () {
                this._sCircleBackSprite.bitmap.fillAll(Color.BLACK.reAlpha(200).CSS);
            }.bind(this));
            this._sCircleBackSprite.visible = false;
            this.addChild(this._sCircleBackSprite);
            this._sCircle = new AlphaABS.LIBS.UI_SelectCircleFW(this._actor, function (index) {
                this.touchWeaponAt(index);
            }.bind(this));
            this._sCircle.move(this._sCircleBackSprite.width / 2, this._sCircleBackSprite.height / 2);
            if (!Utils.isMobileDevice())
                this._sCircle.showHelpers();
            this._sCircleBackSprite.addChild(this._sCircle);
        } catch (e) {
            console.error(e);
            this._sCircle = null;
        }
    };

    Window_EquipItem.prototype._createFavWeapButton = function () {
        this._sCircleButton = new AlphaABS.LIBS.UIObject_ClickIcon(AlphaABS.DATA.IMG.IconSwitchWeapon.bitmap);
        this._sCircleButton.move(this.width - 36, this.height - 36);
        this._sCircleButton.visible = false;
        this._sCircleButton.setClickHandler(function () {
            if (this._sCircleButton.isClicked()) {
                this._onEquipMode();
            } else {
                this._offEquipMode();
            }
        }.bind(this));
        this._sCircleButton.setKeyHandler(AlphaABS.LIBS.IKey.WC());
        this.addChild(this._sCircleButton);
    };

    Window_EquipItem.prototype.select = function (index) {
        Window_ItemList.prototype.select.call(this, index);
        try {
            if (!this._sCircle) return;
            if (this.maxCols() > 1) {
                this._placeFavWeapCircle(index % this.maxCols());
            } else {
                this._placeFavWeapCircle(0);
            }

            if (this._sCircleButton) {
                this._sCircleButton.visible = DataManager.isWeapon(this.item());

            }
        } catch (e) {
            console.error(e);
        }
    };

    Window_EquipItem.prototype._onEquipMode = function () {
        if (!this._sCircle) return;
        this._sCircle.open();
        this._sCircleBackSprite.visible = true;
    };

    Window_EquipItem.prototype._offEquipMode = function () {
        if (!this._sCircle) return;
        this._sCircle.close();
        this._sCircleBackSprite.visible = false;
    };

    Window_EquipItem.prototype._placeFavWeapCircle = function (place) {
        try {
            if (place <= 0) { //RIGHT
                this._sCircleBackSprite.move(this.width - 6, this.height - 4);
                this._sCircleBackSprite.setStaticAnchor(1, 1);
            } else { //LEFT
                this._sCircleBackSprite.move(6, this.height - 4);
                this._sCircleBackSprite.setStaticAnchor(0, 1);
            }
        } catch (e) {
            console.error(e);
        }
    };
    //END Window_EquipItem
    //------------------------------------------------------------------------------

})();
(function () {
  var _Window_EquipSlot_drawItem = Window_EquipSlot.prototype.drawItem;
  Window_EquipSlot.prototype.drawItem = function (index) {
    _Window_EquipSlot_drawItem.call(this, index);
    try {
      if (index !== null || index !== undefined)
        this._drawFavWeapSymbol(index);
    } catch (e) {
      console.error(e);
    }
  };

  //NEW
  Window_EquipSlot.prototype._drawFavWeapSymbol = function (index) {
    if (this._actor) {
      var item = this._actor.equips()[index];
      if (item) {
        var symbol = this._actor.getFavWeapSymbol(item);
        if (symbol != null) {
          this.changeTextColor(Color.ORANGE.CSS);
          var rect = this.itemRectForText(index);
          var drawSymbol = '[' + symbol.toUpperCase() + ']';
          if (Utils.isMobileDevice()) {
            drawSymbol = '■';
          }
          if (Imported.YEP_EquipCore == true) {
            this.contents.drawText(drawSymbol, rect.x + this._nameWidth, rect.y, rect.width - this._nameWidth, this.lineHeight(), 'right');
          } else {
            var iconBowWidth = Window_Base._iconWidth + 8;
            this.contents.drawText(drawSymbol, rect.x + 138 + iconBowWidth, rect.y, 312 - iconBowWidth, this.lineHeight(), 'right');
          }
        }
      }
    }
  };
})();
(function () {

  var Consts = AlphaABS.SYSTEM;

  //Window_ItemList
  //------------------------------------------------------------------------------
  var _Window_ItemList_isEnabled = Window_ItemList.prototype.isEnabled;
  Window_ItemList.prototype.isEnabled = function (item) {
    try {
      if (item && item.occasion == 1 && item.meta.ABS) {
        return false;
      } else
        return _Window_ItemList_isEnabled.call(this, item);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  var _Window_ItemList_update = Window_ItemList.prototype.update;
  Window_ItemList.prototype.update = function () {
    _Window_ItemList_update.call(this);
    if (this.active) {
      this._absItemToPanel();
    }
  };

  Window_ItemList.prototype._absItemToPanel = function () {
    try {
      for (var i = 1; i < 9; i++) {
        if (Input.isTriggered("" + i)) {
          if (this.item() && this.item().occasion == 1 && this.item().meta.ABS) {
            //LOG.p("Item " + this.item().name + " set to slot " + i);
            $gameParty.leader().setItemOnPanel(this.item().id, i - 1);
            SoundManager.playEquip();
            this.refresh();
          } else {
            LOGW.p(Consts.STRING_WARNING_SKILLOC);
            SoundManager.playBuzzer();
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  var _Window_ItemList_drawItemNumber = Window_ItemList.prototype.drawItemNumber;
  Window_ItemList.prototype.drawItemNumber = function (item, x, y, width) {
    _Window_ItemList_drawItemNumber.call(this, item, x, y, width);
    try {
      if (this._category != 'item') return;
      var index = $gameParty.leader().skillIndexOnUI(item.id, true);
      if (index >= 0) {
        this.changeTextColor(Color.ORANGE.CSS);
        this.drawText("[" + (index + 1) + "]", x + width - 60 - this.numberWidth(), y, 40, 'left');
      }
    } catch (e) {
      console.error(e);
    }
  };

  var _Window_ItemList_initialize = Window_ItemList.prototype.initialize;
  Window_ItemList.prototype.initialize = function (x, y, width, height) {
    _Window_ItemList_initialize.call(this, x, y, width, height);

    this._absPanel = new AlphaABS.LIBS.Sprite_SkillPanelABS_L();
    this._absPanel.x = (this.width / 2) - this._absPanel.width / 2;
    this._absPanel.y = this.height - this._absPanel.height - 10;
    if ($gameParty.leader()) {
      this._absPanel.refresh($gameParty.leader());
    }
    this._absPanel.visible = false;
    this.addChild(this._absPanel);
  };

  var _Window_ItemList_setCategory = Window_ItemList.prototype.setCategory;
  Window_ItemList.prototype.setCategory = function (category) {
    _Window_ItemList_setCategory.call(this, category);
    if (this._category == 'item') {
      this._absPanel.visible = true;
    } else
      this._absPanel.visible = false;
  };

  var _Window_ItemList_update_9090 = Window_ItemList.prototype.update;
  Window_ItemList.prototype.update = function () {
    _Window_ItemList_update_9090.call(this);
    try {
      if (this.active && this._absPanel.visible) {
        if (TouchInput.isTriggered()) {
          var tI = this._absPanel.checkTouch();
          if (tI != null) {
            if (this.item() && this.item().occasion == 1 && this.item().meta.ABS) {
              this._absPanel.touchSkillAt(tI);
              //LOG.p("Item " + this.item().name + " set to slot " + tI);
              $gameParty.leader().setItemOnPanel(this.item().id, tI - 1);
              SoundManager.playEquip();
              this.refresh();
            } else {
              LOGW.p(Consts.STRING_WARNING_SKILLOC);
              SoundManager.playBuzzer();
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  //END Window_ItemList
  //------------------------------------------------------------------------------

})();
(function () {
  //Window_Options
  //------------------------------------------------------------------------------
  var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
  Window_Options.prototype.makeCommandList = function () {
    _Window_Options_makeCommandList.call(this);
    this._addUIOptions();
    if (AlphaABS.SYSTEM.EXTENSIONS.KEY_BINDING && !Utils.isMobileDevice())
      this._addBindingOptions();
  };

  Window_Options.prototype._addUIOptions = function () {
    if ($gameMap.isABS()) {
      var optionUIEditAllow = AlphaABS.Parameters.isUIEditorAllowed();
      if (optionUIEditAllow == true && !Utils.isMobileDevice())
        this.addCommand(AlphaABS.SYSTEM.STRING_MENU_UIPOS, 'absEditUI');
    }
  };

  Window_Options.prototype._addBindingOptions = function () {
      this.addCommand(AlphaABS.SYSTEM.STRING_MENU_KEYBIND, 'absEditKeys');
  };

  Window_Options.prototype._isABSSymbol = function (symbol) {
    return symbol.contains('abs');
  };

  Window_Options.prototype._isABSSymbol2 = function (symbol) {
    return symbol.contains('absEdit');
  };

  var _Window_Options_statusText = Window_Options.prototype.statusText;
  Window_Options.prototype.statusText = function (index) {
    var symbol = this.commandSymbol(index);
    if (this._isABSSymbol2(symbol)) {
      return '';
    } else {
      return _Window_Options_statusText.call(this, index);
    }
  };

  var _Window_Options_changeValue = Window_Options.prototype.changeValue;
  Window_Options.prototype.changeValue = function (symbol, value) {
    if (this._isABSSymbol(symbol)) {
      if (this._isABSSymbol2(symbol)) {
        SoundManager.playCursor();
        if (symbol.contains('UI')) {
          if (!AlphaABS.BattleUI.isVisible()) {
            SoundManager.playBuzzer();
          } else
            SceneManager.push(AlphaABS.LIBS.Scene_InterfaceEdit);
          return;
        }
        if (symbol.contains('Keys')) {
          SceneManager.push(AlphaABS.LIBS.Scene_KeyBinder);
          return;
        }
      } else {
        var lastValue = this.getConfigValue(symbol);
        if (lastValue !== value) {
          if(AlphaABS.BattleUI.isUI())
            AlphaABS.BattleUI.getUI().setShowUI(value);
          this.redrawItem(this.findSymbol(symbol));
          SoundManager.playCursor();
        }
      }
    } else {
      _Window_Options_changeValue.call(this, symbol, value);
    }
  };

  var _Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
  Window_Options.prototype.getConfigValue = function (symbol) {
    if (this._isABSSymbol(symbol)) {
      if (this._isABSSymbol2(symbol)) {
        return true;
      } else {
        return AlphaABS.BattleUI.isVisible();
      }
    } else {
      return _Window_Options_getConfigValue.call(this, symbol);
    }
  };
  //END Window_Options
  //------------------------------------------------------------------------------

})();
(function () {

  var Consts = AlphaABS.SYSTEM;
  var LOG = new PLATFORM.DevLog("Window_SkillList");

  var _Window_SkillList_update = Window_SkillList.prototype.update;
  Window_SkillList.prototype.update = function () {
    _Window_SkillList_update.call(this);
    if (this.active) {
      this._absSkillToPanel();
    }
  };

  Window_SkillList.prototype._absSkillToPanel = function () {
    try {
      for (var i = 1; i < 9; i++) {
        if (Input.isTriggered("" + i)) {
          if (this.checkABSItem(this.item())) {
            LOG.p("Skill " + this.item().name + " set to slot " + i);
            this._actor.setSkillOnPanel(this.item().id, i - 1);
            SoundManager.playEquip();
            this.refresh();
          } else {
            LOGW.p(Consts.STRING_WARNING_SKILLOC);
            SoundManager.playBuzzer();
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  var _Window_SkillList_isEnabled = Window_SkillList.prototype.isEnabled;
  Window_SkillList.prototype.isEnabled = function (item) {
    if (this.checkABSItem(item)) {
      return false;
    } else
      return _Window_SkillList_isEnabled.call(this, item);
  };

  //NEW
  Window_SkillList.prototype.checkABSItem = function (item) {
    try {
      return (item && item.occasion == 1 && item.meta.ABS);
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  var _Window_SkillList_drawSkillCost = Window_SkillList.prototype.drawSkillCost;
  Window_SkillList.prototype.drawSkillCost = function (skill, x, y, width) {
    _Window_SkillList_drawSkillCost.call(this, skill, x, y, width);
    //Draw panel number of skill
    try {
      var index = this._actor.skillIndexOnUI(skill.id);
      if (index >= 0) {
        this.changeTextColor(Color.ORANGE.CSS);
        this.drawText("[" + (index + 1) + "]", x + width - 60 - this.costWidth(), y, 40, 'left');
      }
    } catch (e) {
      console.error(e);
    }
  };

  var _Window_SkillList_initialize = Window_SkillList.prototype.initialize;
  Window_SkillList.prototype.initialize = function (x, y, width, height) {
    _Window_SkillList_initialize.call(this, x, y, width, height);

    this._absPanel = new AlphaABS.LIBS.Sprite_SkillPanelABS_L();
    this._absPanel.x = (this.width / 2) - this._absPanel.width / 2;
    this._absPanel.y = this.height - this._absPanel.height - 10;
    this.addChild(this._absPanel);
  };

  var _Window_SkillList_setActor = Window_SkillList.prototype.setActor;
  Window_SkillList.prototype.setActor = function (actor) {
    try {
      if (this._actor !== actor) {
        this._absPanel.refresh(actor);
      }
    } catch (e) {
      console.error(e);
    }
    _Window_SkillList_setActor.call(this, actor);
  };

  var _Window_SkillList_update_432 = Window_SkillList.prototype.update;
  Window_SkillList.prototype.update = function () {
    _Window_SkillList_update_432.call(this);
    if (this.active) {
      if (TouchInput.isTriggered()) {
        try {
          var tI = this._absPanel.checkTouch();
          if (tI != null) {
            if (this.checkABSItem(this.item())) {
              this._absPanel.touchSkillAt(tI);
              LOG.p("Skill " + this.item().name + " set to slot " + tI);
              this._actor.setSkillOnPanel(this.item().id, tI - 1);
              SoundManager.playEquip();
              this.refresh();
            } else {
              SoundManager.playBuzzer();
              LOGW.p(Consts.STRING_WARNING_SKILLOC);
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  };
})();
/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Extra.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
AlphaABS.ApplyExtraPluginsSupport = (function () {

    var ELOG = new KDCore.DevLog("Alpha ABS");
    ELOG.on();
    ELOG.setColors(KDCore.Color.GREEN, KDCore.Color.FromHex('#848400'));

    var printSupport = function (plName) {
        ELOG.p(plName + ' finded - supported');
    };

    //HIME_PartyManager support
    if (Imported.TH_PartyManager == 1) {
        printSupport('HIME_PartyManager');
        try {
            var _alias_Party_switch_ABS = Party.switch;
            Party.switch = function (id) {
                var r = _alias_Party_switch_ABS.call(this, id);
                if (AlphaABS.isABS()) {
                    AlphaABS.BattleManagerABS.updateABSSession();
                }
                return r;
            };
        } catch (error) {
            console.error(error);
        }

    }

    if (Imported.YEP_SmartJump == true) {
        printSupport('YEP_SmartJump');
        //?{EMBEDDED SUPPORT}
    }

    if (Imported.TerraxLighting == true) {
        printSupport('TerraxLighting');
        var _alias_Game_CharacterBase_TerraxL324 = Game_CharacterBase.prototype.setDirection;
        Game_CharacterBase.prototype.setDirection = function (d) {
            if (this._spawnEventId) {
                if (!this.isDirectionFixed() && d) {
                    this._direction = d;
                }
                this.resetStopCount();
            } else
                _alias_Game_CharacterBase_TerraxL324.call(this, d);

        };

        var _alias_Game_CharacterBase_updateMoveTerrax4325 = Game_CharacterBase.prototype.updateMove;
        Game_CharacterBase.prototype.updateMove = function () {
            if (this._spawnEventId) {
                try {
                    if (this._x < this._realX) {
                        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
                    }
                    if (this._x > this._realX) {
                        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
                    }
                    if (this._y < this._realY) {
                        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
                    }
                    if (this._y > this._realY) {
                        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
                    }
                    if (!this.isMoving()) {
                        this.refreshBushDepth();
                    }
                } catch (e) {

                }
            } else
                _alias_Game_CharacterBase_updateMoveTerrax4325.call(this);
        };
    }

    if (Imported.YEP_ItemCore == true) {
        printSupport('YEP_ItemCore');
        try {
            var _Game_Party_gainIndependentItem_YEP = Game_Party.prototype.gainIndependentItem;
            Game_Party.prototype.gainIndependentItem = function (item, amount, includeEquip) {
                _Game_Party_gainIndependentItem_YEP.call(this, item, amount, includeEquip);
                if ($gameMap.isABS()) {
                    if (amount > 0 && !this._noNotifyABS) {
                        AudioManager.playSe({
                            name: 'Equip2',
                            pan: 0,
                            pitch: 140,
                            volume: 90
                        });
                        AlphaABS.BattleUI.pushItemOnPanel(item);
                    }

                    if (DataManager.isWeapon(item)) {
                        AlphaABS.BattleUI.refreshWeaponCircle();
                    }
                }
            };
        } catch (error) {
            console.error(error);
        }
    }

    if (Imported.YEP_EquipCore == true) {
        printSupport('YEP_EquipCore');
        try {
            var _Window_EquipSlot_drawItem_YEP = Window_EquipSlot.prototype.drawItem;
            Window_EquipSlot.prototype.drawItem = function (index) {
                _Window_EquipSlot_drawItem_YEP.call(this, index);
                this._drawFavWeapSymbol(index);
            };
        } catch (error) {
            console.error(error);
        }

    }

    if (Imported.YEP_SaveCore == true) {
        printSupport('YEP_SaveCore');
        try {
            var _Scene_File_performActionLoad_YEP = Scene_File.prototype.performActionLoad;
            Scene_File.prototype.performActionLoad = function () {
                if (AlphaABS.LIBS.BattleManagerABS._isABSMap == true) {
                    AlphaABS.LIBS.BattleManagerABS.stopABS();
                }
                _Scene_File_performActionLoad_YEP.call(this);
            };
        } catch (error) {
            console.error(error);
        }
    }
});

// ■ END Extra.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////
//==========================================================================================================================================================
// Alpha ABS MAIN
//==========================================================================================================================================================
(function () {
	
	//PLATFORM
	var SDK = PLATFORM.SDK;

	var SMouse = AlphaABS.UTILS.SMouse;
	var LOGW = AlphaABS.SYSTEM.LOGW;
	var BattleManagerABS = AlphaABS.LIBS.BattleManagerABS;

	if (!Utils.isMobileDevice())
		SMouse.initMouseTrack();

	//Input
	//------------------------------------------------------------------------------
	Input.loadSchemeABS = function () {
		AlphaABS.LIBS.IKey.loadDefaultKeyConfig();
		AlphaABS.Parameters.loadBindingScheme();
	};
	//END Input
	//------------------------------------------------------------------------------

	//==========================================================================================================================================================
	//MV GAME OBJECTS
	//==========================================================================================================================================================

	//Game_Screen
	//------------------------------------------------------------------------------
	//OVER
	Game_Screen.prototype.realPictureId = function (pictureId) {
		return pictureId;
	};
	//END Game_Screen
	//------------------------------------------------------------------------------

	//Game_Variables
	//------------------------------------------------------------------------------
	Game_Variables.prototype.setUIParam = function (param, value) {
		if (!this._uiParams) {
			this._uiParams = {};
		}
		this._uiParams[param] = value;
	};

	Game_Variables.prototype.getUIParam = function (param) {
		if (this._uiParams) {
			return this._uiParams[param];
		}
		return null;
	};

	Game_Variables.prototype.setUIPosition = function (id, x, y, vis, extra) {
		if (!this._uiPositions)
			this._uiPositions = {};
		vis = SDK.check(vis, null);
		extra = SDK.check(extra, null);
		this._uiPositions[id] = [x, y, vis, extra];
	};

	Game_Variables.prototype.getUIPosition = function (id) {
		try {
			if (this._uiPositions) {
				var p = this._uiPositions[id];
				if (p) {
					return {
						x: p[0],
						y: p[1],
						vis: SDK.check(p[2], null),
						extra: SDK.check(p[3], null)
					};
				}
			}
		} catch (e) {
			console.error(e);
			return null;
		}
		return null;
	};
	//END Game_Variables
	//------------------------------------------------------------------------------

	//==========================================================================================================================================================
	//MV SCENES
	//==========================================================================================================================================================

	//Scene_Title
	//------------------------------------------------------------------------------
	var _Scene_Title_start = Scene_Title.prototype.start;
	Scene_Title.prototype.start = function () {
		BattleManagerABS.clearABS();
		_Scene_Title_start.call(this);
	};
	//END Scene_Title
	//------------------------------------------------------------------------------

	//Scene_Gameover
	//------------------------------------------------------------------------------
	var _Scene_Gameover_create = Scene_Gameover.prototype.create;
	Scene_Gameover.prototype.create = function () {
		$gameMap.stopABS();
		_Scene_Gameover_create.call(this);
	};
	//END Scene_Gameover
	//------------------------------------------------------------------------------

	//Scene_Title
	//------------------------------------------------------------------------------
	var _Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function () {
		$gameMap.stopABS();
		_Scene_Title_create.call(this);
	};
	//END Scene_Title
	//------------------------------------------------------------------------------

	//Scene_Boot
	//------------------------------------------------------------------------------
	var pkd_SceneBoot_start = Scene_Boot.prototype.start;
	Scene_Boot.prototype.start = function () {
		pkd_SceneBoot_start.call(this);
		AlphaABS.printVersionInfo();
		if (!AlphaABS.Parameters.isLoaded()) {
			LOGW.p("Warning! Plugin parameters not finded, used default settings");
		} else {
			AlphaABS.Parameters.loadAllStrings();
		}
		AlphaABS.ApplyExtraPluginsSupport();
		BattleManagerABS.init();
		SlowUpdateManager.init();
	};
	//END Scene_Boot
	//------------------------------------------------------------------------------

	AlphaABS.isABS = function() {
		var i1 = SceneManager._scene;
		if(i1)
			i1 = i1 instanceof Scene_Map;
		var i2 = $gameMap.isABS();
		return i1 && i2;
	};

	AlphaABS.error = function (error, message) {
		if(AlphaABS._errorLog == undefined) {
			AlphaABS._errorLog = new KDCore.DevLog('Alpha ABS Error');
			AlphaABS._errorLog.setColors(KDCore.Color.RED, KDCore.Color.BLACK.getLightestColor(225));
			AlphaABS._errorLog.on();
		}
		if (message)
			AlphaABS._errorLog.p(message);
		console.error(error);
		if (!Utils.isNwjs()) return;
		require('nw.gui').Window.get().showDevTools();
	};

	AlphaABS.warning = function (error, message) {
		LOGW.p("Warning! " + message);
		console.warn(error);
	};

})();
//Plugin Alpha_ABS automatic build by MVPluginBuilder 1.6 28.10.2018
