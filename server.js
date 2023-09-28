const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//routes
const HomeRoutes = require("./routes/home.routes");
const CaauriRoutes = require("./routes/caauri.routes");
const ServiceRoutes = require("./routes/service.routes");
const PortfolioRoutes = require("./routes/portfolio.routes");
const BlogRoutes = require("./routes/blog.routes");
const ClientRoutes = require("./routes/client.routes");
const AllBlogRoutes = require("./routes/allBlog.routes");
const WorksRoutes = require("./routes/works.routes");
const CareerRoutes = require("./routes/career.routes");

app.get("/", (req, res) => res.send("hello word"));

app.listen(process.env.PORT || port, () => {
  console.log(`app listening on port ${port}`);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//connect to database
//not change the username

mongoose
  .connect(
    "mongodb+srv://evansJean:Azerty0987@cluster0.a2k1t6d.mongodb.net/caauri?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log(`database connecting ${res}`))
  .catch((err) => console.log(`connection failed ${err.message}`));

app.use(HomeRoutes);
app.use(CaauriRoutes);
app.use(ServiceRoutes);
app.use(PortfolioRoutes);
app.use(BlogRoutes);
app.use(ClientRoutes);
app.use(AllBlogRoutes);
app.use(WorksRoutes);
app.use(CareerRoutes);
