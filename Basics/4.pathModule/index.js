const { log } = require('console')
const path = require('path')

log("Directory Name:",path.dirname(__filename))

log('File Name:' , path.basename(__filename))

log('Extension Name:',path.extname(__filename))

// Can be used to join path names to locate something
const joinpath = path.join("/user","documents","node","projects")
log("Joined Path:",joinpath)
// Can be used to resolve path name
const resolve = path.resolve("/Users","jaswa","documents")
log("Resolve path:", resolve)
// Nomarlize path
const normalizePath = path.normalize("/Users/jaswa/Desktop/../4.pathModule")
log("Nomarlize path:", normalizePath)