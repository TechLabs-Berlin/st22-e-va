import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { Typography, Button, Link } from "@mui/material";
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
import Acne from "./HealthImages/Acne.jpg";
import Craving from "./HealthImages/Craving.jpg";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function TitlebarImageList() {
  return (
    <ImageList
      sx={{ width: 1500, height: 1200, marginTop: "70px" }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">
          <Button
            sx={{
              width: 1200,
              height: 50,
            }}
          >
            <Typography
              color="#aa717e"
              align="center"
              sx={{
                fontFamily: "Open Sans",
                marginTop: "10px",
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
      <Link
        href="https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        What is Menstrual cycle{" "}
      </Link>
    ),
  },
  {
    img: Signs,
    title: (
      <Link
        href=" https://www.healthline.com/health/womens-health/period-signs"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        10 signs that your period is about to start
      </Link>
    ),
  },
  {
    img: Orange,
    title: (
      <Link
        href="https://www.apollocradle.com/what-is-difference-between-pcod-vs-pcos/"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        PCOD vs PCOS
      </Link>
    ),
  },
  {
    img: Cramps,
    title: (
      <Link
        href="https://www.mayoclinic.org/diseases-conditions/premenstrual-syndrome/symptoms-causes/syc-20376780"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Premenstrual Syndrome(PMS)
      </Link>
    ),
  },
  {
    img: Share,
    title: (
      <Link
        href="https://www.webmd.com/women/pms/signs-your-period-is-coming"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Is your period coming sooner?
      </Link>
    ),
  },
  {
    img: PCOS,
    title: (
      <Link
        href="https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        What is Polycystic ovary syndrome?
      </Link>
    ),
  },
  {
    img: Conception,
    title: (
      <Link
        href="https://www.parents.com/getting-pregnant/trying-to-conceive/tips/best-sex-for-getting-pregnant/"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        When is the right time to conceive?
      </Link>
    ),
  },
  {
    img: Ovi,
    title: (
      <Link
        href="https://www.verywellfamily.com/how-long-does-ovulation-last-1960235"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        How long does the ovulation last?
      </Link>
    ),
  },
  {
    img: First,
    title: (
      <Link
        href="https://www.webmd.com/baby/first-period-after-pregnancy-what-to-expect"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        First period after pregnancy: What to expect
      </Link>
    ),
  },
  {
    img: Baby,
    title: (
      <Link
        href="https://www.pregnancybirthbaby.org.au/labour-the-signs-and-stages"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Giving birth:Stages of pregnancy
      </Link>
    ),
  },
  {
    img: Workout,
    title: (
      <Link
        href="https://flo.health/menstrual-cycle/lifestyle/fitness-and-exercise/exercising-during-period"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Exercising during period
      </Link>
    ),
  },
  {
    img: Medi,
    title: (
      <Link
        href="https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy-and-exercise/art-20046896"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Exercising during pregnancy
      </Link>
    ),
  },
  {
    img: Acne,
    title: (
      <Link
        href="https://www.healthline.com/health/period-acne#causes"
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Exercising during pregnancy
      </Link>
    ),
  },
  {
    img: Craving,
    title: (
      <Link
        href="https://share.upmc.com/2014/11/five-tips-coping-pms-cravings/#:~:text=Many%20women%20experience%20intense%20food,which%20leads%20to%20sugar%20cravings."
        rel="noopener noreferrer"
        target="_blank"
        underline="hover"
        sx={{
          color: "#ffffff",
        }}
      >
        Exercising during pregnancy
      </Link>
    ),
  },
];
