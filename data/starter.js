var mongoose = require('mongoose'),
    designModels = require('../models/design'),
    db = mongoose.connect('mongodb://localhost/fes').connection,
    Color = db.model('Color', designModels.colorSchema);
    Background = db.model('Background', designModels.backgroundSchema);

db
    .on('error', console.error.bind(console, '[Mongoose ERROR]'))
    .once('open', function (callback) {
        console.log('[Mongoose Event] Connection OPEN');
        // Background.create([
        //     {
        //         name: 'HTML 5 Logo & Wordmark',
        //         uri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+Cgk8dGl0bGU+SFRNTDUgTG9nbzwvdGl0bGU+Cgk8cG9seWdvbiBmaWxsPSIjRTQ0RDI2IiBwb2ludHM9IjEwNy42NDQsNDcwLjg3NyA3NC42MzMsMTAwLjYyIDQzNy4zNjcsMTAwLjYyIDQwNC4zMjEsNDcwLjgxOSAyNTUuNzc4LDUxMiIvPgoJPHBvbHlnb24gZmlsbD0iI0YxNjUyOSIgcG9pbnRzPSIyNTYsNDgwLjUyMyAzNzYuMDMsNDQ3LjI0NiA0MDQuMjcsMTMwLjg5NCAyNTYsMTMwLjg5NCIvPgoJPHBvbHlnb24gZmlsbD0iI0VCRUJFQiIgcG9pbnRzPSIyNTYsMjY4LjIxNyAxOTUuOTEsMjY4LjIxNyAxOTEuNzYsMjIxLjcxNiAyNTYsMjIxLjcxNiAyNTYsMTc2LjMwNSAyNTUuODQzLDE3Ni4zMDUgMTQyLjEzMiwxNzYuMzA1IDE0My4yMTksMTg4LjQ4OCAxNTQuMzgsMzEzLjYyNyAyNTYsMzEzLjYyNyIvPgoJPHBvbHlnb24gZmlsbD0iI0VCRUJFQiIgcG9pbnRzPSIyNTYsMzg2LjE1MyAyNTUuODAxLDM4Ni4yMDYgMjA1LjIyNywzNzIuNTUgMjAxLjk5NCwzMzYuMzMzIDE3Ny40MTksMzM2LjMzMyAxNTYuNDA5LDMzNi4zMzMgMTYyLjc3MSw0MDcuNjM0IDI1NS43OTEsNDMzLjQ1NyAyNTYsNDMzLjM5OSIvPgoJPHBhdGggZD0iTTEwOC4zODIsMGgyMy4wNzd2MjIuOGgyMS4xMVYwaDIzLjA3OHY2OS4wNDRIMTUyLjU3di0yMy4xMmgtMjEuMTF2MjMuMTJoLTIzLjA3N1YweiIvPgoJPHBhdGggZD0iTTIwNS45OTQsMjIuODk2aC0yMC4zMTZWMGg2My43MnYyMi44OTZoLTIwLjMyNXY0Ni4xNDhoLTIzLjA3OFYyMi44OTZ6Ii8+Cgk8cGF0aCBkPSJNMjU5LjUxMSwwaDI0LjA2M2wxNC44MDIsMjQuMjZMMzEzLjE2MywwaDI0LjA3MnY2OS4wNDRoLTIyLjk4MlYzNC44MjJsLTE1Ljg3NywyNC41NDloLTAuMzk3bC0xNS44ODgtMjQuNTQ5djM0LjIyMmgtMjIuNThWMHoiLz4KCTxwYXRoIGQ9Ik0zNDguNzIsMGgyMy4wODR2NDYuMjIyaDMyLjQ1M3YyMi44MjJIMzQ4LjcyVjB6Ii8+Cgk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI1NS44NDMsMjY4LjIxNyAyNTUuODQzLDMxMy42MjcgMzExLjc2MSwzMTMuNjI3IDMwNi40OSwzNzIuNTIxIDI1NS44NDMsMzg2LjE5MSAyNTUuODQzLDQzMy40MzUgMzQ4LjkzNyw0MDcuNjM0IDM0OS42MiwzOTkuOTYyIDM2MC4yOTEsMjgwLjQxMSAzNjEuMzk5LDI2OC4yMTcgMzQ5LjE2MiwyNjguMjE3Ii8+Cgk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI1NS44NDMsMTc2LjMwNSAyNTUuODQzLDIwNC41MDkgMjU1Ljg0MywyMjEuNjA1IDI1NS44NDMsMjIxLjcxNiAzNjUuMzg1LDIyMS43MTYgMzY1LjM4NSwyMjEuNzE2IDM2NS41MzEsMjIxLjcxNiAzNjYuNDQyLDIxMS41MDkgMzY4LjUxMSwxODguNDg4IDM2OS41OTcsMTc2LjMwNSIvPgo8L3N2Zz4K'
        //     },
        //     {
        //         name: 'High-Q Badge',
        //         uri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2MTIgNzkyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MTIgNzkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNDgzMjI1IiBkPSJNNzQuNSw0MzQuMWMyLjMsMTIuNiwxOS4zLDE3LDIzLjIsMjYuOA0KCQljMi43LDYuOC0wLjMsMTUuNS0wLjEsMjQuMmMyLjgtMC43LDUuNy0xLDguMy0xYzUuMywwLDkuNSwxLjUsMTIuMSw0LjJsMCwwYzIuNCwyLjIsNC45LDQuMyw3LjMsNi4zYzcuMyw2LjIsMTQuOCwxMi42LDIxLjMsMjEuOA0KCQljMzIuNC0xNy4yLDc4LjYtMzguNSwxNDkuMy01MS43YzE5LjgtMy43LDYwLjItOS45LDEwOC43LTkuOWMzMC4xLDAsNjQuOSwyLjQsOTcuNCwxMC41YzYuMi00LjcsMTQuMy04LjcsMTcuOC0xNy4xDQoJCWM0LjktMTEuOC03LjEtMjQuNy01LjEtMzUuMWMxLjktOS45LDE1LjItMTcsMTYuNi0zMGMxLjMtMTIuNy0xMy43LTIxLjgtMTQuOC0zMi4yYy0xLTEwLjEsOS44LTIwLjYsNy40LTMzLjQNCgkJYy0yLjMtMTIuNi0xOS4zLTE3LTIzLjItMjYuOGMtMy44LTkuNCwzLjYtMjIuNS0yLjMtMzQuMmMtNS44LTExLjQtMjMuMy0xMC45LTI5LjgtMTkuMWMtNi4zLTcuOS0yLjktMjIuNi0xMS44LTMyLjINCgkJYy04LjctOS40LTI1LjQtMy45LTM0LTkuOWMtOC4yLTUuOS05LjItMjAuOS0yMC40LTI3LjVjLTExLTYuNS0yNS41LDMuNS0zNS40LDBjLTkuNi0zLjMtMTQuNy0xNy40LTI3LjMtMjAuNw0KCQljLTEyLjQtMy4xLTIzLjUsMTAuNS0zNCwxMGMtMTAuMS0wLjUtMTktMTIuNi0zMi0xMi4xYy0xMi44LDAuNS0xOS42LDE2LjctMjkuOCwxOS4yYy05LjgsMi40LTIxLjgtNi43LTM0LjItMi42DQoJCWMtMTIuMSw0LjEtMTQuMSwyMS41LTIzLjIsMjYuOGMtOC43LDUuMS0yMi44LTAuMy0zMy41LDcuMWMtMTAuNSw3LjMtNy40LDI0LjYtMTQuNywzMi4zYy03LDcuMy0yMiw2LjEtMzAuMSwxNi4zDQoJCWMtOCwxMC0wLjIsMjUuNy01LDM1LjFjLTQuNiw5LTE5LjMsMTItMjQuMywyNC4xYy00LjksMTEuOCw3LjEsMjQuNyw1LjEsMzUuMWMtMS45LDkuOS0xNS4yLDE3LTE2LjYsMzANCgkJYy0xLjMsMTIuNywxMy43LDIxLjcsMTQuOCwzMi4yQzgyLjksNDEwLjcsNzIuMiw0MjEuMiw3NC41LDQzNC4xeiIvPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQTlDMzMiIGQ9Ik0xNDYuNiw1MTYuNGMzMi40LTE3LjIsNzguNi0zOC41LDE0OS4zLTUxLjdjMTkuOC0zLjcsNjAuMi05LjksMTA4LjctOS45YzI1LjksMCw1NS40LDEuOCw4My44LDcuNQ0KCQkJCWMxMi41LTI3LjIsMTguOC01Ni4zLDE4LjgtODYuNGMwLTU1LjUtMjEuNi0xMDcuOC02MC45LTE0Ny4xYy0zOS4zLTM5LjMtOTEuNS02MC45LTE0Ny4xLTYwLjljLTU1LjUsMC0xMDcuOCwyMS42LTE0Ny4xLDYwLjkNCgkJCQljLTM5LjMsMzkuMy02MC45LDkxLjUtNjAuOSwxNDcuMWMwLDQ2LjMsMTUuMiw5MC42LDQzLjIsMTI2LjhDMTM4LjYsNTA2LjYsMTQyLjgsNTExLDE0Ni42LDUxNi40eiBNMjk5LjIsMTcyLjkNCgkJCQljMTExLjksMCwyMDIuOSw5MSwyMDIuOSwyMDIuOWMwLDI5LjUtNi43LDU4LjktMTguOSw4NS40Yy0yMy43LTQuNC00OS44LTcuNS03OC42LTcuNWMtNDguNiwwLTg5LjEsNi4yLTEwOC45LDkuOQ0KCQkJCWMtNjksMTIuOS0xMTMuNCwzNC4xLTE0NC45LDUwLjZjLTM0LjctMzcuNi01NC41LTg3LjItNTQuNS0xMzguNEM5Ni4zLDI2My45LDE4Ny4zLDE3Mi45LDI5OS4yLDE3Mi45eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMjMyQzJGIiBkPSJNMjk1LjksNDY0LjdjMTkuOC0zLjcsNjAuMi05LjksMTA4LjctOS45YzIyLDAsNDYuNiwxLjMsNzEsNS4yDQoJCWMxMi4yLTI1LjUsMTktNTQsMTktODQuMWMwLTEwNy45LTg3LjUtMTk1LjQtMTk1LjQtMTk1LjRjLTEwNy45LDAtMTk1LjQsODcuNS0xOTUuNCwxOTUuNGMwLDUyLjMsMjAuNiw5OS44LDU0LDEzNC44DQoJCUMxODkuNSw0OTQuNiwyMzIuOSw0NzYuNSwyOTUuOSw0NjQuN3oiLz4NCgk8cGF0aCBmaWxsPSIjRkVGOEYwIiBkPSJNMjk5LjIsMTgxLjhjLTEwNi45LDAtMTkzLjksODctMTkzLjksMTkzLjljMCw1MC4zLDE5LjEsOTcuOSw1My45LDEzNC4yYzQyLjgtMjEuNCw4Ni4zLTM1LjgsMTM2LjctNDUuMw0KCQljMTkuOC0zLjcsNjAuMi05LjksMTA4LjctOS45YzI0LjksMCw0OC4zLDEuNyw2OS41LDVjMTIuNy0yNi4zLDE5LjEtNTQuNSwxOS4xLTgzLjlDNDkzLjEsMjY4LjgsNDA2LjEsMTgxLjgsMjk5LjIsMTgxLjh6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0zMjYuMSw0NTkuOWwxNjguNC05MC4zYy0wLjItNS41LTAuNi0xMC45LTEuMi0xNi4yTDMyMC40LDQ2MC43QzMyMi4yLDQ2MC40LDMyNC4xLDQ2MC4yLDMyNi4xLDQ1OS45eiIvPg0KCQk8cGF0aCBmaWxsPSIjRjNFQkQ0IiBkPSJNMzA4LjksNDYyLjRsMTU1LjctMTkwLjdjLTMuMi01LjEtNi42LTEwLTEwLjMtMTQuN0wzMDcsNDYyLjdDMzA3LjYsNDYyLjYsMzA4LjMsNDYyLjUsMzA4LjksNDYyLjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0xMTEuNyw0MzAuOEwyNzQuNyw0NjljMS4zLTAuMywyLjctMC42LDQtMC45bC0xNzAuNy01MS42QzEwOS4xLDQyMS40LDExMC4zLDQyNi4xLDExMS43LDQzMC44eiIvPg0KCQk8cGF0aCBmaWxsPSIjRjNFQkQ0IiBkPSJNMzE3LjYsNDYxLjFsMTczLjEtMTI0LjdjLTEuMS01LjYtMi41LTExLTQuMS0xNi40TDMxNCw0NjEuNkMzMTUuMSw0NjEuNCwzMTYuMyw0NjEuMiwzMTcuNiw0NjEuMXoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTExNi4zLDQ0NC42YzEuNiw0LjMsMy40LDguNSw1LjMsMTIuN2wxNDMuMSwxNGMyLjItMC41LDQuNC0xLjEsNi42LTEuNkwxMTYuMyw0NDQuNnoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTMxMi41LDQ2MS44bDE2OC40LTE1OC4xYy0yLjItNS40LTQuNi0xMC44LTcuMi0xNS45TDMwOS45LDQ2Mi4yQzMxMC44LDQ2Mi4xLDMxMS42LDQ2MiwzMTIuNSw0NjEuOHoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTEwNS41LDQwMmwxNzUsNjUuOGMwLjktMC4yLDEuOC0wLjQsMi44LTAuNmwtMTc5LjItODAuNkMxMDQuNCwzOTEuNywxMDQuOSwzOTYuOSwxMDUuNSw0MDJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik00ODIuNSw0NDMuNWwtNjguMSwxMS4zYzE0LjksMC4zLDMwLjgsMS4yLDQ2LjksMy4xbDE2LTEuNkM0NzkuMiw0NTIuMSw0ODAuOSw0NDcuOSw0ODIuNSw0NDMuNXoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTQ5MC40LDQxNi4xbC0xMzQuNSw0MC42YzcuOC0wLjYsMTYuMS0xLjIsMjQuOC0xLjVsMTA2LjItMjQuOUM0ODguMiw0MjUuNyw0ODkuNCw0MjAuOSw0OTAuNCw0MTYuMXoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTM0Mi4xLDQ1OEw0OTMsNDAwLjhjMC43LTUuMSwxLjEtMTAuMiwxLjQtMTUuNGwtMTYyLjksNzMuOUMzMzQuOCw0NTguOCwzMzguNCw0NTguNCwzNDIuMSw0NTh6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0xNTcuOCw1MTAuNmMzLjktMiw4LTQsMTIuNC02bC0xNC44LDMuNUMxNTYuMiw1MDguOSwxNTcsNTA5LjcsMTU3LjgsNTEwLjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0xMzMuOSw0ODBsMTExLjYtMy41YzQuMS0xLjIsOC4zLTIuMywxMi43LTMuNGwtMTMwLjgtNC4xQzEyOS40LDQ3Mi43LDEzMS42LDQ3Ni4zLDEzMy45LDQ4MHoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTE0OC4xLDQ5OS43bDU0LjItOWM4LjMtMy4yLDE3LjEtNi4zLDI2LjYtOS4zbC04OCw4LjlDMTQzLjIsNDkzLjUsMTQ1LjYsNDk2LjcsMTQ4LjEsNDk5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0yODYuNiw0NjYuNUwxMDUsMzUzLjljLTAuNiw1LjMtMSwxMC44LTEuMSwxNi4ybDE4MC42LDk2LjhDMjg1LjIsNDY2LjgsMjg1LjksNDY2LjYsMjg2LjYsNDY2LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0yOTQuMiw0NjVMMTY4LjUsMjMwLjVjLTQuNSw0LjEtOC45LDguNC0xMywxMi45TDI5Myw0NjUuMkMyOTMuNCw0NjUuMSwyOTMuOCw0NjUuMSwyOTQuMiw0NjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0yOTUuNSw0NjQuN2wtOTcuMy0yNTYuM2MtNS4zLDMuMi0xMC41LDYuNy0xNS41LDEwLjRsMTExLjYsMjQ2LjFDMjk0LjgsNDY0LjksMjk1LjIsNDY0LjgsMjk1LjUsNDY0Ljd6Ig0KCQkJLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTI5Mi43LDQ2NS4zTDE0My4zLDI1OGMtMy42LDQuOC03LDkuNy0xMC4yLDE0LjhsMTU4LjMsMTkyLjdDMjkxLjgsNDY1LjQsMjkyLjMsNDY1LjQsMjkyLjcsNDY1LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGM0VCRDQiIGQ9Ik0yOTEsNDY1LjZMMTI0LjUsMjg4LjJjLTIuNiw1LjItNSwxMC41LTcuMiwxNmwxNzIuMywxNjEuN0MyOTAsNDY1LjgsMjkwLjUsNDY1LjcsMjkxLDQ2NS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjRjNFQkQ0IiBkPSJNMjg5LDQ2NkwxMTEuNSwzMjEuMWMtMS42LDUuNC0yLjksMTAuOS00LDE2LjVsMTc5LjgsMTI4LjdDMjg3LjksNDY2LjIsMjg4LjQsNDY2LjEsMjg5LDQ2NnoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTI5NS45LDQ2NC43YzAuMy0wLjEsMC42LTAuMSwxLTAuMkwyMzMsMTkxLjljLTUuOSwyLjEtMTEuNyw0LjYtMTcuNCw3LjJMMjk1LjksNDY0LjcNCgkJCUMyOTUuOSw0NjQuNywyOTUuOSw0NjQuNywyOTUuOSw0NjQuN3oiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTMwNi4zLDQ2Mi44bDEzNi4zLTIxOS43Yy00LjItNC41LTguNS04LjgtMTMuMS0xMi45TDMwNC43LDQ2My4xQzMwNS4yLDQ2MywzMDUuOCw0NjIuOSwzMDYuMyw0NjIuOHoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTMwMi41LDQ2My41bDc5LjktMjY0LjZjLTUuNy0yLjctMTEuNS01LjEtMTcuNC03LjJsLTYzLjcsMjcyQzMwMS42LDQ2My42LDMwMiw0NjMuNSwzMDIuNSw0NjMuNXoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTI5OC4yLDQ2NC4ybC0yOC41LTI4MS43Yy02LjMsMS0xMi41LDIuMi0xOC42LDMuOGw0NiwyNzguMUMyOTcuNSw0NjQuNCwyOTcuOCw0NjQuMywyOTguMiw0NjQuMnoiLz4NCgkJPHBhdGggZmlsbD0iI0YzRUJENCIgZD0iTTMwNC4yLDQ2My4yTDQxNC41LDIxOGMtNS0zLjctMTAuMi03LjEtMTUuNS0xMC4zbC05Ni4xLDI1NS43QzMwMy4zLDQ2My4zLDMwMy43LDQ2My4zLDMwNC4yLDQ2My4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRjNFQkQ0IiBkPSJNMjk5LjUsNDY0bDguOS0yODMuNGMtMy4xLTAuMS02LjItMC4yLTkuMy0wLjJjLTMuMywwLTYuNSwwLjEtOS43LDAuMmw5LDI4My42DQoJCQlDMjk4LjgsNDY0LjEsMjk5LjEsNDY0LjEsMjk5LjUsNDY0eiIvPg0KCQk8cGF0aCBmaWxsPSIjRjNFQkQ0IiBkPSJNMzAwLjksNDYzLjdMMzQ2LDE4NmMtNi4xLTEuNS0xMi4zLTIuNy0xOC42LTMuNmwtMjcuNiwyODEuNUMzMDAuMSw0NjMuOSwzMDAuNSw0NjMuOCwzMDAuOSw0NjMuN3oiLz4NCgk8L2c+DQoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNEQTlDMzMiIGQ9Ik00ODkuNiw1OTIuOWMtMC41LTAuMi0xLTAuNS0xLjYtMC44Yy0wLjUtMC4yLTAuOS0wLjUtMS40LTAuNw0KCQljLTAuNS0wLjMtMS0wLjUtMS42LTAuOGMtMC41LTAuMi0wLjktMC41LTEuNC0wLjdjLTAuNS0wLjMtMS0wLjUtMS42LTAuOGMtMC41LTAuMi0wLjktMC41LTEuNC0wLjdjLTAuNS0wLjMtMS4xLTAuNi0xLjYtMC44DQoJCWMtMC41LTAuMi0wLjktMC41LTEuNC0wLjdjLTAuNS0wLjMtMS4xLTAuNi0xLjYtMC45Yy0wLjQtMC4yLTAuOS0wLjUtMS4zLTAuN2MtMC42LTAuMy0xLjItMC42LTEuOC0wLjljLTAuNC0wLjItMC44LTAuNC0xLjItMC42DQoJCWMtMC45LTAuNS0xLjktMS0yLjgtMS41Yy05LjktNS4zLTE5LjMtMTAuNC0yNy4xLTEzLjJjLTIxLjUtNy45LTQ2LjMtMTIuNS02OC0xMi41Yy03LjIsMC0xNCwwLjUtMjAuMiwxLjQNCgkJYy0yNSwzLjgtMzguNiwxNi0zNy40LDI1LjZjMS4yLDksMTUuNSwxOC42LDUyLjEsMTguNmMzLjcsMCw3LjYtMC4xLDExLjYtMC4zYzMuNy0wLjIsNy40LTAuMywxMS0wLjNjMzkuNSwwLDY0LjQsMTEuMyw3OC40LDIwLjkNCgkJYzguNiw1LjksMTQuMSwxMS43LDE3LjQsMTUuOGMtMS4zLTEwLjQtMi43LTMxLjEsNS4xLTQ0LjNjLTAuMy0wLjEtMC41LTAuMy0wLjgtMC40QzQ5MC41LDU5My4zLDQ5MC4xLDU5My4xLDQ4OS42LDU5Mi45eiIvPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNDgzMjI1IiBkPSJNNTM5LjcsNTgzLjljLTIuMi04LjYtMjAuNC0yMS4zLTQ2LjYtMjkuNA0KCQljLTI5LTktOTAuNi0xOC40LTE0NC43LTEzYy0xMC43LDEuMS0zMS4yLDUuOS0zMS4yLDUuOWMtMy40LDEyLjgtMy4zLDIwLjUtMi40LDI3LjVjMC4yLTAuMywwLjQtMC43LDAuNS0xDQoJCWMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuM2MwLjEtMC4yLDAuMy0wLjUsMC41LTAuN2MwLjEtMC4xLDAuMS0wLjIsMC4yLTAuM2MwLjItMC4zLDAuNC0wLjUsMC42LTAuOGMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMg0KCQljMC4zLTAuMywwLjUtMC43LDAuOC0xYzAuMS0wLjEsMC4xLTAuMSwwLjItMC4yYzAuMi0wLjMsMC41LTAuNSwwLjctMC44YzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4zYzAuMi0wLjIsMC41LTAuNSwwLjctMC43DQoJCWMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuM2MwLjMtMC4zLDAuNi0wLjYsMS0wLjljMCwwLDAuMSwwLDAuMS0wLjFjMC40LTAuMywwLjctMC42LDEuMS0wLjljMC4xLTAuMSwwLjItMC4yLDAuMy0wLjINCgkJYzAuMy0wLjIsMC42LTAuNCwwLjktMC43YzAuMS0wLjEsMC4yLTAuMiwwLjQtMC4zYzAuMy0wLjIsMC42LTAuNCwxLTAuN2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMmMwLjQtMC4zLDAuOS0wLjYsMS4zLTAuOQ0KCQljMCwwLDAuMS0wLjEsMC4xLTAuMWMwLjQtMC4yLDAuOC0wLjUsMS4yLTAuN2MwLjEtMC4xLDAuMy0wLjIsMC40LTAuMmMwLjQtMC4yLDAuNy0wLjQsMS4xLTAuNmMwLjEtMC4xLDAuMy0wLjEsMC40LTAuMg0KCQljMC40LTAuMiwwLjktMC40LDEuMy0wLjdjMC4xLDAsMC4xLTAuMSwwLjItMC4xYzAuNS0wLjIsMS0wLjUsMS42LTAuN2MwLjEtMC4xLDAuMy0wLjEsMC40LTAuMmMwLjQtMC4yLDAuOC0wLjQsMS4zLTAuNQ0KCQljMC4yLTAuMSwwLjMtMC4xLDAuNS0wLjJjMC40LTAuMiwwLjgtMC4zLDEuMy0wLjVjMC4yLTAuMSwwLjMtMC4xLDAuNS0wLjJjMC42LTAuMiwxLjItMC40LDEuOC0wLjZjMCwwLDAuMSwwLDAuMSwwDQoJCWMwLjYtMC4yLDEuMS0wLjQsMS43LTAuNmMwLjItMC4xLDAuNC0wLjEsMC41LTAuMmMwLjQtMC4xLDAuOS0wLjMsMS4zLTAuNGMwLjItMC4xLDAuNC0wLjEsMC42LTAuMmMwLjUtMC4xLDEtMC4zLDEuNS0wLjQNCgkJYzAuMSwwLDAuMy0wLjEsMC40LTAuMWMwLjYtMC4yLDEuMy0wLjMsMS45LTAuNWMwLjIsMCwwLjMtMC4xLDAuNS0wLjFjMC41LTAuMSwxLTAuMiwxLjUtMC4zYzAuMiwwLDAuNC0wLjEsMC43LTAuMQ0KCQljMC41LTAuMSwxLTAuMiwxLjQtMC4zYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjctMC4xLDEuNC0wLjIsMi4xLTAuM2M2LjQtMSwxMy40LTEuNSwyMC43LTEuNWMxOS42LDAsNDAuOSwzLjQsNjAuNyw5LjgNCgkJYzIuOCwwLjksNS42LDEuOSw4LjQsMi45YzgsMywxNy41LDgsMjcuNSwxMy40YzIsMS4xLDQsMi4xLDYsMy4yYzYsMy4yLDEyLjEsNi40LDE4LjEsOS4xYzEyLjcsNS44LDIyLjMsOC41LDMwLjMsOC41DQoJCWM0LjIsMCw4LTAuOCwxMS4yLTIuNGwwLDBsMCwwbDAuMS0wLjFDNTQwLjYsNTk0LjksNTQxLjQsNTkwLjUsNTM5LjcsNTgzLjl6Ii8+DQoJPHBhdGggZmlsbD0iI0ZFRjhGMCIgZD0iTTM0MS45LDM1OC41di0yMy44bC0yLjksMC43di0xOC4ybDE0LjYtMy4zdi0zMS40bC03MC41LDE2bDAsMGwtNjEuMiwxMy45bC03LjgsOS41di03LjdsLTI1LjMsNS44bDAsMA0KCQlsMCwwbC01MiwxMS44djI0LjhsMy0wLjd2MjQuOGwtMywwLjdWNDA2bDExLjgtMi43bC0xMS44LDE0LjV2NDdsMTQuNywxMS4zbDguMS0xLjhsNC44LDQuMWwyMy4yLTUuM2wtOS43LTguM2w3LjMtOXYtMC4xDQoJCWwxMi43LDkuOGwxOC43LTQuM2wxMC43LTEzLjF2MTAuN0wzNTAsNDMxdi0yNC44bC0yLjksMC43di0xOC4ybDEyLjYtMi45djE4LjJsLTIuOSwwLjd2MjQuOGwzMC4zLTYuOXYtMjQuOGwtMi45LDAuN3YtMTguMg0KCQlsMTQuNi0zLjN2LTYuNmwwLjctMC4xbDguMiwxMi42djEwLjRsLTIuOSwwLjd2MjQuOGwzMC4zLTYuOXYtMjQuOGwtMywwLjd2LTcuOWw5LjYtMTkuMWw0LjItMXYtMjQuOEwzNDEuOSwzNTguNXogTTI4NS4yLDI4NC43DQoJCWwxMy44LTguMmwxMy44LDguMmwtMS42LTcuM2wxMS42LTYuOWwxNi41LDkuN2wtMS40LTYuNWwxNi41LTkuN2wxNi41LDkuN2wtMS40LDYuNWwxNi41LTkuN2wxMS42LDYuOWwtMS42LDcuM2wxMy44LTguMWwxMy44LDguMg0KCQlsLTMuNS0xNS43bDEyLTEwLjZsLTE2LTEuNWwtNi40LTE0LjdsLTIuNyw2LjJsLTEzLjUtMS4zbC03LjYtMTcuNWwtNC4yLDkuOGwtMTguNy0xLjhsLTguNi0xOS44bC04LjYsMTkuOGwtMTguNywxLjhsLTQuMi05LjgNCgkJbC03LjYsMTcuNWwtMTMuNSwxLjNsLTIuNy02LjJsLTYuNCwxNC43bC0xNiwxLjVsMTIsMTAuNkwyODUuMiwyODQuN3ogTTM3OS44LDI0My43bC0xLjUsMy4zbC0yLjYsMC4zTDM3OS44LDI0My43eiBNMzczLjcsMjYxLjYNCgkJbC0xLjgsOC4xbC0yLjctMTIuMUwzNzMuNywyNjEuNnogTTMzOS43LDI1Ny42bC0yLjcsMTIuMWwtMS44LTguMUwzMzkuNywyNTcuNnogTTMzMy4xLDI0Ny4zbC0yLjYtMC4zbC0xLjUtMy4zTDMzMy4xLDI0Ny4zeiIvPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNDgzMjI1IiBkPSJNMTY0LjgsMzkzLjF2LTExLjhsMy0wLjd2LTEzLjFsLTkuOSwyLjJWMzgzbDMtMC43VjM5NGwtMTcuNyw0DQoJCQkJdi0xMS44bDMtMC43di0zNy44bC0zLDAuN3YtMTEuOGwxNy43LTR2MTEuOGwtMywwLjd2MTNsOS45LTIuMnYtMTNsLTMsMC43di0xMS44bDE3LjctNHYxMS44bC0zLDAuN3YzNy44bDMtMC43djExLjgNCgkJCQlMMTY0LjgsMzkzLjFMMTY0LjgsMzkzLjF6IE0xOTAuMiwzODcuNHYtMTEuOGwyLjktMC43di0zNy44bC0yLjksMC43di0xMS44bDE3LjYtNHYxMS44bC0yLjksMC43djM3LjhsMi45LTAuN3YxMS44TDE5MC4yLDM4Ny40DQoJCQkJTDE5MC4yLDM4Ny40eiBNMjUxLjQsMzMwLjVsLTExLjgsMi43di0zLjdsLTMtMi4zbC02LjQsMS40bC0yLjksMy42djMxLjhsMi45LDIuNGw2LjQtMS40bDMtMy43di00LjFsLTUuOCwxLjN2LTExLjhsMTcuNS00DQoJCQkJdjIwLjhsLTkuOSwxMi4xbC0xNiwzLjZsLTkuOS03LjZ2LTQxLjZsOS45LTEybDEyLjEtMi43bDIuMSwxLjV2LTEuOWwxMS44LTIuN1YzMzAuNUwyNTEuNCwzMzAuNXogTTI4MC44LDM2Ni44di0xMS44bDMtMC43DQoJCQkJdi0xMy4xbC05LjksMi4ydjEzLjFsMy0wLjd2MTEuN2wtMTcuNyw0VjM2MGwzLTAuN3YtMzcuOGwtMywwLjd2LTExLjhsMTcuNy00djExLjhsLTMsMC43djEzbDkuOS0yLjJ2LTEzbC0zLDAuN3YtMTEuN2wxNy43LTQNCgkJCQl2MTEuOGwtMywwLjd2MzcuOGwzLTAuN3YxMS44TDI4MC44LDM2Ni44TDI4MC44LDM2Ni44eiBNMzQ3LjMsMzA4LjhsLTExLjgsMi43di02LjZsLTIuOSwwLjd2MzcuOGwyLjktMC43djExLjhsLTE3LjYsNHYtMTEuNw0KCQkJCWwyLjktMC43di0zNy44bC0yLjksMC43djYuNmwtMTEuOCwyLjd2LTE4LjRsNDEuMS05LjNWMzA4LjhMMzQ3LjMsMzA4Ljh6IE0xNjkuMSw0NjUuNmw0LjgsNC4xbC03LjgsMS44bC00LjgtNC4xbC04LjMsMS45DQoJCQkJbC05LjktNy42VjQyMGw5LjktMTIuMWwxNi4xLTMuN2w5LjgsNy43djQxLjZMMTY5LjEsNDY1LjZMMTY5LjEsNDY1LjZ6IE0xNjcuMiw0NTEuM3YtMzEuOWwtMy0yLjNsLTYuMywxLjRsLTMsMy42djMxLjlsMywyLjMNCgkJCQlsNi4zLTEuNEwxNjcuMiw0NTEuM0wxNjcuMiw0NTEuM3ogTTIxMS4yLDQwNi40bC0yLjksMC43di0xMS44bDE3LjYtNHYxMS44bC0yLjksMC43djM5LjdsLTkuOSwxMi4xbC0xMy43LDMuMWwtOS45LTcuNnYtMzkuNw0KCQkJCWwtMi45LDAuN3YtMTEuOGwxNy42LTRWNDA4bC0yLjksMC43bC0wLjEsMzQuOGwzLDIuNGw0LTAuOWwzLTMuN0wyMTEuMiw0MDYuNEwyMTEuMiw0MDYuNHogTTI3Myw0MzAuMlY0NDJsLTE3LjYsNHYtMTEuOA0KCQkJCWwyLjctMC42bC0wLjYtM2wtOC4yLDEuOWwtMC43LDMuNGwyLjctMC42djExLjhsLTE3LjYsNHYtMTEuOGwyLjgtMC42bDExLjEtNTIuMWwxMS40LTIuNmwxMS4xLDQ3TDI3Myw0MzAuMkwyNzMsNDMwLjJ6DQoJCQkJIE0yNTUuNiw0MjNsLTIuMy05LjZsLTIuMywxMC42TDI1NS42LDQyM0wyNTUuNiw0MjN6IE0yODAuOCw0NDAuMnYtMTEuN2wzLTAuN1YzOTBsLTMsMC43di0xMS44bDE3LjYtNHYxMS44bC0yLjksMC43djM3LjgNCgkJCQlsMTEuMS0yLjV2LTYuN2wxMS44LTIuN3YxOC40TDI4MC44LDQ0MC4yTDI4MC44LDQ0MC4yeiBNMzI2LjEsNDI5Ljl2LTExLjdsMi45LTAuN3YtMzcuOGwtMi45LDAuN3YtMTEuOGwxNy42LTR2MTEuN2wtMi45LDAuNw0KCQkJCXYzNy44bDIuOS0wLjdWNDI2TDMyNi4xLDQyOS45TDMyNi4xLDQyOS45eiBNMzkyLjUsMzcxLjlsLTExLjgsMi43VjM2OGwtMi45LDAuN3YzNy44bDIuOS0wLjd2MTEuOGwtMTcuNiw0di0xMS44bDIuOS0wLjd2LTM3LjgNCgkJCQlsLTIuOSwwLjd2Ni42bC0xMS44LDIuN3YtMTguNGw0MS4xLTkuM1YzNzEuOUwzOTIuNSwzNzEuOXogTTQwMC4zLDM2My41di0xMS44bDE3LjYtNHYxMS44bC0xLjksMC40bDQsNi4ybDQtOGwtMS45LDAuNHYtMTEuOA0KCQkJCWwxNy43LTR2MTEuOGwtMi4yLDAuNWwtMTEuNywyMy4xdjE3LjRsMy0wLjd2MTEuOGwtMTcuNiw0di0xMS44bDIuOS0wLjd2LTE3LjRsLTExLjctMTcuOEw0MDAuMywzNjMuNXoiLz4NCgkJCTxnPg0KCQkJCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNDgzMjI1IiBwb2ludHM9IjM1NC40LDIzMy43IDM1OC43LDI0My41IDM2OS40LDI0NC41IDM2MS4zLDI1MS42IA0KCQkJCQkzNjMuNywyNjIuMSAzNTQuNCwyNTYuNiAzNDUuMiwyNjIuMSAzNDcuNSwyNTEuNiAzMzkuNSwyNDQuNSAzNTAuMiwyNDMuNSAJCQkJIi8+DQoJCQkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMzg2LDI0NS41IDM4OS4zLDI1MyAzOTcuNSwyNTMuOCAzOTEuMywyNTkuMyANCgkJCQkJMzkzLjEsMjY3LjQgMzg2LDI2My4yIDM3OC45LDI2Ny40IDM4MC43LDI1OS4zIDM3NC41LDI1My44IDM4Mi43LDI1MyAJCQkJIi8+DQoJCQkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iNDA5LjgsMjU4LjEgNDExLjksMjYyLjggNDE3LDI2My4zIDQxMy4yLDI2Ni44IA0KCQkJCQk0MTQuMywyNzEuOCA0MDkuOCwyNjkuMiA0MDUuNCwyNzEuOCA0MDYuNSwyNjYuOCA0MDIuNiwyNjMuMyA0MDcuOCwyNjIuOCAJCQkJIi8+DQoJCQkJPHBvbHlnb24gZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMzIyLjksMjQ1LjUgMzE5LjYsMjUzIDMxMS40LDI1My44IDMxNy42LDI1OS4zIA0KCQkJCQkzMTUuOCwyNjcuNCAzMjIuOSwyNjMuMiAzMzAsMjY3LjQgMzI4LjIsMjU5LjMgMzM0LjQsMjUzLjggMzI2LjIsMjUzIAkJCQkiLz4NCgkJCQk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIyOTksMjU4LjEgMjk3LDI2Mi44IDI5MS44LDI2My4zIDI5NS43LDI2Ni44IA0KCQkJCQkyOTQuNiwyNzEuOCAyOTksMjY5LjIgMzAzLjUsMjcxLjggMzAyLjQsMjY2LjggMzA2LjMsMjYzLjMgMzAxLjEsMjYyLjggCQkJCSIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjREE5QzMzIiBkPSJNNTQzLjksNTkwQzU0My45LDU5MC4xLDU0My45LDU5MC4xLDU0My45LDU5MA0KCQljMCwwLjUtMC4xLDAuOS0wLjIsMS4zYzAsMC4xLDAsMC4xLDAsMC4yYy0wLjEsMC40LTAuMSwwLjctMC4yLDEuMWMwLDAsMCwwLjEsMCwwLjFjNS4yLTQuNywxMC4yLTEyLDE1LjEtMTkuMg0KCQljMy4zLTQuOSw2LjQtOS40LDkuNi0xMy4zYzEtMS4yLDIuMS0yLjUsMy4zLTMuOWMxMC4zLTEyLDI0LjEtMjguMiwxMy4zLTQxLjZjLTM0LjktNDMuMS0xMjAuMS01NS4zLTE4MC44LTU1LjMNCgkJYy00OC4zLDAtODcuNSw2LjEtMTA3LjEsOS44Yy03MSwxMy4zLTEzMC45LDQwLjgtMTg2LjUsNzQuMmMtMzEuMywxOC44LTc1LjYsMzYuNi05My45LDI0YzAsMC0wLjEsMC0wLjEsMA0KCQljNC44LDYuMywxMC44LDExLjgsMTcuMSwxNy41YzkuNCw4LjYsMTkuMiwxNy40LDI2LjgsMzAuN2M2LjEsOS4yLDEwLjksMTYuNCwyMi42LDE2LjRjMS44LDAsMy45LTAuMiw2LTAuNQ0KCQljNi4yLTEsMTcuNy02LjQsMzUtMTQuNmMyOS4xLTEzLjcsNzcuOS0zNi42LDE1Mi4yLTYyLjJjMTIuNS00LjMsMjUuNi03LjksMzktMTAuN2wwLDBsMC44LTAuMmMwLDAsMCwwLDAsMA0KCQljMzYuNi03LjYsNjIuNS03LjYsNzUuOS03LjZoMGMzLjIsMCw2LjMsMCw5LjUsMC4xYzMyLjksMC44LDY1LjMsNS42LDkyLDEzLjljMjcuNSw4LjUsNDUuMywxOS4zLDQ4LjgsMjkuOGwwLDANCgkJYzAuMiwwLjcsMC40LDEuMywwLjYsMS45YzAsMC4xLDAsMC4xLDAuMSwwLjJjMC4yLDAuNiwwLjMsMS4xLDAuNCwxLjdjMCwwLjEsMCwwLjIsMC4xLDAuM2MwLjEsMC41LDAuMiwxLjEsMC4zLDEuNQ0KCQljMCwwLjEsMCwwLjIsMCwwLjNjMC4xLDAuNSwwLjEsMSwwLjIsMS40YzAsMC4xLDAsMC4xLDAsMC4yYzAsMC41LDAuMSwwLjksMC4xLDEuNGMwLDAsMCwwLDAsMC4xQzU0NCw1ODkuMiw1NDQsNTg5LjYsNTQzLjksNTkweiINCgkJLz4NCgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ4MzIyNSIgZD0iTTkuOCw1NTEuOGMtMC42LDMuNSwwLjIsNi42LDIuMyw4LjlsMCwwYzAuMiwwLjIsMC41LDAuNSwwLjcsMC43DQoJCWMwLjEsMC4xLDAuMSwwLjEsMC4yLDAuMmMwLjIsMC4yLDAuNCwwLjMsMC42LDAuNWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMmMwLjIsMC4xLDAuNCwwLjMsMC42LDAuNGMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMg0KCQljMC4yLDAuMSwwLjUsMC4zLDAuNywwLjRjMC4xLDAsMC4yLDAuMSwwLjMsMC4xYzAuMywwLjEsMC42LDAuMywwLjgsMC40YzAuMSwwLDAuMSwwLjEsMC4yLDAuMWMxLjksMC45LDQuMSwxLjUsNi42LDEuOQ0KCQljMCwwLDAuMSwwLDAuMSwwYzAuNSwwLjEsMC45LDAuMSwxLjQsMC4yYzAsMCwwLjEsMCwwLjEsMGMwLjUsMCwxLDAuMSwxLjUsMC4xYzAsMCwwLjEsMCwwLjEsMGMwLjUsMCwxLjEsMC4xLDEuNiwwLjENCgkJYzAsMCwwLDAsMC4xLDBjMS44LDAuMSwzLjYsMCw1LjYtMC4xYzI3LjgtMS42LDUxLjQtMTUuMiw4MS4yLTMyLjNjNC4zLTIuNSwyNy44LTE1LjYsMjguMi0xNS44Yy02LjItOC43LTEyLjYtMTQuNS0xOS43LTIwLjUNCgkJYy0wLjgtMC43LTEuNi0xLjEtMi40LTEuOGMwLDAuMiwwLjEsMC42LDAuMSwxYzAsMC4xLDAsMC4yLDAsMC4yYzAsMC4zLDAsMC43LTAuMSwxLjFjMCwwLjEsMCwwLjIsMCwwLjNjMCwwLjQtMC4xLDAuOC0wLjIsMS4yDQoJCWMwLDAuMSwwLDAuMSwwLDAuMmMtMC4xLDAuNC0wLjIsMC43LTAuMywxLjFjMCwwLjEtMC4xLDAuMi0wLjEsMC4zYy0wLjEsMC40LTAuMywwLjgtMC41LDEuM2MtMy40LDcuOC0xMywxMy44LTIwLjksMTYuNw0KCQljLTEyLjIsNC42LTI0LjksNS43LTM3LjIsNi44Yy02LjYsMC42LTEyLjgsMS4yLTE4LjgsMi4yYy04LjQsMS41LTE1LDMuNy0yMC41LDdDMTUuOCw1MzkuNCwxMC44LDU0NS44LDkuOCw1NTEuOHoiLz4NCgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0RBOUMzMyIgZD0iTTg2LjYsNDkzYy0yLjQsMS4zLTQuOCwyLjgtNy40LDQuNEM2OS4xLDUwMy44LDU3LjYsNTExLDQxLjUsNTExDQoJCWgwYy00LjIsMC04LjUtMC41LTEzLTEuNWMyLDMuOSw0LjQsNS41LDcsNy4yYzIuNiwxLjcsNS40LDMuNSw3LjksNy43YzAuNy0wLjEsMS40LTAuMiwyLjEtMC4zYzAuNi0wLjEsMS4zLTAuMiwxLjktMC4zDQoJCWMwLjktMC4xLDEuOS0wLjIsMi44LTAuM2MwLjYtMC4xLDEuMi0wLjEsMS44LTAuMmMxLjEtMC4xLDIuMS0wLjIsMy4yLTAuM2MwLjUsMCwxLTAuMSwxLjQtMC4xYzEuNS0wLjEsMy4xLTAuMyw0LjctMC40DQoJCWMxMi0xLDI0LjQtMi4xLDM2LjItNi4zYzctMi41LDE2LjEtNy44LDE5LjEtMTQuNGMxLjMtMi44LDEuMy01LjcsMC04LjVjLTAuMy0wLjgtMC44LTEuNC0xLjQtMmMtMi41LTIuNi02LjgtMy4yLTkuOS0zLjINCgkJQzk5LjQsNDg3LjksOTIuMyw0ODkuOSw4Ni42LDQ5M3oiLz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjNDgzMjI1IiBkPSJNMjE3LjksNTQzLjFsLTExLjctMTguNGwtNC43LDEuOGwyLjcsMjEuOGwtMS4yLDAuNGwxLjcsNC44bDcuMi0yLjdsLTEuNy00LjhsLTEuMSwwLjRsLTAuMi0xLjRsMy40LTEuMw0KCQkJCWwwLjcsMS4ybC0xLjEsMC40bDEuNyw0LjhsNy4yLTIuN2wtMS43LTQuOEwyMTcuOSw1NDMuMXogTTIwOC40LDU0MS41bC0wLjUtNC41bDIuNCwzLjhMMjA4LjQsNTQxLjV6Ii8+DQoJCQk8cG9seWdvbiBmaWxsPSIjNDgzMjI1IiBwb2ludHM9IjI1MS4yLDUzMS4yIDI0Ni40LDUxNS42IDI0Ny42LDUxNS4yIDI0OC40LDUxOCAyNTMuMiw1MTYuNCAyNTAuOSw1MDguOCAyMzMuOSw1MTQuNCAyMzYuMyw1MjIgDQoJCQkJMjQxLjEsNTIwLjQgMjQwLjMsNTE3LjYgMjQxLjUsNTE3LjMgMjQ2LjMsNTMyLjggMjQ1LjEsNTMzLjIgMjQ2LjYsNTM4LjEgMjUzLjksNTM1LjcgMjUyLjQsNTMwLjggCQkJIi8+DQoJCQk8cG9seWdvbiBmaWxsPSIjNDgzMjI1IiBwb2ludHM9IjIzMS4yLDUzNSAyMzEuNyw1MzYuNiAyMzAuOSw1MzguMyAyMjguMyw1MzkuMiAyMjYuNyw1MzguNCAyMjIuMyw1MjUuMyAyMjMuMSw1MjMuNyANCgkJCQkyMjUuNyw1MjIuOCAyMjcuNCw1MjMuNiAyMjcuOSw1MjUgMjMyLjcsNTIzLjQgMjMwLjIsNTE1LjggMjI1LjMsNTE3LjUgMjI1LjYsNTE4LjMgMjI0LjUsNTE3LjkgMjE5LjUsNTE5LjYgMjE2LjgsNTI1IA0KCQkJCTIyMi41LDU0Mi4xIDIyNy45LDU0NC43IDIzNC41LDU0Mi4zIDIzNy4yLDUzNi45IDIzNiw1MzMuMyAJCQkiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMjY2LjcsNTI2LjIgMjYyLjMsNTEwLjUgMjYzLjUsNTEwLjEgMjYyLjEsNTA1LjMgMjU0LjgsNTA3LjUgMjU2LjEsNTEyLjQgMjU3LjMsNTEyIA0KCQkJCTI2MS43LDUyNy43IDI2MC41LDUyOC4xIDI2MS45LDUzMyAyNjkuMiw1MzAuNyAyNjcuOSw1MjUuOSAJCQkiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMTQ4LjQsNTcyLjEgMTQxLjgsNTU3LjIgMTQyLjksNTU2LjcgMTQ0LjEsNTU5LjMgMTQ4LjcsNTU3LjEgMTQ1LjUsNTQ5LjkgMTI5LjMsNTU3LjQgDQoJCQkJMTMyLjUsNTY0LjcgMTM3LjEsNTYyLjUgMTM2LDU1OS45IDEzNy4xLDU1OS40IDE0My43LDU3NC4zIDE0Mi42LDU3NC44IDE0NC42LDU3OS40IDE1MS42LDU3Ni4yIDE0OS41LDU3MS42IAkJCSIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIxOTEuMSw1NDkgMTk1LjksNTQ3IDE5Myw1MzkuNyAxODguMiw1NDEuNyAxODguOCw1NDMgMTg3LjEsNTQzLjcgMTg1LDUzOC41IDE4OC45LDUzNi45IA0KCQkJCTE4OS43LDUzOC45IDE5NC40LDUzNi45IDE5MS44LDUzMC4yIDE3Ny4yLDUzNi4zIDE3OS4xLDU0MSAxODAuMiw1NDAuNSAxODYuMyw1NTUuNiAxODUuMSw1NTYuMSAxODcsNTYwLjggMTk0LDU1Ny45IA0KCQkJCTE5Mi4yLDU1My4xIDE5MSw1NTMuNiAxODguOSw1NDguNCAxOTAuNiw1NDcuNyAJCQkiLz4NCgkJCTxwYXRoIGZpbGw9IiM0ODMyMjUiIGQ9Ik0xMzcuNyw1NzdsLTEzLjItMTcuM2wtNC41LDIuMWw0LjQsMjEuNWwtMS4xLDAuNWwyLjEsNC42bDYuOS0zLjNsLTIuMS00LjZsLTEuMSwwLjVsLTAuMy0xLjRsMy4zLTEuNQ0KCQkJCWwwLjgsMS4xbC0xLjEsMC41bDIuMSw0LjZsNy0zLjNsLTIuMS00LjZMMTM3LjcsNTc3eiBNMTI4LjIsNTc2LjFsLTAuOS00LjRsMi43LDMuNUwxMjguMiw1NzYuMXoiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMTYzLjIsNTY1LjQgMTU2LjgsNTUwLjUgMTU3LjksNTUwIDE1NS45LDU0NS4zIDE0OC45LDU0OC41IDE1MC45LDU1My4xIDE1Mi4xLDU1Mi42IA0KCQkJCTE1OC41LDU2Ny42IDE1Ny4zLDU2OC4xIDE1OS40LDU3Mi43IDE2Ni40LDU2OS42IDE2NC40LDU2NC45IAkJCSIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIxNzMuOCw1NDkuMiAxNjkuMyw1NTEuMiAxNjcuNyw1NTAuNSAxNjYuNSw1NDcuNyAxNjcuMiw1NDYgMTY5LjcsNTQ0LjkgMTcxLjQsNTQ1LjUgMTcyLDU0NyANCgkJCQkxNzYuNyw1NDUgMTczLjcsNTM3LjYgMTY5LDUzOS43IDE2OS4zLDU0MC41IDE2OC4xLDU0MC4xIDE2My4zLDU0Mi4yIDE2MSw1NDcuOCAxNjMuOCw1NTQuNSAxNjkuMyw1NTYuNyAxNzMuOCw1NTQuNyANCgkJCQkxNzUuNSw1NTUuNCAxNzYuNyw1NTguMiAxNzYsNTU5LjkgMTczLjQsNTYxIDE3MS44LDU2MC40IDE3MS4xLDU1OC45IDE2Ni41LDU2MC45IDE2OS41LDU2OC4zIDE3NC4yLDU2Ni4yIDE3My45LDU2NS40IA0KCQkJCTE3NSw1NjUuOCAxNzkuOCw1NjMuOCAxODIuMiw1NTguMSAxNzkuNCw1NTEuNCAJCQkiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iMTExLjgsNTc3LjQgMTA3LjQsNTc5LjUgMTA1LjcsNTc4LjkgMTA0LjUsNTc2LjIgMTA1LjEsNTc0LjUgMTA3LjYsNTczLjIgMTA5LjMsNTczLjggDQoJCQkJMTEwLDU3NS4zIDExNC42LDU3My4xIDExMS4zLDU2NS45IDEwNi43LDU2OC4xIDEwNyw1NjguOSAxMDUuOCw1NjguNSAxMDEuMSw1NzAuOCA5OSw1NzYuNSAxMDIsNTgzLjEgMTA3LjcsNTg1IDExMi4xLDU4Mi45IA0KCQkJCTExMy44LDU4My41IDExNS4xLDU4Ni4zIDExNC40LDU4OCAxMTEuOSw1ODkuMiAxMTAuMiw1ODguNiAxMDkuNiw1ODcuMiAxMDQuOSw1ODkuNCAxMDguMyw1OTYuNiAxMTIuOSw1OTQuNCAxMTIuNSw1OTMuNiANCgkJCQkxMTMuNyw1OTQgMTE4LjQsNTkxLjcgMTIwLjUsNTg2IDExNy41LDU3OS40IAkJCSIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSI0NzAuOSw1MDcuNiA0NjYuNyw1MDYuOCA0NjcuOSw1MDEuMiA0NjkuNyw1MDEuNSA0NjkuNCw1MDIuOSA0NzQuNCw1MDMuOSA0NzYsNDk2LjEgNDcxLDQ5NS4yIA0KCQkJCTQ3MC44LDQ5Ni41IDQ2OC45LDQ5Ni4yIDQ3MC4xLDQ5MC42IDQ3NC4yLDQ5MS40IDQ3My44LDQ5My41IDQ3OC43LDQ5NC41IDQ4MC4yLDQ4Ny4zIDQ2NC45LDQ4NC41IDQ2My45LDQ4OS41IDQ2NS4xLDQ4OS43IA0KCQkJCTQ2MS44LDUwNS44IDQ2MC41LDUwNS42IDQ1OS41LDUxMC42IDQ3NC44LDUxMy41IDQ3Ni4zLDUwNi40IDQ3MS4zLDUwNS40IAkJCSIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSI0NDIuMiw0ODEuMyA0NDEuMSw0ODkuMiA0NDYuMSw0ODkuOCA0NDYuNSw0ODYuOSA0NDcuOCw0ODcuMSA0NDUuNiw1MDMuNCA0NDQuMyw1MDMuMiANCgkJCQk0NDMuNiw1MDguMyA0NTEuMiw1MDkuMiA0NTEuOSw1MDQuMSA0NTAuNiw1MDMuOSA0NTIuOCw0ODcuNiA0NTQuMSw0ODcuOCA0NTMuNyw0OTAuNiA0NTguNyw0OTEuMiA0NTkuOCw0ODMuMyAJCQkiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iNDI5LjEsNDg1LjQgNDMwLjQsNDg1LjUgNDMwLDQ5MS42IDQyNi43LDQ4MC4yIDQyMC4yLDQ3OS45IDQxOS45LDQ4NSA0MjEuMSw0ODUuMSA0MjAsNTAxLjUgDQoJCQkJNDE4LjgsNTAxLjQgNDE4LjQsNTA2LjUgNDI2LjEsNTA2LjkgNDI2LjQsNTAxLjcgNDI1LjEsNTAxLjcgNDI1LjYsNDk0LjkgNDI5LjEsNTA3IDQzNCw1MDcuMiA0MzUuNSw0ODUuNyA0MzYuNyw0ODUuOCANCgkJCQk0MzcuMSw0ODAuNyA0MjkuNSw0ODAuMyAJCQkiLz4NCgkJCTxwb2x5Z29uIGZpbGw9IiM0ODMyMjUiIHBvaW50cz0iNDkzLjMsNTA5LjIgNDk1LjUsNTAxLjYgNDkwLjYsNTAwLjIgNDkwLjIsNTAxLjYgNDg4LjQsNTAxLjEgNDkwLDQ5NS42IDQ5NC4xLDQ5Ni44IA0KCQkJCTQ5My41LDQ5OC44IDQ5OC40LDUwMC4yIDUwMC40LDQ5My4yIDQ4NS40LDQ4OS4xIDQ4NCw0OTQgNDg1LjIsNDk0LjMgNDgwLjYsNTEwLjIgNDc5LjMsNTA5LjggNDc3LjksNTE0LjggNDkyLjksNTE4LjkgDQoJCQkJNDk1LDUxMS45IDQ5MC4xLDUxMC41IDQ4OS41LDUxMi42IDQ4NS40LDUxMS41IDQ4Nyw1MDYgNDg4LjgsNTA2LjUgNDg4LjQsNTA3LjggCQkJIi8+DQoJCQk8cGF0aCBmaWxsPSIjNDgzMjI1IiBkPSJNNDA5LjMsNDc5LjlsLTQuOSwwLjFsLTUsMjEuNmwtMS4yLDBsMCw1LjFsNy42LTAuMWwwLTUuMWwtMS4yLDBsMC4zLTEuNGwzLjYsMGwwLjMsMS40bC0xLjIsMGwwLDUuMQ0KCQkJCWw3LjYtMC4xbDAtNS4xaC0xLjJMNDA5LjMsNDc5Ljl6IE00MDUuNyw0OTYuNWwxLjEtNC40bDAuOSw0LjRMNDA1LjcsNDk2LjV6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjNDgzMjI1IiBkPSJNNTE2LjcsNDk5LjdsLTExLjEtNC4xbC0xLjksNC44bDEuMSwwLjRsLTYsMTUuNGwtMS4xLTAuNGwtMS45LDQuOGwxMS4yLDQuMWw1LjUtMi41bDYuNi0xN0w1MTYuNyw0OTkuNw0KCQkJCXogTTUwOC42LDUxOC40bC0xLjYsMC44bC0zLjMtMS4ybDYtMTUuNGwzLjMsMS4ybDAuNywxLjZMNTA4LjYsNTE4LjR6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjNDgzMjI1IiBkPSJNMzcyLjYsNTAzLjRsLTYuOC0yMC44bC00LjksMC42bC0yLjgsMjEuOWwtMS4yLDAuMWwwLjUsNS4xbDcuNi0wLjlsLTAuNS01LjFsLTEuMiwwLjFsMC4yLTEuNGwzLjUtMC40DQoJCQkJbDAuNCwxLjNsLTEuMiwwLjFsMC41LDUuMWw3LjYtMC45bC0wLjUtNS4xTDM3Mi42LDUwMy40eiBNMzYzLjgsNDk5LjVsMC42LTQuNWwxLjQsNC4zTDM2My44LDQ5OS41eiIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIzMDEuOSw0OTkuMyAzMDAuNyw0OTQuNCAyOTMuMyw0OTYuNCAyOTQuNSw1MDEuMyAyOTUuOCw1MDEgMjk3LjIsNTA2LjkgMjkwLjUsNDk3LjEgDQoJCQkJMjg0LjMsNDk4LjggMjg1LjUsNTAzLjggMjg2LjcsNTAzLjQgMjkwLjcsNTE5LjMgMjg5LjUsNTE5LjYgMjkwLjcsNTI0LjUgMjk4LjEsNTIyLjUgMjk2LjksNTE3LjYgMjk1LjcsNTE3LjkgMjk0LDUxMS4zIA0KCQkJCTMwMS4xLDUyMS43IDMwNS45LDUyMC40IDMwMC43LDQ5OS43IAkJCSIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIzMjQuMSw1MDIuOCAzMjUsNTA3LjggMzI3LjQsNTA3LjMgMzI3LjcsNTA5LjEgMzI2LjcsNTEwLjcgMzI0LDUxMS4yIDMyMi41LDUxMC4xIDMyMC4xLDQ5Ni42IA0KCQkJCTMyMS4xLDQ5NS4xIDMyMy44LDQ5NC42IDMyNS4zLDQ5NS42IDMyNS42LDQ5Ny4xIDMzMC42LDQ5Ni4xIDMyOS4yLDQ4OC4zIDMyNC4yLDQ4OS4zIDMyNC4zLDQ5MC4xIDMyMy4zLDQ4OS41IDMxOC4yLDQ5MC41IA0KCQkJCTMxNC43LDQ5NS41IDMxNy45LDUxMy4yIDMyMi44LDUxNi42IDMyOS43LDUxNS4yIDMzMy4xLDUxMC4yIDMzMS41LDUwMS4zIAkJCSIvPg0KCQkJPHBhdGggZmlsbD0iIzQ4MzIyNSIgZD0iTTM5My40LDUwMS44bC0zLjItNi4ybDMuNC0zLjhsLTAuMy03LjNsLTQuNS00bC0xMi40LDAuOGwwLjIsNS4xbDEuMy0wLjFsMC43LDE2LjRsLTEuMiwwLjFsMC4yLDUuMQ0KCQkJCWw3LjYtMC41bC0wLjItNS4xbC0xLjMsMC4xbC0wLjMtNS42bDEuNi0wLjFsMi44LDUuNGwtMSwwLjFsMC4yLDUuMWw3LjYtMC41bC0wLjItNS4xTDM5My40LDUwMS44eiBNMzg3LjIsNDkxLjRsLTQsMC4zTDM4Myw0ODYNCgkJCQlsNC0wLjNsMS4zLDEuMmwwLjEsMy4xTDM4Ny4yLDQ5MS40eiIvPg0KCQkJPHBvbHlnb24gZmlsbD0iIzQ4MzIyNSIgcG9pbnRzPSIzNTEsNDg5LjcgMzUwLjMsNDg0LjYgMzQyLjgsNDg1LjkgMzQzLjUsNDkwLjkgMzQ0LjcsNDkwLjcgMzQ2LjgsNTA1LjYgMzQ1LjcsNTA3LjEgMzQ0LDUwNy40IA0KCQkJCTM0Mi42LDUwNi4zIDM0MC41LDQ5MS40IDM0MS44LDQ5MS4yIDM0MS4xLDQ4Ni4xIDMzMy41LDQ4Ny4zIDMzNC4yLDQ5Mi40IDMzNS41LDQ5Mi4yIDMzNy44LDUwOS4yIDM0Mi42LDUxMi43IDM0OC41LDUxMS44IA0KCQkJCTM1Mi4yLDUwNi45IDM0OS44LDQ4OS45IAkJCSIvPg0KCQkJPHBhdGggZmlsbD0iIzQ4MzIyNSIgZD0iTTI3Ni4yLDUwMWwtNi43LDJsLTMsNS4zbDQuOSwxNy4zbDUuMywyLjlsNi43LTJsMi45LTUuM2wtNC44LTE3LjNMMjc2LjIsNTAxeiBNMjc5LjksNTIyLjJsLTIuNywwLjgNCgkJCQlsLTEuNi0wLjhsLTMuNy0xMy4zbDAuOS0xLjZsMi43LTAuOGwxLjYsMC44bDMuNywxMy4zTDI3OS45LDUyMi4yeiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo='
        //     },
        // ], function (err) {
        //     if (err) return console.error(err);
        //     console.log('[Mongoose Model.create] Background(s) Saved.');
        // });

        // Color.create([
        //     {
        //         name: 'PANTONE 209 C',
        //         hex: '#6E273D'
        //     },
        //     // {
        //     //     name: 'PANTONE 614 C',
        //     //     hex: 0xE1DEAE
        //     // },
        // ], function (err) {
        //     if (err) return console.error(err);
        //     console.log('[Mongoose Model.create] Color(s) Saved.');
        // });

        // Create
        // var green = new Color({
        //     name: 'PANTONE 377 C',
        //     hex: 0x739600
        // });
        // Save
        // green.save(function (err, test) {
        //     if (err) return console.error(err);
        //     console.log('SAVED: %s', test.name);
        // });
        // // Create
        // var test = new Document({
        //     contentType:'application/pdf',
        //     name: 'Integrated Instruction in Action',
        //     url: 'http://d2x1wkg5kregjp.cloudfront.net/media/media_files/integrated_instruction_in_action.pdf'
        // });
        // // Save
        // test.save(function (err, test) {
        //     if (err) return console.error(err);
        //     console.log('SAVED: %s', test.name);
        // });

        // Update
        // Color.findOneAndUpdate(
        //     {
        //         name: 'PANTONE 614 C'
        //     },
        //     {
        //         hex: 'e1deae'
        //     },
        //     function (err, Color) {
        //         if (err) return console.error(err);
        //         console.log(Color);
        //     }
        // );

        // Find
        Background.find({name:/.*/}, function (err, Item) {
            console.log(Item);
        });
    });
