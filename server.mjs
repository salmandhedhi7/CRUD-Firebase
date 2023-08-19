import Express  from "express";

//     /static/vscode_windows.exe
// app.use("/static", express.static(path.join(__dirname, 'static')))

// app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})
