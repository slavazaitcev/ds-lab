---
title: Эталонный код — «Point Codes» — страница-список
summary: Сырой эталонный код экрана B «Point Codes» (страница-список): геометрия, цвета, шрифты и тексты как есть.
read_when:
  - Нужны точные значения экрана-списка B в коде: размеры, отступы, цвета, шрифты.
related:
  - ./screen.md
---
Эталонный код экрана в виде fenced-блока `tsx`. Это сырой код, снятый из макетов: точные размеры, отступы, цвета, шрифты и тексты как есть, без правок. Разбор экрана словами — [screen.md](screen.md).

```tsx
const imgChevronDown16Px = "";
const imgIcons = "";
const imgFrame1057 = "";
const imgIcons1 = "";
const imgPencil20Px = "";
const imgTrash20Px = "";
const img = "";
const imgIcons24Px = "";
const imgIconShare24Px = "";
const imgFrame943 = "";
const imgIconRoute24Px = "";
const imgFrameN = "";
const imgFrame946 = "";
const imgFrame948 = "";
const imgFrame949 = "";
const imgIconPlus24Px = "";
const imgIcons16Px = "";
const imgIconX24Px = "";
const imgVector = "";
const imgUnion = "";

type NumberOfRulesProps = {
  className?: string;
  type?: "Closed";
};

function NumberOfRules({ className, type = "Closed" }: NumberOfRulesProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center pr-[10px] relative"}>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input & Select">
        <div className="bg-white content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 w-[58px]" data-name="Frame">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular'] font-normal h-[16px] justify-center leading-[0] min-w-px relative text-[#141f2f] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">50</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="chevron-down_16px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown16Px} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#5f6772] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          1 - 50 of 200
        </p>
      </div>
    </div>
  );
}

function CardFooter({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#ecedef] content-stretch flex items-center px-[24px] py-[20px] relative w-[1543px]"} data-name="Card-footer">
      <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Pagination">
        <div className="content-stretch flex flex-col items-center justify-center opacity-50 p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[24px]" data-name="Icons">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#5d9af4] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            1
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
          <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] text-center w-[36px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            2
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#172537] text-[14px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            3
          </p>
        </div>
        <div className="relative shrink-0 size-[32px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1057} />
        </div>
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#172537] text-[14px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            5
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] size-[32px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="relative size-[24px]" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Empty" />
      <NumberOfRules className="content-stretch flex flex-col items-center pr-[10px] relative shrink-0" />
    </div>
  );
}

function Row1({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative w-[1552px]"} data-name="Row 1">
      <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Config_Alpha
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
        <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          150
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
        <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          300
        </p>
      </div>
      <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          -
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          -
        </p>
      </div>
      <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHead({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative w-[1552px]"} data-name="Table Head">
      <div className="content-stretch flex gap-[2px] h-[40px] items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-[96px]" data-name="Дата">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          ID
        </p>
        <div className="flex items-center justify-center relative shrink-0 size-[16px]">
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="overflow-clip relative size-[16px]" data-name="bi:arrow-left-short">
              <div className="absolute bottom-[28.12%] left-[24.99%] right-1/4 top-[28.13%]" data-name="Статус">
                <div className="absolute inset-[-2.14%_-1.87%]">
                  <img alt="" className="block max-w-none size-full" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] h-[40px] items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-[240px]" data-name="Создатель">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Configuration Name
        </p>
        <div className="flex items-center justify-center relative shrink-0 size-[16px]">
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="overflow-clip relative size-[16px]" data-name="bi:arrow-left-short">
              <div className="absolute bottom-[28.12%] left-[24.99%] right-1/4 top-[28.13%]" data-name="Статус">
                <div className="absolute inset-[-2.14%_-1.87%]">
                  <img alt="" className="block max-w-none size-full" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] h-[40px] items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-[200px]" data-name="ФИО оператора">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          App
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] h-[40px] items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-[200px]" data-name="Создатель">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          node-a
        </p>
      </div>
      <div className="content-stretch flex gap-[2px] h-[40px] items-center overflow-clip px-[16px] py-[10px] relative shrink-0 w-[200px]" data-name="Создатель">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          node-c
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-[40px] items-center min-w-px overflow-clip px-[16px] py-[10px] relative" data-name="Создатель">
        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          node-c
        </p>
      </div>
    </div>
  );
}

export default function PointCodes() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Point Codes">
      <div className="bg-white content-stretch flex flex-col h-full items-start justify-between py-[20px] relative shrink-0 w-[320px]" data-name="Menu">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-full" data-name="Header">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[24px]" data-name="Icons / 24px / Меню">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">App</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative shrink-0 w-full" data-name="Menu">
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / share_24px">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconShare24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Instances</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="antenna-bars-5_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame943} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Signaling</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / route_24px">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRoute24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Routing</p>
              </div>
            </div>
            <button className="bg-[#5d9af4] content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="point_20px">
                <div className="absolute left-px size-[18px] top-px" data-name="Frame N">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrameN} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Point Codes</p>
              </div>
            </button>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="arrows-left-right_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame946} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Profile SCTP</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="checkbox_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame948} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Check</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / users_24px" />
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Users</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="file-search_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <div className="absolute inset-[0_0_-0.34%_0]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame949} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Audit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative shrink-0 w-full" data-name="Settings">
          <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
            <div className="relative shrink-0 size-[20px]" data-name="settings_20px" />
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ecedef] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[20px] relative">
        <div className="content-stretch flex flex-col gap-[16px] h-[988px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full" data-name="Main Header Component">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Title">
                <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Name">
                  <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[28px] relative shrink-0 text-[#5d9af4] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Point Codes
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Empty" />
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Middle Active">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Right Side">
                <div className="bg-[#5d9af4] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 244">
                  <div className="relative shrink-0 size-[16px]" data-name="pencil">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                  </div>
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Create codes
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Left Side">
                <div className="bg-white border border-[#ecedef] border-solid content-stretch flex flex-[1_0_0] h-[36px] items-center justify-between min-w-px px-[12px] py-[6px] relative rounded-[8px]" data-name="Search">
                  <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0">
                    <div className="relative shrink-0 size-[16px]" data-name="Icons / 16px / Поиск">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons16Px} />
                    </div>
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Search
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[32px]" data-name="Icon Buttons">
                    <div className="absolute inset-1/4" data-name="Icon / pencil_24px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconX24Px} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-full" data-name="Table-container">
            <div className="border border-[#dee0e3] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Table">
              <TableHead className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" />
              <Row1 className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" />
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 7">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    2
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    1
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    23
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 8">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    3
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    8
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    7
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 9">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    4
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    12
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    13
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 10">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    5
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[14px] left-[563px] top-[222px] w-[13px]" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 11">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    6
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 12">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    7
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 13">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    8
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 14">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    9
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[rgba(146,152,160,0)] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 15">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 16">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    11
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 17">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    12
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 18">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    13
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 19">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    14
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 20">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    15
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 21">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    16
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 22">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    17
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#27ae60] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 23">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    18
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#f1b704] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#dee0e3] border-b border-solid content-stretch flex items-center relative shrink-0 w-full" data-name="Row 24">
                <div className="content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-[96px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] w-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    19
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Config_Alpha
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    100
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <div className="bg-[#9298a0] relative rounded-[4px] shrink-0 size-[12px]" />
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    10
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0 w-[200px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[16px] py-[10px] relative">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    -
                  </p>
                </div>
                <div className="content-stretch flex items-start px-[16px] py-[10px] relative shrink-0">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="pencil_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil20Px} />
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="trash_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash20Px} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(20,31,47,0.04),0px_4px_16px_rgba(20,31,47,0.16)] flex gap-[8px] items-center justify-center left-[487px] min-w-[48px] px-[12px] py-[8px] rounded-[8px] top-[167px]" data-name="Tooltip">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#141f2f] text-[13px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[16px]">Point Code not used</p>
                </div>
                <div className="absolute bottom-[-8px] h-[8px] right-[61px] w-[20px]" data-name="Union">
                  <div className="absolute inset-[-350%_-160%_-450%_-160%]">
                    <img alt="" className="block max-w-none size-full" src={imgUnion} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardFooter className="bg-[#ecedef] content-stretch flex items-center px-[24px] py-[20px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

These styles are contained in the design: Gray/100: #141F2F, H1 / Bold: Font(family: "Roboto", style: Bold, size: 16, weight: 700, lineHeight: 20, letterSpacing: 0), Gray/60: #79818B, P/Medium: Font(family: "Roboto", style: Medium, size: 14, weight: 500, lineHeight: 20, letterSpacing: 0), White: #FFFFFF, Blue Light/100: #5D9AF4, Tittle 1 / Bold: Font(family: "Roboto", style: Bold, size: 24, weight: 700, lineHeight: 28, letterSpacing: 0), Blue Light / 100: #5D9AF4, P/Regular: Font(family: "Roboto", style: Regular, size: 14, weight: 400, lineHeight: 20, letterSpacing: 0), Gray/10: #ECEDEF, Gray/20: #DEE0E3, Green/100: #27AE60, Gray/50: #9298A0, Red/100: #E61E43, Yellow/100: #F1B704, Caption 1/Regular: Font(family: "Roboto", style: Regular, size: 13, weight: 400, lineHeight: 16, letterSpacing: 0), Gray/70: #5F6772.
```
