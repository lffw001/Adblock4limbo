/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: isr-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["*","#video-blocker",".ad-link",".small-ad","#printads,\n.adlist,\n.adpic",".afs_ads",".addtitle","#AdTop",".image-advertisement",".postad","#adsense","#findABroker,\n.generalOverlay,\n.tradenowBtn",".ad-body",".adunit","#topAds",".banner-300","#taboola-below-article-thumbnails,\n.share-zone",".header-ad",".adclass,\n.shareBtn",".ParnasalogoIcon,\n.centerParnasa",".banner-placeholder,\n.sb-show.sticky-banner,\n.show.sticky_footer-container,\n.under-header.bunner-top.banner","#lg-atf-300-250,\n#lg-bottom-300-250,\n.ad-300-250,\n.ad-700-156,\n.ad-970-250,\n.dynAds,\n.sticky-ad",".adv-article-left-kubia,\n.bottom-banner.row,\n.bottom-sticky-strip","#closeMobileBanner,\n#top-banner,\n.article-content-banner,\n.bannerWrap,\n.bannerWrapMobile,\n.bannerWrapMobileBottom,\n.middle-banner",".sticky-banner.banner-con",".banner-placeholder-hashulchan","#fakeimage,\n.adunit.ih-adunit,\n.full_width.system-banner,\n.ih-marketing-info-container,\n.ih-marketing-item-container,\n.link-list-item-commercial,\n.marketing-article,\n.marketing_section,\n.pane-ih-marketing-bxslider,\n.pane-ih-marketing-nice-to-know,\n.single-post-inner-aside__col.col,\n.top-adunit-section","#innerMoodaa2,\n#mekodam,\n.Ozen300,\n.mood.hidden-sm.hidden-md.hidden-xs,\n.mood1240-100,\n.mood_desktop.mood1280-100.mood,\n.mood_desktop.mood1280-250.mood,\n.mood_desktop.mood300-250.mood,\n.mood_desktop.mood300-600.mood,\n.mood_mobileweb.mood300-250.mood,\n.mood_native.mood300-250.mood,\n.sargelWarp,\n[href^=\"https://moodaot.kipa.co.il/gomodaa.php\"],\n[id^=\"p__\"][id$=\"_Kipa_Native_kipa_native_1\"],\n[id^=\"p__\"][id$=\"_Kipa_Native_kipa_native_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x250_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x600_sidebar_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_3\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_4\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_1280x100_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_300x600_sidebar_1\"],\n[id^=\"p__\"][id$=\"_kipa_mobile_native_kipa_mobile_native_1\"],\n[id^=\"p__\"][id$=\"_kipa_mobile_native_kipa_mobile_native_2\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_Article_320x50_sticky\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_Article_king_top\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_HP_320x50_sticky\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_HP_king_top\"],\ndiv.textim > div > .mood > .moodiframe.oneMood,\ndiv.textim > div > .mood > .moodiframe.oneMood > div",".c-article__ad",".ad-label,\n.g-ad-label","#a_sticky_test,\n.banner-div-gpt-250,\n.cls300x250.mm-banner-container,\n.cls393x163.mm-banner-container,\n.mm-promo-content-active",".king-banner","#CM8ShowAd_MOBILE_MONSTER1_300X250,\n#CM8ShowAd_MOBILE_MONSTER2_300X250,\n#CM8ShowAd_MOBILE_MONSTER3_300X250,\n#MEDIUM_BANNER,\n.advertisingitem,\n.textadvertisingitem,\n[href^=\"https://mobile.mako.co.il/news-law_guide\"],\n[src=\"https://img.mako.co.il/2024/02/13/NEWPOSTER.jpg\"]","#maavaron-container","[id*=\"_ucAdArticleAfterCategory_\"],\n[id*=\"_ucAdMiddleArticle_\"]",".gpt-slot",".ad",".adArticle,\n.adv","[class^=\"Banner_Wrap\"]",".MynetHeaderMobileComponenta",".ad-title",".ad-100-300,\n.ad-300-600,\n.ad-flat.ad",".ad-container-row,\n.adv-placeholder,\n.adv.anchor,\n.is-only-desktop.ad-container,\n.station-middle-ad",".ads",".aside-desktop iframe,\n.noprint-hidden.wide,\n.only-mobile.css-13oxhn3.css-1m8p2t9.slot,\n.section-text-more-box,\n.with-margin-bottom.only-desktop.wide.css-13oxhn3.css-1m8p2t9.slot",".pirs-links.paragraph,\n.t-recommendations-area",".post_thumbnail_ad",".AdvertisingNew,\n.cls970x250-1st.tmi-banner-container","#adPlayer,\n#adPlayerSecondary,\n#careerSection,\n#closure2014Section,\n#lawSection,\n#tldSection,\n#videoOverlay,\n#we\\ show,\n#zoomSection,\n.ads-spaces-shdera-hp,\n.commercial-items.mixed-sequence.sequence,\n.css-k0dd80,\n.homepage-desktop-top-ad,\n.href-winner,\n.marketing.desktop-regular,\n.more-in-walla-aside.side-article.fc,\n.no-desktop.homepage-mobile-top-ad,\n.no-mobile.shdera > ul,\n.no-title.shatapim.sequence,\n.ob-taste-left,\n.only-desktop.tld-event,\n.only-mobile.item-ad-in-content-placeholder,\n.positioned,\n.slot-top-margin + .static-spaces-rectangle-buzzer.no-tablet.no-mobile,\n.tld-side-recommendation.editor-selections.three-section-articles.sequence,\n.top_banner_outer.relative,\n.vertical-232.tld.type-2.vertical-editable.common-hp-articles.sequence,\n.walla-shops,\n[alt=\"adImg\"],\n[data-adid],\n[data-advertiser-id],\n[name=\"adIframe\"],\na[href*=\"jor-el.net\"] + img[src^=\"blob\"],\na[href*=\"jor-el.net\"] img[src^=\"blob\"],\na[href][onmousedown] img[src^=\"blob\"],\na[href^=\"javascript:\"] img[src^=\"blob\"],\ndiv.ads,\ndiv.center-bottom[data-slot-name=\"nickbar_phone\"],\ndiv[class^=\"ads-spaces\"],\ndiv[id^=\"Fusion_holder\"],\ndiv[style=\"width:468px;margin:0 auto;\"],\niframe[id*=\"AMAdIframe\"],\nli.ad,\nli.marketing,\nvideo[poster^=\"data:image/gif;base64,\"]",".clearer.scale_image.mako_feed_neo.ver2.part2,\n.h033Desktop_root__ZgE9t,\n.h1MainItemMobile_root__29M_o,\n.h1Mobile_root__6UWJ2,\n.v025Desktop_root__EcTEG,\n.v05Mobile_root__Uad3G,\n[box-title=\"Xtra Secret\"],\n[box-title=\"Xtra בריאות \"],\n[class^=\"Maavaron_root__\"],\n[data-items=\"holidayFinderOrdering\"],\n[href^=\"/health-special/xtra_atopic_dermatitis/\"],\n[href^=\"https://abbvie.mako.co.il/?\"],\n[href^=\"https://www.holidayfinder.co.il/\"][href*=\"?utm_source=mako&utm_medium=affiliate&utm_campaign=component\"],\n[style=\"background-image:url('https://img.mako.co.il/2022/07/10/skinholidayfinder.png')\"]",".block.md\\:hidden.w-full.max-h-\\[280px\\].h-\\[280px\\],\n.block.mt-2.max-h-\\[250px\\].h-\\[250px\\].is-container,\n.mb-4.md\\:hidden.block.max-h-\\[60px\\].h-\\[60px\\].is-container,\n.md\\:block.hidden.my-8.is-container.w-full.max-h-\\[250px\\].h-\\[250px\\],\n.md\\:flex.hidden.mt-4.max-h-\\[250px\\].h-\\[250px\\].is-container,\n.md\\:flex.hidden.mt-4.max-h-\\[280px\\].h-\\[280px\\].is-container,\n.md\\:flex.hidden.mt-8.max-h-\\[250px\\].h-\\[250px\\].is-container,\n.md\\:flex.hidden.mt-8.max-h-\\[280px\\].h-\\[250px\\].is-container,\n.md\\:hidden.block.my-8.is-container.w-full.max-h-\\[280px\\].h-\\[280px\\],\n.md\\:hidden.mt-4.block.max-h-\\[300px\\].h-\\[300px\\],\n.mt-4.md\\:hidden.block.max-h-\\[280px\\].h-\\[280px\\].is-container,\n.my-4.md\\:hidden.block.max-h-\\[250px\\].h-\\[250px\\].is-container,\n.w-\\[350px\\].min-w-\\[350px\\].lg\\:flex.hidden.h-auto",".mt-1.block.md\\:max-h-\\[250px\\].max-h-\\[145px\\].md\\:h-\\[250px\\].h-\\[145px\\].is-container","#desktop-top-banners,\n#martef,\n.desktop-only[class*=\"slots_desktopTextlinkLightBoxAd_\"],\n.desktop-only[class*=\"slots_desktopTvAd_\"],\n.dfp,\n.dfp-desktop-tv-wrapper,\n.dfp-slot-container,\n.dfp_v2,\n.inactive.top_boxes_row,\n.iosLoad.mobile_strip_top,\n.iosLoad.mobile_top_dfp_placeholder_bill,\n.magazine-frame,\n.magazine_per_category,\n.sticky_magazine,\n[class*=\"_mobileInnerDfp_\"],\n[class*=\"additional-info_mobileStripMiddleDfp_\"],\n[class*=\"dfp-slot_desktopOnly_\"][class*=\"dfp-slot_container_\"],\n[class*=\"top-gallery_mobileDfp_\"],\n[class*=\"upper-ad-content_mobileStripTopDfp_\"],\n[class*=\"upper-item-description_mobileStripTopDfp_\"]","#popupContainer,\n.widget-area.sidebar-primary.sidebar,\ndiv[style$=\"display: block; overflow: auto;\"]",".TopBanner",".arti-banners",".banner","[class*=\"banner\"]","img[src^=\"VIRARTICLES/shadv/\"]","#ads\\.top","a[href*=\"goodluckblockingthis.com\"],\na[onmousedown*=\"goodluckblockingthis.com\"]",".show.youMightAlsoLike,\n.taboola-wrapper,\n[class^=\"TimeLinestyles__StyledAdWrap\"],\n[class^=\"TopBannerstyles_\"],\ndiv.dxZevu.frjHsE.NewsFlahesPagestyles__NewsFlashSpecialWidget-sc-1zhe9e-9.NewsFlahesPagestyles__NewsFlashItem-sc-1zhe9e-8",".tbl-feed-container,\n.trc_rbox_container",".OUTBRAIN","#taboola-left-rail-thumbnails,\n.desktop-ad-720-90,\n.gadgety-ad-wrapper,\n.vertical-ad","#area-taboola-after-content,\n#area-taboola-top-content","#banner-sticky,\n#intext-1.sideInf,\n#intext-2.sideInf,\n#intext-3.sideInf,\n#intext-4.sideInf,\n#intext-5.sideInf,\n.article-taboola,\n.banner-BTF_LB.banner,\n.banner-BTF_MPU.banner,\n.banner-BTF_MPU_1.banner,\n.banner-story.banner,\n.banner-top,\n.banner.forecast-aside-banner,\n.taboola,\n.taboola-top,\n[id^=\"banner_\"]",".HorizontalCategoryArticleAndBannerFloor,\n.TwoBannersFloor,\n.article-5-outbrain-script,\n.article-9-outbrain-script,\n.article-bottom-banner,\n.article-box-banner-wrap,\n.article-details-banner,\n.article-left-side-banner,\n.article-left-side-outbrain,\n.article-top-banner,\n.banner-left-home,\n.box-banner-wrap,\n.cls_970x350_1st_top.one-row,\n.horizontal-banner-wrap,\n.may-interest-you,\n.news-feed-banner,\n.right-side-outbrain,\n.xl-banner-wrap","li.outbrain",".css-jmqqm5,\n.separator.css-1v283wf,\n.wrap-outbrain",".trc_related_container.tbl-feed-card","#cj_taboola_widget-2,\n.bottom-50.cj_above_team_banner_desktop,\n.cj_new_widget_banners_left_long,\n.cj_taboola,\n.persumi-text","#taboola_div","#RoterHePromo,\n#taboola-forum-top-react,\n#taboola-forum_atf,\n#taboola-forums-top-react,\n#taboola-post-top-react,\n.forum-side-responsive1,\n[class^=\"BezeqIframe_bezeqContainer_\"],\n[class^=\"HomepagePosts_commercialWrapper_\"],\n[class^=\"PostsExpended_commercialWrapper_\"],\n[href=\"https://bit.ly/3JbFKqV\"],\n[href=\"https://bit.ly/3yQVHRU\"],\n[href=\"https://sales22.telekol.co.il/\"],\n[href=\"https://www.kalish-fin.com/y\"],\n[href^=\"https://www.booking.com/index.html?aid=\"],\n[style=\"border: 0px solid red; width: 160px; table-layout: fixed;\"],\ntd[style=\"border:0px solid red; width:160px; table-layout:fixed;\"],\ntd[style=\"width:120px;border:0px solid red;\"]","#ads\\.newspaper,\n#ads\\.top\\.2,\n#blanket,\n#taboola-video-reel-mid-article,\n.ArticleBannerComponenta,\n.CAATVcompAdvertiseTv,\n.MultiArticleTaboola.layoutItem,\n.StripMarketingComponenta1280,\n.Taboola.layoutItem,\n.art_tkb_talkback_advert,\n.articleBodyInreadWrapper,\n.banner.layoutItem,\n.commertial.slotView,\n.extended-banner.layoutItem,\n.pplus_hdr_ad,\n.promolightboxmvc,\n[class*=\"MarketingCarousel\"],\n[class*=\"PromoLightbox\"]","[href^=\"https://dtv.walla.co.il\"],\n[href^=\"https://unionhorizon.walla.co.il\"],\n[href^=\"https://www.democratv.org\"]","[href^=\"https://tld.walla.co.il/item/\"],\n[href^=\"https://tmirecycle.walla.co.il/item/\"]",".banner_ads,\n.sidebannerads",".across-google-ad.across-google-wide-ad",".bigbnr",".Banner,\ndiv[style=\"height: 78px; overflow: hidden; width: 510px;\"],\ndiv[style=\"height: 78px; padding-right: 10px; margin-bottom: 20px;\"]",".WidgetHidden.article-aside,\n.WidgetHidden_false.article-aside",".fade,\n.frmCapsuleBlock.tblFulWidth.color-04.info-block",".adsbygoogle",".desk_mode.adsgoogle","#LeftBanner,\n.HotBannerDiv,\n.TopBannerDiv","#ArticleBanner,\n#ads\\.premium,\n#carouselAdLi,\n#old_Arts_Ad,\n#relevanti_area,\n.SetArtWidth[style=\"margin-top:7px;\"] > table[width=\"478\"][height=\"174\"],\n.banner.new > .no-print,\n.banner.new.layoutItem,\n[height=\"7\"] + [valign=\"top\"] + tr[height=\"7\"],\n[src=\"http://partner.googleadservices.com/gpt/pubads_impl_86.js\"] + *,\n[valign=\"top\"] + [valign=\"top\"] + tr[height=\"7\"]",".advertizement","#flow","#arti-banner-popup,\n#stSegmentFrame,\n.contento_Container,\n.rt-banners",".adpro","a[target=\"_blank\"][href*=\"/urvd/4-\"]",".banner-article-top-wrap,\n.banner-top-wrap",".biz-item-box:has(.biz-item-modaa),\n.pirsomet-header",".textlinks_wide.textlinks",".adbox",".game-item > .pre-game","#adfxp",".active.quads-sticky","#Globes_Displays,\n.Banner_in_Content,\n.spAr","#jumbo_container.nocontent.topBanner,\n.bannerCenter.gr,\n.kidum","a[href*=\"theadblockerproject.org\"]","a[href*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\na[href*=\"gampad/clk\"],\na[onmousedown*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"]","div[onclick*=\"countAdClick\"]","#desktop_vid_bnr,\n.bannerCls.trg_banner,\n.panel-row-upper,\n.remove-ad,\n[href*=\"https://target.hidabroot.org/ad_manager\"]","#banner_desktop_left_div,\n#banner_desktop_right_div,\n#sticky_banner_bottom_desktop,\n#sticky_banner_bottom_mobile","#board_middle_advert,\n#plasma_container,\n.boardfooter_tr,\n.plasma,\ndiv[style=\"clear:both; float:none; height:40px;\"],\ndiv[style=\"width:641px; height:129px; clear:both; float:none;\"],\ntd[style=\"width:200px; text-align:left; vertical-align:top;\"],\nth[colspan=\"20\"]","#top_banners","#black-studio-tinymce-43,\n.header_banner,\na img[width=\"300\"][height=\"250\"]",".clearfix.block-da-post_before_content.block-da.block-da-1 > .div-hwad-300x250,\n.clearfix.da-style-2.block-da-post_middle_content.block-da.block-da-1,\n.clearfix.tipi-flex-right.block-da-header.block-da.block-da-1,\n.div-hwad-970x250,\n[id^=\"div-hwad-300x\"],\n[src^=\"https://hwzone.co.il/wp-content/themes/foxiz-child/300x250.html?a=\"],\ndiv.forum-banner",".zad","#ads\\.strip\\.1",".custom-position.fixed.active.pum-position-fixed.size-custom.theme-33016.popmake.pum-container,\n[href=\"https://www.bankhapoalim.co.il/he/loans/postpone-loan\"],\n[href^=\"https://www.sherut.net/Poalim\"]","#weekFlashes","#wrapper > literal > div,\ndiv[style=\"clear: both;border-bottom:3px solid #ededed;padding:4px;height: 120px;\"]","#bannerDiv,\n#leftBanner,\n#rightBanner",".plasma_banner,\ndiv[id^=\"banner\"]","#ad_Footer,\n.post_ad_box","td[background^=\"/images/commercials\"]","a[target=\"_blank\"]","#link_banner,\n.banner_300x224,\n.banner_main","#CloseshellAds","#ad1,\n#ads-mail-cube,\n.ads-mail-cube,\ndiv[data-ads-params],\ndiv[data-ads-space]",".leftBanner,\n.midBanner,\n.rightBanner","#ZA_CAMP_BG,\n#ZA_CAMP_CONTAINER,\n#ZA_CAMP_SLIDEIN_CONTAINER,\n#hp_bottom_strip,\n#mysupermarketcontainer,\n#neoTopStrip,\n.bannerClose,\n.mako_main_portlet_container > a[target=\"_blank\"] > img,\n.pzm_banners,\n.sidebar_pic,\n[class*=\"_premiumWrapperElement\"],\n[class^=\"Ad_root_\"],\n[href^=\"https://adclick.g.doubleclick.net/\"],\n[src=\"https://img.mako.co.il/2023/03/12/rosh.gif\"],\ndiv[class*=\"mainRoot\"] > div:nth-child(4) > div[class*=\"ordering\"] > div:nth-child(6),\ndiv[id^=\"top-strip\"]","iframe[src*=\"javascript:document.write('\"]","#bLColumnText.small,\n#bRColumnText.small,\n.spacer.leftBox:nth-of-type(2),\n.tallBanner.spacer",".google-ad-links-wrapper,\n.top-firsomet",".adv160_600,\n.adv300_250,\n.adv300_600,\n.banner-wrapper,\n.pirsumba,\n.pirsumbaTop",".banner-tower,\n.master-popup-banner",".mai-aec-header-after.mai-aec",".TopLeftRadvertisement_translation,\n.result_adv,\n.top_line_ad,\n.top_line_ad_translation","[box-title=\"חוק ומשפט\"],\n[href=\"https://www.mako.co.il/news-law_guide\"],\n[href^=\"/news-law_guide/\"],\n[src^=\"https://www.duns100.co.il/frame/hp3?\"]",".with-bg.sponsor",".banner.b160x600","#toolbarLink,\n.daily_container,\n.walTopBannerInside","#PlazmaDiv,\n#TopBanner,\n#UcInsideRight_1_1_tblWidth,\n#divBanner,\n#divBannerRight,\ntable[bgcolor=\"#eeeeee\"][height=\"150\"],\ntable[width=\"100%\"][border=\"0\"][bgcolor=\"#EEEEEE\"][height=\"160\"],\ntd[width=\"237\"][style=\"background-color: #EEEEEE;\"]",".text-center.adv_mevzakim.adv.callout,\n.text-center.adv_posts_top.adv.callout","#content3d > [href^=\"http://pubads.g.doubleclick.net/gampad/clk\"],\n.ad-container-bottom-jumbo.ad-container.ad-bg,\n.vod-player-sponsor-image-bottom,\na[class*=\"one-article-strip\"]",".adcontainer",".resp-mobile-hidden.banner","#banners-after-flashes,\n#banners-below-menu,\n#fixed-right.margin-fixed.banners-area,\n.group-731.single-onsidebar.banners-area,\n.group-749.home-line.banners-area,\n.group-752.home-line.banners-area,\n.slick-slider.slick-initialized.vertical-fade","div[class*=\"BannerUnit\"]","#bnrTop","#connect,\na[href*=\"campaigns.layer.co.il/\"]",".bookingaff","#backgroundPopup,\n#popupContact,\ndiv[style=\"position: absolute; left: 40px; top: 200px; z-index: 0;\"],\ndiv[style=\"position: absolute; right: 40px; top: 200px; z-index: 0; width:154px;\"]",".inrpggoogle","#jumbobannercontainer",".desktop-display > .maavaron","#playerAdArea","[class^=\"banner\"]",".viv","#unit_300x250_bottom,\n#unit_300x250_top,\n.s-mb-l.gpt-slot,\n.s-width-100.s-mv-m.flex-center-center",".header-div-banner",".article-list-alt2.article-list-alt > .article-holder-homepage > .row:nth-of-type(6) > .alt,\n.banner-list,\n.makoitemLeft,\n.post.post-alt,\n[href=\"http://www.mako.co.il\"],\n[href=\"https://www.mako.co.il\"],\n[href^=\"https://www.mako.co.il/\"][href$=\"&utm_source=sport5&utm_medium=RSS\"],\n[onclick*=\"hpClickEvent('mako');\"],\n[src^=\"https://meitavads-\"]",".type-2.common-hp-articles.sequence,\n[src=\"/public/assets/sport/winner_logo.webp\"]",".gapunit,\n.kidums_separate,\n.srugim_top_slider",".banner_forums_160x600_right,\n.banner_forums_tree_300x250,\ndiv[style=\"width:990px;height:150px;margin:2px auto 4px auto\"]","#topbanner",".mainUpperBanner",".rs",".header-banners.row",".td-adspot-title-320",".banner-box","#header_banner_wrapper","#PublichVoiceChat",".slider2.bottom_line_neo",".bgbanner","#firstGoogleAd","#topBanner","#W2D_728x90_1.show-on-desktop",".wenBanner",".mid1Banner",".banner.row,\n.hide-text.text-center.py-5.col-12",".hide_m.hide_.gam-placeholder,\n[href^=\"https://supermarker.themarker.com/\"],\n[href^=\"https://www.haaretz.co.il/labels/\"],\n[href^=\"https://www.themarker.com/labels/\"]","[href*=\"PromotedContent\"]",".overflow-hidden.mx-auto.banner-outer-wrapper,\n.w-full.header-banner-wrapper",".banner-full-width,\n.banner-sticky-right,\n.dialog-lightbox-close-button.dialog-close-button,\n.elementor-column-gap-no.elementor-container","#XnetAdSenceThinkAdAD-300,\n#ads\\.250x250\\.top,\n#ads\\.300x250\\.1,\n#ads\\.blog\\.250x250,\n#ads\\.top\\.1,\n.ContentLink.banner.High,\n.ContentLink.banner.Low,\n.ad.hdn","#sideban","#unit1,\n#unit2",".BannerBoxNew,\n.Martef,\n.leftSideBanner",".container-fluid.styles_commentWrapper__ufWcY,\n.container-fluid.styles_mainWrapper__fcFda,\n.styles_nativeFeed__raMtD,\n[class^=\"styles_bannerWrapper\"]","#bottom-ad-stick-container,\n#towerBanner.left-banner,\n#towerBanner.right-banner,\n.gpt-ad-container",".actua-sticky.actua-footer-bar,\n.banner-header.banner_ad",".topBanner","[href^=\"http\"][href*=\"doubleclick\"][href*=\"net\"][href*=\"clk?id\"],\n[href^=\"https:\"][href*=\"haaretz\"][href*=\"co\"][href*=\"il\"][href*=\"labels/\"],\n[href^=\"https:\"][href*=\"supermarker\"][href*=\"themarker\"][href*=\"com\"],\n[href^=\"https:\"][href*=\"themarker\"][href*=\"com\"][href*=\"labels/\"]"];

const hostnamesMap = new Map([["asface.pw",0],["atardrushim.com",0],["avoda-mehabait.co.il",0],["bagly.co.il",0],["balimon.info",0],["bitys.pw",0],["bobuzz.com",0],["dealclick.pw",0],["dealsclubspecial.pw",0],["dubim.net",0],["faceu.us",0],["freeoffers.co.il",0],["fringantlarn8.live",0],["gbuzz.net",0],["gefun.net",0],["gubuzz.com",0],["hasdarot.cc",0],["hasdarot.club",0],["hasdarot.co",0],["hasdarot.com",0],["hasdarot.info",0],["hasdarot.life",0],["hasdarot.live",0],["hasdarot.me",0],["hasdarot.net",0],["hasdarot.pro",0],["hasdarot.space",0],["hasdarot.tv",0],["hasdarot.vip",0],["hasdarot.xyz",0],["iastrology.net",0],["ilbuzz.net",0],["isdarot.com",0],["israfun.net",0],["jobuzz.net",0],["kelocote.prpl.co.il",0],["kurtgeigers.co",0],["lauyn.info",0],["lead.foxweb.co.il",0],["livenza-il.com",0],["lools.info",0],["losittooday.info",0],["lp.infopage.co.il",0],["lp.playsmart.co.il",0],["lyfun.net",0],["lyplay.net",0],["madlik.info",0],["magnivim.info",0],["matihlle-ocean.com",0],["metador.info",0],["mklrty.info",0],["movitop.info",0],["mporli.info",0],["myvod.me",0],["pinukim.net",0],["saphiretelavivisrael.com",0],["sdarot-il.org",0],["sdarot-tv.org",0],["sdarot.cc",0],["sdarotil.top",0],["seret.live",0],["shaardollar.co.il",0],["sirtoonim.info",0],["sortie-shop.com",0],["stomi.info",0],["stylebox.co.il",0],["topfliightss.net",0],["tukid.info",0],["tvfeel.cc",0],["twobluedeer.com",0],["ugbuzz.net",0],["usbuzz.net",0],["vebuzz.net",0],["vefun.net",0],["view-movies.co.il",0],["viral4buzz.net",0],["vodmovies.co.il",0],["vodx.co.il",0],["vodxil.com",0],["worldhotnews.net",0],["yosle.info",0],["youlim.info",0],["zegvid.com",0],["zegvid.net",0],["hagdolim.info",1],["wacdfrt.info",1],["2net.co.il",[19,54]],["atmag.co.il",20],["hashulchan.co.il",[20,25]],["timeout.co.il",20],["baba-mail.co.il",[21,36]],["bizportal.co.il",22],["camoni.co.il",23],["foodik.co.il",24],["israelhayom.co.il",[26,101]],["kipa.co.il",27],["m.calcalist.co.il",28],["m.isramedia.net",29],["m.maariv.co.il",[30,31]],["tmi.maariv.co.il",[31,47]],["m.n12.co.il",[32,33]],["mobile.mako.co.il",[33,37]],["m.one.co.il",34],["m.sponser.co.il",35],["m.sport5.co.il",36],["mako.co.il",[36,124,125]],["pcmagazine.co.il",36],["podcasts.center",36],["mobile.srugim.co.il",38],["mynet.co.il",[39,59]],["podcastim.org.il",40],["radio-head.co.il",41],["rlive.co.il",42],["rotter.co.il",43],["rotter.net",[43,73,101,145]],["sheee.co.il",[44,76]],["walla.co.il",[44,48,125]],["stips.co.il",45],["technozone.co.il",46],["www.mako.co.il",49],["www.rlive.co.il",[50,51]],["yad2.co.il",52],["0-15.co.il",53],["2b-bari.co.il",53],["50plus.co.il",53],["abortion.org.il",53],["acnecenter.co.il",53],["add-syndrome.co.il",53],["allergy.org.il",53],["alzheimer.co.il",53],["asthma.org.il",53],["autism.org.il",53],["bariatric.org.il",53],["blinds.org.il",53],["blood.co.il",53],["burn.org.il",53],["candidafree.co.il",53],["cfs.org.il",53],["cholesterol.org.il",53],["cold.co.il",53],["colon.org.il",53],["commitment.org.il",53],["committee.co.il",53],["degeneration.co.il",53],["dementia.co.il",53],["dermatology.co.il",53],["dialysis.org.il",53],["ear.org.il",53],["east-west.co.il",53],["emun.org.il",53],["ent.org.il",53],["epilepsy.co.il",53],["feeling.co.il",53],["fms.org.il",53],["gastro-israel.org.il",53],["genes.co.il",53],["human.co.il",53],["hyperhidrosis.org.il",53],["iaawh.co.il",53],["ibd.org.il",53],["ifeel.co.il",53],["ilsi.org.il",53],["immunology.org.il",53],["implants.org.il",53],["ioh.org.il",53],["isala.org.il",53],["israrights.com",53],["le-la.co.il",53],["linshom.org.il",53],["liver.org.il",53],["lung.org.il",53],["lupus.org.il",53],["maane.co.il",53],["matnachim.co.il",53],["matnachim.org.il",53],["medicalcannabis.co.il",53],["mifrakim.co.il",53],["multiplesclerosis.org.il",53],["my-rights.org.il",53],["myeyes.co.il",53],["myhealth.co.il",53],["myheart.co.il",53],["myrights.co.il",53],["nashy.co.il",53],["neurology.org.il",53],["noga.org.il",53],["obesity.org.il",53],["oncology.org.il",53],["pain.org.il",53],["parkinsons.org.il",53],["pediatrics.co.il",53],["pigur.co.il",53],["pso.org.il",53],["psychiatrist.org.il",53],["psychiatry.org.il",53],["stdinfo.co.il",53],["stroke.org.il",53],["sukarti.co.il",53],["takana.co.il",53],["tevalife.co.il",53],["urinary.co.il",53],["urine.org.il",53],["voices.co.il",53],["womenonly.co.il",53],["auto.co.il",[54,81]],["93fm.co.il",55],["ch10.co.il",[55,89]],["a.co.il",56],["forum.lametayel.co.il",[56,94]],["maariv.co.il",[56,63,67]],["aiwa.co.il",[57,79]],["bladna.co.il",57],["karmelna.net",57],["almadar.co.il",58],["marmar.co.il",58],["calcalist.co.il",[59,60,86]],["frogi.co.il",[59,95]],["ynet.co.il",[59,60,74]],["13news.co.il",[61,62]],["13tv.co.il",[61,62]],["sport5.co.il",[62,155]],["fxp.co.il",[63,97]],["gadgety.co.il",[63,64]],["ice.co.il",63],["isramedia.net",[63,83,114]],["geektime.co.il",65],["inn.co.il",66],["news.walla.co.il",[68,69,75,76]],["sports.walla.co.il",[69,75,76,156]],["now14.co.il",70],["onlife.co.il",71],["radio-israel.org",72],["animals.walla.co.il",[75,76]],["astrology.walla.co.il",[75,76]],["b.walla.co.il",[75,76]],["buzzit.walla.co.il",75],["cars.walla.co.il",[75,76]],["celebs.walla.co.il",[75,76]],["e.walla.co.il",[75,76]],["elections.walla.co.il",[75,76]],["euro.walla.co.il",[75,76]],["fashion.walla.co.il",[75,76]],["finance.walla.co.il",[75,76]],["food.walla.co.il",[75,76]],["healthy.walla.co.il",[75,76]],["home.walla.co.il",[75,76]],["judaism.walla.co.il",[75,76]],["kids.walla.co.il",[75,76]],["mag.walla.co.il",[75,76]],["movies.walla.co.il",[75,76]],["mundial.walla.co.il",[75,76]],["nadlan.walla.co.il",[75,76]],["nick.walla.co.il",75],["olympics.walla.co.il",[75,76]],["tags.walla.co.il",[75,76]],["tech.walla.co.il",[75,76]],["travel.walla.co.il",[75,76]],["tv-guide.walla.co.il",[75,76]],["usaelections.walla.co.il",[75,76]],["viva.walla.co.il",[75,76]],["vod.walla.co.il",[75,76]],["weather.walla.co.il",[75,76]],["www.walla.co.il",[75,76]],["calendar.walla.co.il",76],["gaming.walla.co.il",76],["0404.co.il",77],["14across.co.il",78],["ashdodnet.com",80],["bhol.co.il",82],["bigbroil.com",[83,84]],["shmua.com",83],["bipbip.co.il",85],["calendar.2net.co.il",87],["cellebrate.mobi",88],["chabad.info",90],["chodal24.com",91],["davar1.co.il",92],["easy.co.il",93],["fun.walla.co.il",96],["gamepro.co.il",98],["globes.co.il",[99,100,101]],["www-globes-co-il.eu1.proxy.openathens.net",[99,186]],["rotter.name",[101,145]],["haaretz.co.il",102],["themarker.com",102],["haipo.co.il",103],["hidabroot.org",104],["hm-news.co.il",105],["homeless.co.il",106],["homeprices.yad2.co.il",107],["pricelist.yad2.co.il",107],["pro.yad2.co.il",107],["hon.co.il",108],["hwzone.co.il",109],["il.pcmag.com",110],["ilimudim.co.il",111],["isport.co.il",112],["israelweather.co.il",113],["jobmaster.co.il",115],["junkyard.co.il",116],["kolhair.co.il",117],["lib.cet.ac.il",118],["linicom.co.il",119],["link4u.co.il",120],["madas.co.il",121],["mail.walla.co.il",122],["maka.co.il",123],["makorrishon.co.il",126],["masa.co.il",127],["mavir.co.il",128],["mazaltov.walla.co.il",129],["metukimil.co.il",130],["morfix.co.il",131],["n12.co.il",[132,133]],["tech12.co.il",133],["netex.co.il",134],["newmail.walla.co.il",135],["news1.co.il",136],["newsnow.co.il",137],["one.co.il",138],["pitria.com",139],["portal.takdin.co.il",140],["posta.co.il",141],["prog.co.il",142],["psakdin.co.il",143],["rateonclick.com",144],["s-maof.com",146],["safa-ivrit.org",147],["seret.co.il",148],["sheva7.co.il",149],["shironet.mako.co.il",150],["shoofoo.co.il",151],["solitaire.co.il",152],["sponser.co.il",153],["sport1.maariv.co.il",154],["srugim.co.il",157],["starmed.co.il",158],["start.co.il",159],["takdin.co.il",160],["tatus.co.il",161],["techtime.co.il",162],["tgspot.co.il",163],["thecage.co.il",164],["tiuli.com",165],["totalchat.co.il",166],["tvbee.co.il",167],["upf.co.il",168],["uzit.co.il",169],["wallashops.co.il",170],["weather2day.co.il",171],["wen.co.il",172],["wisebuy.co.il",173],["www.geektime.co.il",174],["www.haaretz.co.il",[175,176]],["www.themarker.com",[175,176]],["www-haaretz-co-il.eu1.proxy.openathens.net",[176,187]],["www-themarker-com.eu1.proxy.openathens.net",[176,187]],["www.lametayel.co.il",177],["www.shvoong.co.il",178],["xnet.ynet.co.il",179],["yeshanews.com",180],["yo-yoo.co.il",181],["zap.co.il",182],["hamal.co.il",183],["foodsdictionary.co.il",184],["actualic.co.il",185]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["ad.co.il",[2]],["adi.gov.il",[3]],["bipbip.co.il",[4]],["bizportal.co.il",[5]],["ice.co.il",[5]],["tapuz.co.il",[5]],["blms.co.il",[6]],["callil.co.il",[7]],["holmesplace.co.il",[8]],["homeless.co.il",[9]],["hwzone.co.il",[10]],["investing.com",[11]],["junkyard.co.il",[12]],["kikar.co.il",[13]],["lavender.co.il",[14]],["leyada.net",[15]],["now14.co.il",[16]],["pitria.com",[17]],["ynet.co.il",[18]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
