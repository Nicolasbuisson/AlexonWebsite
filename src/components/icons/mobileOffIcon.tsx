export const MobileOffIcon = (props: SvgProps) => {
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
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="m3 3 18 18" />
    </svg>
  );
};
