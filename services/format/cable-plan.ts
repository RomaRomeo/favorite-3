export function formatCablePlan(plans: IResponseCablePlan[]): CablePlan[] {
    return plans.map((plan) => {  
      return {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        price: plan.price,
        speed: plan.speed,
        features: plan.features,
        category: plan.category,
        type: plan.type,
        isRecommended: plan.isRecommended,
      };
    });
  }
  