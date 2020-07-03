import * as React from "react";

function SvgWavesChoppy(props) {
  return (
    <svg width={75.665} height={75.004} {...props}>
      <defs>
        <linearGradient
          id="waves-choppy_svg__a"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#bce0fd" />
          <stop offset={0.42} stopColor="#2f8dde" />
        </linearGradient>
        <style>{".waves-choppy_svg__b{fill:#fff}"}</style>
      </defs>
      <g transform="translate(.045 .004)">
        <circle
          cx={37.5}
          cy={37.5}
          r={37.5}
          transform="translate(.02)"
          fill="url(#waves-choppy_svg__a)"
        />
        <path
          className="waves-choppy_svg__b"
          d="M69.52 59.5c0-.26 0-.85-.08-.73l-.06 1zM68.9 57.66a7.85 7.85 0 00-.16 2.24c.1-1 .13-.56.24-1.7.1-.11.17.32.15.69 0-.26.14.22.19-.41-.12-.77-.27-.8-.43-.16a3.581 3.581 0 01.01-.66zM59.89 56.11l.06.12a.15.15 0 00-.06-.12zM54.31 55.56a.788.788 0 00.07-.21.33.33 0 00-.07.21zM53.36 54.47l.06.07c-.02-.09-.05-.15-.06-.07zM59.89 56.11l-.15-.31c-.01.32.08.2.15.31zM67.66 60.05a1.16 1.16 0 00.08-.26 1 1 0 01-.08.11zM62.35 55.3zM64.24 55.15a8 8 0 00-.07 1.18 1.57 1.57 0 01.09-.58c0-.16-.01-.35-.02-.6zM67.23 56.63l.06-.11zM61 55.12a2.231 2.231 0 000-.3 2.662 2.662 0 000 .3zM8.21 61.46v-.15c-.01.08-.02.14 0 .15zM6 57.28zM51.62 53.39c.05-.08.03-.06 0 0zM35.61 54c.18.75-.29 1 0 1.81-.04-.32.23-1.31 0-1.81zM67.61 59.94a.11.11 0 01-.08 0s.06.06.08 0zM35.59 55.82v.08zM47.6 53.9v.37a2.12 2.12 0 000-.37zM50.59 55.1l-.07-.1c.03.06.05.09.07.1zM46.05 55.09c0-.07-.06-.18-.11-.07a.3.3 0 000 .1c.06-.12.06-.12.11-.03zM44.43 55.09v.17zM13.12 61.05c0-.23-.06-.5-.07-.75.02.59-.22.81.07.75z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M67.66 59.58a1.17 1.17 0 010 .36 1.681 1.681 0 000-.36zM46 61.74l-.26-.13a.35.35 0 00.26.13zM24.72 60.93l-.06.1a.143.143 0 00.06-.1zM45 61.74a2.08 2.08 0 00-.14-.58 1.05 1.05 0 000 .21z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M11.35 62.29c.25 0 .12-1.09.17-1.72.29-.32.14.81.24 1.38.18-.29.32-1.31.45-1.27a1.88 1.88 0 010 .48c.19-.88.57 0 .8-1.15v.28c0-.56-.05-1.12 0-1.52.11 0 .21-.7.25 0-.07 0-.08.27-.11.5l.12-.32c.1 1-.16.36-.16 1.13.22-.34.49-1.2.66-.9 0 1-.4.34-.17 1.25l-.27-.39c.2 1.6-.16-.12 0 1.6.35.3.4-.52.74-.22.08-.56 0-.84.06-1.4.49-1 .39 2.56.75 1.2.1-.68.13-2 .39-1.28l-.09 1.15c.34.11.2-1.66.55-.88-.06.45-.26.38-.21.52.23.91.16-.66.34-.66v1c.36-.16.76-.89 1.16-1.08a2.64 2.64 0 000 .93c.51-.51 1.08.13 1.57.73l.18-.88a1.08 1.08 0 010 .57c.19.34 0-.56.11-.9.1-.06.14.5.07.77.33-.75.95-1.61 1.3-.67l-.06.26c.27.36.3-1.8.56-1v.16c.6.38 1.25-.43 1.71.9.08-1.27.59.57.62-1.2.34.87.25 1.19.73 1.78.12.08.19-1.11.34-1.29v.92l.21-1 .12 1.1.14-.24a1.61 1.61 0 01-.11-.68c.23-.42.56.65.57 1.12l.55-.78a2.28 2.28 0 01-.18.73c.29-.94.05 1 .32.11a3.48 3.48 0 010-.73c.13.56.43.56.66.32v.64c.4.16.85-.3 1.31-.29a2.48 2.48 0 010-1.51v1c.09-.61-.14-.37 0-1.11.17.11.11 1.11 0 1.43l.21-.34a5.036 5.036 0 01-.05.82c.09-.61.36 1 .48-.08V62c.46 0 .67-.32 1-.37 0-.85.15-.66.26-1.34.27.27.58.93.9.86.24-.42.07-.71.18-1.22 0 .77.34.7.17 1.25.4-.12.5-.15 1-.78a2.31 2.31 0 01-.08-.71c.09-.12.21.32.19.69v.08c.56-1.15 1.29 2.24 1.74.64v.08l.47-.83c.21.13-.13.57 0 1.05.49-1.28.78.18 1.19-.67.32 2.27 1.13-.16 1.56 1.29v-.54c.11-.52.13.31.21.43 0-.41-.12-.48 0-.77.94-.64 1.94.78 2.91 1.26.35.15.2-2.76.64-1.48l-.13 1c.72-1.19 1.46 0 2.16-1-.05.23-.05.53-.12.52.15.72.55 0 .55-.55.11.07 0 .53.09.83s.37-.92.45-.2a.59.59 0 01-.07.29c.1-.35.45.08.36-.75.26.4.5-.37.71.13.13-.93.44.44.49-.87 0 1.36.46 1.09.62.46 0 .41.14.42.08 1 .19 0 .36-.27.33-1 .35 1.62.7-1.31.89.77A6.6 6.6 0 0148.81 60c0 1.36-.55.14-.53 1.56.48-.56.75-1.72 1.23-1.39.12.18-.07.58-.11.82.47-.56.92.12 1.34-.62a.88.88 0 01-.09.37c.09-.05.2.2.19-.42l-.08.17a8.38 8.38 0 01.35-2.34c-.15 1.77.42.45.19 2.67a2.12 2.12 0 00.11-.82 1.24 1.24 0 010 .83c.3-.33.19-1 .46-1a2.625 2.625 0 01-.08.76c.13-.58.27-1.16.5-.91v.41c.39-.09.67-1.55 1.1-1-.13 1.3.15.43.17 1.55l.23-.33-.09-.55c.21 0 .39-.79.56-.43l-.15.46.38-.21-.22-.42c.21-.58 0-1.42.25-1.11 0 .12.21 0 .31.68.1-.36.21-.73.36-.46a4.895 4.895 0 010 1.48c.1-.94.48-.26.61-1.26a4.52 4.52 0 000 .95l.08-.76a1.69 1.69 0 01.09.83c.29.13-.09-1.43.25-.81a1.92 1.92 0 01-.07.29c.34.32.65-.49 1-.11.09 1.13-.28.28-.17 1.23.45-.21.93-1.35 1.36-1.09l-.08-.12c.06-1.59.32.78.54 0a3.12 3.12 0 00-.05.71c.29.25.6-.39 1.06-.89l-.06.41c.17.36.46.21.65.39a2.09 2.09 0 00.1-.93c.5 2.41 1.02-1.18 1.5.76-.06 0-.15.35-.1.36l.44-.38a3.79 3.79 0 00-.15-1c.06-.41.18-.73.29-.73a2.62 2.62 0 00.09 1.5v-.66c.23 1.23 0-1.4.35-.57v.37c.12-.19.23-.67.36-.57 0 .81-.13.38-.14 1 .18 0 .35-1.52.52-.72-.08.22-.19.23-.26.45.17.94.19.7.32.85l.3.42-.02-.19c.23-2.09.46-.38.76-1.75-.29 1.29 0 .75-.07 1.66a2.18 2.18 0 01.16.79c.14-.74.24.57.44-.5 0 .3.15 0 .12.77.18-.23-.05-.51 0-.88.28-1 .67 1.21 1.08-.16.35-.56.41-1.55.74-2a2.3 2.3 0 01-.09 1.06c.18.43.31.36.48 0a2.84 2.84 0 000 .8c.14-.08.09-1.07.27-.63a7.9 7.9 0 01-.13 1.17c.16-.27.31-.81.48-1.08a3.35 3.35 0 01-.16 1.11 1.78 1.78 0 00.54-1.27l-.12-.29c.07 0 0 .69 0 .84-.15.63-.22-.28-.23-.57l.11-.19c-.12-1.72-.47.28-.7.18l.09-1.25-.24 1a3 3 0 010-1.2c-.17-.62-.15.44-.29-.25a.52.52 0 010-.22l-.16.38c0-.27 0-.88.07-.7-.29-.72-.48.93-.59 0v-.08c-.41.42 0 .92-.35 2L66 56v.92s-.13-.1-.11-.47c-.16.63 0 .4-.07 1-.2-.84-.56.39-.6-1.07-.08.7.19.54 0 1-.06-1.57-.25.27-.44-.45.06-.81.24-.38 0-1.1-.11 1.37-.36-.3-.52 0 0 1.09-.34.45-.61.82 0-.37-.49-.6-.74-1v-.18c-.05 1.1-.3.89-.49 1.12a3.59 3.59 0 01.14-1.21h-.16a1.19 1.19 0 01-.21.67v-.83c-.23 0-.46 1-.76.42 0 .77.24 2.14-.08 2.66a5.47 5.47 0 01.06-1.3c0 .06-.09.35-.15.17l.13-.7c-.14-.31-.07.58-.18.52 0-.59-.08-.42-.07-.89 0-.06.1.24.14 0a1.68 1.68 0 01-.32-.91 2 2 0 01-.09.88c-.23 0-.08-.72-.21-1-.06.41-.2 0-.21.87-.07 0-.08-.42-.1-.66-.12.39-.56.11-.43 1.06v.06c-.39.88-.81-.5-1.2-.13v-.29c-.23.34-.52.2-.68.84a1.77 1.77 0 01-.13-.9c-.18.22-.2.56-.46.07.18-.52-.06-.46.18-.38-.23-.26-.28-.73-.53.08.09-.76-.17-1-.28-.73l.16.54c-.12.11-.23 0-.34 0l.06-1c-.47-1.21-.85 2.07-1.21 0-.12.7.26.49.15 1.31-.22-.14-.45-1.57-.52-1.57-.29-.56-.27 1.45-.58 1.08a3.41 3.41 0 01-.16 1.64 2.93 2.93 0 01-.13-1.78c.05 0 .08.08.08.2a.79.79 0 00.07-.67v.36c-.1-.36-.4-.33-.33-.91a.71.71 0 000 .77c-.28-.52-.44 0-.72-.36 0 .19.09.61 0 .61-.42-.44-.19.67-.47.83-.16-.54.06-1.3-.23-.84a2.16 2.16 0 010-1.24c-.26.69-.49-.45-.63-.57l.13-.29c-.08.17-.15.16-.22.16l.08.72a.5.5 0 01-.14-.43 15.728 15.728 0 01-.11 1.82c-.1-.36-.32.39-.36-.55.34.32 0-.95.25-1.1-.06.11-.12.1-.21 0a.54.54 0 010-.25c-.33-.85-.15 1.07-.49 1 0-.54-.08-1-.13-.9.14 0 .06.89-.06 1.3-.21-.42-.23.3-.35.26l.13.19c0 .53-.15.46-.3.63 0-.41.14-.28.08-.47-.16.94-.37-1-.61-.34-.1-.36 0-1-.1-1.24-.26.69-.28-.73-.56-.16a1.89 1.89 0 01-.1 1.24l.45-.5-.29 1c.14 0 .29-.45.37-.33a1.7 1.7 0 00-.06 1c-.18-1.08-.37.62-.58-.1v-1.73c-.33-.79-.58.91-1 .46l.14.31c-.06.7-.26.1-.4.38a4.79 4.79 0 00-.13-1.17c0 .43-.31 0-.34 1.14l-.19-.78c-.34-.32-.39 1.69-.71 1.48a8.757 8.757 0 01.16-1.52c-.1 0-.2-.11-.2.3-.07-.37-.3.79-.4.23-.05.26-.07.88-.19.83a2.539 2.539 0 010-.29c0 .29-.19.4-.08 1.05-.34-1.84-.94.14-1.23-1.45a1.91 1.91 0 01-.74.43v-.23c-.29-.55-.18 1.7-.52 1.09-.17-1 .18-.52.07-.88 0-2-.41.26-.63-.88v-.11c-.17-.66-.42.74-.71.6a1.881 1.881 0 000-.3 2.62 2.62 0 01-.84 1.6 3.58 3.58 0 00.07-1.18c-.12.11 0 1.25-.21 1.46a7.11 7.11 0 01-.28-1.6h.23c-.11-1.07-.29 0-.42-.15v-.47c-.35.16-.36 1.33-.74 1.25v.35c-.21 1.17-.17-.65-.38.22l-.06-1.19a6.2 6.2 0 01-.73 1.37 8.91 8.91 0 01.6-1.85c-.13 0-.46.09-.53.67.06-.11.13-.4.18-.22-.17.93-.39 1.39-.66 1.37 0-2.3-.7-.58-.9-2.36-.48.85-1-.37-1.51-.23.2 1.79-.16.05-.13 1.88-.13.12-.18.09-.19 0l-.39-1.09c-.1-.54.12-.41.11-.82-.29-.14-.12-.78-.31-1.26 0 .65-.1.94-.26.69l.23.84c-.4 1-.34-1.54-.75-.57l.13-.58c-.2.34-.76 0-1 1.46a1.81 1.81 0 010-.84c-.5-.22-1.1 1.57-1.48.66v-.45c-.09.13-.16.84-.28.39v-.47c-.05.15-.25.78-.37.52l.11-.5c-.48-.59-.74 1.23-1.14 1.53a2.55 2.55 0 00-.57-2v-.19c-.56-.16-.95 1.1-1.47 1.62-.32-1.44-1.08-.6-1.6-1.41a2.55 2.55 0 01-.1 1.16c-.13-.26-.34.92-.32-.29-.09-1.19-.34-.87-.53-.9v1.58c-.51-2.3-1.33.85-1.61-1.22-.12.4-.28.4-.4.79v-.85c-.34-.21-.51-.32-.93-.12l.08-.61c-.23-.05-.29 2.45-.51 2.5l-.07-1.26c-.41 0-.83-1.1-1.24.05 0-.18 0-.55.09-.6-.2 0-.76-.86-.69.88 0-1.13-.42-.11-.64.39v-.84c-.19 1.07-.19 1.36-.46 1.66-.06-.11-.05-.67 0-.46-.21-.43-.16.8-.41.35l.09-.53c-.21-.07-.2.22-.31.84-.14.34-.41-.21-.44-1 0 .46-.15 1.08-.27.86a1.68 1.68 0 01.05-.55c-.36-.57-.53 1-.78.15a2.1 2.1 0 000-.49c.28 0 .51.06.49.12a6.85 6.85 0 01-.05-2c-.18.58-.49 1.85-.72 1.48v-.35c-.06-.08-.1 0-.15.12-.07-.12-.11-.22-.18-.23 0-.63-.26-.34-.38-.37 0 .84-.14.71 0 1.4 0-.06 0-.1.1-.13a.19.19 0 00.05-.09v.07h.28c-.09.43-.18.79-.31.32-.06.54-.12 1.1-.16 1.36-.15-1.18-.45-1.81-.5-2.54-.35.47-.82.31-1 1.9-.1.2-.11-.46-.15-.71s.13-.13.16-.36c-.2.41-.59.16-.64 1.27-.25-.5.14-1-.2-.84V55c-.67-1.77-1.1 2.83-1.85.55a.93.93 0 01.09.39c-.85-1-1.76.94-2.6-.64-.24-.32-.27.38-.41.92l-.06-.91-.25 1.05c-.35.76-.61-2.22-1.06-.78l.06.61c-.16-.11-.51.36-.49-.34 0 .11 0 .64-.11.32v-.48l-.39.82c-.31-.35 0-1.89-.4-2A4 4 0 006 56.22c.07 0 .18.3.18.77l-.15.25A11.15 11.15 0 006.28 61l.26-.85.08.67H6.4c.13.63.21.07.29-.32a3.55 3.55 0 00.11.75L7.06 60a3.546 3.546 0 00.06 1.39c.12-.62-.12-1.22.08-1.63.13.63.09 1.15.24.61a2 2 0 01-.07.74c.13-.43.34-.18.41-.92.13.78.44-.2.43 1.12a2.72 2.72 0 01.35-1.09C8.34 61.8 9 60.31 9 62c.16-1.43.58-.64.87-1.43 0 .12-.05.35-.08.27.17.12.21.55.32.82a8.41 8.41 0 01.4-2.17 15.58 15.58 0 01-.1 2.51c0-.95.34-.95.27-1.74a5.16 5.16 0 01.21 1.31c0-1.47.14-.25.27-1.15.22.72.05 1.38.29.93a1.74 1.74 0 01-.1.94zm5.72-2.54l-.12.05zm.48 0a.47.47 0 00-.21 0c0-.29 0-.59.05-.57a1.74 1.74 0 00.16.55zm-1-5.84c.07-.12.1 0 .11.22a.27.27 0 00-.13.1.34.34 0 000 .1 2.5 2.5 0 01.01-.44zM16.4 55v-.02z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M60 56.25a.33.33 0 010 .12.31.31 0 000-.12zM24.19 61.35v-.22l-.04.19zM62.61 59.14a.83.83 0 000 .22 1 1 0 000-.22zM63.75 59.33l.16.3a1.2 1.2 0 00-.16-.3zM64.63 59.75v-.36zM54.81 58.77a2.35 2.35 0 01-.13.4c.07.06.13.08.13-.4z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M54.49 59.15c.07.17.13.13.19 0s-.13-.15-.19 0zM68.44 60.13a.53.53 0 010-.14zM68.49 60zM68.63 59.72l-.1.21s.08.07.1-.21zM67.28 59.74v.31a2.159 2.159 0 000-.31zM66.92 59.83c.09.07.21.65.33.46v-.24c-.04.45-.25-.74-.33-.22zM65.45 56.05l.29.24c0-.32-.12-.76 0-.84-.36-.97.1.73-.29.6zM64.53 55.58c.16-.16 0-.48 0-.66a.7.7 0 000 .66zM57.89 55.57v-.76c-.11.11.01.29 0 .76zM56.62 59.54l.12.48.06-.71zM55.87 54.07l.05-.11-.2.28zM44.72 54.35v.94c.12-.17.14-1.23 0-.94zM39.9 55.31c0-.47-.18-.78-.27-.31.11.06.22.43.27.31zM25.46 53.77l.1-.32-.18.27zM75.52 46.5c0-.26 0-.85-.09-.73l-.08 1zM74.78 44.66a6.49 6.49 0 00-.19 2.24c.13-1 .16-.56.29-1.7.11-.11.19.32.18.69 0-.26.17.22.23-.41-.15-.77-.33-.8-.52-.16a2.87 2.87 0 01.01-.66zM64.07 43.11l.07.12a.19.19 0 00-.07-.12zM57.44 42.56c.05 0 .07-.12.07-.21a.33.33 0 00-.07.21zM56.31 41.47l.06.07c-.02-.09-.05-.15-.06-.07zM64.07 43.11l-.17-.31c-.02.32.1.2.17.31zM73.31 47.05a1.07 1.07 0 00.09-.26l-.09.11zM67 42.3zM69.24 42.15a6.45 6.45 0 00-.08 1.18 1.24 1.24 0 01.11-.58c0-.16-.01-.35-.03-.6zM72.8 43.63l.07-.11zM65.39 42.12a2.232 2.232 0 000-.3 2.659 2.659 0 000 .3zM2.62 48.46v-.15c-.01.08-.02.14 0 .15zM0 44.28zM54.24 40.39c.06-.08.03-.06 0 0zM35.21 41c.21.75-.35 1 0 1.81-.06-.32.26-1.31 0-1.81zM73.25 46.94a.16.16 0 01-.1 0s.08.06.1 0zM35.18 42.82v.08zM49.46 40.9a3.33 3.33 0 000 .37 1.57 1.57 0 000-.37zM53 42.1l-.07-.1c.07.06.07.09.07.1zM47.61 42.09c0-.07-.06-.18-.13-.07s0 .07 0 .1.08-.12.13-.03zM45.69 42.09v.17h.07zM8.46 48.05a6.942 6.942 0 00-.09-.75c.03.59-.25.81.09.75z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M73.3 46.58a.91.91 0 010 .36h.06a1.06 1.06 0 00-.06-.36zM47.53 48.74l-.3-.13a.39.39 0 00.3.13zM22.26 47.93l-.07.1a.178.178 0 00.07-.1zM46.32 48.74a1.85 1.85 0 00-.17-.58v.21z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M6.36 49.29c.29 0 .14-1.09.2-1.72.35-.32.16.81.28 1.38.22-.29.38-1.31.54-1.27a1.27 1.27 0 010 .48c.23-.88.68 0 1-1.15a1.41 1.41 0 010 .28v-1.52c.13 0 .25-.7.29 0-.08 0-.08.27-.12.5l.09-.27c.12 1-.19.36-.19 1.13.27-.34.58-1.2.78-.9 0 1-.48.34-.2 1.25l-.32-.39c.24 1.6-.19-.12 0 1.6.42.3.47-.52.88-.22.09-.56 0-.84.06-1.4.59-1 .47 2.56.9 1.2.11-.68.16-2 .47-1.28l-.11 1.15c.4.11.23-1.66.65-.88-.07.45-.31.38-.25.52.27.91.19-.66.4-.66v1c.43-.16.91-.89 1.38-1.08a2.09 2.09 0 000 .93c.6-.51 1.28.13 1.86.73l.22-.88a.89.89 0 010 .57c.23.34 0-.56.12-.9.13-.06.17.5.09.77.4-.75 1.13-1.61 1.55-.67l-.08.26c.32.36.37-1.8.67-1l-.06.16c.71.38 1.49-.43 2 .9.1-1.27.7.57.74-1.2.41.87.29 1.19.86 1.78.15.08.23-1.11.42-1.29v.92l.26-1 .13 1.1.18-.24a1.27 1.27 0 01-.14-.68c.28-.42.67.65.68 1.12l.65-.78a1.81 1.81 0 01-.21.73c.35-.94.06 1 .38.11a3.48 3.48 0 010-.73c.16.56.52.56.79.32l-.05.64c.48.16 1-.3 1.56-.29a2.15 2.15 0 010-1.51l.06 1c.1-.61-.17-.37.05-1.11.2.11.13 1.11 0 1.43l.24-.34a6.72 6.72 0 01-.06.82c.1-.61.43 1 .57-.08v.29c.54 0 .79-.32 1.23-.37 0-.85.18-.66.31-1.34.32.27.68.93 1.08.86.27-.42.08-.71.2-1.22 0 .77.41.7.21 1.25.47-.12.6-.15 1.19-.78a1.87 1.87 0 01-.1-.71c.11-.12.25.32.23.69v.08c.67-1.15 1.54 2.24 2.07.64v.08l.55-.83c.25.13-.15.57 0 1.05.6-1.28.94.18 1.43-.67C35.54 50 36.5 47.52 37 49v-.54c.14-.52.16.31.26.43 0-.41-.14-.48-.06-.77 1.12-.64 2.31.78 3.45 1.26.42.15.24-2.76.77-1.48l-.15 1c.84-1.19 1.73 0 2.55-1 0 .23 0 .53-.13.52.18.72.65 0 .65-.55.13.07 0 .53.11.83s.44-.92.54-.2a.5.5 0 01-.09.29c.12-.35.54.08.43-.75.31.4.59-.37.84.13.16-.93.53.44.58-.87 0 1.36.55 1.09.74.46-.06.41.17.42.1 1 .22 0 .43-.27.39-1 .41 1.62.83-1.31 1.06.77A7.41 7.41 0 0150.9 47c0 1.36-.66.14-.63 1.56.56-.56.89-1.72 1.46-1.39.14.18-.09.58-.14.82.57-.56 1.1.12 1.61-.62a.89.89 0 01-.11.37c.1-.05.23.2.22-.42l-.1.17c-.16-.89.4-1.87.42-2.34-.17 1.77.49.45.23 2.67A1.84 1.84 0 0054 47c.1.12.13.36 0 .83.36-.33.23-1 .55-1a5.9 5.9 0 01-.1.76c.17-.58.33-1.16.6-.91 0 .18 0 .41-.06.41.47-.09.8-1.55 1.31-1-.15 1.3.18.43.2 1.55l.28-.33-.11-.55c.24 0 .45-.79.66-.43l-.18.46.46-.21-.26-.42c.25-.58 0-1.42.3-1.11-.07.12.24 0 .37.68.12-.36.25-.73.43-.46s0 1.24 0 1.48c.12-.94.57-.26.72-1.26a4.61 4.61 0 000 .95l.1-.76a1.45 1.45 0 01.11.83c.34.13-.11-1.43.29-.81a.486.486 0 01-.08.29c.4.32.78-.49 1.15-.11.11 1.13-.32.28-.2 1.23.53-.21 1.11-1.35 1.62-1.09l-.16-.08c.07-1.59.38.78.64 0a3.79 3.79 0 00-.07.71c.36.25.73-.39 1.26-.89l-.06.41c.2.36.54.21.77.39.07-.41.2-.34.12-.93.69 2.32 1.32-1.25 1.94.69-.08 0-.18.35-.12.36l.52-.38a3.28 3.28 0 00-.18-1c.07-.41.22-.73.35-.73a2.25 2.25 0 00.1 1.5v-.66c.28 1.23 0-1.4.42-.57v.37c.14-.19.27-.67.42-.57.06.81-.15.38-.16 1 .21 0 .42-1.52.61-.72-.09.22-.22.23-.31.45.21.94.24.7.39.85l.36.42-.1-.25c.27-2.09.54-.38.9-1.75-.35 1.29-.06.75-.08 1.66a1.73 1.73 0 01.19.79c.17-.74.28.57.52-.5 0 .3.18 0 .14.77.22-.23 0-.51 0-.88.34-1 .79 1.21 1.28-.16.42-.56.5-1.55.89-2a2 2 0 01-.11 1.06c.21.43.37.36.57 0a2.28 2.28 0 00.06.8c.16-.08.11-1.07.32-.63a9.651 9.651 0 01-.16 1.17c.19-.27.38-.81.57-1.08a3.06 3.06 0 01-.18 1.11 1.66 1.66 0 00.63-1.27l-.14-.29c.08 0 0 .69 0 .84-.18.63-.27-.28-.28-.57l.14-.19c-.14-1.72-.56.28-.84.18l.12-1.25-.29 1a2.37 2.37 0 010-1.2c-.21-.62-.18.44-.36-.25a.48.48 0 010-.22l-.19.38c0-.27 0-.88.08-.7-.35-.72-.57.93-.7 0v-.08c-.49.42 0 .92-.41 2L71.36 43v.92s-.15-.1-.13-.47c-.19.63 0 .4-.08 1-.24-.84-.67.39-.72-1.07-.09.7.23.54 0 1-.07-1.57-.3.27-.52-.45.07-.81.28-.38.06-1.1-.14 1.37-.44-.3-.62 0 0 1.09-.41.45-.73.82 0-.37-.59-.6-.88-1v-.18c-.06 1.1-.36.89-.58 1.12a3 3 0 01.17-1.21h-.21a1.09 1.09 0 01-.24.67v-.83c-.28 0-.56 1-.91.42 0 .77.28 2.14-.09 2.66a4.18 4.18 0 01.07-1.3c0 .06-.12.35-.18.17l.15-.7c-.16-.31-.08.58-.21.52 0-.59-.1-.42-.08-.89 0-.06.11.24.16 0a1.55 1.55 0 01-.38-.91 1.71 1.71 0 01-.1.88c-.28 0-.1-.72-.26-1-.06.41-.24 0-.24.87-.08 0-.1-.42-.13-.66-.14.39-.66.11-.5 1.06v.06c-.47.88-1-.5-1.43-.13v-.29c-.28.34-.61.2-.81.84a1.58 1.58 0 01-.16-.9c-.21.22-.23.56-.54.07.21-.52-.07-.46.22-.38-.28-.26-.34-.73-.63.08.1-.76-.21-1-.34-.73l.19.54c-.14.11-.27 0-.4 0l.07-1c-.56-1.21-1 2.07-1.44 0-.15.7.3.49.17 1.31-.26-.14-.52-1.57-.61-1.57-.35-.56-.33 1.45-.7 1.08a2.82 2.82 0 01-.18 1.64c-.26-.13-.32-1.5-.15-1.78.06 0 .09.08.08.2a.68.68 0 00.1-.67v.36c-.13-.36-.48-.33-.4-.91a.64.64 0 00.06.77c-.33-.52-.51 0-.86-.36.06.19.11.61.06.61-.5-.44-.23.67-.56.83-.2-.54.07-1.3-.28-.84a1.87 1.87 0 010-1.24c-.31.69-.58-.45-.76-.57L55 40c-.1.17-.18.16-.26.16l.09.72c-.09-.13-.18-.13-.17-.43a13.94 13.94 0 01-.12 1.82c-.13-.36-.39.39-.44-.55.4.32 0-.95.3-1.1-.07.11-.15.1-.24 0a.37.37 0 010-.25c-.39-.85-.18 1.07-.58 1 .05-.54-.09-1-.16-.9.16 0 .08.89-.07 1.3-.26-.42-.28.3-.41.26l.15.19c-.05.53-.18.46-.36.63 0-.41.16-.28.1-.47-.2.94-.45-1-.72-.34-.13-.36 0-1-.13-1.24-.31.69-.33-.73-.66-.16a1.67 1.67 0 01-.04 1.36l.54-.5-.35 1c.16 0 .34-.45.44-.33a1.44 1.44 0 00-.07 1c-.22-1.08-.44.62-.69-.1v-1.78c-.38-.79-.68.91-1.18.46l.16.31c-.06.7-.31.1-.47.38a3.86 3.86 0 00-.15-1.17c0 .43-.37 0-.41 1.14l-.23-.78c-.4-.32-.46 1.69-.84 1.48.11-.64-.06-1.06.2-1.52-.13 0-.25-.11-.25.3-.08-.37-.36.79-.48.23 0 .26-.07.88-.22.83a1.8 1.8 0 010-.29c0 .29-.23.4-.11 1.05-.39-1.84-1.11.14-1.46-1.45a2.42 2.42 0 01-.87.43v-.23c-.36-.55-.22 1.7-.62 1.09-.21-1 .21-.52.08-.88 0-2-.48.26-.76-.88l.07-.11c-.21-.66-.5.74-.84.6a2.69 2.69 0 000-.3 2.52 2.52 0 01-1 1.6 2.93 2.93 0 00.08-1.18c-.14.11 0 1.25-.25 1.46a6.11 6.11 0 01-.33-1.6h.28c-.15-1.07-.36 0-.5-.15v-.47c-.42.16-.42 1.33-.87 1.25v.35c-.24 1.17-.2-.65-.45.22l-.08-1.19a6 6 0 01-.86 1.37 7.74 7.74 0 01.72-1.85c-.16 0-.55.09-.63.67.06-.11.14-.4.21-.22-.2.93-.46 1.39-.78 1.37 0-2.3-.84-.58-1.08-2.36-.57.85-1.13-.37-1.79-.23.24 1.79-.19.05-.15 1.88-.16.12-.22.09-.23 0l-.47-1.09c-.11-.54.15-.41.13-.82-.33-.14-.14-.78-.36-1.26 0 .65-.12.94-.31.69l.27.84c-.47 1-.41-1.54-.89-.57l.16-.58c-.25.34-.91 0-1.15 1.46 0-.21-.1-.71 0-.84-.58-.22-1.3 1.57-1.76.66l.05-.45c-.11.13-.19.84-.33.39v-.47c-.06.15-.29.78-.44.52l.13-.5c-.58-.59-.88 1.23-1.36 1.53a2.34 2.34 0 00-.67-2v-.19c-.67-.16-1.13 1.1-1.74 1.62-.39-1.44-1.3-.6-1.91-1.41a2.19 2.19 0 01-.13 1.16c-.14-.26-.39.92-.37-.29h.05c-.11-1.19-.4-.87-.63-.9v1.58c-.61-2.3-1.59.85-1.92-1.22-.14.4-.32.4-.47.79v-.85a1.05 1.05 0 00-1.1-.12l.1-.61c-.28-.05-.36 2.45-.62 2.5l-.08-1.26c-.49 0-1-1.1-1.47.05 0-.18 0-.55.1-.6-.23 0-.89-.86-.81.88 0-1.13-.51-.11-.77.39v-.84c-.22 1.07-.23 1.36-.54 1.66-.08-.11-.07-.67 0-.46-.25-.43-.19.8-.49.35l.11-.53c-.26-.07-.24.22-.37.84-.16.34-.49-.21-.52-1 0 .46-.18 1.08-.33.86a1.6 1.6 0 01.06-.55c-.42-.57-.63 1-.92.15a2.55 2.55 0 00-.05-.49c.34 0 .61.06.58.12a5.8 5.8 0 01-.05-2c-.22.58-.59 1.85-.86 1.48v-.35c-.06-.08-.11 0-.17.12-.08-.12-.13-.22-.22-.23 0-.63-.31-.34-.44-.37 0 .84-.17.71 0 1.4 0-.06 0-.1.11-.13s.05 0 .06-.09 0 .05 0 .07h.34c-.11.43-.22.79-.37.32-.07.54-.15 1.1-.19 1.36-.19-1.18-.55-1.81-.6-2.54-.41.47-1 .31-1.24 1.9-.11.2-.13-.46-.18-.71s.15-.13.19-.36c-.24.41-.7.16-.76 1.27-.29-.5.17-1-.24-.84l.22-.34c-.81-1.77-1.31 2.83-2.2.55a.93.93 0 01.1.39c-1-1-2.09.94-3.09-.64-.29-.32-.32.38-.49.92l-.07-.91-.29 1.05c-.42.76-.73-2.22-1.27-.78l.07.61c-.19-.11-.61.36-.57-.34 0 .11-.07.64-.14.32v-.48L1 43.5c-.36-.35.06-1.89-.47-2A3.45 3.45 0 000 43.22c.08 0 .2.3.21.77l-.19.25A9.56 9.56 0 00.33 48l.31-.85.1.67H.48c.14.63.24.07.34-.32a2.77 2.77 0 00.13.75L1.26 47c0 .55-.14 1.09.06 1.39.15-.62-.13-1.22.1-1.63.15.63.11 1.15.28.61a1.48 1.48 0 01-.08.74c.16-.43.41-.18.49-.92.16.78.52-.2.51 1.12a2.149 2.149 0 01.41-1.09c-.26 1.58.54.09.47 1.79.19-1.43.69-.64 1-1.43 0 .12 0 .35-.08.27.19.12.25.55.37.82a7 7 0 01.51-2.17c.24 1.13-.14 1.38-.07 2.47 0-.95.41-.95.33-1.74a4.21 4.21 0 01.25 1.31c0-1.47.17-.25.32-1.15.26.72.06 1.38.35.93a1.51 1.51 0 01-.12.97zm6.8-2.54l-.14.05zm.57 0a.64.64 0 00-.25 0c0-.29 0-.59.06-.57-.03.14.11.31.19.55zm-1.21-5.84c.09-.12.12 0 .14.22a.32.32 0 00-.16.1v.1c0-.18.01-.33.02-.44z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M12.36 42v.06a.231.231 0 00.06.19v-.27zM64.16 43.25a.681.681 0 010 .12.38.38 0 010-.12zM21.62 48.35v-.22l-.05.19zM67.3 46.14a1.7 1.7 0 000 .22 1 1 0 000-.22zM68.66 46.33l.19.3a1 1 0 00-.19-.3zM69.71 46.75v-.36zM58 45.77a3.441 3.441 0 01-.15.4c.15.06.15.08.15-.4z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M57.65 46.15c.08.17.16.13.23 0-.08-.04-.16-.15-.23 0zM74.24 47.13h.05V47zM74.29 47l.06-.1a.182.182 0 00-.06.1zM74.47 46.72l-.12.21s.09.07.12-.21zM72.85 46.74v.31a2.55 2.55 0 000-.31zM72.43 46.83c.1.07.25.65.39.46v-.24c-.05.45-.29-.74-.39-.22zM70.68 43.05l.35.24c-.06-.32-.14-.76 0-.84-.43-.97.11.73-.35.6zM69.59 42.58c.18-.16 0-.48 0-.66-.12.3-.15.37 0 .66zM61.69 42.57v-.76c-.13.11.02.29 0 .76zM60.18 46.54l.14.48.07-.71zM59.29 41.07l.06-.11-.24.28zM46 41.35v.94c.17-.17.19-1.23 0-.94zM40.31 42.31c-.07-.47-.23-.78-.33-.31.13.06.26.43.33.31zM23.14 40.77l.11-.32-.21.27z"
        />
        <path d="M.42 32h74.19A37.5 37.5 0 00.42 32z" fill="#bce0fd" />
        <path
          className="waves-choppy_svg__b"
          d="M0 31.5c0 .26 0 .85.09.73l.08-1zM.76 33.34A7 7 0 001 31.1c-.13 1-.16.56-.3 1.7-.11.11-.19-.32-.17-.69 0 .26-.17-.22-.23.41.14.77.32.8.51.16a3.63 3.63 0 01-.05.66zM11.46 34.89l-.07-.12a.25.25 0 00.07.12zM18.1 35.44c-.05 0-.08.12-.08.21a.29.29 0 00.08-.21zM19.23 36.53l-.07-.07c.03.09.05.15.07.07zM11.46 34.89l.18.31c.01-.32-.09-.2-.18-.31zM2.23 31a.6.6 0 00-.09.26l.09-.11zM8.54 35.7h-.06v.4zM6.29 35.85a7.15 7.15 0 00.09-1.18 1.6 1.6 0 01-.11.58c0 .16.01.35.02.6zM2.73 34.37l-.06.11a.39.39 0 00.06-.11zM10.14 35.88v.3a1.42 1.42 0 000-.3zM72.92 29.54a.751.751 0 000 .15.33.33 0 000-.15zM75.52 33.72zM21.3 37.61c-.06.08-.03.06 0 0zM40.33 37c-.22-.75.35-1 0-1.81.06.32-.27 1.31 0 1.81zM2.29 31.06a.14.14 0 01.09 0s-.07-.06-.09 0zM40.36 35.18v-.08a.1.1 0 000 .08zM26.08 37.1a3.33 3.33 0 000-.37 1.57 1.57 0 000 .37zM22.52 35.9l.09.12c-.04-.08-.07-.11-.09-.12zM27.92 35.91c0 .07.07.18.13.07a.3.3 0 000-.1c-.05.12-.05.17-.13.03zM29.85 35.91v-.17h-.06zM67.07 30a5.919 5.919 0 01.09.75c-.03-.64.25-.86-.09-.75z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M2.23 31.42a.84.84 0 01.06-.36h-.06a1.68 1.68 0 000 .36zM28 29.26l.31.13a.43.43 0 00-.31-.13zM53.28 30.07l.07-.1a.178.178 0 00-.07.1zM29.22 29.26a1.85 1.85 0 00.17.58v-.21z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M69.17 28.71c-.29 0-.13 1.09-.19 1.72-.35.32-.16-.81-.28-1.38-.22.29-.39 1.31-.55 1.27a1.54 1.54 0 010-.48c-.23.88-.69 0-1 1.15v-.28a13.741 13.741 0 010 1.52c-.13 0-.24.7-.29 0 .08 0 .09-.27.13-.5l-.09.27c-.12-1 .19-.36.19-1.13-.27.34-.58 1.2-.79.9 0-1 .48-.34.21-1.25l.32.39c-.25-1.6.19.12 0-1.6-.42-.3-.47.52-.88.22-.1.56 0 .84-.07 1.4-.59 1-.46-2.56-.9-1.2-.11.68-.15 2-.46 1.28l.11-1.15c-.41-.11-.23 1.66-.66.88.08-.45.32-.38.26-.52-.27-.91-.19.66-.4.66v-1c-.43.16-.9.89-1.37 1.08a2.24 2.24 0 000-.93c-.6.51-1.28-.13-1.85-.73l-.22.88c-.06 0-.1-.4 0-.57-.23-.34 0 .56-.12.9-.13.06-.17-.5-.09-.77-.4.75-1.13 1.61-1.55.67l.08-.26c-.33-.36-.37 1.8-.67 1L58 31c-.71-.38-1.49.43-2-.9-.11 1.27-.7-.57-.75 1.2-.4-.87-.29-1.19-.86-1.78-.15-.08-.22 1.11-.41 1.29v-.92l-.26 1-.14-1.1-.17.24a1.27 1.27 0 01.14.68c-.28.42-.67-.65-.68-1.12l-.65.78a1.67 1.67 0 01.21-.73c-.35.94-.07-1-.38-.11a4.32 4.32 0 010 .73c-.16-.56-.52-.56-.79-.32v-.64c-.48-.16-1 .3-1.56.29a2.21 2.21 0 010 1.51l-.06-1c-.11.61.16.37-.05 1.11-.2-.11-.13-1.11 0-1.43l-.24.34v-.82c-.1.61-.42-1-.57.08v-.29c-.54 0-.79.32-1.23.37 0 .85-.18.66-.31 1.34-.33-.27-.69-.93-1.08-.86-.27.42-.08.71-.2 1.22 0-.77-.41-.7-.21-1.25-.47.12-.6.15-1.19.78a2.09 2.09 0 01.1.71c-.11.12-.25-.32-.23-.69v-.08c-.67 1.15-1.54-2.24-2.07-.64v-.08l-.55.83c-.26-.13.15-.57 0-1.05-.59 1.28-.94-.18-1.42.67-.39-2.31-1.39.12-1.87-1.36v.54c-.13.52-.16-.31-.25-.43 0 .41.14.48.06.77-1.12.64-2.31-.78-3.45-1.26-.42-.15-.24 2.76-.77 1.48l.15-1c-.85 1.19-1.73 0-2.56 1 .05-.23.05-.53.13-.52-.17-.72-.64 0-.65.55-.13-.07 0-.53-.11-.83s-.44.92-.53.2a.59.59 0 01.08-.29c-.11.35-.53-.08-.42.75-.31-.4-.6.37-.84-.13-.16.93-.53-.44-.59.87 0-1.36-.54-1.09-.74-.46.07-.41-.17-.42-.09-1-.23 0-.43.27-.39 1-.41-1.62-.83 1.31-1.06-.77A7.44 7.44 0 0124.63 31c0-1.36.67-.14.64-1.56-.57.56-.9 1.72-1.46 1.39-.15-.18.08-.58.13-.82-.56.56-1.09-.12-1.6.62a.89.89 0 01.11-.37c-.1 0-.23-.2-.22.42l.09-.17c.16.89-.39 1.87-.41 2.34.17-1.77-.5-.45-.23-2.67a1.59 1.59 0 00-.13.82c-.1-.12-.13-.36 0-.83-.36.33-.23 1-.56 1 0-.3.07-.41.1-.76-.16.58-.32 1.16-.6.91 0-.18 0-.41.07-.41-.47.09-.8 1.55-1.31 1 .15-1.3-.18-.43-.21-1.55l-.27.33.11.55c-.24 0-.46.79-.67.43l.18-.46-.45.21.26.42c-.25.58 0 1.42-.3 1.11.07-.12-.24 0-.37-.68-.12.36-.24.73-.42.46s0-1.24 0-1.48c-.12.94-.57.26-.72 1.26a5.45 5.45 0 000-.95l-.1.76a1.37 1.37 0 01-.11-.83c-.34-.13.1 1.43-.3.81A2.269 2.269 0 0116 32c-.4-.32-.77.49-1.14.11-.11-1.13.32-.28.19-1.23-.53.21-1.1 1.35-1.62 1.09l.1.12c-.07 1.59-.38-.78-.64 0a2.8 2.8 0 00.06-.71c-.35-.25-.72.39-1.26.89l.07-.41c-.21-.36-.55-.21-.77-.39-.07.41-.2.34-.12.93-.69-2.32-1.32 1.25-1.94-.69.07 0 .18-.35.12-.36l-.53.38a3.28 3.28 0 00.18 1c-.06.41-.21.73-.34.73a2.25 2.25 0 00-.11-1.5v.66c-.27-1.23 0 1.4-.41.57v-.37c-.14.19-.26.67-.42.57-.06-.81.15-.38.16-1-.21 0-.41 1.52-.61.72.09-.22.22-.23.31-.45-.21-.94-.23-.7-.39-.85l-.36-.42.09.25c-.26 2.09-.54.38-.89 1.75.34-1.29 0-.75.08-1.66a1.73 1.73 0 01-.19-.79c-.17.74-.28-.57-.52.5 0-.3-.18 0-.14-.77-.22.23 0 .51 0 .88-.34 1-.8-1.21-1.28.16-.42.56-.5 1.55-.89 2a2 2 0 01.11-1.06c-.21-.43-.37-.36-.57 0a2.3 2.3 0 00-.07-.8c-.16.08-.1 1.07-.31.63a9.65 9.65 0 01.16-1.17c-.19.27-.38.81-.58 1.08a2.84 2.84 0 01.19-1.11 1.69 1.69 0 00-.64 1.27l.14.29c-.08 0 0-.69 0-.84.19-.63.27.28.28.57l-.13.19c.14 1.72.56-.28.84-.18l-.12 1.25.29-1a2.37 2.37 0 010 1.2c.2.62.18-.44.35.25a.37.37 0 010 .22l.2-.38c0 .27 0 .88-.09.7.36.72.57-.93.7 0v.08c.48-.42 0-.92.41-2l.25 2.26v-.92c.06 0 .15.1.14.47.18-.63 0-.4.07-1 .25.84.67-.39.73 1.07.09-.7-.23-.54 0-1 .07 1.57.3-.27.52.45-.07.81-.28.38-.06 1.1.13-1.37.43.3.62 0 0-1.09.41-.45.72-.82 0 .37.59.6.89 1v.18c0-1.1.35-.89.57-1.12a2.86 2.86 0 01-.16 1.21h.2a1.09 1.09 0 01.29-.78l-.05.83c.27 0 .55-1 .91-.42 0-.77-.29-2.14.09-2.66a4.52 4.52 0 01-.07 1.3c0-.06.11-.35.18-.17l-.15.7c.16.31.08-.58.21-.52 0 .59.1.42.08.89 0 .06-.12-.24-.16 0a1.49 1.49 0 01.37.91c0-.34 0-.8.11-.88.27 0 .09.72.25 1 .07-.41.25 0 .25-.87.08 0 .1.42.13.66.14-.39.66-.11.5-1.06v-.06c.46-.88 1 .5 1.43.13v.29c.27-.34.61-.2.81-.84a1.58 1.58 0 01.16.9c.21-.22.23-.56.54-.07-.22.52.07.46-.22.38.27.26.33.73.63-.08-.1.76.21 1 .34.73l-.2-.54a.34.34 0 01.41 0l-.07 1c.56 1.21 1-2.07 1.44 0 .14-.7-.31-.49-.18-1.31.26.14.53 1.57.61 1.57.36.56.33-1.45.7-1.08a2.82 2.82 0 01.22-1.66c.25.13.31 1.5.15 1.78-.06 0-.09-.08-.09-.2a.71.71 0 00-.09.67L18 36c.13.36.49.33.4.91a.61.61 0 00-.06-.77c.33.52.52 0 .86.36-.05-.19-.1-.61-.05-.61.5.44.22-.67.56-.83.19.54-.07 1.3.27.84a1.75 1.75 0 010 1.24c.31-.69.58.45.76.57l-.24.29c.1-.17.18-.16.26-.16l-.1-.72c.1.13.18.13.18.43a12.38 12.38 0 01.16-1.86c.13.36.39-.39.44.55-.41-.32 0 .95-.3 1.1.06-.11.14-.1.24 0a.37.37 0 010 .25c.39.85.18-1.07.58-1-.05.54.09 1 .16.9-.17 0-.08-.89.07-1.3.25.42.28-.3.41-.26l-.15-.19c.05-.53.18-.46.35-.63 0 .41-.16.28-.09.47.19-.94.44 1 .72.34.13.36 0 1 .13 1.24.31-.69.33.73.66.16a1.63 1.63 0 01.12-1.24l-.54.5.34-1c-.16 0-.34.45-.43.33a1.49 1.49 0 00.07-1c.22 1.08.43-.62.69.1v1.77c.39.79.69-.91 1.18-.46l-.16-.31c.07-.7.31-.1.47-.38a4.15 4.15 0 00.04 1.1c0-.43.36 0 .41-1.14l.22.78c.41.32.46-1.69.85-1.48-.12.64.06 1.06-.2 1.52.13 0 .24.11.25-.3.07.37.36-.79.47-.23.06-.26.08-.88.22-.83a1.27 1.27 0 010 .29c0-.29.23-.4.1-1.05.4 1.84 1.12-.14 1.46 1.45a2.38 2.38 0 01.88-.43c0 .17 0 .29-.05.23.35.55.22-1.7.62-1.09.21 1-.21.52-.08.88.05 2 .48-.26.75.88l-.06.11c.2.66.5-.74.84-.6a1.35 1.35 0 000 .3 2.52 2.52 0 011-1.6 2.93 2.93 0 00-.09 1.18c.15-.11 0-1.25.25-1.46a5.65 5.65 0 01.34 1.6h-.28c.14 1.07.36 0 .5.15v.47c.42-.16.43-1.33.88-1.25l-.05-.35c.25-1.17.21.65.46-.22l.07 1.19a6 6 0 01.87-1.37 7.74 7.74 0 01-.72 1.85c.16 0 .55-.09.63-.67-.07.11-.15.4-.21.22.2-.93.46-1.39.78-1.37-.06 2.3.84.58 1.07 2.36.57-.85 1.13.37 1.8.23-.24-1.79.19-.05.15-1.88.15-.12.21-.09.23 0l.46 1.09c.12.54-.14.41-.13.82.34.14.14.78.37 1.26-.05-.65.12-.94.31-.69l-.27-.84c.47-1 .41 1.54.88.57l-.15.58c.25-.34.9 0 1.14-1.46a1.59 1.59 0 010 .84c.58.22 1.3-1.57 1.75-.66v.45c.11-.13.19-.84.32-.39v.47c.06-.15.29-.78.43-.52l-.12.5c.57.59.88-1.23 1.35-1.53a2.3 2.3 0 00.68 2v.19c.66.16 1.13-1.1 1.74-1.62.38 1.44 1.29.6 1.91 1.41a2.09 2.09 0 01.12-1.16c.15.26.4-.92.38.29h-.05c.1 1.19.4.87.63.9v-1.58c.6 2.3 1.58-.85 1.91 1.22.15-.4.33-.4.47-.79v.85a1.05 1.05 0 001.1.12l-.1.61c.28.05.35-2.45.61-2.5l.08 1.26c.49 0 1 1.1 1.48-.05 0 .18 0 .55-.11.6.24 0 .9.86.82-.88 0 1.13.5.11.77-.39v.84c.22-1.07.23-1.36.54-1.66.07.11.07.67 0 .46.24.43.19-.8.49-.35l-.11.53c.25.07.23-.22.37-.84.16-.34.48.21.52 1 0-.46.17-1.08.32-.86a1.38 1.38 0 01-.06.55c.43.57.63-1 .93-.15a1.52 1.52 0 000 .49c-.34 0-.61-.06-.59-.12a5.88 5.88 0 01.06 2c.22-.58.59-1.85.86-1.48v.35c.07.08.12 0 .17-.12.09.12.14.22.22.23 0 .63.32.34.45.37 0-.84.17-.71 0-1.4 0 .06 0 .1-.11.13s0 0-.06.09a.17.17 0 010-.07h-.34c.11-.43.22-.79.37-.32.07-.54.15-1.1.19-1.36.18 1.18.54 1.81.59 2.54.42-.47 1-.31 1.24-1.9.12-.2.14.46.18.71s-.15.13-.18.36c.23-.41.7-.16.75-1.27.3.5-.17 1 .24.84V36c.8 1.77 1.31-2.83 2.2-.55a.94.94 0 01-.11-.39c1 1 2.1-.94 3.1.64.29.32.32-.38.49-.92l.06.91.3-1.05c.42-.76.73 2.22 1.26.78l-.06-.61c.19.11.6-.36.57.34 0-.11.06-.64.14-.32v.48l.48-.82c.36.35-.06 1.89.47 2a3.45 3.45 0 00.49-1.7c-.08 0-.2-.3-.21-.77l.18-.25a9.57 9.57 0 00-.27-3.8l-.31.85-.1-.67.26-.05c-.15-.63-.24-.07-.35.32a2.15 2.15 0 00-.13-.75L74.28 31c0-.55.14-1.09-.07-1.39-.14.62.14 1.22-.1 1.63-.15-.63-.1-1.15-.28-.61a1.76 1.76 0 01.08-.74c-.15.43-.41.18-.49.92-.15-.78-.52.2-.5-1.12a2.149 2.149 0 01-.42 1.09c.26-1.58-.5-.09-.5-1.78-.19 1.43-.7.64-1 1.43 0-.12.06-.35.09-.27-.19-.12-.25-.55-.37-.82a7.21 7.21 0 01-.49 2.17c-.23-1.13.15-1.38.07-2.47 0 .95-.41.95-.33 1.74a4.25 4.25 0 01-.24-1.31c0 1.47-.17.25-.32 1.15-.26-.72-.07-1.38-.35-.93a1.53 1.53 0 01.11-.98zm-6.79 2.54zm-.58 0a.66.66 0 00.25 0c0 .29 0 .59-.06.57a1.787 1.787 0 00-.19-.55zm1.2 5.86c-.09.12-.12 0-.13-.22a.43.43 0 00.16-.1v-.1a4 4 0 01-.03.42z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M63.18 36v-.06a.251.251 0 00-.05-.19v.27zM11.38 34.75a.33.33 0 010-.12.38.38 0 010 .12zM53.91 29.65v.21l.06-.18zM8.23 31.86a.57.57 0 000-.22 1 1 0 000 .22zM6.87 31.67l-.19-.3a1.78 1.78 0 00.19.3zM5.83 31.25v.36zM17.5 32.23a3.31 3.31 0 01.16-.4c-.09-.06-.16-.08-.16.4z"
        />
        <path
          className="waves-choppy_svg__b"
          d="M17.89 31.85c-.09-.17-.16-.13-.23 0s.16.15.23 0zM1.3 30.87h-.05a.53.53 0 010 .14zM1.24 31l-.05.1a.142.142 0 00.05-.1zM1.07 31.28l.12-.21s-.09-.07-.12.21zM2.68 31.26v-.31a2.16 2.16 0 000 .31zM3.1 31.17c-.1-.07-.25-.65-.39-.46V31c.05-.5.29.69.39.17zM4.86 35l-.35-.24c.06.32.14.76 0 .84.42.92-.11-.78.35-.6zM6 35.42c-.19.16 0 .48 0 .66a1 1 0 000-.66zM13.85 35.43v.76c.15-.11-.02-.29 0-.76zM15.36 31.46l-.15-.48-.07.71zM16.25 36.93l-.07.11.25-.28zM29.51 36.65l-.05-.94c-.1.17-.12 1.23.05.94zM35.23 35.69c.06.47.22.78.32.31-.13-.06-.25-.43-.32-.31zM52.4 37.23l-.12.32.22-.27z"
        />
      </g>
    </svg>
  );
}

export default SvgWavesChoppy;
