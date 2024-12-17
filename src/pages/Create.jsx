import React from "react"
import styles from "./Create.module.css"
import { ViewMode, ViewContext } from "../context/ViewContext"
import CustomButton from "../components/custom-button"
import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"

import { SoundContext } from "../context/SoundContext"
import { AudioContext } from "../context/AudioContext"

function Create({fetchNewModel}) {

  // Translate hook
  const {t} = useContext(LanguageContext);

  const { setViewMode } = React.useContext(ViewContext)
  const { playSound } = React.useContext(SoundContext)
  const { isMute } = React.useContext(AudioContext)

  const back = () => {
    setViewMode(ViewMode.LANDING)
    !isMute && playSound('backNextButton');
  }

  const selectClass = (characterClass) => {
    fetchNewModel(characterClass.templateIndex).then(()=>{
        setViewMode(ViewMode.APPEARANCE)
    })
    !isMute && playSound('classSelect');

  }
  const hoverClass = () => {
    !isMute && playSound('classMouseOver');
  }

  const classes = [
    {
        name: t('classes.beastPainter.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/disabled.png",
        description: t('classes.beastPainter.description'),
        icon: "/assets/icons/class-beast-painter.svg",
        disabled: true,
        templateIndex:2
      },
      {
        name: t('classes.engineer.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/disabled.png",
        description: t('classes.engineer.description'),
        icon: "/assets/icons/class-engineer.svg",
        disabled: true,
        templateIndex:3
      },
      {
        name: t('classes.dropHunter.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/DropHunter.png",
        description: t('classes.dropHunter.description'),
        icon: "/assets/icons/class-drop-hunter.svg",
        disabled: false,
        templateIndex:0
      },
      {
        name: t('classes.theDegen.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/degens.gif",
        description: t('classes.theDegen.description'),
        icon: "/assets/icons/class-the-degen.svg",
        disabled: true,
        templateIndex:6
      },
      {
        name: t('classes.neuralHacker.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/NeuralHacker.png",
        description: t('classes.neuralHacker.description'),
        icon: "/assets/icons/class-neural-hacker.svg",
        disabled: false,
        templateIndex:1
      },
      {
        name: t('classes.liskWitch.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/disabled.png",
        description: t('classes.liskWitch.description'),
        icon: "/assets/icons/class-lisk-witch.svg",
        disabled: true,
        templateIndex:4
      },
      {
        name: t('classes.bruiser.name'),
        image: import.meta.env.VITE_PUBLIC_PATH + "/assets/media/disabled.png",
        description: t('classes.bruiser.description'),
        icon: "/assets/icons/class-bruiser.svg",
        disabled: true,
        templateIndex:5
      },
  ]

  return (
    <div className={`${styles.container} horizontalScroll`}>
      <div className={"sectionTitle"}>{t('pageTitles.chooseClass')}</div>
      <div className={styles.topLine} />
      <div className={styles.classContainer}>
        {classes.map((characterClass, i) => {
          return (
            <div
              key={i}
              className={
                !characterClass["disabled"]
                  ? styles.class
                  : styles.classdisabled
              }
              onClick={
                characterClass["disabled"]
                  ? null
                  : () => selectClass(characterClass)
              }
              onMouseOver={
                characterClass["disabled"]
                  ? null
                  : () => hoverClass()
              }
            >
            <div
                className={styles.classFrame}
                style={{
                  "backgroundImage": `url(${characterClass["image"]})`,
                }}
              >
                <div className={styles.frameContainer}>
                  <img
                    src={import.meta.env.VITE_PUBLIC_PATH + "/assets/backgrounds/class-frame.svg"}
                    className={styles.frame}
                  />
                </div>

                <div className={styles.lockedContainer}>
                  {characterClass["disabled"] && (
                    <img
                      src={import.meta.env.VITE_PUBLIC_PATH + "/assets/icons/locked.svg"}
                      className={styles.locked}
                    />
                  )}
                </div>
              </div>
              <div className={styles.icon}>
                <img
                  src={characterClass["icon"]}
                  alt={characterClass["name"]}
                />
              </div>
              
              <div className={styles.name}>{characterClass["name"]}</div>
              <div className={styles.description}>
                {characterClass["description"]}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.bottomLine} />
      <div className={styles.buttonContainer}>
        { /* <CustomButton
          theme="light"
          text={t('callToAction.back')}
          size={14}
          className={styles.buttonLeft}
          onClick={back}
      /> */}
      </div>
    </div>
  )
}

export default Create
