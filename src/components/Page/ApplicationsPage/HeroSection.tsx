import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HeroSection.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { generateConcepts, getBook } from "./service";
import Topbar from "../../../components/Topbar";
import {
  Button,
  ButtonVariantType,
  IconButton,
  Input,
  ThemeType,
} from "basicui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookReader,
  faChevronRight,
  faDownload,
  faFileDownload,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import MainSection from "../../../components/MainSection";
import ConceptModel from "../../../model/BookModel";
import BookModel from "../../../model/BookModel";
import ImageComponent from "./ImageComponent";

interface Props {
  space: string;
  book: BookModel;
  onPrint: any;
  isPrinting: boolean;
}

const HeroSection = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  const authorization = useSelector((state: any) => state.authorization);

  const onOpen = () => {
    navigate(`/${props.space}/book/${props.book.reference}/read`);
  };

  const onOpenChapters = () => {
    navigate(`/${props.space}/book/${props.book.reference}/section`);
  };

  const onOpenExtract = () => {
    navigate(`/${props.space}/book/${props.book.reference}/extract`);
  };
  const onOpenConcept = () => {
    navigate(`/${props.space}/book/${props.book.reference}/concept`);
  };

  return (
    <div className="book-page-hero-section">
      <ImageComponent imageUrl={props.book.thumbnail} />
      <div className="book-page-hero-section__actions">
        <Button
          theme={ThemeType.primary}
          variant={ButtonVariantType.chroma}
          onClick={onOpen}
        >
          <FontAwesomeIcon icon={faBook} />
          Read
        </Button>
        <Button
          theme={ThemeType.default}
          variant={ButtonVariantType.chroma}
          onClick={onOpenChapters}
        >
          <FontAwesomeIcon icon={faBookReader} />
          Chapters
        </Button>
        <IconButton
          theme={ThemeType.default}
          variant={ButtonVariantType.chroma}
          onClick={props.onPrint}
          loading={props.isPrinting}
        >
          <FontAwesomeIcon icon={faDownload} />
        </IconButton>
      </div>
    </div>
  );
};

export default HeroSection;
