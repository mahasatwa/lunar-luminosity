type DataLayerEventType =
  | "search_results"
  | "search_result_click"
  | "no_search_results"
  | "video"
  | "program_finder_comparison"
  | "program_finder_result_click"
  | "no_program_finder_results"
  | "program_finder_results"
  | "page_load"
  | "program_page_navigation"
  | "bento_box_search_results"
  | "info_box_item_click";

export interface DataLayerEvent {
  event: DataLayerEventType;
  event_data: DataLayerEventData;
}

export interface PageProperties {
  story_id?: string;
  program_acronym?: string;
  program_fee?: string;
  pub_date?: string;
  story_type?: string;
  parent_topic?: string;
  child_topic?: string;
  related_topics?: string;
  related_faculty?: string;
  authors?: string;
  related_industry?: string;
  related_geo?: string;
}

export interface DataLayerEventData<P = PageProperties> {
  profile_code?: string;
  program_page?: P;
  article_blog?: P;
  participant_story?: P;
  video_title?: string | number;
  video_duration?: number;
  video_milestone?: number;
  video_type?: string;
  program_name?: string;
  program_action?: string;
  compared_programs?: string;
  facet_filter_category?: string;
  facet_filter_value?: string;
  facet_filter_full?: string;
  facet_filter_depth?: number;
  search_term?: string;
  search_results_count?: number;
  search_type?: string;
  search_type_ahead?: boolean;
  search_numresults?: number;
  search_result_title?: string;
  search_result_page_url?: string;
  search_result_url?: string;
  search_result_position?: number;
  search_result_page?: number;
  search_result_tab?: string;
  search_result_category?: string;
  top_search?: boolean;
  top_search_title?: string;
  top_search_url?: string;
  top_search_position?: number;
  in_page_navigation_item?: string;
  bento_box_category?: string;
  bento_box_numresults?: string;
  bento_box_category_clicked?: string;
  explore_search?: boolean;
  explore_search_category?: string;
  explore_search_info_box?: string;
  explore_search_info_box_clicked?: string;
  infobox_name?: string;
  infobox_category?: string;
  infobox_item_type?: string;
  infobox_item_url?: string;
  infobox_item_link_text?: string;
}

export type PushDataLayerFn = (data: DataLayerEvent) => void;

export function useDataLayer() {
  return {
    pushDataLayer: (data: DataLayerEvent) => {
      window?.dataLayer?.push(data);
    },
  };
}
