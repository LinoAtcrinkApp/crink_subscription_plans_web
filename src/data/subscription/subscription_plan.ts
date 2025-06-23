class PlanDuration {
    duration: string;
    price: number;
    
    constructor(duration: string, price: number) {
        this.duration = duration;
        this.price = price;
    }
    
    get formattedPrice(): string {
        return `$${this.price.toFixed(2)}`;
    }
}

class SubscriptionPlan {
    title: string;
    benefits: string[];
    planDuration: PlanDuration;
    popular: boolean;
    color: string;
    
    constructor(title: string, benefits: string[], planDuration: PlanDuration, popular: boolean = false, color: string = '') {
        this.title = title;
        this.benefits = benefits;
        this.planDuration = planDuration;
        this.popular = popular;
        this.color = color;
    }
    
    get monthlyPrice(): number {
        return this.planDuration.price;
    }
    
    get formattedPrice(): string {
        return this.planDuration.formattedPrice;
    }
    
    get formattedDuration(): string {
        return this.planDuration.duration;
    }
}

export { SubscriptionPlan, PlanDuration };
