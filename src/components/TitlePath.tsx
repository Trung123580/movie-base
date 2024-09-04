import Button from '@/components/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MdNavigateNext } from '@/utils/icons';
import { years } from '@/utils/constants';
function TitlePath({
  onClickNext,
  onClickPrev,
  title,
  noSlide,
  className,
  sort,
  year,
  onChange,
}: {
  className?: string;
  title: any;
  onClickNext: func;
  onClickPrev: func;
  noSlide?: boolean;
  sort?: boolean
  year?: number
  onChange?: (e: any) => void
}) {
  return (
    <div className={` pt-12 mb-6 flex justify-between items-center  text-2xl lg:text-3xl ${className}`}>
      <h3 className=' font-extrabold capitalize flex-basis'>{title}</h3>
      {!noSlide && (
        <div className='flex relative  rounded-full border border-borderColor *:px-2 *:py-1 md:*:px-3 md:*:py-1.5'>
          <Button onClick={onClickNext} className='hover:text-primary transition' icon={<MdNavigateNext className='w-8 h-7 rotate-180  ' />} />
          <div className='!p-0 w-[1px] h-3/4 border border-borderColor absolute position-center'></div>
          <Button onClick={onClickPrev} className=' hover:text-primary transition' icon={<MdNavigateNext className='w-8 h-7 ' />} />
        </div>
      )}
      {sort &&
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
          <InputLabel id="demo-select-small-label" style={{ color:'white'}}>Year</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={year}
            label="year"
            style={{color:'white'}}
            onChange={onChange}
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            {years.map(year => <MenuItem key={year.id} value={year.path}>{year.name}</MenuItem> )}
          </Select>
       </FormControl>
      }
    </div>
  );
}

export default TitlePath;
