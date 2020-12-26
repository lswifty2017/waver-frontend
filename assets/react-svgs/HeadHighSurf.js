import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgHeadHighSurf(props) {
  return (
    <Svg width={100} height={100} {...props}>
      <Defs></Defs>
      <G>
        <Circle
          className="head-high-surf_svg__a"
          cx={49.897}
          cy={49.897}
          r={49.897}
          transform="translate(.106)"
        />
        <Path
          d="M.106 49.896a49.9 49.9 0 1098.356-11.975H1.57A50.03 50.03 0 00.106 49.896z"
          fill="#7fc4fd"
        />
        <Path
          className="head-high-surf_svg__c"
          d="M84.612 41.793l-.253-.306a.293.293 0 00.253.306zM74.912 31.362v-.08z"
        />
        <Path
          className="head-high-surf_svg__c"
          d="M87.645 32.214c-3.34-.386-4.231-1.823-7.691-1.237a28.914 28.914 0 00-5.03.386c-.758 1.131-2.116 0-3.02.958l-.346-.639c-.319.333-.679.546-1 .2v-.186c-.466.492-1 .2-1.224.439v-.2l-.572.08.106-.266a2.794 2.794 0 01-2.4.319v.772c-1.583-.865-2.156.732-3.593-.293v-.186c-1.81 2.036-2.847-1.331-4.71.546.24-.24-.093-.4-.08-.585-.852.226-1.77.346-1.783 1.863-.625 0-.506-.479-.585-1.064a1 1 0 01-1.025.985l.226-.266-1.4.226.279 1.264c-.745-.359-.2-1.53-.9-1.237v1.048c-1.025-.213-1.623-1.783-2.661-2.555-4.111-.439-8.529 2.209-12.361.386l-.173-.785c-.067-1.144-1.051 1.69-1.2.625l-.439.532c-.133-.213-.4-.426-.173-.679-.412 0-.426.133-.719.479l-.439-.705c-1.477-.506-2.808.825-4.537.559-2.049-1.45-5.921-.12-8.143.652-3.127 1.7-6.773-2.834-9.979-.891-.106-.16-.373.2-.373.333l-2.941-.16s-14.214-.439-3.439 9.022v.24c1.61.612 2.661.745 3.726-.506.173 1.53 1.331.16 1.69.652v.12c.971-1.171 2.009.985 2.954 0 0 .12 0 .532-.266.559.679-.186 1.623-.532 1.677.359 1.637-.226 3.992.186 4.99-1.237l-.133.173c.6-.958.772-.146 1.437-.625 0 .106.093.173.08.226.652-.958 1.9-.16 2.435-.559v.6l1.331-.146-.492-.12c.173-1.637.985 1.011 1.929 0 .878.213 1.8-3.38 2.661-2.581.426-.772-.386 1.237.266.652 0 .838-.306.532-.146 1.211.652-.412 1.064.865 1.85.293v.652c1.025-1.2 1.943.878 2.661-.279 1.064-.546.705 1.969 1.823.679l.426.891c.479.146.346-1.1.865-.665 0 .559.665.452.359.985 1.2.878 2.422-1.251 3.992.24.346-1.091 1.131-.439 1.331-1.331 0 .479 1.583.067.692 1.1 0 .093-.2.08-.2-.106l-.106.652c.9 1.224 1.623-.679 2.515-.492-.266-.213-.612-.16-.373-.612l.812.093-.16.546 1.224.319-.173-.679c.6.359.812 1.5 1.49.546.306-.532-.572-.918.067-1.131a11.39 11.39 0 003.02 1.331c-.093-.772.186-.745.466-.891v.652c1.091-.918.4 1.464 1.477.732l-.093.466.293-1.331c.971-1.331.519 1.331 1.6-.426-.426.12-.2-1.464.333-1.171l-.133.639c.293-.133.386-.4.585-.266-.186.346-.093.931.333.812l-.293.812.812-1.184c.625.692 1.61-.173 1.876.732 0 0 1.331.439 1.65-.546-.266.612.466.838.253 1.57.359-.705 1.331-1.331 1.8-.532l-.08.093c1.517.745 2.661-1.038 3.992-.12 0-.772.665-.359.479-1.331 1.424-.971 2.581 2 3.087-1.051.652-.16.772.719 1.1.878l-.16.16a6.906 6.906 0 012.448-.213c.452-.293.519-1.7 1.331-1.331-.253.572 0 .466.373.466-.2.08-.253.293.146.665a.985.985 0 01.213-.373v.146c.506-.2.412-.373.186-.452a.825.825 0 00-.08-.346c.519.719 1.437 0 1.5.9 1.5-.213 2.581-1.211 3.832-1.583a.985.985 0 01-.519 1.118l.891-.173c0 .705-.519.412-.785.546 1.051 1.158 2.169-1.144 3.406-.093l.266-.559.067.093a1.131 1.131 0 01.466-.8c.173.625 0 1.437.6 1.4.479.6 1.331-.306 2.009-.639-.346-.106-.226-.452-.08-.665s.479.6.719.333v.84c-.12-.8.8-.852.918-1.2.173.625-.479.532-.559 1l1.85-.106c.652-.639-.12-.8.186-1.53.585-.173 1.144-.758 1.81-.253l-.2-.745a1.77 1.77 0 012.462.266c8.117-6.054 1.716-8.276 1.716-8.276-2.982-1.678-4.685.491-8.478 1.077z"
        />
        <Path
          className="head-high-surf_svg__a"
          d="M55.312 79.249c-21.635-2.528-39.598-.852-40.147 3.766s16.569 10.392 38.191 12.92c4.59.532 9.021.878 13.159 1.051a49.79 49.79 0 0018.256-11.323c-6.973-2.635-17.524-5.016-29.459-6.414z"
        />
        <Circle cx={50} cy={50} r={50} fill="none" />
        <Path
          className="head-high-surf_svg__a"
          d="M45.812 32.945a3.832 3.832 0 012.661-1.517 4.3 4.3 0 01.705 0c3.273.572 4.271 3.712 3.819 6.387s-2.289 5.269-5.415 4.763a3.766 3.766 0 01-3.123-2.487 7.784 7.784 0 011.357-7.145zM42.578 65.598a3.193 3.193 0 01-.279-1.889l.253-8.25a12.055 12.055 0 01.452-3.486 12.081 12.081 0 012.076-3.207 12.96 12.96 0 002.408-3.992 6.653 6.653 0 00.865.093 6.174 6.174 0 003.46-1.051 45.426 45.426 0 012.036 22.713 1.091 1.091 0 00.519 1.118c2.129 1.251 5 5.509 5.948 6.919 1.224 1.81 1.171 7.518 1.158 9.966v.812a2.808 2.808 0 01-.612 1.943c-1.038 1.118-3.486.373-3.486-2.1a22.806 22.806 0 00-.625-5.056 9.314 9.314 0 00-3.526-5.216 16.5 16.5 0 00-2-1.2c-.546-.306-1.091-.6-1.61-.958a8.409 8.409 0 01-3.047-5.921 6.2 6.2 0 001.464-3.433 16.406 16.406 0 000-2.794v-1.223a28.088 28.088 0 01.625-4.418 1.1 1.1 0 00-.838-1.331 1.118 1.118 0 00-1.331.838 31.322 31.322 0 00-.665 4.883v1.331a16.579 16.579 0 010 2.448 3.619 3.619 0 01-1.324 2.58 1.543 1.543 0 01-1.916-.12zM37.443 85.157c.08-.146.306-.519.612-1.064 1.583-2.661 5.322-8.941 7.385-13.2a9.647 9.647 0 002.98 3.619l.359.213a75.988 75.988 0 01-2.661 4.125c-1.331 2.009-2.568 3.992-3.619 5.921-1.623 3.087-3.18 3.473-3.779 3.486a1.637 1.637 0 01-1.437-.785 2.289 2.289 0 01.16-2.315z"
        />
        <Path
          className="head-high-surf_svg__e"
          d="M38.72 90.484h.12c1.211 0 3.579-.692 5.642-4.657 1.011-1.9 2.222-3.766 3.513-5.735.878-1.331 1.783-2.661 2.661-4.2a12.746 12.746 0 011.331.785 7.065 7.065 0 012.661 3.992 19.959 19.959 0 01.532 4.5 4.524 4.524 0 004.431 4.817 3.845 3.845 0 002.834-1.224 4.843 4.843 0 001.211-3.433v-.8c0-4.59-.12-9.114-1.53-11.2a32.094 32.094 0 00-6.014-7.159 47.661 47.661 0 00-2.661-24.044 8.888 8.888 0 001.716-3.542c.812-3.805-.732-8.17-5.216-9.154a5.748 5.748 0 00-5.588 2 10.019 10.019 0 00-2.089 9.314 5.868 5.868 0 003.074 3.566 11.6 11.6 0 01-2.009 3.193 13.838 13.838 0 00-2.422 3.845 13.6 13.6 0 00-.585 4.151l-.253 8.25a5.163 5.163 0 00.692 3.247 3.3 3.3 0 002.741 1.331 4.4 4.4 0 00.825-.12c-1.61 3.819-6.507 12.122-8.156 14.916l-.639 1.1a4.444 4.444 0 00-.067 4.537 3.739 3.739 0 003.245 1.724zm7.092-57.534a3.859 3.859 0 012.661-1.517 4.3 4.3 0 01.705 0c3.273.572 4.271 3.712 3.832 6.387s-2.289 5.269-5.429 4.763a3.726 3.726 0 01-3.114-2.493 7.771 7.771 0 011.344-7.145zm-3.233 32.647a3.3 3.3 0 01-.279-1.889l.266-8.25a11.2 11.2 0 01.452-3.486 11.7 11.7 0 012.062-3.207 12.707 12.707 0 002.408-3.992 6.56 6.56 0 00.878.093 6.174 6.174 0 003.446-1.051 45.426 45.426 0 012.036 22.713 1.091 1.091 0 00.519 1.118c2.129 1.251 5 5.509 5.948 6.919 1.224 1.81 1.171 7.518 1.158 9.966v.812a2.808 2.808 0 01-.612 1.941c-1.038 1.118-3.486.373-3.486-2.1a22.034 22.034 0 00-.625-5.056 9.234 9.234 0 00-3.526-5.216 16.5 16.5 0 00-2-1.2 17.471 17.471 0 01-1.6-.958 8.383 8.383 0 01-3.06-5.921 6.2 6.2 0 001.464-3.433 16.405 16.405 0 000-2.794v-1.224a28.621 28.621 0 01.612-4.418 1.091 1.091 0 10-2.129-.466 29.273 29.273 0 00-.679 4.883v1.333a14.942 14.942 0 010 2.448 3.619 3.619 0 01-1.331 2.581 1.543 1.543 0 01-1.929-.146zm-5.136 19.56l.625-1.064c1.57-2.661 5.322-8.941 7.371-13.2a9.647 9.647 0 002.98 3.619l.373.213a96.739 96.739 0 01-2.661 4.125c-1.331 2.009-2.568 3.992-3.619 5.921-1.61 3.087-3.18 3.473-3.779 3.486a1.65 1.65 0 01-1.437-.785 2.328 2.328 0 01.146-2.315z"
        />
        <Path
          className="head-high-surf_svg__a"
          d="M54.554 47.901s5.988 4.657 7.318 4.657c2.661 0 3.326 3.326.665 4.657a5.429 5.429 0 01-3.273-.16 25.07 25.07 0 01-3.38-1.171z"
        />
        <Path
          className="head-high-surf_svg__e"
          d="M53.848 48.606c1.557 1.211 3.153 2.4 4.817 3.473a10.139 10.139 0 002.661 1.41c.612.16 1.237 0 1.65.639.639 1-.373 2.1-1.331 2.275a7.877 7.877 0 01-3.38-.679c-.426-.133-.865-.359-1.331-.466-.9-.226-.2-.24-.133.333-.08-.732-.24-1.477-.373-2.209l-.956-5.747c-.213-1.264-2.129-.732-1.916.532.412 2.488.718 5.029 1.236 7.488.24 1.064.812 1.224 1.836 1.61 1.969.745 4.8 1.836 6.786.572a3.646 3.646 0 001.665-3.882c-.452-1.783-1.756-1.956-3.247-2.4-2.315-.692-4.936-3.074-6.653-4.364-.918-.781-2.342.63-1.331 1.415z"
        />
      </G>
    </Svg>
  );
}

export default SvgHeadHighSurf;
