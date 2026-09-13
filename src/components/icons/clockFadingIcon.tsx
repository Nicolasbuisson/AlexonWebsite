export const ClockFadingIcon = (props: SvgProps) => {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v6l4 2" />
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M8.64 21.42a10 10 0 0 0 7.63-.38" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M2.5 8.88a10 10 0 0 0-.5 3.12" />
      <path d="M4.64 5.24a10 10 0 0 1 .89-.86" />
    </svg>
  );
};
