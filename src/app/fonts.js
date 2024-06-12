import localFont from "next/font/local";

export const bricolage_grotesque = localFont({
  src: [
    {
      path: '../../public/fonts/BricolageGrotesque-Regular.ttf',
      weight: '400',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../../public/fonts/BricolageGrotesque-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
      display: 'swap'
    }
  ],
});

export const rubik_mono_one = localFont({
  src: '../../public/fonts/RubikMonoOne-Regular.ttf',
  display: 'swap',
})