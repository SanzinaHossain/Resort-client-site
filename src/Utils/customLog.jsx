/*
 * CustomLog.jsx
 * Created by Sanzina Hossain
 * Copyright (c) 2024 Sanzina Hossain
 * All rights reserved
 */

const isLogAllowed = true

function customLogFunction(item) {
  if (isLogAllowed) console.log(item)
}

const customLog = isLogAllowed ? console.log : customLogFunction

export default customLog
