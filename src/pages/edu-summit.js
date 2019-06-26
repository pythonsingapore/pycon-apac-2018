import { Button } from "reactstrap";
import Helmet from "react-helmet";
import React from "react";
import styled from "styled-components";

import ContentCard from "../components/ContentCard.js";
import ULListStyleNone from "../components/ULListStyleNone.js";
import Schedule from "../components/Schedule.js";

const talks = [
  {
    time: "8:00am",
    speaker: "",
    title: "Registration & Breakfast",
    type: "break"
  },
  {
    time: "8:50am",
    speaker: "Dr Liew Beng Keat",
    job: "Deputy Director at Republic Polytechnic, BDFL PyCon APAC",
    title: "Opening"
  },
  {
    time: "9:00am",
    speaker: "Mr Lee Hoi Leong",
    job: "APAC Business Development Director at Mistletoe",
    title: "Introduction to VIVITA"
  },  
  {
    time: "9:15am",
    speaker: "Mr Ivan Zimine",
    job: "Fellow human at Odd-e",
    title: "Professional Software Development. Can it be taught?"
  },
  {
    time: "9:45am",
    speaker: "Prof Chris Boesch",
    job: "Associate Professor at National University of Singapore ALSET",
    title:
      "Transferring Python skills learned in game-based learning environments over to real-world environments"
  },
  {
    time: "10:15am",
    speaker: "Mr Laurence Putra",
    job: "Software engineer at PayPal",
    title: "Solving operational challenges while teaching"
  },
  {
    time: "10:45am",
    speaker: "Ms Liu Weiling",
    job: "Computing teacher at Jurong Pioneer Junior College",
    title:
      "Developing students’ computational thinking skills through interest-driven activities"
  },
  {
    time: "11:15am",
    speaker: "Dr Oka Kurniawan",
    job: "Senior Lecturer at Singapore University of Technology and Design",
    title:
      "Can we use games or gamification to help students learn programming?"
  },
  {
    time: "11:45am",
    speaker: "Mr Gi Soong Chee, Computing Teacher at Dunman High School",
    job: "with Dr Norman Lee, Senior Lecturer at Singapore University of Technology and Design",
    title: "Google CS Outreach Programs - A DHS Teacher's Perspective"
  },
  {
    time: "12:00noon",
    speaker: "Mr Gi Soong Chee",
    job: "Computing Teacher at Dunman High School",
    title: "Who's Who"
  },   
  {
    time: "12:15pm",
    title: "Lunch",
    subtitle: "Please network :)"
  },
  {
    time: "1:15pm",
    title: "Lightning Talks",
    subtitle: "(limited slots available)",
    talks: [
      {
        title: "Some student misconceptions on Python programming",
        speaker: "Dr Norman Lee",
        job: "Senior Lecturer at Singapore University of Technology and Design"
      },
      {
        title: "Making Python our Digital Mother Tongue",
        speaker: "Mr S S Goh",
        job: "App Developer at Softpack Microsystems Pte Ltd"
      },
      {
        title: "Programming Education in Taiwan",
        speaker: "Mr Noah Chen",
        job: "Program Manager at FOSSASIA"
      },
      {
        title: "Lessons Learnt from Teaching NLP",
        speaker: "Mr Tan Liling",
        job: "Research Scientist at Rakuten Institute of Technology"
      },
      {
        title: "ClassDo - Virtual Collaboration Rooms",
        speaker: "Mr Chung Chiew Farn",
        job: "CEO at ClassDo"
      },      
      {
        title: "Transforming pedagogy with Python",
        speaker: "Iqra Muhammad",
        job: "Sugar Labs Outreach"
      } 
    ]
  },
  {
    time: "2:00pm",
    speaker: "Mr Rishabh Anand",
    job: "Student at National Junior College",
    title:
      "On the Democratising of Public AI Education in Singapore"
  },
  {
    time: "2:30pm",
    speaker: "Dr Chen Weiqiang",
    job: "Lecturer at Eunoia Junior College",
    title:
      "Using Google Colab for Data Science/AI education and Kaggle competitions"
  },
  {
    time: "2:50pm",
    speaker: "Dr Melvin Zhang",
    job: "Computational Thinkerer",
    title: "Project Malmo with malmopy"
  },
  {
    time: "3:10pm",
    speaker: "Ms Drishti Jain",
    job: "Computer Engineer at heart",
    title: "Illuminate Data with Visualisation"
  },  
  {
    time: "3:35pm",
    speaker: "Mr Tamim Shahriar",
    job:
      "Engineering Manager, Grab, author of bestselling programming books in Bangladesh",
    title: "Teaching Programming the Hard Way - Writing Books"
  },
  {
    time: "3:50pm",
    speaker: "Timothy Liu Kaihui",
    job: "Student Researcher at Singapore University of Technology and Design",
    title: "OpenSUTD"
  },
  {
    time: "4:15pm",
    speaker: "Ryzak Kamis",
    job: "AI Engineer at AI Singapore",
    title: "Supercharge your Programming, Data Science and Machine Learning"
  },
  {
    time: "4:40pm",
    speaker: "Prof Leong Hon Wai",
    job:
      "Associate Professor at National University of Singapore, School of Computing",
    title: "Conversation with Prof Leong"
  },
  {
    time: "5:05pm",
    speaker: "",
    job: "",
    title: "Lucky Draw & Closing"
  }
];

const EduSummitPage = () => (
  <div className="container">
    <Helmet>
      <title>Education Summit | PyCon SG 2019</title>
    </Helmet>

    <ContentCard>
      <h1>Education Summit at VIVISTOP Orchard, *SCAPE, #05-07A/B, 2 Orchard Link, Singapore 237978.</h1>
      <p>
        On Tuesday 25 June 2019, PyCon SG 2019 will hold an Education Summit, a
        gathering of educators focused on bringing computational thinking and
        coding literacy, through Python, to the classroom and the community. We
        invite passionate educators to join the discussion, share insights,
        learn things and build networks!
      </p>
    </ContentCard>
    <ContentCard>
      <h1>Schedule</h1>
      <Schedule talks={talks} />
    </ContentCard>
    <ContentCard>
      <h1>Attending</h1>
      <p>
        Registration is closed. For queries, please contact{" "}
        <a href="mailto:pyedu@computing.sg">pyedu@computing.sg</a>
      </p>
    </ContentCard>
  </div>
);

export default EduSummitPage;
