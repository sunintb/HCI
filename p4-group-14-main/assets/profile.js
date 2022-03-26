import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function Profile(props) {
  return (
    <Svg width="68" height="60" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M34 2.5C35.375 2.5 36.5 3.625 36.5 5C36.5 6.375 35.375 7.5 34 7.5C32.625 7.5 31.5 6.375 31.5 5C31.5 3.625 32.625 2.5 34 2.5ZM34 15C37.375 15 41.25 16.6125 41.5 17.5H26.5C26.7875 16.6 30.6375 15 34 15ZM34 0C31.2375 0 29 2.2375 29 5C29 7.7625 31.2375 10 34 10C36.7625 10 39 7.7625 39 5C39 2.2375 36.7625 0 34 0ZM34 12.5C30.6625 12.5 24 14.175 24 17.5V20H44V17.5C44 14.175 37.3375 12.5 34 12.5Z" fill={props.selected ? "#AEAEF3" : "black"}/>
      <Path d="M0.504 52L5.184 39.616H7.128L11.79 52H10.188L8.91 48.616H3.348L2.07 52H0.504ZM3.816 47.266H8.442L6.174 41.2H6.084L3.816 47.266ZM17.2007 52.144C16.5047 52.144 15.9287 52.084 15.4727 51.964C15.0287 51.844 14.6687 51.664 14.3927 51.424C14.1287 51.184 13.9307 50.878 13.7987 50.506C13.6667 50.134 13.5767 49.69 13.5287 49.174C13.4927 48.658 13.4747 48.07 13.4747 47.41C13.4747 46.726 13.4987 46.126 13.5467 45.61C13.6067 45.094 13.7087 44.65 13.8527 44.278C14.0087 43.894 14.2187 43.588 14.4827 43.36C14.7587 43.132 15.1127 42.964 15.5447 42.856C15.9767 42.736 16.5107 42.676 17.1467 42.676C17.5667 42.676 18.0047 42.7 18.4607 42.748C18.9287 42.784 19.3127 42.838 19.6127 42.91V44.098C19.3367 44.05 18.9947 44.008 18.5867 43.972C18.1907 43.936 17.8307 43.918 17.5067 43.918C16.9427 43.918 16.4867 43.966 16.1387 44.062C15.8027 44.158 15.5447 44.332 15.3647 44.584C15.1967 44.836 15.0827 45.19 15.0227 45.646C14.9627 46.102 14.9327 46.69 14.9327 47.41C14.9327 48.142 14.9627 48.742 15.0227 49.21C15.0827 49.666 15.2027 50.02 15.3827 50.272C15.5747 50.512 15.8387 50.68 16.1747 50.776C16.5227 50.86 16.9787 50.902 17.5427 50.902C17.8787 50.902 18.2447 50.884 18.6407 50.848C19.0367 50.812 19.3907 50.77 19.7027 50.722V51.91C19.4027 51.97 19.0187 52.024 18.5507 52.072C18.0827 52.12 17.6327 52.144 17.2007 52.144ZM25.48 52.144C24.784 52.144 24.208 52.084 23.752 51.964C23.308 51.844 22.948 51.664 22.672 51.424C22.408 51.184 22.21 50.878 22.078 50.506C21.946 50.134 21.856 49.69 21.808 49.174C21.772 48.658 21.754 48.07 21.754 47.41C21.754 46.726 21.778 46.126 21.826 45.61C21.886 45.094 21.988 44.65 22.132 44.278C22.288 43.894 22.498 43.588 22.762 43.36C23.038 43.132 23.392 42.964 23.824 42.856C24.256 42.736 24.79 42.676 25.426 42.676C25.846 42.676 26.284 42.7 26.74 42.748C27.208 42.784 27.592 42.838 27.892 42.91V44.098C27.616 44.05 27.274 44.008 26.866 43.972C26.47 43.936 26.11 43.918 25.786 43.918C25.222 43.918 24.766 43.966 24.418 44.062C24.082 44.158 23.824 44.332 23.644 44.584C23.476 44.836 23.362 45.19 23.302 45.646C23.242 46.102 23.212 46.69 23.212 47.41C23.212 48.142 23.242 48.742 23.302 49.21C23.362 49.666 23.482 50.02 23.662 50.272C23.854 50.512 24.118 50.68 24.454 50.776C24.802 50.86 25.258 50.902 25.822 50.902C26.158 50.902 26.524 50.884 26.92 50.848C27.316 50.812 27.67 50.77 27.982 50.722V51.91C27.682 51.97 27.298 52.024 26.83 52.072C26.362 52.12 25.912 52.144 25.48 52.144ZM34.0473 52.144C33.2913 52.144 32.6613 52.096 32.1573 52C31.6653 51.916 31.2753 51.772 30.9873 51.568C30.6993 51.364 30.4833 51.082 30.3393 50.722C30.2073 50.362 30.1233 49.912 30.0873 49.372C30.0513 48.82 30.0333 48.166 30.0333 47.41C30.0333 46.654 30.0513 46.006 30.0873 45.466C30.1233 44.914 30.2073 44.458 30.3393 44.098C30.4833 43.738 30.6993 43.456 30.9873 43.252C31.2753 43.048 31.6653 42.904 32.1573 42.82C32.6613 42.724 33.2913 42.676 34.0473 42.676C34.8153 42.676 35.4453 42.724 35.9373 42.82C36.4293 42.904 36.8193 43.048 37.1073 43.252C37.4073 43.456 37.6233 43.738 37.7553 44.098C37.8993 44.458 37.9893 44.914 38.0253 45.466C38.0613 46.006 38.0793 46.654 38.0793 47.41C38.0793 48.166 38.0613 48.82 38.0253 49.372C37.9893 49.912 37.8993 50.362 37.7553 50.722C37.6233 51.082 37.4073 51.364 37.1073 51.568C36.8193 51.772 36.4293 51.916 35.9373 52C35.4453 52.096 34.8153 52.144 34.0473 52.144ZM34.0473 50.902C34.6953 50.902 35.1933 50.86 35.5413 50.776C35.8893 50.692 36.1353 50.53 36.2793 50.29C36.4353 50.05 36.5253 49.702 36.5493 49.246C36.5853 48.778 36.6033 48.166 36.6033 47.41C36.6033 46.654 36.5853 46.048 36.5493 45.592C36.5253 45.124 36.4353 44.77 36.2793 44.53C36.1353 44.29 35.8893 44.128 35.5413 44.044C35.1933 43.96 34.6953 43.918 34.0473 43.918C33.4113 43.918 32.9133 43.96 32.5533 44.044C32.2053 44.128 31.9593 44.29 31.8153 44.53C31.6713 44.77 31.5813 45.124 31.5453 45.592C31.5093 46.048 31.4913 46.654 31.4913 47.41C31.4913 48.166 31.5093 48.778 31.5453 49.246C31.5813 49.702 31.6713 50.05 31.8153 50.29C31.9593 50.53 32.2053 50.692 32.5533 50.776C32.9133 50.86 33.4113 50.902 34.0473 50.902ZM43.932 52.144C43.26 52.144 42.714 52.072 42.294 51.928C41.886 51.784 41.574 51.568 41.358 51.28C41.142 50.992 40.992 50.626 40.908 50.182C40.836 49.726 40.8 49.186 40.8 48.562V42.82H42.276V48.058C42.276 48.67 42.3 49.162 42.348 49.534C42.396 49.906 42.498 50.188 42.654 50.38C42.822 50.56 43.056 50.68 43.356 50.74C43.656 50.8 44.046 50.83 44.526 50.83C45.126 50.83 45.594 50.758 45.93 50.614C46.266 50.458 46.506 50.242 46.65 49.966C46.806 49.678 46.902 49.336 46.938 48.94C46.986 48.532 47.01 48.07 47.01 47.554V42.82H48.468V52H47.154L47.1 50.686H46.974C46.854 50.974 46.674 51.226 46.434 51.442C46.206 51.658 45.888 51.832 45.48 51.964C45.072 52.084 44.556 52.144 43.932 52.144ZM51.5753 52V42.82H52.9073L52.9613 44.134H53.0693C53.2013 43.846 53.3813 43.594 53.6093 43.378C53.8493 43.162 54.1673 42.994 54.5633 42.874C54.9713 42.742 55.4873 42.676 56.1113 42.676C56.7953 42.676 57.3413 42.748 57.7493 42.892C58.1573 43.036 58.4693 43.252 58.6853 43.54C58.9133 43.828 59.0633 44.2 59.1353 44.656C59.2073 45.1 59.2433 45.634 59.2433 46.258V52H57.7853V46.762C57.7853 46.138 57.7553 45.646 57.6953 45.286C57.6473 44.914 57.5453 44.638 57.3893 44.458C57.2333 44.266 57.0053 44.14 56.7053 44.08C56.4053 44.02 56.0093 43.99 55.5173 43.99C54.9293 43.99 54.4673 44.068 54.1313 44.224C53.7953 44.368 53.5493 44.584 53.3933 44.872C53.2373 45.148 53.1413 45.49 53.1053 45.898C53.0693 46.294 53.0513 46.75 53.0513 47.266V52H51.5753ZM63.1247 52V44.062H61.2707V42.82H63.1247V40.156H64.5827V42.82H66.7787V44.062H64.5827V52H63.1247Z" fill={props.selected ? "#AEAEF3" : "black"}/>
    </Svg>
  );
}

export default Profile;
