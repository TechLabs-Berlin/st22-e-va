import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { Typography, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Orange from "./HealthImages/Orange.jpg";
import Signs from "./HealthImages/Signs.jpg";
import Tampons from "./HealthImages/Tampons.jpg";
import Baby from "./HealthImages/Baby.jpg";
import Conception from "./HealthImages/Conception.jpg";
import Cramps from "./HealthImages/Cramps.jpg";
import First from "./HealthImages/First.jpg";
import Medi from "./HealthImages/Medi.jpg";
import Ovi from "./HealthImages/Ovi.jpg";
import PCOS from "./HealthImages/PCOS.jpg";
import Share from "./HealthImages/Share.jpg";
import Workout from "./HealthImages/Workout.jpg";
import { color } from "@mui/system";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=0.5 0.5x`,
  };
}

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1450, height: 1200, marginTop: "70px" }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">
          <Button
            sx={{
              width: 1400,
              height: 50,
            }}
          >
            <Typography
              variant="body2"
              color="#aa717e"
              align="center"
              sx={{
                color: "#aa717e",

                fontFamily: "Open Sans",
                position: "absolute",
                top: "60px",
                left: "50px",
                marginTop: "-60px",
                marginLeft: "555px",
                fontWeight: "bold",
                fontSize: "35px",
              }}
            >
              {" "}
              Health{" "}
            </Typography>
          </Button>
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=0.5 0.5x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            title={item.title}
            position="top"
            actionIcon={
              <IconButton
                sx={{ color: "white" }}
                aria-label={`star ${item.title}`}
              >
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Tampons,
    title: (
      <a href="https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186">
        {" "}
        What is Menstrual cycle{" "}
      </a>
    ),
    featured: true,
  },
  {
    img: Signs,
    title: (
      <a href=" https://www.healthline.com/health/womens-health/period-signs">
        10 signs that your period is about to start
      </a>
    ),
  },
  {
    img: Orange,
    title: (
      <a href="https://www.apollocradle.com/what-is-difference-between-pcod-vs-pcos/">
        PCOD vs PCOS
      </a>
    ),
  },
  {
    img: Cramps,
    title: (
      <a href="https://www.mayoclinic.org/diseases-conditions/premenstrual-syndrome/symptoms-causes/syc-20376780">
        Premenstrual Syndrome(PMS)
      </a>
    ),
  },
  {
    img: Share,
    title: (
      <a href="https://www.webmd.com/women/pms/signs-your-period-is-coming">
        Is your period coming sooner?
      </a>
    ),
  },
  {
    img: PCOS,
    title: (
      <a href="https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439">
        What is Polycystic ovary syndrome?
      </a>
    ),
    featured: true,
  },
  {
    img: Conception,
    title: (
      <a href="https://www.parents.com/getting-pregnant/trying-to-conceive/tips/best-sex-for-getting-pregnant/">
        When is the right time to conceive?
      </a>
    ),
  },
  {
    img: Ovi,
    title: (
      <a href="https://www.verywellfamily.com/how-long-does-ovulation-last-1960235">
        How long does the ovulation last?
      </a>
    ),
  },
  {
    img: First,
    title: (
      <a href="https://www.webmd.com/baby/first-period-after-pregnancy-what-to-expect">
        First period after pregnancy: What to expect
      </a>
    ),
  },
  {
    img: Baby,
    title: (
      <a href="https://www.pregnancybirthbaby.org.au/labour-the-signs-and-stages">
        Giving birth:Stages of pregnancy
      </a>
    ),
  },
  {
    img: Workout,
    title: (
      <a href="https://flo.health/menstrual-cycle/lifestyle/fitness-and-exercise/exercising-during-period">
        Exercising during period
      </a>
    ),
  },
  {
    img: Medi,
    title: (
      <a href="https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy-and-exercise/art-20046896">
        Exercising during pregnancy
      </a>
    ),
  },
];
