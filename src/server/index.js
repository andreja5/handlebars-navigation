import express from "express";
import path from "path";
import hbs from "hbs";
import navigationData from '../../navigationData.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

const publicPath = path.join(__dirname, "../../public");

app.use(express.static(publicPath));

const partialPath = path.join(__dirname, '../views/partials');
const viewPath = path.join(__dirname, "../views");

hbs.registerPartials(partialPath);

app.set("view engine", "hbs");
app.set("views", viewPath);

app.get('/', (req, res) => {
    console.log('Renders main page...');

    res.render("main.hbs", {
        pageName: 'Home page',
        data: navigationData,
    });
})

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
})